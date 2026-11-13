const t0 = performance.now()
const logEl = document.getElementById('log')
const log = (msg) => {
    logEl.textContent += `[${Math.round(performance.now() - t0)} мс] ${msg}\n`
    logEl.scrollTop = logEl.scrollHeight
}

// все сетевые запросы к нашим файлам (видно и кэшированные)
new PerformanceObserver((list) => {
    list.getEntries().forEach((e) => {
        if (/lazy-(heavy|card|items)/.test(e.name)) {
            log('СЕТЬ: ' + e.name.split('/').pop() + ' (' + Math.round(e.duration) + ' мс)')
        }
    })
}).observe({ type: 'resource', buffered: true })

log('страница загружена, запросов к lazy-* пока нет')

window.__mounted = 0
let counting = false
const watchMounted = (total, started) => {
    if (counting) return
    counting = true
    let last = -1
    const timer = setInterval(() => {
        if (window.__mounted !== last) {
            last = window.__mounted
            log(`смонтировано карточек: ${last}/${total}`)
        }
        if (last >= total) {
            clearInterval(timer)
            counting = false
            log(`все ${total} за ${Math.round(performance.now() - started)} мс`)
        }
    }, 100)
}