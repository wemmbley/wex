// route-pattern.js
// Синтаксис: {id}  {id?}  {id:\d+}  {slug:[a-z-]+}  {path*}
// Ограничение: внутри {name:regex} нельзя использовать фигурные скобки (\d{2} не сработает).
// Если нужно, пишите \d\d или используйте regex:

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export function compileRoute(pattern) {
    const keys = []
    const tokenRe = /\{(\w+)(\?|\*)?(?::([^}]+))?\}/g
    let src = ''
    let last = 0
    let m

    while ((m = tokenRe.exec(pattern))) {
        let literal = pattern.slice(last, m.index)
        const [, name, mod, custom] = m
        keys.push(name)

        if (mod === '?') {
            // необязательный параметр забирает слеш перед собой
            const slash = literal.endsWith('/')
            if (slash) literal = literal.slice(0, -1)
            src += esc(literal) + (slash ? '(?:/' : '(?:') + '(' + (custom || '[^/]+') + '))?'
        }
        else if (mod === '*') {
            src += esc(literal) + '(' + (custom || '.*') + ')'
        }
        else {
            src += esc(literal) + '(' + (custom || '[^/]+') + ')'
        }
        last = m.index + m[0].length
    }
    src += esc(pattern.slice(last))

    return { regex: new RegExp('^' + src + '/?$'), keys }
}

export function matchRoute(pattern, pathname) {
    // regex: сырая регулярка, результат: params[0], params[1] ...
    if (pattern.startsWith('regex:')) {
        const body = pattern.slice(6).trim()
        const i = body.lastIndexOf('/')
        const re = new RegExp(body.slice(1, i), body.slice(i + 1))
        const m = re.exec(pathname)
        if (!m) return null
        const params = {}
        m.slice(1).forEach((v, k) => { params[k] = v })
        return params
    }

    const { regex, keys } = compileRoute(pattern)
    const m = regex.exec(pathname)
    if (!m) return null
    const params = {}
    keys.forEach((k, i) => {
        if (m[i + 1] !== undefined) params[k] = decodeURIComponent(m[i + 1])
    })
    return params
}

// route('post.show', { id: 5, page: 2 }) -> '/post/5?page=2'
export function buildRoute(pattern, params = {}) {
    const used = new Set()
    let url = pattern.replace(/(\/?)\{(\w+)(\?|\*)?(?::[^}]+)?\}/g, (all, slash, name, mod) => {
        const v = params[name]
        if (v === undefined || v === null) {
            if (mod === '?') return ''
            throw new Error(`route: не хватает параметра «${name}» для ${pattern}`)
        }
        used.add(name)
        const enc = mod === '*' ? String(v).split('/').map(encodeURIComponent).join('/') : encodeURIComponent(v)
        return slash + enc
    })
    const rest = Object.keys(params).filter(k => !used.has(k))
    if (rest.length) {
        url += '?' + rest.map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&')
    }
    return url
}