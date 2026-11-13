// w-lazy.js
import { directive } from './wex.js'

const cfg = { margin: '200px', timeout: 15000 }

function findScroller(el, selector) {
    if (selector) return document.querySelector(selector)
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
        const o = getComputedStyle(n).overflowY
        if (o === 'auto' || o === 'scroll' || o === 'overlay') return n
    }
    return null // окно браузера
}

// display: contents не имеет бокса, IntersectionObserver по нему не сработает
function pickTarget(el, dir) {
    const edge = n => (dir === 'up' ? n.firstElementChild : n.lastElementChild)
    let cur = edge(el)
    while (cur && getComputedStyle(cur).display === 'contents') {
        const next = edge(cur)
        if (!next) return el
        cur = next
    }
    return cur || el
}

function makeLazy(el, o) {
    const scroller = findScroller(el, o.root)
    const scrollEl = scroller || document.scrollingElement || document.documentElement
    if (o.dir === 'up') scrollEl.style.overflowAnchor = 'none'

    const lz = {
        key: o.key, view: o.view,
        busy: false, ended: false, finished: false,
        page: 0, lastCount: -1, stall: 0,
        restore: null, timer: null, rearm: null,
    }

    lz.io = new IntersectionObserver((entries) => {
        if (!el.isConnected) return lz.destroy()
        if (entries.some(e => e.isIntersecting)) trigger()
    }, { root: scroller, rootMargin: o.margin || cfg.margin })

    function settle() {
        const r = lz.restore
        if (!r || !lz.finished) return
        lz.restore = null
        scrollEl.scrollTop = r.top + (scrollEl.scrollHeight - r.height)
    }

    function release() {
        if (!lz.busy) return
        clearTimeout(lz.timer)
        lz.busy = false
        lz.finished = true
        clearTimeout(lz.rearm)
        lz.rearm = setTimeout(() => {
            settle()
            if (el.isConnected && !lz.ended) lz.watch()
        }, 60)
    }

    function end() {
        release()
        lz.ended = true
        lz.io.disconnect()
    }

    function fail(ms = 3000) {
        clearTimeout(lz.timer)
        lz.timer = setTimeout(release, ms)
    }

    function trigger() {
        if (lz.busy || lz.ended || !el.isConnected) return

        const count = el.children.length
        if (lz.page > 0 && count === lz.lastCount) {
            if (++lz.stall >= 2) {
                lz.ended = true
                lz.io.disconnect()
                console.warn('Wex w-lazy: список не вырос после двух подгрузок, подгрузка остановлена. Вызовите lazy.end(), когда данных больше нет.', el)
                return
            }
        }
        else {
            lz.stall = 0
        }
        lz.lastCount = count

        lz.busy = true
        lz.finished = false
        lz.page ++
        lz.restore = o.dir === 'up'
            ? { height: scrollEl.scrollHeight, top: scrollEl.scrollTop }
            : null
        lz.timer = setTimeout(release, cfg.timeout)

        lz.view.emit('$lazy', {
            el, direction: o.dir, page: lz.page, offset: count, done: release, end, fail,
        })
    }

    lz.watch = () => {
        if (lz.ended) return
        lz.io.disconnect()
        lz.io.observe(pickTarget(el, o.dir))
    }
    lz.settle = settle
    lz.destroy = () => {
        clearTimeout(lz.timer)
        clearTimeout(lz.rearm)
        lz.io.disconnect()
        delete el.__wLazy
    }

    return lz
}

// глобальная директива: работает во всех компонентах
// <div w-lazy="down|up" w-lazy-margin="300px" w-lazy-root="#chat" w-lazy-key="query">
directive('w-lazy', null, function ($el, attrs) {
    const el = $el[0]
    const { view, scope } = this
    const key = attrs['w-lazy-key'] ? scope.parse(attrs['w-lazy-key']) : undefined

    let lz = el.__wLazy
    if (lz && lz.key !== key) { lz.destroy(); lz = null }
    if (!lz) {
        lz = el.__wLazy = makeLazy(el, {
            dir: (attrs['w-lazy'] || '').trim() === 'up' ? 'up' : 'down',
            margin: attrs['w-lazy-margin'],
            root: attrs['w-lazy-root'],
            key, view,
        })
    }

    lz.view = view
    lz.settle()
    lz.watch()
})

// плагин нужен только для настроек по умолчанию
export function createLazy(options = {}) {
    Object.assign(cfg, options)
    return function () {}
}