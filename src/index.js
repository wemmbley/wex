import { createView, view, component, directive, filter, preloadComponent, config, report, View, setDollar, getDollar, WEX_VERSION } from './wex.js'
import { reactive, toRaw, isReactive, untrack, flush } from './reactive.js'
import './directives.js'
import { createDollar } from './dollar.js'
import { createWire, $wire, noopAjax } from './wire'

export { View, config, report, component, directive, filter, preloadComponent, view }
export { reactive, toRaw, isReactive, untrack, WEX_VERSION }
export { createWire, $wire, noopAjax }

// $: интерфейс доступа к Wex. По умолчанию это собственный мини-$ (dollar.js), jQuery не нужен.
// Если на странице есть настоящий jQuery, он подхватывается автоматически (или вызовите useJQuery($) сами).
function install($) {
  $.fn.vm = function (initState) { return createView(this[0].innerHTML, initState, this[0]) }
  $.fn.state = function (...args) { return this.vm(...args) }
  setDollar($)
  return $
}
export function useJQuery(jQuery) { return install(jQuery) }

const mini = createDollar()
const api = { view, component, directive, filter, preloadComponent, config, report, reactive, toRaw, isReactive, untrack, useJQuery, View, VERSION: WEX_VERSION, __flush: flush, $: mini, $wire, createWire }
export const $ = mini
export default api

if (typeof window !== 'undefined') {
  if (!window.$wire) window.$wire = $wire   // глобал для inline-скриптов и консоли
  const jq = window.jQuery
  if (jq && jq.fn && jq.fn.jquery && jq.fn.jquery !== 'wex-$') { useJQuery(jq); api.$ = jq }
  else { install(mini); if (!window.$) window.$ = mini }
  window.Wex = api
  if (!window.jqvm) window.jqvm = api
}
// Версия в консоли нужна только при отладке: config.debug включается на localhost,
// поэтому на продакшене библиотека не пишет в консоль при загрузке.
if (config.debug) console.log('[Wex]: загружена версия: ' + WEX_VERSION)