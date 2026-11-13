var strategies = {
  drop: function(serverState, key, incoming) {
    serverState[key] = incoming
  },
  push: function(serverState, key, incoming) {
    var current = serverState[key]
    if (Array.isArray(current) && Array.isArray(incoming)) {
      serverState[key] = current.concat(incoming)
    } else {
      serverState[key] = incoming
    }
  },
  nomerge: function() {},
  error: function(serverState, key, incoming, failHandlers) {
    var current = serverState[key]
    var isEmpty = current === null || current === undefined
      || (Array.isArray(current) && current.length === 0)
      || (typeof current === 'object' && !Array.isArray(current) && Object.keys(current).length === 0)
    if (!isEmpty) {
      var err = new Error('wire:error — ключ "' + key + '" уже содержит данные')
      err.strategy = 'error'
      err.key = key
      failHandlers.forEach(function(fn) { fn(err) })
      return
    }
    serverState[key] = incoming
  },
  // зарезервировано — умный мерж по id для пагинации
  merge: function(serverState, key, incoming) {
    var current = serverState[key]
    if (Array.isArray(current) && Array.isArray(incoming)) {
      serverState[key] = current.concat(incoming)
    } else {
      serverState[key] = incoming
    }
  },
}

function noopAjax() {
  // заглушка когда jQuery недоступен — используется в тестах
  // никогда не резолвится, просто возвращает deferred
  return {
    done:   function() { return this },
    fail:   function() { return this },
    always: function() { return this },
  }
}

function defaultAjax(options) {
  if (typeof $ !== 'undefined' && $.ajax) return $.ajax(options)
  throw new Error('$wire: jQuery не найден. Подключите jQuery или передайте ajax в опциях createWire.')
}

function createWire(options) {
  options   = options || {}
  var ajaxFn    = options.ajax || defaultAjax
  var csrf      = options.csrf || null
  var pending   = {}
  var listeners = {}

  function emit(event) {
    var args = Array.prototype.slice.call(arguments, 1)
    ;(listeners[event] || []).forEach(function(fn) { fn.apply(null, args) })
  }

  function on(event, fn) {
    if (!listeners[event]) listeners[event] = []
    listeners[event].push(fn)
    return wire
  }

  var prefetched = {}
  var ttl = options.prefetchTtl || 30000

  function buildOptions(method, url, data) {
    var o = { url: url, method: method.toUpperCase(), headers: {} }
    if (csrf) o.headers['X-CSRF-TOKEN'] = csrf
    if (data && (method === 'post' || method === 'put')) {
      o.data = JSON.stringify(data)
      o.contentType = 'application/json'
    }
    return o
  }

  // грузит GET заранее; следующий wire.get(тот же url) заберёт готовый ответ
  function prefetch(url) {
    var hit = prefetched[url]
    if (hit && Date.now() - hit.at < ttl) return wire
    var entry = { req: ajaxFn(buildOptions('get', url)), at: Date.now() }
    prefetched[url] = entry
    entry.req.fail(function() { if (prefetched[url] === entry) delete prefetched[url] })
    return wire
  }

  function takePrefetched(url) {
    var hit = prefetched[url]
    if (!hit) return null
    delete prefetched[url]   // одноразово: следующий заход получит свежие данные
    return Date.now() - hit.at < ttl ? hit.req : null
  }

  function request(method, url, data, strategy) {
    strategy = strategy || 'drop'

    var doneHandlers   = []
    var failHandlers   = []
    var alwaysHandlers = []
    var hasDone        = false
    var state          = null
    var target   = null;

    var chain = {
      to: function(ref, key) {
        target = key !== undefined ? { __wire: true, obj: ref, key: key } : ref
        return chain
      },

      // .before(fn) вызывает fn немедленно при регистрации —
      // это позволяет писать .get().before(fn) и fn вызовется до ответа
      before: function(fn) {
        fn()
        return chain
      },
      done: function(fn) {
        hasDone = true
        doneHandlers.push(fn)
        return chain
      },
      fail:      function(fn) { failHandlers.push(fn);   return chain },
      always:    function(fn) { alwaysHandlers.push(fn); return chain },
      withState: function(s)  { state = s;               return chain },

      // TODO: затычки для w-wire декларативного сахара
      // _prefetch:   null,
      // _bindView:   null,
      // _watchState: null,
    }

    pending[url] = true
    emit('$wiring', 'start', url)

    var cached = method === 'get' ? takePrefetched(url) : null
    var req = cached || ajaxFn(buildOptions(method, url, data))

    function attach() {
      req.done(function(responseData) {
        if (target) {
          if (target.__wire) {
            // .to(state, 'posts'): присваивание через стратегию
            var fn = strategies[strategy] || strategies.drop
            fn(target.obj, target.key, responseData, failHandlers)
          }
          else if (Array.isArray(target)) {
            // .to(state.posts), где posts = []
            if (strategy !== 'push') target.length = 0
            if (Array.isArray(responseData)) Array.prototype.push.apply(target, responseData)
            else target.push(responseData)
          }
          else if (target && typeof target === 'object') {
            // .to(state.posts), где posts = {}
            if (strategy !== 'push') {
              Object.keys(target).forEach(function(k) { delete target[k] })
            }
            if (responseData && typeof responseData === 'object') {
              Object.assign(target, responseData)   // массив ответа превратится в ключи 0,1,2...
            }
            else if (typeof console !== 'undefined') {
              console.warn('[wire] ' + url + ' вернул не объект/массив, а ' + typeof responseData + ': записывать в .to() нечего')
            }
          }
          else if (typeof console !== 'undefined') {
            console.warn('[wire] .to() получил ' + Object.prototype.toString.call(target) + ': данные из ' + url + ' не записаны')
          }
        }
        doneHandlers.forEach(function(fn) { fn(responseData) })
      })

      req.fail(function(jqXHR, textStatus) {
        if (typeof console !== 'undefined') {
          console.error('[wire] ' + method.toUpperCase() + ' ' + url + ' → ' + (jqXHR && jqXHR.status) + ' ' + textStatus)
        }
        failHandlers.forEach(function(fn) { fn(jqXHR, textStatus) })
      })

      req.always(function() {
        delete pending[url]
        emit('$wiring', 'end', url)
        alwaysHandlers.forEach(function(fn) { fn() })
      })
    }

    // у готового ответа done() срабатывает синхронно, до .to(...); откладываем,
    // чтобы цепочка .get(url).to(state.x) успела выставить target
    if (cached) Promise.resolve().then(attach)
    else attach()

    return chain
  }

  // $wire()       → true если хоть один запрос активен
  // $wire('/url') → true если этот URL активен
  function wire(url) {
    if (url === undefined) return Object.keys(pending).length > 0
    return !!pending[url]
  }

  wire.get      = function(url, strategy)       { return request('get',    url, null, strategy) }
  wire.post     = function(url, data, strategy) { return request('post',   url, data, strategy) }
  wire.put      = function(url, data, strategy) { return request('put',    url, data, strategy) }
  wire.delete   = function(url, strategy)       { return request('delete', url, null, strategy) }
  wire.prefetch = prefetch
  wire.on       = on

  return wire
}

const $wire = createWire()

export { createWire, $wire, noopAjax }