// w-prefetch.js
import { directive, report } from './wex.js'

const unquote = s => String(s).trim().replace(/^(['"])(.*)\1$/, '$2')
const PATH = /^[a-zA-Z_$][\w$]*(\.[\w$]+)*$/

// <button w-prefetch="/posts.json" w-to="posts">
// hover/focus/touch: прогреть запрос; click (только если есть w-to): забрать ответ и записать в state
directive('w-prefetch', null, function ($el, attrs) {
    const { scope, view } = this
    const el = $el[0]
    const raw = attrs['w-prefetch']
    const ctx = { view, el, attr: 'w-prefetch', expr: raw, scope }

    el.__wPrefetch = true   // маркер для проверки в w-to

    const wire = globalThis.$wire
    if (!wire || typeof wire.prefetch !== 'function') {
        report('w-prefetch: $wire или $wire.prefetch недоступен', {
            ...ctx, level: 'error',
            hint: 'Проверьте, что в wire есть wire.prefetch = prefetch и $wire доступен глобально',
        })
        return
    }

    // {{ }} внутри атрибута поддерживается, в том числе внутри w-for
    const url = unquote(scope.interpolate(raw || ''))
    if (!url || url === 'undefined' || url === 'null' || url.indexOf('{{') !== -1) {
        report(`w-prefetch: некорректный URL ${JSON.stringify(url)}`, {
            ...ctx, level: 'error',
            hint: 'Ожидается строка вида w-prefetch="/api/posts.json" или w-prefetch="/api/posts/{{ id }}.json"',
        })
        return
    }

    // --- w-to ---
    let path = null
    const rawTo = attrs['w-to']
    if (rawTo !== undefined) {
        const toCtx = { ...ctx, attr: 'w-to', expr: rawTo }
        path = unquote(scope.interpolate(rawTo)).replace(/^state\./, '')
        if (!PATH.test(path)) {
            report(`w-to: некорректный путь ${JSON.stringify(path)}`, {
                ...toCtx, level: 'error', hint: 'Ожидается имя переменной из state: w-to="posts" или w-to="data.posts"',
            })
            path = null
        }
        else {
            let current
            try { current = scope.parse(path) } catch (e) { current = undefined }
            if (current === undefined) {
                report(`w-to: «${path}» не найден в state`, {
                    ...toCtx, scope,
                    hint: 'Объявите переменную в .state({ ' + path.split('.')[0] + ': [] }), иначе запись может быть нереактивной',
                })
            }
        }
    }

    const prefetch = () => wire.prefetch(url)

    const load = () => {
        wire.get(url)
            .done((data) => {
                if (data === null || data === undefined) {
                    report(`w-to: ${url} вернул ${data}`, { ...ctx, attr: 'w-to', expr: rawTo, scope })
                }
                try { scope.assign(path, data) }
                catch (e) {
                    report(`w-to: не удалось записать в «${path}»: ${e.message}`, {
                        ...ctx, attr: 'w-to', expr: rawTo, scope, level: 'error',
                    })
                }
            })
            .fail((xhr, status) => {
                report(`w-prefetch: ${url} → ${(xhr && xhr.status) || '?'} ${status}`, {
                    ...ctx, level: 'error',
                    hint: '404: проверьте путь и регистр имени файла; parsererror: проверьте, что JSON валидный',
                })
            })
    }

    $el.on('mouseenter.wprefetch focus.wprefetch touchstart.wprefetch', prefetch)
    if (path) $el.on('click.wprefetch', load)

    return () => {
        $el.off('.wprefetch')
        delete el.__wPrefetch
    }
})

// w-to сама ничего не делает, всю работу выполняет w-prefetch; здесь только проверка
directive('w-to', null, function ($el, attrs) {
    if (!$el[0].__wPrefetch) {
        report('w-to без w-prefetch: атрибут ни на что не влияет', {
            view: this.view, el: $el[0], attr: 'w-to', expr: attrs['w-to'], level: 'error',
            hint: 'Добавьте w-prefetch="/url.json" на тот же элемент',
        })
    }
})