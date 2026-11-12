(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jqvm"] = factory();
	else
		root["jqvm"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _wex_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _wex_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _wex_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _wex_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useJQuery", function() { return _wex_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _shared_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shareState", function() { return _shared_state_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAsyncComponent", function() { return _async_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return _router_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _wire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWire", function() { return _wire__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$wire", function() { return _wire__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);





 // директива регистрируется сразу при импорте

// use in browser
if (typeof jQuery !== 'undefined') {
  Object(_wex_js__WEBPACK_IMPORTED_MODULE_0__[/* useJQuery */ "e"])(jQuery);
  Object(_modal_js__WEBPACK_IMPORTED_MODULE_5__[/* setupModal */ "a"])(jQuery); // патчим $.fn.modal когда $ уже готов
}

if (typeof window !== 'undefined') {
  window.$wire = _wire__WEBPACK_IMPORTED_MODULE_4__[/* $wire */ "a"];
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useJQuery; });
/* harmony import */ var scopex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var scopex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scopex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




var vmId = 0;
var $ = null;
function View() {}
var SYMBOL = {};
var config = {
  // по умолчанию debug включён только на localhost
  debug: typeof location !== 'undefined' && /^(localhost|127\.|\[::1\])/.test(location.hostname),
  maxDepth: 50,
  // максимальная вложенность компонентов
  syncMounts: 50,
  // сколько компонентов монтировать синхронно за тик, остальные по кадрам (Infinity = как раньше)
  mountBudget: 10 // мс на кадр для отложенного монтирования
};
var reported = new Set();
function scopeSnapshot(scp) {
  var out = {};
  try {
    var data = scp.data || {};
    for (var k in data) {
      var v = data[k];
      out[k] = v && _typeof(v) === 'object' ? Array.isArray(v) ? "Array(".concat(v.length, ")") : "{".concat(Object.keys(v).slice(0, 6).join(', '), "}") : v;
    }
  } catch (e) {}
  return out;
}

// level: 'error' пишется всегда, 'warn' только при config.debug
function report(title) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var level = ctx.level || 'warn';
  if (level !== 'error' && !config.debug) return;
  var path = ctx.view && ctx.view.__path || ['root'];
  var key = [title, path.join('>'), ctx.attr, ctx.expr].join('|');
  if (reported.has(key)) return; // не спамим 1500 одинаковых сообщений
  reported.add(key);
  var color = level === 'error' ? '#e11d48' : '#d97706';
  console.groupCollapsed("%cWex%c ".concat(title), "background:".concat(color, ";color:#fff;padding:1px 5px;border-radius:3px"), '');
  console.log('Цепочка компонентов:', path.join(' › '));
  if (ctx.attr) console.log('Атрибут:', ctx.attr);
  if (ctx.expr) console.log('Выражение:', ctx.expr);
  if (ctx.source) console.log('Место в шаблоне:', ctx.source);
  if (ctx.scope) console.log('Доступные переменные:', scopeSnapshot(ctx.scope));
  if (ctx.el) console.log('Элемент (можно кликнуть):', ctx.el);
  if (ctx.hint) console.log('Подсказка:', ctx.hint);
  console.groupEnd();
}
function safeParse(scp, exp, ctx) {
  try {
    return scp.parse(exp);
  } catch (e) {
    report("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \xAB".concat(exp, "\xBB: ").concat(e.message), _objectSpread(_objectSpread({}, ctx), {}, {
      expr: exp,
      scope: scp,
      level: 'error'
    }));
    return undefined;
  }
}
function checkInterpolation(text, scp, ctx) {
  if (!config.debug || text.indexOf('{{') === -1) return;
  text.replace(/\{\{([\s\S]+?)\}\}/g, function (m, raw) {
    var expr = raw.trim();
    try {
      var v = scp.parse(expr);
      if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(v)) {
        report("\xAB{{ ".concat(expr, " }}\xBB \u0432\u0435\u0440\u043D\u0443\u043B ").concat(v), _objectSpread(_objectSpread({}, ctx), {}, {
          expr: expr,
          scope: scp
        }));
      }
    } catch (e) {
      if (expr.indexOf('|') === -1) {
        // фильтры parse может не понимать
        report("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \xAB{{ ".concat(expr, " }}\xBB: ").concat(e.message), _objectSpread(_objectSpread({}, ctx), {}, {
          expr: expr,
          scope: scp,
          level: 'error'
        }));
      }
    }
    return m;
  });
}

// ---------------

var globalComponents = [];
var globalDirectives = [];
var globalFilters = {};

// bigger priority come first
function _push(list, name, compile, affect) {
  var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  for (var i = 0, len = list.length; i < len; i++) {
    var item = list[i];
    if (item[0] === name) {
      list[i] = [name, compile, affect, priority];
      return;
    }
    if (item[3] < priority) {
      list.splice(i, 0, [name, compile, affect, priority]);
      return;
    }
  }
  list.push([name, compile, affect, priority]);
}
function component(name, compile, affect) {
  _push(globalComponents, name, compile, affect);
}
function directive(name, compile, affect, priority) {
  _push(globalDirectives, name, compile, affect, priority);
}
function filter(name, fn) {
  globalFilters[name] = fn;
}
var nativeImport = new Function('u', 'return import(u)'); // в обход бандлера
var remoteCache = {};
function loadRemote(url) {
  if (remoteCache[url]) return remoteCache[url];
  var entry = remoteCache[url] = {
    view: null,
    waiters: new Set()
  };
  var fetchText = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var tries,
        _loop,
        _ret,
        i,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            tries = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 3;
            _loop = /*#__PURE__*/_regenerator().m(function _loop(i) {
              var r, _t, _t2;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return fetch(url);
                  case 1:
                    r = _context.v;
                    if (r.ok) {
                      _context.n = 2;
                      break;
                    }
                    throw new Error("Wex: cannot load component ".concat(url, " (").concat(r.status, ")"));
                  case 2:
                    _context.n = 3;
                    return r.text();
                  case 3:
                    _t = _context.v;
                    return _context.a(2, {
                      v: _t
                    });
                  case 4:
                    _context.p = 4;
                    _t2 = _context.v;
                    if (!(i >= tries - 1)) {
                      _context.n = 5;
                      break;
                    }
                    throw _t2;
                  case 5:
                    _context.n = 6;
                    return new Promise(function (res) {
                      return setTimeout(res, 300 * Math.pow(2, i));
                    });
                  case 6:
                    return _context.a(2);
                }
              }, _loop, null, [[0, 4]]);
            });
            i = 0;
          case 1:
            return _context2.d(_regeneratorValues(_loop(i)), 2);
          case 2:
            _ret = _context2.v;
            if (!_ret) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, _ret.v);
          case 3:
            i++;
            _context2.n = 1;
            break;
          case 4:
            return _context2.a(2);
        }
      }, _callee);
    }));
    return function fetchText() {
      return _ref.apply(this, arguments);
    };
  }();
  fetchText().then(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(html) {
      var _doc$querySelector;
      var doc, tpl, $tpl, code, view, blobUrl, mod, waiters;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            doc = new DOMParser().parseFromString(html, 'text/html');
            tpl = doc.querySelector('template');
            if (tpl) {
              _context3.n = 1;
              break;
            }
            throw new Error("Wex: no <template> in ".concat(url));
          case 1:
            $tpl = $("<template>".concat(tpl.innerHTML, "</template>"));
            code = (_doc$querySelector = doc.querySelector('script[type="module"]')) === null || _doc$querySelector === void 0 ? void 0 : _doc$querySelector.textContent;
            view = null;
            if (!code) {
              _context3.n = 6;
              break;
            }
            blobUrl = URL.createObjectURL(new Blob([code], {
              type: 'text/javascript'
            }));
            _context3.p = 2;
            _context3.n = 3;
            return nativeImport(blobUrl);
          case 3:
            mod = _context3.v;
            view = mod["default"]($tpl);
          case 4:
            _context3.p = 4;
            URL.revokeObjectURL(blobUrl);
            return _context3.f(4);
          case 5:
            _context3.n = 7;
            break;
          case 6:
            view = $tpl.vm();
          case 7:
            if (view instanceof View) {
              _context3.n = 8;
              break;
            }
            throw new Error("Wex: ".concat(url, " must export default a function returning a view"));
          case 8:
            entry.view = view;
            waiters = _toConsumableArray(entry.waiters);
            entry.waiters.clear();
            // ошибка одного ожидающего не должна остановить остальных
            waiters.forEach(function (v) {
              try {
                v.update(true);
              } catch (e) {
                console.error("Wex: \u043E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 ".concat(url), e);
              }
            });
          case 9:
            return _context3.a(2);
        }
      }, _callee2, null, [[2,, 4, 5]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }())["catch"](function (e) {
    return console.error(e);
  });
  return entry;
}

// ----------- compiler ---------------

// clear and revoke effects
function prepare($root) {
  var root = $root[0];
  var records = root.__jQvmCompiledRecords = root.__jQvmCompiledRecords || [];
  if (!records.length) {
    return;
  }
  records.forEach(function (record) {
    // reset effects
    if (record.revoke) {
      record.revoke();
    }
  });

  // clear
  records.length = 0;
}
function compile($root, components, directives, state, view, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 3),
    template = _ref4[0],
    scope = _ref4[1],
    isolate = _ref4[2];
  var root = $root[0];
  var records = root.__jQvmCompiledRecords = root.__jQvmCompiledRecords || [];
  var $element = $("<div />").html(template);
  var _interpolate = function interpolate($element) {
    var scp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scope;
    $element.each(function () {
      var _this = this;
      var attrs = _toConsumableArray(this.attributes);
      var $this = $(this);
      attrs.forEach(function (_ref5) {
        var name = _ref5.name,
          value = _ref5.value;
        if (name.indexOf('@') === 0) return;
        checkInterpolation(value, scp, {
          view: view,
          el: _this,
          attr: name
        });
        var text = scp.interpolate(value);

        // атрибут целиком из одного {{ }} и результат пустой: не пишем "undefined" в DOM
        if ((text === 'undefined' || text === 'null') && /^\{\{[^}]+\}\}$/.test(value.trim())) {
          $this.removeAttr(name);
          return;
        }
        $this.attr(name, text);
      });
      var children = _toConsumableArray(this.childNodes);
      children.forEach(function (child) {
        if (child.nodeName === '#text') {
          checkInterpolation(child.textContent, scp, {
            view: view,
            el: _this
          });
          child.textContent = scp.interpolate(child.textContent);
        } else if (child.nodeName.indexOf('#') !== 0) {
          _interpolate($(child), scp);
        }
      });
    });
  };
  var createIterator = function createIterator(onCompile, onAffect) {
    return function (index) {
      var el = this;
      // уже обработан вложенным compile (w-for) — повторно не трогаем
      if (el.__jQvmIterated) return;
      var $el = $(el);
      var attrs = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeAttrs */ "c"])(this);
      var name = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeName */ "d"])(this);
      var els = [el];
      var inner = $el.html();
      var slot = function slot(locals) {
        var $root = $('<div />');
        var subScope = locals ? locals instanceof scopex__WEBPACK_IMPORTED_MODULE_0__["ScopeX"] ? scope.$new(locals.data) : scope.$new(locals) : scope;
        var nodes = compile($root, components, directives, state, view, [inner, subScope]);
        affect($root, scope, view);
        return nodes;
      };
      slot.template = inner;
      slot.nodes = _toConsumableArray(el.childNodes);
      var record = {
        affect: onAffect,
        attrs: attrs,
        els: els,
        slot: slot,
        scope: scope,
        source: config.debug ? el.outerHTML.slice(0, 160) : ''
      };
      var useComponent = function useComponent(proto) {
        // экземпляр создаётся в affect() и привязывается к конкретному DOM-элементу
        record.view = proto;
        record.name = name;
        record.state = state;
        if (proto.tag !== 'template') {
          var tag = proto.tag,
            attributes = proto.attributes;
          var $tag = $("<".concat(tag, " />"));
          var attrsText = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* createAttrsText */ "b"])(attrs);
          var $commentBegin = $("<!-- ".concat(name, " ").concat(attrsText, " begin -->"));
          var $commentEnd = $("<!-- ".concat(name, " ").concat(attrsText, " end -->"));
          Object.assign(attrs, attributes, _defineProperty({}, 'data-hoist', name));
          $tag.attr(attrs);
          $el.replaceWith([$commentBegin, $tag, $commentEnd]);
          els.length = 0;
          els.push($commentBegin[0], $tag[0], $commentEnd[0]);
        } else {
          $el.empty();
        }
      };

      // register a view as component
      if (onCompile instanceof View) {
        useComponent(onCompile);
      } else if (typeof onCompile === 'function') {
        // developers can recompile inside fn
        var boundCompile = compile.bind(null, $root, components, directives, state, view);
        var ctx = {
          scope: scope,
          view: view,
          compile: function compile(temp) {
            var scp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scope;
            return boundCompile([temp, scp]);
          },
          interpolate: _interpolate
        };
        var output = onCompile.call(ctx, $el, attrs, slot);
        if (output && output instanceof View) {
          useComponent(output);
        } else if (!Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(output) && $el !== output) {
          var newEls = $('<div />').html(output)[0].childNodes;
          $el.replaceWith(newEls);
          els.length = 0;
          els.push.apply(els, _toConsumableArray(newEls));
        }
      }
      records.push(record);
      el.__jQvmIterated = true;
      els.forEach(function (item) {
        item.__jQvmCompiledRecord = record;
        item.__jQvmIterated = true;
      });
    };
  };

  // directives have higher priority than components

  directives.forEach(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 3),
      name = _ref7[0],
      onCompile = _ref7[1],
      onAffect = _ref7[2];
    var $els = $element.find("[".concat(name, "]"));
    $els.each(function () {
      var el = this;
      var $el = $(el);
      var attrs = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeAttrs */ "c"])(this);
      var els = [el];
      if (typeof onCompile === 'function') {
        // developers can recompile inside fn
        var boundCompile = compile.bind(null, $root, components, directives, state, view);
        var ctx = {
          scope: scope,
          view: view,
          compile: function compile(temp) {
            var scp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scope;
            var isl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isolate;
            return boundCompile([temp, scp, isl]);
          },
          interpolate: _interpolate
        };
        var output = onCompile.call(ctx, $el, attrs);
        if (!Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(output) && $el !== output) {
          var $newEls = $(output);
          $el.replaceWith($newEls);
          els = _toConsumableArray($newEls);
        }
      }
      if (isolate) {
        $el.removeAttr(name);
      }
      var record = {
        affect: onAffect,
        attrs: attrs,
        els: els,
        scope: scope
      };
      records.push(record);
      els.forEach(function (el) {
        return el.__jQvmCompiledRecord = record;
      });
    });
  });
  components.forEach(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 3),
      name = _ref9[0],
      compile = _ref9[1],
      affect = _ref9[2];
    if (name === 'slot') {
      return;
    }
    var $els = $element.find(name);
    $els.each(createIterator(compile, affect));
  });
  _interpolate($element, scope);

  // slot will only render with the host scope
  var slotComponent = components.find(function (item) {
    return item[0] === 'slot';
  });
  if (slotComponent) {
    var _slotComponent = _slicedToArray(slotComponent, 3),
      name = _slotComponent[0],
      _compile = _slotComponent[1],
      _affect = _slotComponent[2];
    var $els = $element.find(name);
    $els.each(createIterator(_compile, _affect));
  }
  var nodes = _toConsumableArray($element[0].childNodes);
  return nodes;
}
function diffAndPatch($root, nodes) {
  // we will not use next to replace current node, so we should transform record info to old node
  var transferRecord = function transferRecord(current, next) {
    var record = next.__jQvmCompiledRecord;
    if (!record) {
      return;
    }
    var els = record.els;
    els.forEach(function (el, i) {
      if (el === next) {
        els[i] = current;
      }
    });
    current.__jQvmCompiledRecord = record;
  };
  var diffAndPatchNode = function diffAndPatchNode($current, $next) {
    var current = $current[0];
    var next = $next[0];
    var currentAttrs = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeAttrs */ "c"])(current);
    var nextAttrs = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeAttrs */ "c"])(next);
    var currentAttrNames = Object.keys(currentAttrs);
    var nextAttrNames = Object.keys(nextAttrs);

    // update/add attrs
    nextAttrNames.forEach(function (name) {
      var currentValue = currentAttrs[name];
      var nextValue = nextAttrs[name];
      if (currentValue !== nextValue) {
        $current.attr(name, nextValue);
      }
    });

    // remove no use attrs
    var diffAttrNames = Object(ts_fns__WEBPACK_IMPORTED_MODULE_2__[/* diffArray */ "b"])(currentAttrNames, nextAttrNames);
    diffAttrNames.forEach(function (name) {
      // keep style and class attributes
      if (name === 'style' || name === 'class' || name === 'w-name') {
        return;
      }
      $current.removeAttr(name);
    });
    transferRecord(current, next);

    // dont diff component inner content
    if (current.__jQvmComponent) {
      if (current.nodeName === next.nodeName && currentAttrs['w-name'] === nextAttrs['w-name']) {
        return;
      }
      if (current.nodeName === next.nodeName && (currentAttrs['id'] || nextAttrs['id']) && currentAttrs['id'] === nextAttrs['id']) {
        return;
      }
      if (current.nodeName === next.nodeName && (currentAttrs['data-id'] || nextAttrs['data-id']) && currentAttrs['data-id'] === nextAttrs['data-id']) {
        return;
      }
      var ignoreAttrs = ['style', 'class', 'w-name'];
      if (current.nodeName === next.nodeName && $current.attr('data-hoist') === $next.attr('data-hoist') && Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isEqual */ "f"])(currentAttrNames.filter(function (item) {
        return !ignoreAttrs.includes(item);
      }), nextAttrNames.filter(function (item) {
        return !ignoreAttrs.includes(item);
      }))) {
        return;
      }
    }
    var nextChildren = _toConsumableArray(next.childNodes);
    diffAndPatchChildren($current, nextChildren);
  };
  var diffAndPatchChildren = function diffAndPatchChildren($parent, nextChildren) {
    var parentNode = $parent[0];

    // append all children at once if current is empty inside
    if (!parentNode.childNodes.length) {
      nextChildren.forEach(function (child) {
        parentNode.appendChild(child);
      });
      return;
    }
    nextChildren.forEach(function (next, i) {
      var $next = $(next);
      var current = parentNode.childNodes[i];
      var $current = $(current);
      var nextId = $next.attr('id');
      var nextDataId = $next.attr('data-id');
      var move = function move($prev) {
        if ($prev.length) {
          var prev = $prev[0];
          // move it
          if (prev !== current) {
            parentNode.insertBefore(prev, current);
            transferRecord(current, next);
          }
          // update the node
          diffAndPatchNode($prev, $next);
        } else {
          parentNode.insertBefore(next, current);
        }
      };

      // current index node not existing, insert the coming node directly
      if (!current) {
        parentNode.appendChild(next);
      }
      // use `jq-id` to unique element
      else if (nextId) {
        var $prev = $parent.find("[id=".concat(nextId, "]"));
        move($prev);
      } else if (nextDataId) {
        var _$prev = $parent.find("[data-id=\"".concat(nextDataId, "\"]"));
        move(_$prev);
      }
      // insert coming child directly
      else if (next.nodeName !== current.nodeName) {
        parentNode.insertBefore(next, current);
      }
      // diff and patch element
      else if (next.nodeName.indexOf('#') !== 0) {
        diffAndPatchNode($current, $next);
      }
      // diff and patch text
      else {
        if (next.textContent !== current.textContent) {
          current.textContent = next.textContent;
        }
      }
    });

    // remove no use elements
    for (var i = parentNode.childNodes.length - 1, start = nextChildren.length; i >= start; i--) {
      var child = parentNode.childNodes[i];
      if (child.__jQvmComponent) {
        child.__jQvmComponent.__cancelled = true;
        child.__jQvmComponent.unmount();
        delete child.__jQvmComponent;
      }
      var all = $(child).find('*');
      all.each(function () {
        if (this.__jQvmComponent) {
          this.__jQvmComponent.__cancelled = true;
          this.__jQvmComponent.unmount();
          delete this.__jQvmComponent;
        }
      });
      parentNode.removeChild(child);
    }
  };
  diffAndPatchChildren($root, nodes);
}

// ---------- очередь отложенного монтирования ----------
var mountQueue = [];
var mountScheduled = false;
var flushing = false;
var collecting = null;
var syncCount = 0;
var nextFrame = function nextFrame(fn) {
  return document.hidden ? setTimeout(fn, 0) : requestAnimationFrame(fn);
};
function shouldDefer() {
  return flushing || syncCount >= config.syncMounts;
}
function noteSyncMount() {
  if (syncCount === 0) Promise.resolve().then(function () {
    syncCount = 0;
  });
  syncCount++;
}
function scheduleMount(job) {
  // задачи, созданные внутри текущей задачи (дети), встают в начало очереди:
  // получается обход в глубину, то есть порядок как в документе
  if (collecting) collecting.push(job);else mountQueue.push(job);
  if (!mountScheduled) {
    mountScheduled = true;
    nextFrame(flushMounts);
  }
}
function flushMounts() {
  mountScheduled = false;
  flushing = true;
  var start = performance.now();
  while (mountQueue.length && performance.now() - start < config.mountBudget) {
    var job = mountQueue.shift();
    collecting = [];
    try {
      job();
    } catch (e) {
      console.error(e);
    }
    if (collecting.length) mountQueue.unshift.apply(mountQueue, _toConsumableArray(collecting));
    collecting = null;
  }
  flushing = false;
  if (mountQueue.length) {
    mountScheduled = true;
    nextFrame(flushMounts);
  }
}
function affect($root, scope, view) {
  var root = $root[0];
  var records = root.__jQvmCompiledRecords = root.__jQvmCompiledRecords || [];
  records.forEach(function (record) {
    var affect = record.affect,
      attrs = record.attrs,
      els = record.els,
      proto = record.view,
      localScope = record.scope,
      name = record.name,
      source = record.source;
    var finalScope = localScope && localScope !== scope ? localScope : scope;
    if (proto) {
      var state = record.state,
        slot = record.slot;
      var slotInner = slot.template.trim();
      els.forEach(function (el) {
        if (el.nodeName.indexOf('#') === 0) return;
        var $el = $(el);
        var component = el.__jQvmComponent;
        var isNew = !component;
        if (isNew) {
          // --- защита от бесконечной рекурсии ---
          var parentPath = view.__path || ['root'];
          if (parentPath.length > config.maxDepth) {
            report("\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0430 \u0433\u043B\u0443\u0431\u0438\u043D\u0430 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 (".concat(config.maxDepth, "), \xAB").concat(name, "\xBB \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D"), {
              level: 'error',
              view: view,
              el: el,
              source: source,
              hint: 'Рекурсивный компонент без условия выхода или циклические данные. Остановите рекурсию через w-if.'
            });
            $el.empty().attr('data-wex-error', 'max-depth');
            return;
          }
          component = proto.clone();
          component.__path = parentPath.concat(name);
        }
        record.component = component;

        // --- props ---
        var outside = {};
        Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(attrs, function (exp, attr) {
          if (attr.indexOf(':') === 0) {
            var ctx = {
              view: view,
              el: el,
              attr: attr,
              expr: exp,
              source: source
            };
            var value = safeParse(finalScope, exp, ctx);
            if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(value)) {
              report("\u041F\u0440\u043E\u043F \xAB".concat(attr.substring(1), "\xBB \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \xAB").concat(name, "\xBB \u043F\u043E\u043B\u0443\u0447\u0438\u043B ").concat(value), _objectSpread(_objectSpread({}, ctx), {}, {
                scope: finalScope
              }));
            }
            outside[Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* camelCase */ "a"])(attr.substring(1))] = value;
          } else if (attr.indexOf('@') === 0) {
            var event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* camelCase */ "a"])(attr.substring(1));
            var _parseKey = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* parseKey */ "f"])(exp),
              _parseKey2 = _slicedToArray(_parseKey, 2),
              fname = _parseKey2[0],
              params = _parseKey2[1];
            var fn = view.fn(fname);
            outside['@' + event] = function () {
              var res = null;
              if (params) {
                var values = params.map(function (arg) {
                  return finalScope.parse(arg);
                });
                res = fn.call.apply(fn, [view, state].concat(_toConsumableArray(values)));
              } else {
                res = fn.call(view, state);
              }
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(res)) return res.apply(this, args);
            };
          } else if (attr.indexOf('_') !== 0) {
            outside[Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* camelCase */ "a"])(attr)] = exp;
          }
        });
        component.update(outside, SYMBOL);
        component.component('slot', function () {
          var scope = this.scope;
          return slotInner ? slot(scope) : '';
        });

        // --- монтирование ---
        if (isNew) {
          el.__jQvmComponent = component;
          if (shouldDefer()) {
            component.__pending = true;
            scheduleMount(function () {
              component.__pending = false;
              if (el.__jQvmComponent !== component || component.__cancelled) return;
              component.mount($el);
            });
          } else {
            noteSyncMount();
            component.mount($el);
          }
        } else if (component.__pending) {
          // ждёт своей очереди; свежие props уже переданы выше
        } else if (!$el.attr('w-name')) {
          component.mount($el);
        } else if (slotInner) {
          component.update(true);
        }
      });
      els.forEach(function (el) {
        delete el.__jQvmCompiledRecord;
      });
    }
    if (typeof affect !== 'function') return;
    els.forEach(function (el) {
      var $el = $(el);
      var ctx = {
        $root: $root,
        scope: finalScope,
        view: view,
        component: record.component
      };
      var revoke = affect.call(ctx, $el, attrs);
      if (typeof revoke === 'function') record.revoke = revoke;
    });
  });
}

// ---------------- main ---------------

function cloneState(value) {
  if (Array.isArray(value)) return value.map(cloneState);
  if (value && Object.getPrototypeOf(value) === Object.prototype) {
    var out = {};
    Object.keys(value).forEach(function (k) {
      out[k] = cloneState(value[k]);
    });
    return out;
  }
  return value;
}
function vm() {
  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var template = this;
  var $template = $(template);
  var hash = $template.attr('id') || $template.attr('w-id') || (vmId++, vmId);
  var root = "[w-name=".concat(hash, "]");
  var state = null;
  var scope = null;
  var outside = null;
  var mountTo = null;
  var isMounted = false;
  var isUnmounted = false;
  var getMountNode = function getMountNode() {
    return mountTo ? $(mountTo) : $template.next(root);
  };
  var actions = [];
  var view = new View();

  // -----------

  var components = [].concat(globalComponents);
  var directives = [].concat(globalDirectives);
  var filters = _objectSpread({}, globalFilters);
  var fns = {};
  function component(name, compile, affect) {
    // component('my-button', './components/button.html')
    if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "m"])(compile)) {
      var entry = loadRemote(compile);
      var placeholder = function placeholder() {
        return entry.view || '';
      };
      placeholder.remote = entry;
      compile = placeholder;
    }
    if (compile && compile.remote) {
      var _compile2 = compile,
        remote = _compile2.remote;
      if (remote.view) {
        view.update(true);
      } else {
        remote.waiters.add(view);
      }
    }
    _push(components, name, compile, affect);
    if (compile && compile instanceof View) {
      view.on('$beforeDestroy', function () {
        return compile.destroy();
      });
    }
    return view;
  }
  function directive(name, compile, affect) {
    _push(directives, name, compile, affect);
    return view;
  }
  function filter(name, fn) {
    filters[name] = fn;
    return view;
  }

  // ------------

  var latestHash = null;
  var nextTick = Object(ts_fns__WEBPACK_IMPORTED_MODULE_4__[/* throttle */ "a"])(function (e) {
    if (!state || !latestHash) {
      return;
    }
    var currentHash = Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* getObjectHash */ "c"])(state);
    if (latestHash !== currentHash) {
      var needToUpdate = e ? change(e) : true;
      if (needToUpdate) {
        render(true);
      }
    }
    latestHash = currentHash;
  }, 16);
  var currTick = function currTick() {
    latestHash = Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* getObjectHash */ "c"])(state);
  };

  // -------------

  var outsideHashes = {};
  var assignOutsideState = function assignOutsideState(state, outsideState, init) {
    if (!state) return false;
    var keys = {};
    Object.keys(state).forEach(function (k) {
      keys[k.toLowerCase()] = k;
    });
    var next = {};
    Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(outsideState, function (value, key) {
      if (key[0] === '@') return;
      var realKey = key in state ? key : keys[key.toLowerCase()];
      if (!realKey) return;
      var hash = Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* getObjectHash */ "c"])(value);
      if (!init && outsideHashes[key] === hash && Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* getObjectHash */ "c"])(state[realKey]) === hash) return;
      outsideHashes[key] = hash;
      next[realKey] = cloneState(value);
      // ранее здесь было прямое присвоение value но у нас кривой CreateProxy из ts-fns модуля. createProxy ребёнка не принимает уже проксированное значение: внутри всегда 0 почему-то. Решение - клонировать. Там внутри все передается.
      // Побочный эффект: Ребёнок теперь работает со своей копией пропа. Если где-то ребёнок пишет в проп и ждёт, что родитель увидит изменение, это перестанет работать. Для пропов только на чтение, как menu, posts и article, это не мешает. Если у вас есть компоненты, которые пишут в проп, лучше передавать им колбэк через @event.
    });
    Object.assign(state, next);
    return Object.keys(next).length > 0;
  };
  function init(initState) {
    var next = Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(initState) ? initState.call(view) : initState;
    if (!next || _typeof(next) !== 'object') {
      throw new Error('initState should must be an object');
    }
    if (outside) {
      assignOutsideState(next, outside, true);
    }
    state = Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* createProxy */ "a"])(next, {
      dispatch: nextTick,
      enumerable: function enumerable() {
        return true;
      }
    });
    scope = new scopex__WEBPACK_IMPORTED_MODULE_0__["ScopeX"](state, {
      filters: filters
    });
    currTick();

    // setupSpecialEvents should be invoked here
    // because these events should be registered before $init triggered
    setupSpecialEvents();
    view.emit('$init');
  }
  function render(isUpdating) {
    if (isUpdating && !isMounted) {
      return;
    }
    if (!shouldUpdate()) {
      return;
    }
    var $root = getMountNode();
    prepare($root);
    var nodes = compile($root, components, directives, state, view, [$template.html(), scope]);
    if (isUpdating) {
      diffAndPatch($root, nodes);
    } else {
      $root.html(nodes);
    }
    affect($root, scope, view);
    var attrs = $template.attr('attrs');
    if (attrs) {
      var props = scope.parse(attrs);
      Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(props, function (value, key) {
        if (key === 'class') {
          var items = value.split(' ');
          items.forEach(function (item) {
            return $root.addClass(item);
          });
        } else if (key === 'style') {
          if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(value)) {
            $root.css(value);
          } else if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "m"])(value)) {
            var style = $root.attr('style') || '';
            var rules = style.split(';').concat(value.split(';')).filter(function (item) {
              return !!item;
            });
            var stylesheet = Object(ts_fns__WEBPACK_IMPORTED_MODULE_2__[/* uniqueArray */ "d"])(rules).join(';');
            $root.attr('style', stylesheet);
          }
        } else {
          $root.attr(key, value);
        }
      });
    }
    $template.trigger('$render');
  }
  function change(e) {
    var flag = true;
    var prevent = function prevent() {
      return flag = false;
    };
    $template.trigger('$change', [state, e, prevent]);
    if (flag) {
      _store__WEBPACK_IMPORTED_MODULE_6__[/* VMLocalStorage */ "a"].reloadJqvmLocalStorage(state, '$change');
    }
    return flag;
  }
  function shouldUpdate() {
    var flag = true;
    var prevent = function prevent() {
      return flag = false;
    };
    $template.trigger('$update', [state, prevent]);
    return flag;
  }
  function mount(el) {
    if (isMounted) {
      if (el) {
        if (el === mountTo) {
          return view;
        }

        // when change a new root to mount, unmount the original one
        view.unmount();
      } else {
        return view;
      }
    }
    if ($template.next(root).length) {
      return view;
    }
    if (!isUnmounted) {
      init(initState);
    }
    var $root = null;
    mountTo = el || null; // cache mount node

    if (el) {
      $root = $(el);
      $root.attr('w-name', hash);
    }
    // like $('<template>aaa</template>').vm(...)
    else if (!$(document).find($template).length) {
      throw new Error('el should must be passed by view.mount');
    } else {
      $root = $('<div />', {
        'w-name': hash
      });
      $template.after($root);
    }
    render();
    _store__WEBPACK_IMPORTED_MODULE_6__[/* VMLocalStorage */ "a"].reloadJqvmLocalStorage(state, '$mount');
    $template.trigger('$mount', [state]);
    isMounted = true;
    isUnmounted = false;
    return view;
  }
  function unmount() {
    if (!isMounted) {
      return view;
    }
    var $root = getMountNode();
    if (!$root.length) {
      return;
    }
    $template.trigger('$unmount');
    if (mountTo) {
      $root.html('');
      $root.removeAttr('w-name');
    } else {
      $root.remove();
    }
    mountTo = null;
    isMounted = false;
    isUnmounted = true;
    return view;
  }
  function destroy() {
    $template.trigger('$beforeDestroy');
    var $root = getMountNode();
    unmount();
    state = null;
    scope = null;
    actions.length = 0;
    var root = $root[0];
    delete root.__jQvmComponentInstances;
    delete root.__jQvmCompiledRecords;
    $template.trigger('$destroy');
  }
  var forcePending = false;
  var scheduleForce = function scheduleForce() {
    if (forcePending) return;
    forcePending = true;
    Promise.resolve().then(function () {
      forcePending = false;
      if (isMounted && state) {
        render(true);
        currTick();
      }
    });
  };
  function update(nextState, type) {
    if (type === SYMBOL) {
      var changed = state ? assignOutsideState(state, nextState) : false;
      outside = nextState;
      if (changed && isMounted) scheduleForce();
      return view;
    }

    // force update
    if (nextState === true) {
      if (isMounted) {
        render(true);
      }
      return view;
    }

    // when nextState passed, assign to state will trigger rerender
    if (state && nextState) {
      if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(nextState)) {
        var res = nextState(state);
        if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(res)) {
          Object.assign(state, res);
        } else if (isMounted) {
          nextTick();
        }
        return view;
      } else if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(nextState)) {
        Object.assign(state, nextState);
        return view;
      }
    }

    // if not passed nextState, it means to check manually
    if (isMounted && nextState) {
      nextTick();
    }
    return view;
  }
  function bind(args, once) {
    var info = _toConsumableArray(args);
    var fn = info.pop();
    var _info = _slicedToArray(info, 2),
      event = _info[0],
      selector = _info[1];
    var handle = function handle(e) {
      var event = e.handleObj.origType;
      // stop broadcast the event
      if (event[0] === '$') {
        e.stopPropagation();
        if (e.target !== e.currentTarget) {
          return;
        }
      }
      var res = null;
      for (var _len2 = arguments.length, eventArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        eventArgs[_key2 - 1] = arguments[_key2];
      }
      if (event[0] === '$') {
        fn.call.apply(fn, [view, state].concat(eventArgs));
      } else {
        var callback = fn.call(view, state);
        if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(callback)) {
          res = callback.call.apply(callback, [this, e].concat(eventArgs));
        }
      }
      if (once) {
        unbind(args);
      }
      return res;
    };
    var item = {
      once: once,
      event: event,
      selector: selector,
      fn: fn,
      handle: handle
    };
    actions.push(item);

    // events will be bound when $mount by `setup`
    // developers may invoke this.on(...) after view mounted, at this time, the event callback should be bound immediately
    if (isMounted) {
      var $root = getMountNode();
      var type = once ? 'one' : 'on';
      if (event[0] === '$') {
        $template[type](event, handle);
      } else {
        var _info2 = [event, selector].filter(Boolean);
        $root[type].apply($root, _toConsumableArray(_info2).concat([handle]));
      }
    }
  }
  function unbind(args) {
    var info = _toConsumableArray(args);
    var fn = info.pop();
    var _info3 = _slicedToArray(info, 2),
      event = _info3[0],
      selector = _info3[1];
    var $root = getMountNode();
    actions.forEach(function (item, i) {
      if (event === item.event && selector === item.selector && fn === item.fn) {
        var _event = item.event,
          _selector = item.selector,
          handle = item.handle;
        var _args4 = [_event, _selector, handle].filter(Boolean);
        if (_event[0] === '$') {
          $template.off.apply($template, _toConsumableArray(_args4));
        } else {
          $root.off.apply($root, _toConsumableArray(_args4));
        }
        actions.splice(i, 1);
      }
    });
  }
  function emit(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // trigger those passed to components, only works for components
    if (outside) {
      var lower = ('@' + event).toLowerCase();
      var key = '@' + event in outside ? '@' + event : Object.keys(outside).find(function (k) {
        return k.toLowerCase() === lower;
      });
      if (key && Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(outside[key])) {
        var _outside;
        (_outside = outside)[key].apply(_outside, args);
      }
    }

    // only works for events begin with $
    if (event[0] !== '$') {
      return;
    }
    // trigger those bind to view root
    actions.forEach(function (item) {
      if (item.event === event) {
        $template.trigger.apply($template, [event].concat(args));
      }
    });
  }
  function setupSpecialEvents() {
    actions.forEach(function (item) {
      var event = item.event,
        handle = item.handle;
      if (['$init', '$destroy', '$beforeDestroy', '$mount'].indexOf(event) === -1) {
        return;
      }
      $template.one(event, handle);
    });
  }
  function setup() {
    $template.on('$mount', function () {
      var $root = getMountNode();
      actions.forEach(function (item) {
        var once = item.once,
          event = item.event,
          selector = item.selector,
          handle = item.handle;
        if (['$init', '$destroy', '$beforeDestroy', '$mount', '$clone'].indexOf(event) > -1) {
          return;
        }
        var type = once ? 'one' : 'on';
        if (event[0] === '$') {
          $template[type](event, handle);
        } else {
          var info = [event, selector].filter(Boolean);
          $root[type].apply($root, _toConsumableArray(info).concat([handle]));
        }
      });
    });
    $template.on('$unmount', function () {
      var $root = getMountNode();
      actions.forEach(function (item) {
        var event = item.event,
          selector = item.selector,
          action = item.action;
        if (event[0] === '$') {
          return;
        }
        var info = [event, selector].filter(Boolean);
        $root.off.apply($root, _toConsumableArray(info).concat([action]));
      });
    });
  }
  function find(selector) {
    var $root = getMountNode();
    return $root.find(selector);
  }
  function method(name, action) {
    return fn(name, action);
  }
  function fn(name, action) {
    if (!action) {
      return fns[name];
    } else {
      fns[name] = action;
    }
    return view;
  }
  function clone() {
    // свой <template> и своя копия начального состояния на каждый экземпляр
    var newView = vm.call($template.clone(), Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(initState) ? initState : cloneState(initState));
    Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(fns, function (action, name) {
      newView.fn(name, action);
    });
    Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(actions, function (item) {
      var type = item.type,
        event = item.event,
        selector = item.selector,
        fn = item.fn;
      var info = [event, selector].filter(Boolean);
      var m = type === 'one' ? 'once' : 'on';
      newView[m].apply(newView, _toConsumableArray(info).concat([fn]));
    });
    Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(components, function (item) {
      if (globalComponents.includes(item)) {
        return;
      }
      newView.component.apply(newView, _toConsumableArray(item));
    });
    Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(directives, function (item) {
      if (globalDirectives.includes(item)) {
        return;
      }
      newView.directive.apply(newView, _toConsumableArray(item));
    });
    Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(filters, function (fn, name) {
      newView.filter(name, fn);
    });

    // clone action
    actions.forEach(function (item) {
      var event = item.event,
        fn = item.fn;
      if (event !== '$clone') {
        return;
      }
      fn.call(view, state, newView);
    });
    return newView;
  }
  function plugin(fn) {
    var lifecycle = fn.call({
      view: view,
      scope: scope
    });
    if (lifecycle) {
      var events = Object.keys(lifecycle);
      events.forEach(function (event) {
        view.on(event, lifecycle[event]);
      });
    }
    return view;
  }
  Object.assign(view, {
    once: function once() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      bind(args, true);
      return view;
    },
    on: function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      bind(args);
      return view;
    },
    off: function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      unbind(args);
      return view;
    },
    emit: emit,
    mount: mount,
    unmount: unmount,
    destroy: destroy,
    update: update,
    find: find,
    component: component,
    directive: directive,
    filter: filter,
    plugin: plugin,
    fn: fn,
    method: fn,
    clone: clone
  });
  var tempEl = $template[0];
  var tag = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeName */ "d"])(tempEl);
  var attributes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeAttrs */ "c"])(tempEl);
  Object.defineProperties(view, {
    tag: {
      value: tag
    },
    attributes: {
      value: attributes
    }
  });
  setup();
  return view;
}

// register inside directives

directive('w-for', function ($el, attrs) {
  var attr = attrs['w-for'];
  if (!/^[a-z][a-zA-Z0-9_$]*(,[a-z][a-zA-Z0-9_$]*){0,1} in [a-z][a-zA-Z0-9_$]+( traceby [a-z][a-zA-Z0-9_$.]*)?/.test(attr)) {
    throw new Error('w-for should match formatter `value,key in data traceby id`!');
  }
  var el = $el[0];
  var nodeName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeName */ "d"])(el);
  var _attr$split = attr.split(' '),
    _attr$split2 = _slicedToArray(_attr$split, 5),
    kv = _attr$split2[0],
    dataKey = _attr$split2[2],
    traceBy = _attr$split2[4];
  var _kv$split = kv.split(','),
    _kv$split2 = _slicedToArray(_kv$split, 2),
    valueName = _kv$split2[0],
    keyName = _kv$split2[1];
  var parentScope = this.scope,
    compile = this.compile;
  var data = parentScope.parse(dataKey);

  // make it not be able to compile again
  $el.removeAttr('w-for');
  if (traceBy) {
    $el.attr('data-id', "{{".concat(traceBy, "}}")); // modify the template, this will be compiled
  }
  var $els = [];
  var temp = el.outerHTML;
  Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(data) ? [] : data, function (value, key) {
    var newScope = _defineProperty({}, valueName, value);
    if (keyName) {
      newScope[keyName] = key;
    }
    var scope = parentScope.$new(newScope);
    var nodes = compile(temp, scope, true);
    $els.push.apply($els, _toConsumableArray(nodes));
  });
  var $commentBegin = $("<!-- ".concat(nodeName, " w-for=\"").concat(attr, "\" begin -->"));
  var $commentEnd = $("<!-- ".concat(nodeName, " w-for=\"").concat(attr, "\" end -->"));
  $el.replaceWith([$commentBegin].concat($els, [$commentEnd]));
});
function sanitizeSvg(str) {
  var tpl = document.createElement('template');
  tpl.innerHTML = str;
  tpl.content.querySelectorAll('script,foreignObject,iframe,object,embed,style,animate,set').forEach(function (n) {
    return n.remove();
  });
  tpl.content.querySelectorAll('*').forEach(function (el) {
    ;
    _toConsumableArray(el.attributes).forEach(function (_ref0) {
      var name = _ref0.name,
        value = _ref0.value;
      var n = name.toLowerCase();
      var v = value.trim().toLowerCase();
      var badHref = (n === 'href' || n === 'xlink:href') && !v.startsWith('#');
      if (n.startsWith('on') || badHref) {
        el.removeAttribute(name);
      }
    });
  });
  return tpl.innerHTML;
}
directive('w-html', function ($el, attrs) {
  // принимаем и w-html="item.icon", и w-html="{{ item.icon }}"
  var exp = attrs['w-html'].replace(/^\{\{\s*|\s*\}\}$/g, '');
  var ctx = {
    view: this.view,
    el: $el[0],
    attr: 'w-html',
    expr: exp
  };
  var html = safeParse(this.scope, exp, ctx);
  if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(html)) report("w-html \u043F\u043E\u043B\u0443\u0447\u0438\u043B ".concat(html), _objectSpread(_objectSpread({}, ctx), {}, {
    scope: this.scope
  }));
  $el.removeAttr('w-html');
  $el.html(sanitizeSvg(Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(html) ? '' : String(html)));
});
directive('w-if', function ($el, attrs) {
  var attr = attrs['w-if'];
  var value = this.scope.parse(attr);
  return value ? $el : "<!-- ".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getNodeName */ "d"])($el[0]), " w-if=\"").concat(attr, "\" (hidden) -->");
});
directive('w-id', function ($el, attrs) {
  var attr = attrs['w-id'];
  var value = this.scope.parse(attr);
  $el.attr('id', value);
});
directive('w-class', function ($el, attrs) {
  var attr = attrs['w-class'];
  var obj = this.scope.parse(attr);
  Object(ts_fns__WEBPACK_IMPORTED_MODULE_3__[/* each */ "b"])(obj, function (value, key) {
    if (value) {
      $el.addClass(key);
    }
  });
});
directive('w-value', null, function ($el, attrs) {
  var attr = attrs['w-value'];
  var value = this.scope.parse(attr);
  $el.val(value);
});
directive('w-disabled', null, function ($el, attrs) {
  var attr = attrs['w-disabled'];
  var value = this.scope.parse(attr);
  $el.prop('disabled', !!value);
});
directive('w-checked', null, function ($el, attrs) {
  var attr = attrs['w-checked'];
  var value = this.scope.parse(attr);
  $el.prop('checked', !!value);
});
directive('w-selected', null, function ($el, attrs) {
  var attr = attrs['w-selected'];
  var value = this.scope.parse(attr);
  $el.prop('selected', !!value);
});
directive('w-bind', null, function ($el, attrs) {
  var _this2 = this;
  var attr = attrs['w-bind'];
  var value = this.scope.parse(attr);
  var event = $el.is('[type=checkbox],[type=radio],[type=color],[type=date],[type=datetime-local],[type=week],[type=file],select') ? 'change' : 'input';
  var checkbox = $el.is('[type=checkbox]');
  var radio = $el.is('[type=radio]');
  if (checkbox) {
    $el.prop('checked', !!value);
  } else if (radio) {
    $el.prop('checked', value === $el.val());
  } else {
    $el.val(value);
  }
  var callback = function callback(e) {
    var value = checkbox ? $el.prop('checked') : e.target.value;
    _this2.scope.assign(attr, value);
  };
  $el.on(event, callback);
  return function () {
    return $el.off(event, callback);
  };
});
directive('w-src', null, function ($el, attrs) {
  var attr = attrs['w-src'];
  var ctx = {
    view: this.view,
    el: $el[0],
    attr: 'w-src',
    expr: attr
  };
  var value = safeParse(this.scope, attr, ctx);
  if (Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isNone */ "j"])(value)) {
    report("w-src \u043F\u043E\u043B\u0443\u0447\u0438\u043B ".concat(value, ": src \u043D\u0435 \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D, \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"), _objectSpread(_objectSpread({}, ctx), {}, {
      scope: this.scope
    }));
    return;
  }
  $el.attr('src', value);
});
directive('w-on', null, function ($el, attrs) {
  var attr = attrs['w-on'];
  var _attr$split3 = attr.split(':'),
    _attr$split4 = _slicedToArray(_attr$split3, 2),
    event = _attr$split4[0],
    method = _attr$split4[1];
  var _parseKey3 = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* parseKey */ "f"])(method),
    _parseKey4 = _slicedToArray(_parseKey3, 2),
    name = _parseKey4[0],
    params = _parseKey4[1];
  var view = this.view,
    $root = this.$root,
    scope = this.scope;
  var fn = view.fn(name);
  if (!fn) {
    return;
  }
  var f = fn;
  if (params) {
    f = function f(state) {
      var args = params.map(function (arg) {
        return scope.parse(arg);
      });
      return fn.call.apply(fn, [this, state].concat(_toConsumableArray(args)));
    };
  }
  var path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_5__[/* getPath */ "e"])($el, $root);
  if (!path) {
    return;
  }
  view.on(event, path, f);
  return function () {
    return view.off(event, path, f);
  };
});
directive('w-transition', null, function ($el, attrs) {
  var el = $el[0];
  // повторный рендер не должен заново гасить уже показанный элемент
  if (el.__wTransitionDone) return;
  el.__wTransitionDone = true;
  var raw = attrs['w-transition'];
  var transition = raw || 'opacity 0.25s ease';
  var hasProp = /(opacity|all|transform)/.test(transition);
  var finalTransition = hasProp ? transition : "opacity ".concat(transition);
  $el.css({
    transition: finalTransition,
    opacity: 0
  });
  var show = function show() {
    return $el.css('opacity', 1);
  };
  if (document.hidden) {
    setTimeout(show, 0);
  } else {
    requestAnimationFrame(function () {
      return requestAnimationFrame(show);
    });
  }
  setTimeout(show, 500); // страховка, если кадры так и не придут

  var originalRemove = el.remove;
  el.remove = function () {
    $el.css('opacity', 0);
    var duration = getComputedStyle(el).transitionDuration;
    var ms = duration.includes('ms') ? parseFloat(duration) : parseFloat(duration) * 1000;
    setTimeout(function () {
      return originalRemove.call(el);
    }, ms || 250);
  };
  return function () {
    el.remove = originalRemove;
  };
});
component('w-static', function () {
  return $('<template><slot></slot></template>').vm().on('$update', function () {
    return function (e, state, prevent) {
      prevent();
    };
  });
});

// --------------------------------

function useJQuery(jQuery) {
  $ = jQuery;
  $.fn.vm = vm;
  $.fn.state = function () {
    return this.vm.apply(this, arguments);
  };
  return $;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
;
(function (fn) {
  var ScopeX = fn();
  // commonjs
  if (true) {
    exports["default"] = ScopeX;
    exports.ScopeX = ScopeX;
    exports.createScope = ScopeX.createScope;
    exports.__esModule = true;
  }
  // in browser
  else {}
})(function () {
  // fork from https://github.com/peerigon/angular-expressions/blob/master/lib/parse.js

  /* remove eslint errors to see if there is something really wrong */
  /*eslint quotes: [0]*/
  /*eslint indent: [0]*/
  /*eslint vars-on-top: [0]*/
  /*eslint yoda: 0*/
  /*eslint curly: 0*/
  /*eslint no-implicit-coercion: 0*/
  /*eslint newline-after-var: 0*/
  /*eslint space-before-function-paren: 0*/
  /*eslint block-spacing: 0*/
  /*eslint brace-style: 0*/
  /*eslint complexity: 0*/
  /*eslint one-var: 0*/
  /*eslint eqeqeq: 0*/
  /*eslint object-curly-spacing: 0*/
  /*eslint quote-props: 0*/
  /*eslint key-spacing: 0*/
  /*eslint valid-jsdoc: 0*/
  /*eslint func-style: 0*/
  /*eslint no-nested-ternary: 0*/
  /*eslint operator-linebreak: 0*/
  /*eslint no-multi-spaces: 0*/
  /*eslint no-constant-condition: 0*/
  /*eslint comma-spacing: 0*/
  /*eslint no-else-return: 0*/
  /*eslint no-warning-comments: 0*/
  /*eslint default-case: 0*/
  /*eslint consistent-return: 0*/
  /*eslint no-undefined: 0*/
  /*eslint no-new-func: 0*/
  /*eslint max-nested-callbacks: 0*/
  /*eslint padded-blocks: 0*/
  /*eslint no-self-compare: 0*/
  /*eslint no-multiple-empty-lines: 0*/
  /*eslint no-new: 0*/
  /*eslint no-unused-vars: 0*/

  "use strict";

  var window = {
    document: {}
  };

  ////////////////////////////////////

  /**
   * @ngdoc module
   * @name ng
   * @module ng
   * @installation
   * @description
   *
   * # ng (core module)
   * The ng module is loaded by default when an AngularJS application is started. The module itself
   * contains the essential components for an AngularJS application to function. The table below
   * lists a high level breakdown of each of the services/factories, filters, directives and testing
   * components available within this core module.
   *
   * <div doc-module-components="ng"></div>
   */

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  /**
   * @ngdoc function
   * @name angular.isArray
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is an `Array`.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is an `Array`.
   */
  var isArray = Array.isArray;
  var ngAttrPrefixes = ["ng-", "data-ng-", "ng:", "x-ng-"];
  var manualLowercase = function manualLowercase(s) {
    /* eslint-disable no-bitwise */
    return isString(s) ? s.replace(/[A-Z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) | 32);
    }) : s;
    /* eslint-enable */
  };
  var manualUppercase = function manualUppercase(s) {
    /* eslint-disable no-bitwise */
    return isString(s) ? s.replace(/[a-z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) & ~32);
    }) : s;
    /* eslint-enable */
  };

  // String#toLowerCase and String#toUpperCase don't produce correct results in browsers with Turkish
  // locale, for this reason we need to detect this case and redefine lowercase/uppercase methods
  // with correct but slower alternatives. See https://github.com/angular/angular.js/issues/11387
  if ("i" !== "I".toLowerCase()) {
    lowercase = manualLowercase;
    uppercase = manualUppercase;
  }
  var jqLite,
    // delay binding since jQuery could be loaded after us.
    jQuery,
    // delay binding
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf,
    ngMinErr = minErr("ng"),
    /** @name angular */
    angular = window.angular || (window.angular = {}),
    uid = 0;

  /**
   * @private
   * @param {*} obj
   * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments,
   *                   String ...)
   */
  function isArrayLike(obj) {
    // `null`, `undefined` and `window` are not array-like
    if (obj == null || isWindow(obj)) return false;

    // arrays, strings and jQuery/jqLite objects are array like
    // * jqLite is either the jQuery or jqLite constructor function
    // * we have to check the existence of jqLite first as this method is called
    //   via the forEach method when constructing the jqLite object in the first place
    if (isArray(obj) || isString(obj) || jqLite && obj instanceof jqLite) return true;

    // Support: iOS 8.2 (not reproducible in simulator)
    // "length" in obj used to prevent JIT error (gh-11508)
    var length = "length" in Object(obj) && obj.length;

    // NodeList objects (with `item` method) and
    // other objects with suitable length characteristics are array-like
    return isNumber(length) && (length >= 0 && (length - 1 in obj || obj instanceof Array) || typeof obj.item === "function");
  }

  /**
   * @ngdoc function
   * @name angular.forEach
   * @module ng
   * @kind function
   *
   * @description
   * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
   * object or an array. The `iterator` function is invoked with `iterator(value, key, obj)`, where `value`
   * is the value of an object property or an array element, `key` is the object property key or
   * array element index and obj is the `obj` itself. Specifying a `context` for the function is optional.
   *
   * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
   * using the `hasOwnProperty` method.
   *
   * Unlike ES262's
   * [Array.prototype.forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18),
   * providing 'undefined' or 'null' values for `obj` will not throw a TypeError, but rather just
   * return the value provided.
   *
     ```js
       var values = {name: 'misko', gender: 'male'};
       var log = [];
       angular.forEach(values, function(value, key) {
         this.push(key + ': ' + value);
       }, log);
       expect(log).toEqual(['name: misko', 'gender: male']);
     ```
   *
   * @param {Object|Array} obj Object to iterate over.
   * @param {Function} iterator Iterator function.
   * @param {Object=} context Object to become context (`this`) for the iterator function.
   * @returns {Object|Array} Reference to `obj`.
   */
  function forEach(obj, iterator, context) {
    var key, length;
    if (obj) {
      if (isFunction(obj)) {
        for (key in obj) {
          if (key !== "prototype" && key !== "length" && key !== "name" && obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (isArray(obj) || isArrayLike(obj)) {
        var isPrimitive = _typeof(obj) !== "object";
        for (key = 0, length = obj.length; key < length; key++) {
          if (isPrimitive || key in obj) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context, obj);
      } else if (isBlankObject(obj)) {
        // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
        // eslint-disable-next-line guard-for-in
        for (key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      } else if (typeof obj.hasOwnProperty === "function") {
        // Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      } else {
        // Slow path for objects which do not have a method `hasOwnProperty`
        for (key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            iterator.call(context, obj[key], key, obj);
          }
        }
      }
    }
    return obj;
  }

  /**
   * Set or clear the hashkey for an object.
   * @param obj object
   * @param h the hashkey (!truthy to delete the hashkey)
   */
  function setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }

  /**
   * @ngdoc function
   * @name angular.noop
   * @module ng
   * @kind function
   *
   * @description
   * A function that performs no operations. This function can be useful when writing code in the
   * functional style.
     ```js
       function foo(callback) {
         var result = calculateResult();
         (callback || angular.noop)(result);
       }
     ```
   */
  function noop() {}
  noop.$inject = [];

  /**
   * @ngdoc function
   * @name angular.isUndefined
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is undefined.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is undefined.
   */
  function isUndefined(value) {
    return typeof value === "undefined";
  }

  /**
   * @ngdoc function
   * @name angular.isDefined
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is defined.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is defined.
   */
  function isDefined(value) {
    return typeof value !== "undefined";
  }

  /**
   * @ngdoc function
   * @name angular.isObject
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
   * considered to be objects. Note that JavaScript arrays are objects.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is an `Object` but not `null`.
   */
  function isObject(value) {
    // http://jsperf.com/isobject4
    return value !== null && _typeof(value) === "object";
  }

  /**
   * Determine if a value is an object with a null prototype
   *
   * @returns {boolean} True if `value` is an `Object` with a null prototype
   */
  function isBlankObject(value) {
    return value !== null && _typeof(value) === "object" && !getPrototypeOf(value);
  }

  /**
   * @ngdoc function
   * @name angular.isString
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is a `String`.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is a `String`.
   */
  function isString(value) {
    return typeof value === "string";
  }

  /**
   * @ngdoc function
   * @name angular.isNumber
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is a `Number`.
   *
   * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
   *
   * If you wish to exclude these then you can use the native
   * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
   * method.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is a `Number`.
   */
  function isNumber(value) {
    return typeof value === "number";
  }

  /**
   * @ngdoc function
   * @name angular.isFunction
   * @module ng
   * @kind function
   *
   * @description
   * Determines if a reference is a `Function`.
   *
   * @param {*} value Reference to check.
   * @returns {boolean} True if `value` is a `Function`.
   */
  function isFunction(value) {
    return typeof value === "function";
  }

  /**
   * Checks if `obj` is a window object.
   *
   * @private
   * @param {*} obj Object to check
   * @returns {boolean} True if `obj` is a window obj.
   */
  function isWindow(obj) {
    return obj && obj.window === obj;
  }
  function isScope(obj) {
    return obj && obj.$evalAsync && obj.$watch;
  }
  var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;
  function isTypedArray(value) {
    return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
  }
  function isArrayBuffer(obj) {
    return toString.call(obj) === "[object ArrayBuffer]";
  }

  /**
   * @ngdoc function
   * @name angular.copy
   * @module ng
   * @kind function
   *
   * @description
   * Creates a deep copy of `source`, which should be an object or an array.
   *
   * * If no destination is supplied, a copy of the object or array is created.
   * * If a destination is provided, all of its elements (for arrays) or properties (for objects)
   *   are deleted and then all elements/properties from the source are copied to it.
   * * If `source` is not an object or array (inc. `null` and `undefined`), `source` is returned.
   * * If `source` is identical to `destination` an exception will be thrown.
   *
   * <br />
   * <div class="alert alert-warning">
   *   Only enumerable properties are taken into account. Non-enumerable properties (both on `source`
   *   and on `destination`) will be ignored.
   * </div>
   *
   * @param {*} source The source that will be used to make a copy.
   *                   Can be any type, including primitives, `null`, and `undefined`.
   * @param {(Object|Array)=} destination Destination into which the source is copied. If
   *     provided, must be of the same type as `source`.
   * @returns {*} The copy or updated `destination`, if `destination` was specified.
   *
   * @example
    <example module="copyExample" name="angular-copy">
      <file name="index.html">
        <div ng-controller="ExampleController">
          <form novalidate class="simple-form">
            <label>Name: <input type="text" ng-model="user.name" /></label><br />
            <label>Age:  <input type="number" ng-model="user.age" /></label><br />
            Gender: <label><input type="radio" ng-model="user.gender" value="male" />male</label>
                    <label><input type="radio" ng-model="user.gender" value="female" />female</label><br />
            <button ng-click="reset()">RESET</button>
            <button ng-click="update(user)">SAVE</button>
          </form>
          <pre>form = {{user | json}}</pre>
          <pre>master = {{master | json}}</pre>
        </div>
      </file>
      <file name="script.js">
        // Module: copyExample
        angular.
          module('copyExample', []).
          controller('ExampleController', ['$scope', function($scope) {
            $scope.master = {};
  
            $scope.reset = function() {
              // Example with 1 argument
              $scope.user = angular.copy($scope.master);
            };
  
            $scope.update = function(user) {
              // Example with 2 arguments
              angular.copy(user, $scope.master);
            };
  
            $scope.reset();
          }]);
      </file>
    </example>
   */
  function copy(source, destination) {
    var stackSource = [];
    var stackDest = [];
    if (destination) {
      if (isTypedArray(destination) || isArrayBuffer(destination)) {
        throw ngMinErr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
      }
      if (source === destination) {
        throw ngMinErr("cpi", "Can't copy! Source and destination are identical.");
      }

      // Empty the destination object
      if (isArray(destination)) {
        destination.length = 0;
      } else {
        forEach(destination, function (value, key) {
          if (key !== "$$hashKey") {
            delete destination[key];
          }
        });
      }
      stackSource.push(source);
      stackDest.push(destination);
      return copyRecurse(source, destination);
    }
    return copyElement(source);
    function copyRecurse(source, destination) {
      var h = destination.$$hashKey;
      var key;
      if (isArray(source)) {
        for (var i = 0, ii = source.length; i < ii; i++) {
          destination.push(copyElement(source[i]));
        }
      } else if (isBlankObject(source)) {
        // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
        // eslint-disable-next-line guard-for-in
        for (key in source) {
          destination[key] = copyElement(source[key]);
        }
      } else if (source && typeof source.hasOwnProperty === "function") {
        // Slow path, which must rely on hasOwnProperty
        for (key in source) {
          if (source.hasOwnProperty(key)) {
            destination[key] = copyElement(source[key]);
          }
        }
      } else {
        // Slowest path --- hasOwnProperty can't be called as a method
        for (key in source) {
          if (hasOwnProperty.call(source, key)) {
            destination[key] = copyElement(source[key]);
          }
        }
      }
      setHashKey(destination, h);
      return destination;
    }
    function copyElement(source) {
      // Simple values
      if (!isObject(source)) {
        return source;
      }

      // Already copied values
      var index = stackSource.indexOf(source);
      if (index !== -1) {
        return stackDest[index];
      }
      if (isWindow(source) || isScope(source)) {
        throw ngMinErr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
      }
      var needsRecurse = false;
      var destination = copyType(source);
      if (destination === undefined) {
        destination = isArray(source) ? [] : Object.create(getPrototypeOf(source));
        needsRecurse = true;
      }
      stackSource.push(source);
      stackDest.push(destination);
      return needsRecurse ? copyRecurse(source, destination) : destination;
    }
    function copyType(source) {
      switch (toString.call(source)) {
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return new source.constructor(copyElement(source.buffer), source.byteOffset, source.length);
        case "[object ArrayBuffer]":
          // Support: IE10
          if (!source.slice) {
            // If we're in this case we know the environment supports ArrayBuffer
            /* eslint-disable no-undef */
            var copied = new ArrayBuffer(source.byteLength);
            new Uint8Array(copied).set(new Uint8Array(source));
            /* eslint-enable */
            return copied;
          }
          return source.slice(0);
        case "[object Boolean]":
        case "[object Number]":
        case "[object String]":
        case "[object Date]":
          return new source.constructor(source.valueOf());
        case "[object RegExp]":
          var re = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
          re.lastIndex = source.lastIndex;
          return re;
        case "[object Blob]":
          return new source.constructor([source], {
            type: source.type
          });
      }
      if (isFunction(source.cloneNode)) {
        return source.cloneNode(true);
      }
    }
  }

  /**
   * @ngdoc directive
   * @module ng
   * @name ngJq
   *
   * @element ANY
   * @param {string=} ngJq the name of the library available under `window`
   * to be used for angular.element
   * @description
   * Use this directive to force the angular.element library.  This should be
   * used to force either jqLite by leaving ng-jq blank or setting the name of
   * the jquery variable under window (eg. jQuery).
   *
   * Since angular looks for this directive when it is loaded (doesn't wait for the
   * DOMContentLoaded event), it must be placed on an element that comes before the script
   * which loads angular. Also, only the first instance of `ng-jq` will be used and all
   * others ignored.
   *
   * @example
   * This example shows how to force jqLite using the `ngJq` directive to the `html` tag.
   ```html
   <!doctype html>
   <html ng-app ng-jq>
   ...
   ...
   </html>
   ```
   * @example
   * This example shows how to use a jQuery based library of a different name.
   * The library name must be available at the top most 'window'.
   ```html
   <!doctype html>
   <html ng-app ng-jq="jQueryLib">
   ...
   ...
   </html>
   ```
   */
  var _jq = function jq() {
    if (isDefined(_jq.name_)) return _jq.name_;
    var el;
    var i,
      ii = ngAttrPrefixes.length,
      prefix,
      name;
    for (i = 0; i < ii; ++i) {
      prefix = ngAttrPrefixes[i];
      el = window.document.querySelector("[" + prefix.replace(":", "\\:") + "jq]");
      if (el) {
        name = el.getAttribute(prefix + "jq");
        break;
      }
    }
    return _jq.name_ = name;
  };
  function toJsonReplacer(key, value) {
    var val = value;
    if (typeof key === "string" && key.charAt(0) === "$" && key.charAt(1) === "$") {
      val = undefined;
    } else if (isWindow(value)) {
      val = "$WINDOW";
    } else if (value && window.document === value) {
      val = "$DOCUMENT";
    } else if (isScope(value)) {
      val = "$SCOPE";
    }
    return val;
  }

  /////////////////////////////////////////////////

  /**
   * Creates a new object without a prototype. This object is useful for lookup without having to
   * guard against prototypically inherited properties via hasOwnProperty.
   *
   * Related micro-benchmarks:
   * - http://jsperf.com/object-create2
   * - http://jsperf.com/proto-map-lookup/2
   * - http://jsperf.com/for-in-vs-object-keys2
   *
   * @returns {Object}
   */
  function createMap() {
    return Object.create(null);
  }

  /* global toDebugString: true */

  function serializeObject(obj) {
    var seen = [];
    return JSON.stringify(obj, function (key, val) {
      val = toJsonReplacer(key, val);
      if (isObject(val)) {
        if (seen.indexOf(val) >= 0) return "...";
        seen.push(val);
      }
      return val;
    });
  }
  function toDebugString(obj) {
    if (typeof obj === "function") {
      return obj.toString().replace(/ \{[\s\S]*$/, "");
    } else if (isUndefined(obj)) {
      return "undefined";
    } else if (typeof obj !== "string") {
      return serializeObject(obj);
    }
    return obj;
  }

  /**
   * @description
   *
   * This object provides a utility for producing rich Error messages within
   * Angular. It can be called as follows:
   *
   * var exampleMinErr = minErr('example');
   * throw exampleMinErr('one', 'This {0} is {1}', foo, bar);
   *
   * The above creates an instance of minErr in the example namespace. The
   * resulting error will have a namespaced error code of example.one.  The
   * resulting error will replace {0} with the value of foo, and {1} with the
   * value of bar. The object is not restricted in the number of arguments it can
   * take.
   *
   * If fewer arguments are specified than necessary for interpolation, the extra
   * interpolation markers will be preserved in the final string.
   *
   * Since data will be parsed statically during a build step, some restrictions
   * are applied with respect to how minErr instances are created and called.
   * Instances should have names of the form namespaceMinErr for a minErr created
   * using minErr('namespace') . Error codes, namespaces and template strings
   * should all be static strings, not variables or general expressions.
   *
   * @param {string} module The namespace to use for the new minErr instance.
   * @param {function} ErrorConstructor Custom error constructor to be instantiated when returning
   *   error from returned function, for cases when a particular type of error is useful.
   * @returns {function(code:string, template:string, ...templateArgs): Error} minErr instance
   */

  function minErr(module, ErrorConstructor) {
    ErrorConstructor = ErrorConstructor || Error;
    return function () {
      var SKIP_INDEXES = 2;
      var templateArgs = arguments,
        code = templateArgs[0],
        message = "[" + (module ? module + ":" : "") + code + "] ",
        template = templateArgs[1],
        paramPrefix,
        i;
      message += template.replace(/\{\d+\}/g, function (match) {
        var index = +match.slice(1, -1),
          shiftedIndex = index + SKIP_INDEXES;
        if (shiftedIndex < templateArgs.length) {
          return toDebugString(templateArgs[shiftedIndex]);
        }
        return match;
      });
      message += '\nhttp://errors.angularjs.org/1.6.9/' + (module ? module + "/" : "") + code;
      for (i = SKIP_INDEXES, paramPrefix = "?"; i < templateArgs.length; i++, paramPrefix = "&") {
        message += paramPrefix + "p" + (i - SKIP_INDEXES) + "=" + encodeURIComponent(toDebugString(templateArgs[i]));
      }
      return new ErrorConstructor(message);
    };
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *     Any commits to this file should be reviewed with security in mind.  *
   *   Changes to this file can potentially create security vulnerabilities. *
   *          An approval from 2 Core members with history of modifying      *
   *                         this file is required.                          *
   *                                                                         *
   *  Does the change somehow allow for arbitrary javascript to be executed? *
   *    Or allows for someone to change the prototype of built-in objects?   *
   *     Or gives undesired access to variables likes document or window?    *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  var $parseMinErr = minErr("$parse");

  // Sandboxing Angular Expressions
  // ------------------------------
  // Angular expressions are no longer sandboxed. So it is now even easier to access arbitrary JS code by
  // various means such as obtaining a reference to native JS functions like the Function constructor.
  //
  // As an example, consider the following Angular expression:
  //
  //   {}.toString.constructor('alert("evil JS code")')
  //
  // It is important to realize that if you create an expression from a string that contains user provided
  // content then it is possible that your application contains a security vulnerability to an XSS style attack.
  //
  // See https://docs.angularjs.org/guide/security

  function getStringValue(name) {
    // Property names must be strings. This means that non-string objects cannot be used
    // as keys in an object. Any non-string object, including a number, is typecasted
    // into a string via the toString method.
    // -- MDN, https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors#Property_names
    //
    // So, to ensure that we are checking the same `name` that JavaScript would use, we cast it
    // to a string. It's not always possible. If `name` is an object and its `toString` method is
    // 'broken' (doesn't return a string, isn't a function, etc.), an error will be thrown:
    //
    // TypeError: Cannot convert object to primitive value
    //
    // For performance reasons, we don't catch this error here and allow it to propagate up the call
    // stack. Note that you'll get the same error in JavaScript if you try to access a property using
    // such a 'broken' object as a key.
    return name + "";
  }
  var OPERATORS = createMap();
  forEach("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (operator) {
    OPERATORS[operator] = true;
  });
  var ESCAPE = {
    n: "\n",
    f: "\f",
    r: "\r",
    t: "\t",
    v: "\v",
    "'": "'",
    '"': '"'
  };

  /////////////////////////////////////////

  /**
   * @constructor
   */
  function Lexer(options) {
    this.options = options;
  }
  ;
  Lexer.prototype = {
    constructor: Lexer,
    lex: function lex(text) {
      this.text = text;
      this.index = 0;
      this.tokens = [];
      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        if (ch === '"' || ch === "'") {
          this.readString(ch);
        } else if (this.isNumber(ch) || ch === "." && this.isNumber(this.peek())) {
          this.readNumber();
        } else if (this.isIdentifierStart(this.peekMultichar())) {
          this.readIdent();
        } else if (this.is(ch, "(){}[].,;:?")) {
          this.tokens.push({
            index: this.index,
            text: ch
          });
          this.index++;
        } else if (this.isWhitespace(ch)) {
          this.index++;
        } else {
          var ch2 = ch + this.peek();
          var ch3 = ch2 + this.peek(2);
          var op1 = OPERATORS[ch];
          var op2 = OPERATORS[ch2];
          var op3 = OPERATORS[ch3];
          if (op1 || op2 || op3) {
            var token = op3 ? ch3 : op2 ? ch2 : ch;
            this.tokens.push({
              index: this.index,
              text: token,
              operator: true
            });
            this.index += token.length;
          } else {
            this.throwError("Unexpected next character ", this.index, this.index + 1);
          }
        }
      }
      return this.tokens;
    },
    is: function is(ch, chars) {
      return chars.indexOf(ch) !== -1;
    },
    peek: function peek(i) {
      var num = i || 1;
      return this.index + num < this.text.length ? this.text.charAt(this.index + num) : false;
    },
    isNumber: function isNumber(ch) {
      return "0" <= ch && ch <= "9" && typeof ch === "string";
    },
    isWhitespace: function isWhitespace(ch) {
      // IE treats non-breaking space as \u00A0
      return ch === " " || ch === "\r" || ch === "\t" || ch === "\n" || ch === "\v" || ch === "\xA0";
    },
    isIdentifierStart: function isIdentifierStart(ch) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
    },
    isValidIdentifierStart: function isValidIdentifierStart(ch) {
      return "a" <= ch && ch <= "z" || "A" <= ch && ch <= "Z" || "_" === ch || ch === "$";
    },
    isIdentifierContinue: function isIdentifierContinue(ch) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
    },
    isValidIdentifierContinue: function isValidIdentifierContinue(ch, cp) {
      return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
    },
    codePointAt: function codePointAt(ch) {
      if (ch.length === 1) return ch.charCodeAt(0);
      // eslint-disable-next-line no-bitwise
      return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35fdc00;
    },
    peekMultichar: function peekMultichar() {
      var ch = this.text.charAt(this.index);
      var peek = this.peek();
      if (!peek) {
        return ch;
      }
      var cp1 = ch.charCodeAt(0);
      var cp2 = peek.charCodeAt(0);
      if (cp1 >= 0xd800 && cp1 <= 0xdbff && cp2 >= 0xdc00 && cp2 <= 0xdfff) {
        return ch + peek;
      }
      return ch;
    },
    isExpOperator: function isExpOperator(ch) {
      return ch === "-" || ch === "+" || this.isNumber(ch);
    },
    throwError: function throwError(error, start, end) {
      end = end || this.index;
      var colStr = isDefined(start) ? "s " + start + "-" + this.index + " [" + this.text.substring(start, end) + "]" : " " + end;
      throw $parseMinErr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", error, colStr, this.text);
    },
    readNumber: function readNumber() {
      var number = "";
      var start = this.index;
      while (this.index < this.text.length) {
        var ch = lowercase(this.text.charAt(this.index));
        if (ch === "." || this.isNumber(ch)) {
          number += ch;
        } else {
          var peekCh = this.peek();
          if (ch === "e" && this.isExpOperator(peekCh)) {
            number += ch;
          } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) === "e") {
            number += ch;
          } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) === "e") {
            this.throwError("Invalid exponent");
          } else {
            break;
          }
        }
        this.index++;
      }
      this.tokens.push({
        index: start,
        text: number,
        constant: true,
        value: Number(number)
      });
    },
    readIdent: function readIdent() {
      var start = this.index;
      this.index += this.peekMultichar().length;
      while (this.index < this.text.length) {
        var ch = this.peekMultichar();
        if (!this.isIdentifierContinue(ch)) {
          break;
        }
        this.index += ch.length;
      }
      this.tokens.push({
        index: start,
        text: this.text.slice(start, this.index),
        identifier: true
      });
    },
    readString: function readString(quote) {
      var start = this.index;
      this.index++;
      var string = "";
      var rawString = quote;
      var escape = false;
      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;
        if (escape) {
          if (ch === "u") {
            var hex = this.text.substring(this.index + 1, this.index + 5);
            if (!hex.match(/[\da-f]{4}/i)) {
              this.throwError("Invalid unicode escape [\\u" + hex + "]");
            }
            this.index += 4;
            string += String.fromCharCode(parseInt(hex, 16));
          } else {
            var rep = ESCAPE[ch];
            string = string + (rep || ch);
          }
          escape = false;
        } else if (ch === "\\") {
          escape = true;
        } else if (ch === quote) {
          this.index++;
          this.tokens.push({
            index: start,
            text: rawString,
            constant: true,
            value: string
          });
          return;
        } else {
          string += ch;
        }
        this.index++;
      }
      this.throwError("Unterminated quote", start);
    }
  };
  function AST(lexer, options) {
    this.lexer = lexer;
    this.options = options;
  }
  ;
  AST.Program = "Program";
  AST.ExpressionStatement = "ExpressionStatement";
  AST.AssignmentExpression = "AssignmentExpression";
  AST.ConditionalExpression = "ConditionalExpression";
  AST.LogicalExpression = "LogicalExpression";
  AST.BinaryExpression = "BinaryExpression";
  AST.UnaryExpression = "UnaryExpression";
  AST.CallExpression = "CallExpression";
  AST.MemberExpression = "MemberExpression";
  AST.Identifier = "Identifier";
  AST.Literal = "Literal";
  AST.ArrayExpression = "ArrayExpression";
  AST.Property = "Property";
  AST.ObjectExpression = "ObjectExpression";
  AST.ThisExpression = "ThisExpression";
  AST.LocalsExpression = "LocalsExpression";

  // Internal use only
  AST.NGValueParameter = "NGValueParameter";
  AST.prototype = {
    ast: function ast(text) {
      this.text = text;
      this.tokens = this.lexer.lex(text);
      var value = this.program();
      if (this.tokens.length !== 0) {
        this.throwError("is an unexpected token", this.tokens[0]);
      }
      return value;
    },
    program: function program() {
      var body = [];
      while (true) {
        if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]")) body.push(this.expressionStatement());
        if (!this.expect(";")) {
          return {
            type: AST.Program,
            body: body
          };
        }
      }
    },
    expressionStatement: function expressionStatement() {
      return {
        type: AST.ExpressionStatement,
        expression: this.filterChain()
      };
    },
    filterChain: function filterChain() {
      var left = this.expression();
      while (this.expect("|")) {
        left = this.filter(left);
      }
      return left;
    },
    expression: function expression() {
      return this.assignment();
    },
    assignment: function assignment() {
      var result = this.ternary();
      if (this.expect("=")) {
        if (!isAssignable(result)) {
          throw $parseMinErr("lval", "Trying to assign a value to a non l-value");
        }
        result = {
          type: AST.AssignmentExpression,
          left: result,
          right: this.assignment(),
          operator: "="
        };
      }
      return result;
    },
    ternary: function ternary() {
      var test = this.logicalOR();
      var alternate;
      var consequent;
      if (this.expect("?")) {
        alternate = this.expression();
        if (this.consume(":")) {
          consequent = this.expression();
          return {
            type: AST.ConditionalExpression,
            test: test,
            alternate: alternate,
            consequent: consequent
          };
        }
      }
      return test;
    },
    logicalOR: function logicalOR() {
      var left = this.logicalAND();
      while (this.expect("||")) {
        left = {
          type: AST.LogicalExpression,
          operator: "||",
          left: left,
          right: this.logicalAND()
        };
      }
      return left;
    },
    logicalAND: function logicalAND() {
      var left = this.equality();
      while (this.expect("&&")) {
        left = {
          type: AST.LogicalExpression,
          operator: "&&",
          left: left,
          right: this.equality()
        };
      }
      return left;
    },
    equality: function equality() {
      var left = this.relational();
      var token;
      while (token = this.expect("==", "!=", "===", "!==")) {
        left = {
          type: AST.BinaryExpression,
          operator: token.text,
          left: left,
          right: this.relational()
        };
      }
      return left;
    },
    relational: function relational() {
      var left = this.additive();
      var token;
      while (token = this.expect("<", ">", "<=", ">=")) {
        left = {
          type: AST.BinaryExpression,
          operator: token.text,
          left: left,
          right: this.additive()
        };
      }
      return left;
    },
    additive: function additive() {
      var left = this.multiplicative();
      var token;
      while (token = this.expect("+", "-")) {
        left = {
          type: AST.BinaryExpression,
          operator: token.text,
          left: left,
          right: this.multiplicative()
        };
      }
      return left;
    },
    multiplicative: function multiplicative() {
      var left = this.unary();
      var token;
      while (token = this.expect("*", "/", "%")) {
        left = {
          type: AST.BinaryExpression,
          operator: token.text,
          left: left,
          right: this.unary()
        };
      }
      return left;
    },
    unary: function unary() {
      var token;
      if (token = this.expect("+", "-", "!")) {
        return {
          type: AST.UnaryExpression,
          operator: token.text,
          prefix: true,
          argument: this.unary()
        };
      } else {
        return this.primary();
      }
    },
    primary: function primary() {
      var primary;
      if (this.expect("(")) {
        primary = this.filterChain();
        this.consume(")");
      } else if (this.expect("[")) {
        primary = this.arrayDeclaration();
      } else if (this.expect("{")) {
        primary = this.object();
      } else if (this.selfReferential.hasOwnProperty(this.peek().text)) {
        primary = copy(this.selfReferential[this.consume().text]);
      } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
        primary = {
          type: AST.Literal,
          value: this.options.literals[this.consume().text]
        };
      } else if (this.peek().identifier) {
        primary = this.identifier();
      } else if (this.peek().constant) {
        primary = this.constant();
      } else {
        this.throwError("not a primary expression", this.peek());
      }
      var next;
      while (next = this.expect("(", "[", ".")) {
        if (next.text === "(") {
          primary = {
            type: AST.CallExpression,
            callee: primary,
            arguments: this.parseArguments()
          };
          this.consume(")");
        } else if (next.text === "[") {
          primary = {
            type: AST.MemberExpression,
            object: primary,
            property: this.expression(),
            computed: true
          };
          this.consume("]");
        } else if (next.text === ".") {
          primary = {
            type: AST.MemberExpression,
            object: primary,
            property: this.identifier(),
            computed: false
          };
        } else {
          this.throwError("IMPOSSIBLE");
        }
      }
      return primary;
    },
    filter: function filter(baseExpression) {
      var args = [baseExpression];
      var result = {
        type: AST.CallExpression,
        callee: this.identifier(),
        arguments: args,
        filter: true
      };
      while (this.expect(":")) {
        args.push(this.expression());
      }
      return result;
    },
    parseArguments: function parseArguments() {
      var args = [];
      if (this.peekToken().text !== ")") {
        do {
          args.push(this.filterChain());
        } while (this.expect(","));
      }
      return args;
    },
    identifier: function identifier() {
      var token = this.consume();
      if (!token.identifier) {
        this.throwError("is not a valid identifier", token);
      }
      return {
        type: AST.Identifier,
        name: token.text
      };
    },
    constant: function constant() {
      // TODO check that it is a constant
      return {
        type: AST.Literal,
        value: this.consume().value
      };
    },
    arrayDeclaration: function arrayDeclaration() {
      var elements = [];
      if (this.peekToken().text !== "]") {
        do {
          if (this.peek("]")) {
            // Support trailing commas per ES5.1.
            break;
          }
          elements.push(this.expression());
        } while (this.expect(","));
      }
      this.consume("]");
      return {
        type: AST.ArrayExpression,
        elements: elements
      };
    },
    object: function object() {
      var properties = [],
        property;
      if (this.peekToken().text !== "}") {
        do {
          if (this.peek("}")) {
            // Support trailing commas per ES5.1.
            break;
          }
          property = {
            type: AST.Property,
            kind: "init"
          };
          if (this.peek().constant) {
            property.key = this.constant();
            property.computed = false;
            this.consume(":");
            property.value = this.expression();
          } else if (this.peek().identifier) {
            property.key = this.identifier();
            property.computed = false;
            if (this.peek(":")) {
              this.consume(":");
              property.value = this.expression();
            } else {
              property.value = property.key;
            }
          } else if (this.peek("[")) {
            this.consume("[");
            property.key = this.expression();
            this.consume("]");
            property.computed = true;
            this.consume(":");
            property.value = this.expression();
          } else {
            this.throwError("invalid key", this.peek());
          }
          properties.push(property);
        } while (this.expect(","));
      }
      this.consume("}");
      return {
        type: AST.ObjectExpression,
        properties: properties
      };
    },
    throwError: function throwError(msg, token) {
      throw $parseMinErr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", token.text, msg, token.index + 1, this.text, this.text.substring(token.index));
    },
    consume: function consume(e1) {
      if (this.tokens.length === 0) {
        throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
      }
      var token = this.expect(e1);
      if (!token) {
        this.throwError("is unexpected, expecting [" + e1 + "]", this.peek());
      }
      return token;
    },
    peekToken: function peekToken() {
      if (this.tokens.length === 0) {
        throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
      }
      return this.tokens[0];
    },
    peek: function peek(e1, e2, e3, e4) {
      return this.peekAhead(0, e1, e2, e3, e4);
    },
    peekAhead: function peekAhead(i, e1, e2, e3, e4) {
      if (this.tokens.length > i) {
        var token = this.tokens[i];
        var t = token.text;
        if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) {
          return token;
        }
      }
      return false;
    },
    expect: function expect(e1, e2, e3, e4) {
      var token = this.peek(e1, e2, e3, e4);
      if (token) {
        this.tokens.shift();
        return token;
      }
      return false;
    },
    selfReferential: {
      "this": {
        type: AST.ThisExpression
      },
      $locals: {
        type: AST.LocalsExpression
      }
    }
  };
  function ifDefined(v, d) {
    return typeof v !== "undefined" ? v : d;
  }
  function plusFn(l, r) {
    if (typeof l === "undefined") return r;
    if (typeof r === "undefined") return l;
    return l + r;
  }
  function isStateless($filter, filterName) {
    var fn = $filter(filterName);
    return !fn.$stateful;
  }
  function findConstantAndWatchExpressions(ast, $filter) {
    var allConstants;
    var argsToWatch;
    var isStatelessFilter;
    switch (ast.type) {
      case AST.Program:
        allConstants = true;
        forEach(ast.body, function (expr) {
          findConstantAndWatchExpressions(expr.expression, $filter);
          allConstants = allConstants && expr.expression.constant;
        });
        ast.constant = allConstants;
        break;
      case AST.Literal:
        ast.constant = true;
        ast.toWatch = [];
        break;
      case AST.UnaryExpression:
        findConstantAndWatchExpressions(ast.argument, $filter);
        ast.constant = ast.argument.constant;
        ast.toWatch = ast.argument.toWatch;
        break;
      case AST.BinaryExpression:
        findConstantAndWatchExpressions(ast.left, $filter);
        findConstantAndWatchExpressions(ast.right, $filter);
        ast.constant = ast.left.constant && ast.right.constant;
        ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
        break;
      case AST.LogicalExpression:
        findConstantAndWatchExpressions(ast.left, $filter);
        findConstantAndWatchExpressions(ast.right, $filter);
        ast.constant = ast.left.constant && ast.right.constant;
        ast.toWatch = ast.constant ? [] : [ast];
        break;
      case AST.ConditionalExpression:
        findConstantAndWatchExpressions(ast.test, $filter);
        findConstantAndWatchExpressions(ast.alternate, $filter);
        findConstantAndWatchExpressions(ast.consequent, $filter);
        ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant;
        ast.toWatch = ast.constant ? [] : [ast];
        break;
      case AST.Identifier:
        ast.constant = false;
        ast.toWatch = [ast];
        break;
      case AST.MemberExpression:
        findConstantAndWatchExpressions(ast.object, $filter);
        if (ast.computed) {
          findConstantAndWatchExpressions(ast.property, $filter);
        }
        ast.constant = ast.object.constant && (!ast.computed || ast.property.constant);
        ast.toWatch = [ast];
        break;
      case AST.CallExpression:
        isStatelessFilter = ast.filter ? isStateless($filter, ast.callee.name) : false;
        allConstants = isStatelessFilter;
        argsToWatch = [];
        forEach(ast.arguments, function (expr) {
          findConstantAndWatchExpressions(expr, $filter);
          allConstants = allConstants && expr.constant;
          if (!expr.constant) {
            argsToWatch.push.apply(argsToWatch, expr.toWatch);
          }
        });
        ast.constant = allConstants;
        ast.toWatch = isStatelessFilter ? argsToWatch : [ast];
        break;
      case AST.AssignmentExpression:
        findConstantAndWatchExpressions(ast.left, $filter);
        findConstantAndWatchExpressions(ast.right, $filter);
        ast.constant = ast.left.constant && ast.right.constant;
        ast.toWatch = [ast];
        break;
      case AST.ArrayExpression:
        allConstants = true;
        argsToWatch = [];
        forEach(ast.elements, function (expr) {
          findConstantAndWatchExpressions(expr, $filter);
          allConstants = allConstants && expr.constant;
          if (!expr.constant) {
            argsToWatch.push.apply(argsToWatch, expr.toWatch);
          }
        });
        ast.constant = allConstants;
        ast.toWatch = argsToWatch;
        break;
      case AST.ObjectExpression:
        allConstants = true;
        argsToWatch = [];
        forEach(ast.properties, function (property) {
          findConstantAndWatchExpressions(property.value, $filter);
          allConstants = allConstants && property.value.constant && !property.computed;
          if (!property.value.constant) {
            argsToWatch.push.apply(argsToWatch, property.value.toWatch);
          }
        });
        ast.constant = allConstants;
        ast.toWatch = argsToWatch;
        break;
      case AST.ThisExpression:
        ast.constant = false;
        ast.toWatch = [];
        break;
      case AST.LocalsExpression:
        ast.constant = false;
        ast.toWatch = [];
        break;
    }
  }
  function getInputs(body) {
    if (body.length !== 1) return;
    var lastExpression = body[0].expression;
    var candidate = lastExpression.toWatch;
    if (candidate.length !== 1) return candidate;
    return candidate[0] !== lastExpression ? candidate : undefined;
  }
  function isAssignable(ast) {
    return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
  }
  function assignableAST(ast) {
    if (ast.body.length === 1 && isAssignable(ast.body[0].expression)) {
      return {
        type: AST.AssignmentExpression,
        left: ast.body[0].expression,
        right: {
          type: AST.NGValueParameter
        },
        operator: "="
      };
    }
  }
  function isLiteral(ast) {
    return ast.body.length === 0 || ast.body.length === 1 && (ast.body[0].expression.type === AST.Literal || ast.body[0].expression.type === AST.ArrayExpression || ast.body[0].expression.type === AST.ObjectExpression);
  }
  function isConstant(ast) {
    return ast.constant;
  }
  function ASTCompiler(astBuilder, $filter) {
    this.astBuilder = astBuilder;
    this.$filter = $filter;
  }
  ASTCompiler.prototype = {
    compile: function compile(expression) {
      var self = this;
      var ast = this.astBuilder.ast(expression);
      this.state = {
        nextId: 0,
        filters: {},
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      };
      findConstantAndWatchExpressions(ast, self.$filter);
      var extra = "";
      var assignable;
      this.stage = "assign";
      if (assignable = assignableAST(ast)) {
        this.state.computing = "assign";
        var result = this.nextId();
        this.recurse(assignable, result);
        this.return_(result);
        extra = "fn.assign=" + this.generateFunction("assign", "s,v,l");
      }
      var toWatch = getInputs(ast.body);
      self.stage = "inputs";
      forEach(toWatch, function (watch, key) {
        var fnKey = "fn" + key;
        self.state[fnKey] = {
          vars: [],
          body: [],
          own: {}
        };
        self.state.computing = fnKey;
        var intoId = self.nextId();
        self.recurse(watch, intoId);
        self.return_(intoId);
        self.state.inputs.push(fnKey);
        watch.watchId = key;
      });
      this.state.computing = "fn";
      this.stage = "main";
      this.recurse(ast);
      var fnString =
      // The build and minification steps remove the string "use strict" from the code, but this is done using a regex.
      // This is a workaround for this until we do a better job at only removing the prefix only when we should.
      '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + extra + this.watchFns() + "return fn;";
      // eslint-disable-next-line no-new-func
      var fn = new Function("$filter", "getStringValue", "ifDefined", "plus", fnString)(this.$filter, getStringValue, ifDefined, plusFn);
      this.state = this.stage = undefined;
      fn.ast = ast;
      fn.literal = isLiteral(ast);
      fn.constant = isConstant(ast);
      return fn;
    },
    USE: "use",
    STRICT: "strict",
    watchFns: function watchFns() {
      var result = [];
      var fns = this.state.inputs;
      var self = this;
      forEach(fns, function (name) {
        result.push("var " + name + "=" + self.generateFunction(name, "s"));
      });
      if (fns.length) {
        result.push("fn.inputs=[" + fns.join(",") + "];");
      }
      return result.join("");
    },
    generateFunction: function generateFunction(name, params) {
      return "function(" + params + "){" + this.varsPrefix(name) + this.body(name) + "};";
    },
    filterPrefix: function filterPrefix() {
      var parts = [];
      var self = this;
      forEach(this.state.filters, function (id, filter) {
        parts.push(id + "=$filter(" + self.escape(filter) + ")");
      });
      if (parts.length) return "var " + parts.join(",") + ";";
      return "";
    },
    varsPrefix: function varsPrefix(section) {
      return this.state[section].vars.length ? "var " + this.state[section].vars.join(",") + ";" : "";
    },
    body: function body(section) {
      return this.state[section].body.join("");
    },
    recurse: function recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
      var left,
        right,
        self = this,
        args,
        expression,
        computed;
      recursionFn = recursionFn || noop;
      if (!skipWatchIdCheck && isDefined(ast.watchId)) {
        intoId = intoId || this.nextId();
        this.if_("i", this.lazyAssign(intoId, this.unsafeComputedMember("i", ast.watchId)), this.lazyRecurse(ast, intoId, nameId, recursionFn, create, true));
        return;
      }
      switch (ast.type) {
        case AST.Program:
          forEach(ast.body, function (expression, pos) {
            self.recurse(expression.expression, undefined, undefined, function (expr) {
              right = expr;
            });
            if (pos !== ast.body.length - 1) {
              self.current().body.push(right, ";");
            } else {
              self.return_(right);
            }
          });
          break;
        case AST.Literal:
          expression = this.escape(ast.value);
          this.assign(intoId, expression);
          recursionFn(intoId || expression);
          break;
        case AST.UnaryExpression:
          this.recurse(ast.argument, undefined, undefined, function (expr) {
            right = expr;
          });
          expression = ast.operator + "(" + this.ifDefined(right, 0) + ")";
          this.assign(intoId, expression);
          recursionFn(expression);
          break;
        case AST.BinaryExpression:
          this.recurse(ast.left, undefined, undefined, function (expr) {
            left = expr;
          });
          this.recurse(ast.right, undefined, undefined, function (expr) {
            right = expr;
          });
          if (ast.operator === "+") {
            expression = this.plus(left, right);
          } else if (ast.operator === "-") {
            expression = this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0);
          } else {
            expression = "(" + left + ")" + ast.operator + "(" + right + ")";
          }
          this.assign(intoId, expression);
          recursionFn(expression);
          break;
        case AST.LogicalExpression:
          intoId = intoId || this.nextId();
          self.recurse(ast.left, intoId);
          self.if_(ast.operator === "&&" ? intoId : self.not(intoId), self.lazyRecurse(ast.right, intoId));
          recursionFn(intoId);
          break;
        case AST.ConditionalExpression:
          intoId = intoId || this.nextId();
          self.recurse(ast.test, intoId);
          self.if_(intoId, self.lazyRecurse(ast.alternate, intoId), self.lazyRecurse(ast.consequent, intoId));
          recursionFn(intoId);
          break;
        case AST.Identifier:
          intoId = intoId || this.nextId();
          if (nameId) {
            nameId.context = self.stage === "inputs" ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", ast.name) + "?l:s");
            nameId.computed = false;
            nameId.name = ast.name;
          }
          self.if_(self.stage === "inputs" || self.not(self.getHasOwnProperty("l", ast.name)), function () {
            self.if_(self.stage === "inputs" || self.and_("s", self.or_(self.isNull(self.nonComputedMember("s", ast.name)), self.has_("s", ast.name))), function () {
              if (create && create !== 1) {
                self.if_(self.isNull(self.nonComputedMember("s", ast.name)), self.lazyAssign(self.nonComputedMember("s", ast.name), "{}"));
              }
              self.assign(intoId, self.nonComputedMember("s", ast.name));
            });
          }, intoId && self.lazyAssign(intoId, self.nonComputedMember("l", ast.name)));
          recursionFn(intoId);
          break;
        case AST.MemberExpression:
          left = nameId && (nameId.context = this.nextId()) || this.nextId();
          intoId = intoId || this.nextId();
          self.recurse(ast.object, left, undefined, function () {
            var member = null;
            var inAssignment = self.current().inAssignment;
            if (ast.computed) {
              right = self.nextId();
              if (inAssignment || self.state.computing === "assign") {
                member = self.unsafeComputedMember(left, right);
              } else {
                member = self.computedMember(left, right);
              }
            } else {
              if (inAssignment || self.state.computing === "assign") {
                member = self.unsafeNonComputedMember(left, ast.property.name);
              } else {
                member = self.nonComputedMember(left, ast.property.name);
              }
              right = ast.property.name;
            }
            if (ast.computed) {
              if (ast.property.type === AST.Literal) {
                self.recurse(ast.property, right);
              }
            }
            self.if_(self.and_(self.notNull(left), self.or_(self.isNull(member), self.has_(left, right, ast.computed))), function () {
              if (ast.computed) {
                if (ast.property.type !== AST.Literal) {
                  self.recurse(ast.property, right);
                }
                if (create && create !== 1) {
                  self.if_(self.not(member), self.lazyAssign(member, "{}"));
                }
                self.assign(intoId, member);
                if (nameId) {
                  nameId.computed = true;
                  nameId.name = right;
                }
              } else {
                if (create && create !== 1) {
                  self.if_(self.isNull(member), self.lazyAssign(member, "{}"));
                }
                self.assign(intoId, member);
                if (nameId) {
                  nameId.computed = false;
                  nameId.name = ast.property.name;
                }
              }
            }, function () {
              self.assign(intoId, "undefined");
            });
            recursionFn(intoId);
          }, !!create);
          break;
        case AST.CallExpression:
          intoId = intoId || this.nextId();
          if (ast.filter) {
            right = self.filter(ast.callee.name);
            args = [];
            forEach(ast.arguments, function (expr) {
              var argument = self.nextId();
              self.recurse(expr, argument);
              args.push(argument);
            });
            expression = right + ".call(" + right + "," + args.join(",") + ")";
            self.assign(intoId, expression);
            recursionFn(intoId);
          } else {
            right = self.nextId();
            left = {};
            args = [];
            self.recurse(ast.callee, right, left, function () {
              self.if_(self.notNull(right), function () {
                forEach(ast.arguments, function (expr) {
                  self.recurse(expr, ast.constant ? undefined : self.nextId(), undefined, function (argument) {
                    args.push(argument);
                  });
                });
                if (left.name) {
                  var x = self.member(left.context, left.name, left.computed);
                  expression = "(" + x + " === null ? null : " + self.unsafeMember(left.context, left.name, left.computed) + ".call(" + [left.context].concat(args).join(",") + "))";
                } else {
                  expression = right + "(" + args.join(",") + ")";
                }
                self.assign(intoId, expression);
              }, function () {
                self.assign(intoId, "undefined");
              });
              recursionFn(intoId);
            });
          }
          break;
        case AST.AssignmentExpression:
          right = this.nextId();
          left = {};
          self.current().inAssignment = true;
          this.recurse(ast.left, undefined, left, function () {
            self.if_(self.and_(self.notNull(left.context), self.or_(self.has_(left.context, left.name), self.isNull(self.member(left.context, left.name, left.computed)))), function () {
              self.recurse(ast.right, right);
              expression = self.member(left.context, left.name, left.computed) + ast.operator + right;
              self.assign(intoId, expression);
              recursionFn(intoId || expression);
            });
            self.current().inAssignment = false;
            self.recurse(ast.right, right);
            self.current().inAssignment = true;
          }, 1);
          self.current().inAssignment = false;
          break;
        case AST.ArrayExpression:
          args = [];
          forEach(ast.elements, function (expr) {
            self.recurse(expr, ast.constant ? undefined : self.nextId(), undefined, function (argument) {
              args.push(argument);
            });
          });
          expression = "[" + args.join(",") + "]";
          this.assign(intoId, expression);
          recursionFn(intoId || expression);
          break;
        case AST.ObjectExpression:
          args = [];
          computed = false;
          forEach(ast.properties, function (property) {
            if (property.computed) {
              computed = true;
            }
          });
          if (computed) {
            intoId = intoId || this.nextId();
            this.assign(intoId, "{}");
            forEach(ast.properties, function (property) {
              if (property.computed) {
                left = self.nextId();
                self.recurse(property.key, left);
              } else {
                left = property.key.type === AST.Identifier ? property.key.name : "" + property.key.value;
              }
              right = self.nextId();
              self.recurse(property.value, right);
              self.assign(self.unsafeMember(intoId, left, property.computed), right);
            });
          } else {
            forEach(ast.properties, function (property) {
              self.recurse(property.value, ast.constant ? undefined : self.nextId(), undefined, function (expr) {
                args.push(self.escape(property.key.type === AST.Identifier ? property.key.name : "" + property.key.value) + ":" + expr);
              });
            });
            expression = "{" + args.join(",") + "}";
            this.assign(intoId, expression);
          }
          recursionFn(intoId || expression);
          break;
        case AST.ThisExpression:
          this.assign(intoId, "s");
          recursionFn(intoId || "s");
          break;
        case AST.LocalsExpression:
          this.assign(intoId, "l");
          recursionFn(intoId || "l");
          break;
        case AST.NGValueParameter:
          this.assign(intoId, "v");
          recursionFn(intoId || "v");
          break;
      }
    },
    getHasOwnProperty: function getHasOwnProperty(element, property) {
      var key = element + "." + property;
      var own = this.current().own;
      if (!own.hasOwnProperty(key)) {
        own[key] = this.nextId(false, element + "&&(" + this.escape(property) + " in " + element + ")");
      }
      return own[key];
    },
    assign: function assign(id, value) {
      if (!id) return;
      this.current().body.push(id, "=", value, ";");
      return id;
    },
    filter: function filter(filterName) {
      if (!this.state.filters.hasOwnProperty(filterName)) {
        this.state.filters[filterName] = this.nextId(true);
      }
      return this.state.filters[filterName];
    },
    ifDefined: function ifDefined(id, defaultValue) {
      return "ifDefined(" + id + "," + this.escape(defaultValue) + ")";
    },
    plus: function plus(left, right) {
      return "plus(" + left + "," + right + ")";
    },
    return_: function return_(id) {
      this.current().body.push("return ", id, ";");
    },
    if_: function if_(test, alternate, consequent) {
      if (test === true) {
        alternate();
      } else {
        var body = this.current().body;
        body.push("if(", test, "){");
        alternate();
        body.push("}");
        if (consequent) {
          body.push("else{");
          consequent();
          body.push("}");
        }
      }
    },
    or_: function or_(expr1, expr2) {
      return "(" + expr1 + ") || (" + expr2 + ")";
    },
    // hasOwnProperty_: function (obj, prop, computed) {
    //   if (computed) {
    //     return "(Object.prototype.hasOwnProperty.call(" + obj + "," + prop + "))";
    //   } else {
    //     return (
    //       "(Object.prototype.hasOwnProperty.call(" + obj + ",'" + prop + "'))"
    //     );
    //   }
    // },
    hasProperty_: function hasProperty_(obj, prop, computed) {
      if (computed) {
        return "(" + prop + " in " + obj + ")";
      } else {
        return "('" + prop + "' in " + obj + ")";
      }
    },
    has_: function has_(obj, prop, computed) {
      // return this.hasOwnProperty_(obj, prop, computed)

      // here is what I changed in fork
      // in original library, the pareser can only parse properties which is own properties, this make it impossible to read from prototype
      // so I changed it
      return this.hasProperty_(obj, prop, computed);
    },
    and_: function and_(expr1, expr2) {
      return "(" + expr1 + ") && (" + expr2 + ")";
    },
    not: function not(expression) {
      return "!(" + expression + ")";
    },
    isNull: function isNull(expression) {
      return expression + "==null";
    },
    notNull: function notNull(expression) {
      return expression + "!=null";
    },
    nonComputedMember: function nonComputedMember(left, right) {
      var SAFE_IDENTIFIER = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;
      var UNSAFE_CHARACTERS = /[^$_a-zA-Z0-9]/g;
      var expr = "";
      if (SAFE_IDENTIFIER.test(right)) {
        expr = left + "." + right;
      } else {
        right = right.replace(UNSAFE_CHARACTERS, this.stringEscapeFn);
        expr = left + '["' + right + '"]';
      }
      return expr;
    },
    unsafeComputedMember: function unsafeComputedMember(left, right) {
      return left + "[" + right + "]";
    },
    unsafeNonComputedMember: function unsafeNonComputedMember(left, right) {
      return this.nonComputedMember(left, right);
    },
    computedMember: function computedMember(left, right) {
      if (this.state.computing === "assign") {
        return this.unsafeComputedMember(left, right);
      }
      // return left + "[" + right + "]";
      return "(" + left + ".hasOwnProperty(" + right + ") ? " + left + "[" + right + "] : null)";
    },
    unsafeMember: function unsafeMember(left, right, computed) {
      if (computed) return this.unsafeComputedMember(left, right);
      return this.unsafeNonComputedMember(left, right);
    },
    member: function member(left, right, computed) {
      if (computed) return this.computedMember(left, right);
      return this.nonComputedMember(left, right);
    },
    getStringValue: function getStringValue(item) {
      this.assign(item, "getStringValue(" + item + ")");
    },
    lazyRecurse: function lazyRecurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
      var self = this;
      return function () {
        self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck);
      };
    },
    lazyAssign: function lazyAssign(id, value) {
      var self = this;
      return function () {
        self.assign(id, value);
      };
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function stringEscapeFn(c) {
      return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
    },
    escape: function escape(value) {
      if (isString(value)) return "'" + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (isNumber(value)) return value.toString();
      if (value === true) return "true";
      if (value === false) return "false";
      if (value === null) return "null";
      if (typeof value === "undefined") return "undefined";
      throw $parseMinErr("esc", "IMPOSSIBLE");
    },
    nextId: function nextId(skip, init) {
      var id = "v" + this.state.nextId++;
      if (!skip) {
        this.current().vars.push(id + (init ? "=" + init : ""));
      }
      return id;
    },
    current: function current() {
      return this.state[this.state.computing];
    }
  };

  /**
   * @constructor
   */
  function Parser(lexer, $filter, options) {
    this.lexer = lexer;
    this.$filter = $filter;
    this.options = options;
    this.ast = new AST(lexer, options);
    this.astCompiler = new ASTCompiler(this.ast, $filter);
  }
  ;
  Parser.prototype = {
    constructor: Parser,
    parse: function parse(text) {
      return this.astCompiler.compile(text);
    }
  };

  ///////////////////////////////////

  /**
   * @ngdoc service
   * @name $parse
   * @kind function
   *
   * @description
   *
   * Converts Angular {@link guide/expression expression} into a function.
   *
   * ```js
   *   var getter = $parse('user.name');
   *   var setter = getter.assign;
   *   var context = {user:{name:'angular'}};
   *   var locals = {user:{name:'local'}};
   *
   *   expect(getter(context)).toEqual('angular');
   *   setter(context, 'newValue');
   *   expect(context.user.name).toEqual('newValue');
   *   expect(getter(context, locals)).toEqual('local');
   * ```
   *
   *
   * @param {string} expression String expression to compile.
   * @returns {function(context, locals)} a function which represents the compiled expression:
   *
   *    * `context` – `{object}` – an object against which any expressions embedded in the strings
   *      are evaluated against (typically a scope object).
   *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
   *      `context`.
   *
   *    The returned function also has the following properties:
   *      * `literal` – `{boolean}` – whether the expression's top-level node is a JavaScript
   *        literal.
   *      * `constant` – `{boolean}` – whether the expression is made entirely of JavaScript
   *        constant literals.
   *      * `assign` – `{?function(context, value)}` – if the expression is assignable, this will be
   *        set to a function to change its value on the given context.
   *
   */

  /**
   *
   * @param {object} data
   * @param {object} options
   */
  function ScopeX(data, options) {
    var parserOptions = {
      expensiveChecks: true,
      literals: {
        "true": true,
        "false": false,
        "null": null,
        /*eslint no-undefined: 0*/
        undefined: undefined
        /* eslint: no-undefined: 1  */
      }
    };
    var filters = options && options.filters ? assign({}, options.filters) : {};
    var lexer = new Lexer({});
    var parser = new Parser(lexer, function getFilter(name) {
      return filters[name];
    }, parserOptions);
    var caches = {};

    /**
     * Compiles src and returns a function that executes src on a target object.
     * The compiled function is cached under caches[src] to speed up further calls.
     *
     * @param {string} src
     * @returns {function}
     */
    function compile(src) {
      var cached;
      if (typeof src !== 'string') {
        throw new TypeError('ScopeX need a string, but saw ' + _typeof(src));
      }
      cached = caches[src];
      if (!cached) {
        cached = caches[src] = parser.parse(src);
      }
      return cached;
    }
    this.options = options;
    this.filters = filters;
    this.compile = compile;
    this.data = data ? data : {};
  }
  ScopeX.prototype.filter = function (name, fn) {
    this.filters[name] = fn;
  };
  ScopeX.prototype.parse = function (str) {
    return this.compile(str)(this.data);
  };
  ScopeX.prototype.assign = function (key, value) {
    var ev = this.compile(key);
    ev.assign(this.data, value);
  };
  ScopeX.prototype.interpolate = function (str) {
    var reg = new RegExp('\{\{(.*?)\}\}(?!\})', 'g');
    var matches = str.match(reg);

    // if there is no mustache, return the original string
    if (!matches) {
      return str;
    }
    var $this = this;
    // create a convert function
    function convert(content) {
      var exp = content.trim().slice(2, -2);
      var res = $this.parse(exp);
      return res;
    }
    str = str.replace(reg, convert);
    return str;
  };
  ScopeX.prototype.$new = function (locals) {
    locals = locals || {};
    var data = isAbsObject(locals) ? setPrototypeOf(locals, this.data) : assign({}, locals);
    var scopex = new ScopeX(data, this.options);
    assign(scopex.filters, this.filters);
    return scopex;
  };
  function isAbsObject(value) {
    return value && _typeof(value) === 'object' && value.constructor === Object;
  }
  function hasOwnKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function assign(a, b) {
    for (var i in b) {
      if (hasOwnKey(b, i)) {
        a[i] = b[i];
      }
    }
    return a;
  }
  function setPrototypeOf(obj, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(obj, proto);
    } else {
      obj.__proto__ = proto;
    }
    return obj;
  }
  function uniqueArray(items) {
    return items.reduce(function (res, key) {
      if (res.indexOf(key) > -1) {
        return res;
      }
      res.push(key);
      return res;
    }, []);
  }
  ScopeX.createScope = createScope;

  /**
   * @param {object} scopeVars
   * @param {object[]|string[]} chain
   * @returns new ScopeX()
   */
  function createScope(scopeVars, options) {
    options = options || {};
    var chain = options.chain;
    var opts = assign({}, options);
    delete opts.chain;
    function ensureValue(value, target) {
      if (value && typeof value === 'function') {
        return value.bind(target);
      }
      return value;
    }
    var data = null;
    var deps = [];
    var collecting = false;
    function inheritFrom(child, parent) {
      return new Proxy({}, {
        get: function get(_, key) {
          var keyInChild = key in child;
          var keyInParent = key in parent;
          if (collecting && (keyInChild || keyInParent)) {
            deps.push(key);
          }
          if (keyInChild) {
            return ensureValue(child[key], child);
          }
          if (keyInParent) {
            return ensureValue(parent[key], parent);
          }
        },
        set: function set(_, key, value) {
          if (key in child) {
            child[key] = value;
          } else if (key in parent) {
            parent[key] = value;
          } else {
            child[key] = value;
          }
          return true;
        },
        deleteProperty: function deleteProperty() {
          return false;
        },
        has: function has(_, key) {
          if (key in child) {
            return true;
          }
          if (key in parent) {
            return true;
          }
          return false;
        },
        ownKeys: function ownKeys() {
          var keys = [];
          for (var key in child) {
            keys.push(key);
          }
          for (key in parent) {
            if (keys.indexOf(key) > -1) {
              continue;
            }
            keys.push(key);
          }
          return keys;
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
          return {
            enumerable: true,
            configurable: true
          };
        }
      });
    }
    if (chain) {
      data = new Proxy({}, {
        get: function get(_, key) {
          for (var i = 0, len = chain.length; i < len; i++) {
            var item = chain[i];
            var isObj = _typeof(item) === 'object';
            var attr = isObj ? item.key : item;
            var env = scopeVars[attr];
            if (!env) {
              continue;
            }
            var vars = isObj && item.getter ? item.getter(env) : env;
            if (key in vars) {
              if (collecting) {
                deps.push(key);
              }
              var value = ensureValue(vars[key], vars);
              return value;
            }
          }
        },
        set: function set(_, key, value) {
          var bottom;
          for (var i = 0, len = chain.length; i < len; i++) {
            var item = chain[i];
            var isObj = _typeof(item) === 'object';
            var attr = isObj ? item.key : item;
            var env = scopeVars[attr];
            if (!env) {
              continue;
            }
            var vars = isObj && item.getter ? item.getter(env) : env;
            if (!bottom) {
              bottom = vars;
            }
            if (key in vars) {
              if (isObj && item.setter) {
                item.setter(key, value, vars, env);
              } else {
                vars[key] = value;
              }
              return true;
            }
          }
          if (bottom) {
            bottom[key] = value;
          }
          return true;
        },
        deleteProperty: function deleteProperty() {
          return false;
        },
        has: function has(_, key) {
          for (var i = 0, len = chain.length; i < len; i++) {
            var item = chain[i];
            var isObj = _typeof(item) === 'object';
            var attr = isObj ? item.key : item;
            var env = scopeVars[attr];
            if (!env) {
              continue;
            }
            var vars = isObj && item.getter ? item.getter(env) : env;
            if (key in vars) {
              return true;
            }
          }
          return false;
        },
        ownKeys: function ownKeys() {
          var keys = [];
          for (var i = 0, len = chain.length; i < len; i++) {
            var item = chain[i];
            var isObj = _typeof(item) === 'object';
            var attr = isObj ? item.key : item;
            var env = scopeVars[attr];
            if (!env) {
              continue;
            }
            var vars = isObj && item.getter ? item.getter(env) : env;
            for (var key in vars) {
              keys.push(key);
            }
          }
          var fkeys = uniqueArray(keys);
          return fkeys;
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
          return {
            enumerable: true,
            configurable: true
          };
        }
      });
    } else {
      data = inheritFrom({}, scopeVars);
    }
    var scope = new ScopeX(data, opts);
    if (chain) {
      scope.vars = scopeVars;
      Object.defineProperty(scope, '$new', {
        value: function value(locals) {
          var sub = setPrototypeOf(locals, scopeVars);
          return createScope(sub, options);
        }
      });
    } else {
      Object.defineProperty(scope, '$new', {
        value: function value(locals) {
          var sub = inheritFrom(locals, data);
          return createScope(sub, options);
        }
      });
    }
    var parse = scope.parse.bind(scope);
    Object.defineProperty(scope, 'parse', {
      value: function value(exp, fn) {
        if (fn) {
          collecting = true;
        }
        var res = parse(exp);
        if (fn) {
          fn(uniqueArray(deps));
          deps.length = 0;
          collecting = false;
        }
        return res;
      }
    });
    return scope;
  }
  return ScopeX;
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getOuterHTML */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNodeAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createAttrsText; });
/* unused harmony export tryParseJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getNodeName; });
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function getOuterHTML(el) {
  var nodeName = el.nodeName.toLowerCase();
  var attrs = _toConsumableArray(el.attributes).map(function (a) {
    if (a.value === '') {
      return a.name;
    } else if (a.value.indexOf('"') > -1) {
      return "".concat(a.name, "='").concat(a.value, "'");
    } else {
      return "".concat(a.name, "=\"").concat(a.value, "\"");
    }
  }).join(' ');
  var str = "<".concat(nodeName, " ").concat(attrs, "></").concat(nodeName, ">");
  return str;
}
function getNodeAttrs(el) {
  var attributes = el.attributes || [];
  var oAttrs = _toConsumableArray(attributes);
  var attrs = {};
  oAttrs.forEach(function (node) {
    var name = node.name,
      value = node.value;
    attrs[name] = value;
  });
  return attrs;
}
function createAttrsText(attrs) {
  var attrsTexts = [];
  Object(ts_fns__WEBPACK_IMPORTED_MODULE_0__[/* each */ "b"])(attrs, function (value, key) {
    attrsTexts.push("".concat(key, "=\"").concat(value, "\""));
  });
  var attrsText = attrsTexts.join(' ');
  return attrsText;
}
function tryParseJSON(v, callback) {
  try {
    var value = JSON.parse(v);
    return value;
  } catch (e) {
    return callback(v);
  }
}
function getPath($element, $root) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var $parent = $element.parent();
  if (!$parent.length) {
    return null;
  }
  var findIndex = function findIndex($parent, $child) {
    var children = $parent[0].childNodes;
    var child = $child[0];
    var index = 0;
    for (var i = 0, len = children.length; i < len; i++) {
      var item = children[i];
      if (item.nodeName === child.nodeName) {
        index++;
      }
      if (item === child) {
        return index;
      }
    }
  };
  var index = findIndex($parent, $element);
  var name = $element[0].nodeName.toLowerCase();
  var path = ["".concat(name, ":nth-of-type(").concat(index, ")")];
  var level = 0;
  while ($parent[0] !== $root[0]) {
    var _$element = $parent;
    $parent = $parent.parent();
    if (!$parent.length) {
      return null;
    }
    var _index = findIndex($parent, _$element);
    var _name = _$element[0].nodeName.toLowerCase();
    path.unshift("".concat(_name, ":nth-of-type(").concat(_index, ")"));
    level++;
    if (level > 20) {
      throw new Error('Cant get $element path in given $root.');
    }
  }
  var items = [].concat(prefix).concat(path);
  return '>' + items.join('>');
}
function camelCase(str) {
  var items = str.split(/\W|_/).filter(function (item) {
    return !!item;
  });
  var texts = items.map(function (item, i) {
    if (i === 0) {
      return item;
    }
    return item.replace(item[0], item[0].toUpperCase());
  });
  return texts.join('');
}
function parseKey(str) {
  var matched = str.match(/([a-zA-Z0-9_$]+)(\((.*?)\))?/);
  var _matched = _slicedToArray(matched, 4),
    name = _matched[1],
    _params = _matched[3];
  var params = Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* isString */ "m"])(_params) ? _params.split(',').map(function (item) {
    return item.trim();
  }).filter(function (item) {
    return !!item;
  }) : void 0;
  return [name, params];
}
function getNodeName(node) {
  return node.nodeName.toLowerCase();
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clone */
/* unused harmony export extend */
/* unused harmony export merge */
/* unused harmony export stringify */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getObjectHash; });
/* unused harmony export define */
/* unused harmony export flat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return each; });
/* unused harmony export map */
/* unused harmony export filter */
/* unused harmony export iterate */
/* unused harmony export find */
/* unused harmony export extract */
/* unused harmony export freeze */
/* unused harmony export createReactive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createProxy; });
/* unused harmony export isProxy */
/* unused harmony export refineProxy */
/* unused harmony export getSymbolContent */
/* unused harmony export toEntries */
/* unused harmony export fromEntries */
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _syntax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




/**
 * @param {any} obj
 */
function clone(obj) {
  var parents = [];
  var _clone = function clone(origin) {
    if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(origin) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(origin)) {
      return origin;
    }
    var result = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(origin) ? [] : {};
    var keys = Object.keys(origin);
    parents.push({
      origin: origin,
      result: result
    });
    var _loop = function _loop() {
      var key = keys[i];
      var value = origin[key];
      var referer = parents.find(function (item) {
        return item.origin === value;
      });
      if (referer) {
        result[key] = referer.result;
      } else {
        result[key] = _clone(value);
      }
    };
    for (var i = 0, len = keys.length; i < len; i++) {
      _loop();
    }
    return result;
  };
  var result = _clone(obj);
  return result;
}

/**
 * Deep extend an object
 * @param {object} obj1
 * @param {object} obj2
 * @param {0|1|2} [mixArr] 0: extend array as object, 1: push into array, 2: replace all items
 * @returns {object}
 */
function extend(obj1, obj2) {
  var mixArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var exists = [];
  var _extend = function extend(obj1, obj2) {
    each(obj2, function (value, key) {
      var originalValue = obj1[key];

      // check whether extended
      var exist = exists.find(function (item) {
        return item.e === value;
      });
      if (exist) {
        if (originalValue === exist.o) {
          return;
        }
        if (!originalValue || _typeof(originalValue) !== 'object') {
          obj1[key] = exist.o;
          return;
        }
      }
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(originalValue)) {
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(value) || Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(value)) {
          _extend(originalValue, value, mixArr);
        } else {
          obj1[key] = value;
        }
      } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(originalValue)) {
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(value)) {
          if (mixArr === 0 || mixArr === 1) {
            _extend(originalValue, value, mixArr);
          } else if (mixArr === 2) {
            originalValue.length = 0;
            _extend(originalValue, value, mixArr);
          } else {
            obj1[key] = value;
          }
        } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(value)) {
          if (mixArr === 0) {
            _extend(originalValue, value, mixArr);
          } else if (mixArr === 1) {
            originalValue.push.apply(originalValue, _toConsumableArray(value));
          } else if (mixArr === 2) {
            originalValue.length = 0;
            originalValue.push.apply(originalValue, _toConsumableArray(value));
          } else {
            obj1[key] = value;
          }
        } else {
          obj1[key] = value;
        }
      } else {
        obj1[key] = value;
      }
    });

    // record this pair
    exists.push({
      o: obj1,
      // original
      e: obj2 // extend by this
    });
    return obj1;
  };
  return _extend(obj1, obj2);
}

/**
 * @param {object} obj1
 * @param {object} obj2
 * @param {boolean} [concatArray]
 * @returns {object}
 */
function merge(obj1, obj2) {
  var concatArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  obj1 = clone(obj1);
  if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj2) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(obj2)) {
    return Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj1) && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(obj1) ? obj1 : null;
  }
  obj2 = clone(obj2);
  if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj1) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(obj1)) {
    return Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj2) && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(obj2) ? obj2 : null;
  }
  var exists = [];
  var _merge = function merge(obj1, obj2) {
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj1)) {
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj2) && concatArray) {
        return [].concat(_toConsumableArray(obj1), _toConsumableArray(obj2));
      }
    }
    var result = obj1;
    var keys = Object.keys(obj2);
    keys.forEach(function (key) {
      var oldValue = obj1[key];
      var newValue = obj2[key];
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(newValue) || Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(newValue)) {
        var index = exists.indexOf(newValue);
        if (index === -1) {
          exists.push(newValue);
        } else if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(oldValue) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(oldValue)) {
          result[key] = newValue;
          return;
        }
      }
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(newValue) || Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(newValue)) {
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(oldValue) || Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(oldValue)) {
          result[key] = _merge(oldValue, newValue);
        } else {
          result[key] = newValue;
        }
      } else {
        result[key] = newValue;
      }
    });
    return result;
  };
  return _merge(obj1, obj2);
}

/**
 * @param {object} obj
 * @returns {string}
 */
function stringify(obj) {
  var exists = [obj];
  var used = [];
  var _stringifyObjectByKeys = function stringifyObjectByKeys(obj) {
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj)) {
      var items = obj.map(function (item) {
        if (item && _typeof(item) === 'object') {
          return _stringifyObjectByKeys(item);
        } else {
          return JSON.stringify(item);
        }
      });
      var _str = '[' + items.join(',') + ']';
      return _str;
    }
    var str = '{';
    var keys = Object.keys(obj);
    var total = keys.length;
    keys.sort();
    keys.forEach(function (key, i) {
      var value = obj[key];
      str += key + ':';
      if (value && _typeof(value) === 'object') {
        var index = exists.indexOf(value);
        if (index > -1) {
          str += '#' + index;
          used.push(index);
        } else {
          exists.push(value);
          var num = exists.length - 1;
          str += '#' + num + _stringifyObjectByKeys(value);
        }
      } else {
        str += JSON.stringify(value);
      }
      if (i < total - 1) {
        str += ',';
      }
    });
    str += '}';
    return str;
  };
  var str = _stringifyObjectByKeys(obj);
  exists.forEach(function (item, i) {
    if (!used.includes(i)) {
      str = str.replace(new RegExp(":#".concat(i), 'g'), ':');
    }
  });
  if (used.includes(0)) {
    str = '#0' + str;
  }
  return str;
}

/**
 * @param {object} obj
 * @returns {string}
 */
function getObjectHash(obj) {
  if (_typeof(obj) !== 'object') {
    return;
  }
  var str = stringify(obj);
  var hash = Object(_string_js__WEBPACK_IMPORTED_MODULE_0__[/* getStringHash */ "a"])(str);
  return hash;
}

/**
 * @param {object} obj
 * @param {string} key
 * @param {object|function} value
 * @returns {object}
 */
function define(obj, key, value) {
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(value)) {
    return Object.defineProperty(obj, key, {
      get: value
    });
  } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(value)) {
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* hasOwnKey */ "a"])(value, 'enumerable') || Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* hasOwnKey */ "a"])(value, 'configurable')) {
      return Object.defineProperty(obj, key, value);
    } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(value.set) && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(value.get)) {
      return Object.defineProperty(obj, key, value);
    } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* hasOwnKey */ "a"])(value, 'value')) {
      return Object.defineProperty(obj, key, value);
    } else {
      return Object.defineProperty(obj, key, {
        value: value
      });
    }
  } else {
    return Object.defineProperty(obj, key, {
      value: value
    });
  }
}

/**
 * @param {object|array} obj
 * @param {function} [determine]
 * @returns {object}
 */
function flat(obj, determine) {
  var _flat = function flat(input) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(input)) {
      input.forEach(function (item, i) {
        return _flat(item, "".concat(path, "[").concat(i, "]"), result);
      });
      return result;
    } else if (input && _typeof(input) === 'object' && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFile */ "g"])(input) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isDate */ "e"])(input)) {
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(determine) && !determine(input)) {
        result[path] = input;
        return result;
      }
      each(input, function (value, key) {
        _flat(value, !path ? key : "".concat(path, "[").concat(key, "]"), result);
      });
      return result;
    } else {
      result[path] = input;
      return result;
    }
  };
  return _flat(obj);
}

/**
 * @param {object|array} obj
 * @param {function} fn
 * @param {boolean} descriptor
 * @returns {object|array}
 */
function each(obj, fn, descriptor) {
  var withDescriptor = function withDescriptor() {
    var descriptors = Object.getOwnPropertyDescriptors(obj);
    var keys = Object.keys(descriptors);
    keys.forEach(function (key) {
      var descriptor = descriptors[key];
      var get = descriptor.get,
        set = descriptor.set,
        enumerable = descriptor.enumerable,
        configurable = descriptor.configurable,
        writable = descriptor.writable;
      if (enumerable || get || set || configurable && writable) {
        fn(descriptor, key, obj);
      }
    });
  };
  var withIterator = function withIterator() {
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj)) {
      obj.forEach(fn);
    } else {
      var keys = Object.keys(obj);
      keys.forEach(function (key) {
        var value = obj[key];
        fn(value, key, obj);
      });
    }
  };
  return descriptor ? withDescriptor() : withIterator();
}

/**
 * @param {object|array} obj
 * @param {function} fn
 * @returns {object}
 */
function map(obj, fn) {
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj)) {
    return obj.map(fn);
  } else {
    var result = {};
    each(obj, function (value, key) {
      result[key] = fn(value, key, obj);
    });
    return result;
  }
}

/**
 * @param {object|array} obj
 * @param {function} fn
 * @returns {object}
 */
function filter(obj, fn) {
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj)) {
    return obj.filter(fn);
  } else {
    var result = {};
    each(obj, function (value, key) {
      var bool = fn(value, key, obj);
      if (!bool) {
        return;
      }
      result[key] = value;
    });
    return result;
  }
}

/**
 * @param {object|array} obj
 * @param {function} fn
 */
function iterate(obj, fn) {
  if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(obj)) {
    for (var i = 0, len = obj.length; i < len; i++) {
      var item = obj[i];
      var res = fn(item, i, obj);
      if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "o"])(res)) {
        return res;
      }
    }
  } else {
    var keys = Object.keys(obj);
    for (var _i = 0, _len = keys.length; _i < _len; _i++) {
      var _key = keys[_i];
      var value = obj[_key];
      var _res = fn(value, _key, obj);
      if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "o"])(_res)) {
        return _res;
      }
    }
  }
}

/**
 * @param {object|array} obj
 * @param {function} fn
 */
function find(obj, fn) {
  return iterate(obj, function (value, key) {
    var res = fn(value, key, obj);
    if (res) {
      return value;
    }
  });
}

/**
 * @param {object} obj
 * @param {array} keys
 * @returns {object}
 */
function extract(obj, keys) {
  var results = {};
  keys.forEach(function (key) {
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* hasOwnKey */ "a"])(obj, key)) {
      results[key] = obj[key];
    }
  });
  return results;
}

/**
 * deep freeze
 * @param {object} o
 * @returns {object}
 */
function freeze(o) {
  if (!Object.freeze) {
    return o;
  }
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    var v = o[prop];
    if (Object.prototype.hasOwnProperty.call(o, prop) && v !== null && (_typeof(v) === 'object' || typeof v === 'function') && !Object.isFrozen(v)) {
      freeze(v);
    }
  });
  return o;
}

/**
 * create a reactive object.
 * it will change your original data
 * @param {object|array} origin
 * @param {object} options
 * @param {function} options.get to modify output value of each node, receive (keyPath, reactiveValue), reactiveValue is a reactive object/array as if, keyPath is an array which catains keys in path
 * @param {function} options.set to modify input value of each node, receive (keyPath, nextValue), nextValue is the given passed value, the return value will be transformed to be reactive object/array as if
 * @param {function} options.dispatch to notify change with keyPath, receive (keypath, next, prev), it will be called after value is set into
 * @param {function} options.writable whether be able to change value, return false to disable writable, default is true
 * @param {function} options.disable return true to disable create nest reactive on this node
 * @returns {object|array}
 * @example
 * const some = {
 *   body: {
 *     hand: true,
 *     foot: true,
 *   },
 * }
 * const a = createReactive(some, {
 *   get(keyPath, value) {
 *     if (keyPath.join('.') === 'body.hand') {
 *       return value.toString()
 *     }
 *     else {
 *       return value
 *     }
 *   },
 *   set(keyPath, value) {},
 *   dispatch({
 *     keyPath,
 *     value, // receive value
 *     input, // getter output
 *     next, // created reactive
 *     prev, // current reactive
 *   }, force) {},
 * })
 *
 * a !== some // reactive object !== object
 * a.body !== some.body // reactive object !== object
 * a.body.hand !== some.body.hand // true !== 'true'
 * a.body.foot == some.body.foot // true == true
 *
 * a.body.hand = false // now a.body.hand is 'false', a string
 * some.body.hand === false // original data changed
 */
function createReactive(origin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _get = options.get,
    set = options.set,
    del = options.del,
    dispatch = options.dispatch,
    writable = options.writable,
    disable = options.disable,
    receive = options.receive;
  var create = function create(origin) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(origin) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(origin)) {
      return origin;
    }
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(disable) && disable(parents, origin)) {
      return origin;
    }
    var output = null;
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(origin)) {
      output = createObject(origin, parents);
    } else {
      output = createArray(origin, parents);
    }
    return output;
  };
  var createObject = function createObject(origin) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var media = {};
    var reactive = {};
    var setValue = function setValue(key, value, trigger) {
      var keyPath = [].concat(_toConsumableArray(parents), [key]);
      if (Object.isFrozen(origin)) {
        var _active = create(value, keyPath);
        return _active;
      }
      var prev = origin[key];
      var invalid = media[key];
      var input = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(set) ? set(keyPath, value) : value;
      var active;
      var next;
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(key, media) && (value === prev || value === invalid || input === prev || input === invalid)) {
        // origin property is changed any where else
        if ((_typeof(prev) !== 'object' || prev === null) && prev !== invalid) {
          next = prev;
          active = prev;
        } else if (invalid && _typeof(invalid) === 'object' && invalid.$$_ORIGIN !== prev) {
          next = prev;
          active = create(prev, keyPath);
        } else {
          next = prev;
          active = invalid;
        }
      } else {
        next = input;
        active = create(next, keyPath);
      }
      origin[key] = next;
      media[key] = active;
      if (trigger && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
        dispatch({
          keyPath: keyPath,
          value: value,
          next: next,
          active: active,
          prev: prev,
          invalid: invalid
        });
      }
      return active;
    };
    var delValue = function delValue(key, trigger) {
      var keyPath = [].concat(_toConsumableArray(parents), [key]);
      var prev = origin[key];
      var invalid = media[key];
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(del)) {
        del(keyPath);
      }
      delete reactive[key];
      delete media[key];
      delete origin[key];
      if (trigger && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
        var none = void 0;
        dispatch({
          keyPath: keyPath,
          value: none,
          next: none,
          active: none,
          prev: prev,
          invalid: invalid
        }, Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "o"])(prev));
      }
    };
    var put = function put(key, value, trigger) {
      var keyPath = [].concat(_toConsumableArray(parents), [key]);
      Object.defineProperty(reactive, key, {
        get: function get() {
          var active = media[key];
          var output = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_get) ? _get(keyPath, active) : active;
          return output;
        },
        set: function set(value) {
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
            receive(keyPath, value);
          }
          if (Object.isFrozen(origin)) {
            return media[key];
          }
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath, value)) {
            return media[key];
          }
          var descriptor = Object.getOwnPropertyDescriptor(media, key);
          if (descriptor) {
            if (!('value' in descriptor)) {
              if ('set' in descriptor) {
                origin[key] = value;
              }
              return value;
            }
            if (!descriptor.writable) {
              return descriptor.value;
            }
          }
          var active = setValue(key, value, true);
          return active;
        },
        enumerable: true,
        configurable: true
      });

      // initialize the current value at the first time
      var active = setValue(key, value, trigger);
      return active;
    };
    each(origin, function (descriptor, key) {
      if ('value' in descriptor) {
        var value = descriptor.value;
        put(key, value);
      } else {
        Object.defineProperty(media, key, descriptor);
      }
    }, true);
    Object.defineProperties(reactive, {
      $get: {
        value: function value(key) {
          return reactive[key];
        }
      },
      $set: {
        value: function value(key, _value) {
          var keyPath = [].concat(_toConsumableArray(parents), [key]);
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
            receive(keyPath, _value);
          }
          if (Object.isFrozen(origin)) {
            return media[key];
          }
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath)) {
            return media[key];
          }
          var descriptor = Object.getOwnPropertyDescriptor(media, key);
          if (descriptor) {
            if (!('value' in descriptor)) {
              if ('set' in descriptor) {
                origin[key] = _value;
              }
              return _value;
            }
            if (!descriptor.writable) {
              return descriptor.value;
            }
          }
          var active = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(key, reactive) ? setValue(key, _value, true) : put(key, _value, true);
          return active;
        }
      },
      $del: {
        value: function value(key) {
          var keyPath = [].concat(_toConsumableArray(parents), [key]);
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
            receive(keyPath);
          }
          if (Object.isFrozen(origin)) {
            return false;
          }
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath)) {
            return false;
          }
          var descriptor = Object.getOwnPropertyDescriptor(media, key);
          if (!descriptor) {
            return false;
          }
          if (!descriptor.configurable) {
            return false;
          }
          delValue(key, true);
          return true;
        }
      },
      $$_ORIGIN: {
        get: function get() {
          return origin;
        }
      }
    });
    return reactive;
  };
  var createArray = function createArray(origin) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var media = [];
    var reactive = [];
    var setValue = function setValue(i, value, trigger) {
      var keyPath = [].concat(_toConsumableArray(parents), [i]);
      if (Object.isFrozen(origin)) {
        var _active2 = create(value, keyPath);
        return _active2;
      }
      var prev = origin[i];
      var invalid = media[i];
      var input = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(set) ? set(keyPath, value) : value;
      var active;
      var next;
      if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(i, media) && (value === prev || value === invalid || input === prev || input === invalid)) {
        // origin property is changed any where else
        if ((_typeof(prev) !== 'object' || prev === null) && prev !== invalid) {
          next = prev;
          active = prev;
        } else if (invalid && _typeof(invalid) === 'object' && invalid.$$_ORIGIN !== prev) {
          next = prev;
          active = create(prev, keyPath);
        } else {
          next = prev;
          active = invalid;
        }
      } else {
        next = input;
        active = create(next, keyPath);
      }
      origin[i] = next;
      media[i] = active;
      if (trigger && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
        dispatch({
          keyPath: keyPath,
          value: value,
          next: next,
          active: active,
          prev: prev,
          invalid: invalid
        });
      }
      return active;
    };

    // fill items into output array
    // start and end, where to start and end
    // items, original data to use
    var shuffle = function shuffle(start, end) {
      var _loop2 = function _loop2(i) {
        var keyPath = [].concat(_toConsumableArray(parents), [i]);
        Object.defineProperty(reactive, i, {
          get: function get() {
            var active = media[i];
            var output = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_get) ? _get(keyPath, active) : active;
            return output;
          },
          set: function set(value) {
            if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath, value)) {
              return media[i];
            }
            var descriptor = Object.getOwnPropertyDescriptor(media, i);
            if (descriptor) {
              if (!('value' in descriptor)) {
                if ('set' in descriptor) {
                  origin[i] = value;
                }
                return value;
              }
              if (!descriptor.writable) {
                return descriptor.value;
              }
            }
            var active = setValue(i, value, true);
            return active;
          },
          enumerable: true,
          configurable: true
        });

        // initialize
        setValue(i, origin[i]);
      };
      for (var i = start; i <= end; i++) {
        _loop2(i);
      }

      // make sure the no use items are removed
      if (media.length > origin.length) {
        media.length = origin.length;
      }
      if (reactive.length > media.length) {
        reactive.length = media.length;
      }
    };

    // change array prototype methods
    var modify = function modify(fn) {
      return {
        value: function value() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var nonAs = function nonAs() {
            if (fn === 'push' || fn === 'unshift') {
              return media.length;
            } else if (fn === 'splice') {
              return [];
            } else if (fn === 'shift') {
              return media[0];
            } else if (fn === 'pop') {
              return media[media.length - 1];
            } else if (fn === 'insert' || fn === 'remove') {
              return -1;
            } else {
              return media;
            }
          };
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
            receive(parents, origin, fn, args);
          }
          if (Object.isFrozen(origin)) {
            return nonAs();
          }
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(parents, origin)) {
            return nonAs();
          }

          // a hook to modify args for array push, shift inputs
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(fn, options) && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(options[fn])) {
            var res = options[fn](parents, args);
            // when return false, it means don't change the value
            if (res === false) {
              return nonAs();
            }
            // when return array, use it as new args
            if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(res)) {
              args = res;
            }
            // when return object, switch to another method
            else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(res)) {
              var to = res.to,
                newArgs = res.args;
              fn = to;
              args = newArgs;
            }
          }
          var output = null;

          // deal with original data
          var operate = function operate() {
            var before = origin.length;
            output = Array.prototype[fn].apply(origin, args);
            var after = origin.length;
            return [after, before];
          };
          if (fn === 'push') {
            var _operate = operate(),
              _operate2 = _slicedToArray(_operate, 2),
              after = _operate2[0],
              before = _operate2[1];
            output = after;
            media.length = after;
            reactive.length = after;
            shuffle(before - 1, after - 1);
          } else if (fn === 'unshift') {
            var _operate3 = operate(),
              _operate4 = _slicedToArray(_operate3, 1),
              _after = _operate4[0];
            output = _after;
            media.length = _after;
            reactive.length = _after;
            shuffle(0, _after - 1);
          } else if (fn === 'splice') {
            var _operate5 = operate(),
              _operate6 = _slicedToArray(_operate5, 1),
              _after2 = _operate6[0];
            var _args = args,
              _args2 = _toArray(_args),
              start = _args2[0],
              len = _args2[1],
              items = _arrayLikeToArray(_args2).slice(2);
            output = media.slice(start, start + len);
            media.length = _after2;
            reactive.length = _after2;
            if (!items.length) {
              shuffle(start, _after2 - 1);
            } else if (len === items.length) {
              shuffle(start, start + len - 1);
            } else {
              shuffle(start, _after2 - 1);
            }
          } else if (fn === 'shift') {
            var _operate7 = operate(),
              _operate8 = _slicedToArray(_operate7, 1),
              _after3 = _operate8[0];
            output = media[0];
            media.length = _after3;
            reactive.length = _after3;
            shuffle(0, _after3 - 1);
          } else if (fn === 'pop') {
            var _operate9 = operate(),
              _operate0 = _slicedToArray(_operate9, 1),
              _after4 = _operate0[0];
            output = media[media.length - 1];
            media.length = _after4;
            reactive.length = _after4;
          } else if (fn === 'fill') {
            var _operate1 = operate(),
              _operate10 = _slicedToArray(_operate1, 2),
              _before = _operate10[1];
            var _args3 = args,
              _args4 = _slicedToArray(_args3, 3),
              _args4$ = _args4[1],
              _start = _args4$ === void 0 ? 0 : _args4$,
              _args4$2 = _args4[2],
              end = _args4$2 === void 0 ? _before : _args4$2;
            output = media;
            shuffle(_start, end - 1);
          } else if (fn === 'insert') {
            if (args.length < 1) {
              return -1;
            } else if (args.length < 2) {
              var _args5 = args,
                _args6 = _slicedToArray(_args5, 1),
                item = _args6[0];
              output = origin.length;
              Array.prototype.push.call(origin, item);
              shuffle(output, output);
            } else {
              var _args7 = args,
                _args8 = _slicedToArray(_args7, 2),
                _item = _args8[0],
                _before2 = _args8[1];
              var beforeIndex = Object(_syntax_js__WEBPACK_IMPORTED_MODULE_2__[/* decideby */ "a"])(function () {
                var mediaIndex = media.indexOf(_before2);
                if (mediaIndex > -1) {
                  return mediaIndex;
                }
                var originIndex = origin.indexOf(_before2);
                return originIndex;
              });
              if (beforeIndex < 0) {
                return -1;
              }
              Array.prototype.splice.call(origin, beforeIndex, 0, _item);
              shuffle(beforeIndex, origin.length - 1);
              output = beforeIndex;
            }
          } else if (fn === 'remove') {
            if (args.length < 1) {
              return -1;
            } else {
              var _args9 = args,
                _args0 = _slicedToArray(_args9, 1),
                _item2 = _args0[0];
              var index = Object(_syntax_js__WEBPACK_IMPORTED_MODULE_2__[/* decideby */ "a"])(function () {
                var mediaIndex = media.indexOf(_item2);
                if (mediaIndex > -1) {
                  return mediaIndex;
                }
                var originIndex = origin.indexOf(_item2);
                return originIndex;
              });
              if (index < 0) {
                return index;
              }
              Array.prototype.splice.call(origin, index, 1);
              Array.prototype.splice.call(media, index, 1);
              shuffle(index, origin.length - 1);
              output = index;
            }
          } else {
            operate();
            output = media;
          }
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
            dispatch({
              keyPath: parents,
              value: origin,
              next: origin,
              active: reactive,
              prev: origin,
              invalid: reactive,
              fn: fn,
              result: output
            }, true);
          }
          return output;
        }
      };
    };
    Object.defineProperties(reactive, {
      push: modify('push'),
      unshift: modify('unshift'),
      splice: modify('splice'),
      pop: modify('pop'),
      shift: modify('shift'),
      sort: modify('sort'),
      reverse: modify('reverse'),
      fill: modify('fill'),
      insert: modify('insert'),
      remove: modify('remove'),
      $$_ORIGIN: {
        get: function get() {
          return origin;
        }
      }
    });
    shuffle(0, origin.length - 1);
    return reactive;
  };
  var output = create(origin);
  return output;
}
var ProxySymbol = Symbol('Proxy');
/**
 * create a proxy object.
 * it will change your original data
 * @param {object|array} origin
 * @param {object} options
 * @param {function} options.get to modify output value of each node, receive (keyPath, proxiedValue), proxiedValue is a reactive object/array as if, keyPath is an array which catains keys in path
 * @param {function} options.set to modify input value of each node, receive (keyPath, nextValue), nextValue is the given passed value, the return value will be transformed to be reactive object/array as if
 * @param {function} options.dispatch to notify change with keyPath, receive (keypath, next, prev), it will be called after value is set into
 * @param {function} options.writable whether be able to change value, return false to disable writable, default is true
 * @returns {Proxy}
 * @example
 * const some = {
 *   body: {
 *     hand: true,
 *     foot: true,
 *   },
 * }
 * const a = createProxy(some, {
 *   get(keyPath, value) {
 *     if (keyPath.join('.') === 'body.hand') {
 *       return value.toString()
 *     }
 *     else {
 *       return value
 *     }
 *   },
 *   set(keyPath, value) {},
 *   dispatch(keyPath, next, current) {},
 * })
 *
 * a !== some // proxy object !== object
 * a.body !== some.body // proxy object !== object
 * a.body.hand !== some.body.hand // true !== 'true'
 * a.body.foot == some.body.foot // true == true
 *
 * a.body.hand = false // now a.body.hand is 'false', a string
 * some.body.hand === false // some.body.hand changes to false
 */
function createProxy(origin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _get2 = options.get,
    _set = options.set,
    del = options.del,
    dispatch = options.dispatch,
    writable = options.writable,
    disable = options.disable,
    receive = options.receive,
    extensible = options.extensible,
    enumerable = options.enumerable;
  var create = function create(origin) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(origin) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(origin)) {
      return origin;
    }
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(disable) && disable(parents, origin)) {
      return origin;
    }
    var output = null;
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(origin)) {
      output = createObject(origin, parents);
    } else {
      output = createArray(origin, parents);
    }
    return output;
  };
  var createObject = function createObject(origin) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var media = {};
    var proxy = new Proxy(media, {
      get: function get(target, key, receiver) {
        // get original property value
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key) && key === ProxySymbol) {
          return origin;
        }

        // primitive property
        // such as 'a' + obj, and obj[Symbol.toPrimitive](hint) defined
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key) && getSymbolContent(key).indexOf('Symbol.') === 0) {
          return Reflect.get(target, key, receiver);
        }
        var active = Reflect.get(target, key, receiver);

        // here should be noticed
        // a Symbol key will not to into `get` option function
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_get2) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key)) {
          var keyPath = [].concat(_toConsumableArray(parents), [key]);
          var _output = _get2(keyPath, active);
          return _output;
        } else {
          return active;
        }
      },
      set: function set(target, key, value, receiver) {
        var keyPath = [].concat(_toConsumableArray(parents), [key]);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
          receive(keyPath, value);
        }
        if (Object.isFrozen(origin)) {
          return true;
        }
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath, value)) {
          return true;
        }
        var descriptor = Object.getOwnPropertyDescriptor(media, key);
        if (descriptor) {
          if (!('value' in descriptor)) {
            if ('set' in descriptor) {
              origin[key] = value;
            }
            return true;
          }
          if (!descriptor.writable) {
            return true;
          }
        }
        var prev = origin[key];
        var invalid = media[key];
        var input = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_set) ? _set(keyPath, value) : value;
        var active;
        var next;
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(key, media) && (value === prev || value === invalid || input === prev || input === invalid)) {
          next = prev;
          active = invalid;
        } else {
          next = input;
          active = create(next, keyPath);
        }
        origin[key] = next;
        Reflect.set(target, key, active, receiver);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
          dispatch({
            keyPath: keyPath,
            value: value,
            next: next,
            active: active,
            prev: prev,
            invalid: invalid
          });
        }
        return true;
      },
      deleteProperty: function deleteProperty(target, key) {
        var keyPath = [].concat(_toConsumableArray(parents), [key]);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
          receive(keyPath);
        }
        if (Object.isFrozen(origin)) {
          return true;
        }
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath)) {
          return true;
        }
        var descriptor = Object.getOwnPropertyDescriptor(media, key);
        if (!descriptor) {
          return true;
        }
        if (!descriptor.configurable) {
          return true;
        }
        var prev = origin[key];
        var invalid = media[key];
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(del) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key)) {
          del(keyPath);
        }
        delete origin[key];
        Reflect.deleteProperty(target, key);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
          var none = undefined;
          dispatch({
            keyPath: keyPath,
            value: none,
            next: none,
            active: none,
            prev: prev,
            invalid: invalid
          }, !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "o"])(prev));
        }
        return true;
      },
      has: function has(target, key) {
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(enumerable)) {
          var keyPath = [].concat(_toConsumableArray(parents), [key]);
          return enumerable(keyPath);
        }
        return key in target;
      },
      isExtensible: function isExtensible() {
        var keyPath = _toConsumableArray(parents);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(extensible)) {
          return extensible(keyPath);
        }
        return true;
      }
    });
    each(origin, function (descriptor, key) {
      if ('value' in descriptor) {
        var value = descriptor.value;
        var keyPath = [].concat(_toConsumableArray(parents), [key]);
        if (Object.isFrozen(origin)) {
          media[key] = create(value, keyPath);
        } else {
          var needRewrite = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_set) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key);
          var next = needRewrite ? _set(keyPath, value) : value;
          if (needRewrite) {
            origin[key] = next;
          }
          media[key] = create(next, keyPath);
        }
      } else {
        Object.defineProperty(media, key, descriptor);
      }
    }, true);
    return proxy;
  };
  var createArray = function createArray(origin) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var media = [];
    var proxy = new Proxy(media, {
      get: function get(target, key, receiver) {
        // get original property value
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key) && key === ProxySymbol) {
          return origin;
        }

        // primitive property
        // such as 'a' + obj, and obj[Symbol.toPrimitive](hint) defined
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key) && getSymbolContent(key).indexOf('Symbol.') === 0) {
          return Reflect.get(target, key, receiver);
        }

        // array primitive operation
        var methods = [
        // the following 3 lines will change the array's length
        // the following 1 line will return the new length
        'push', 'unshift',
        // the following 1 line will return the spliced items array
        'splice',
        // the following 1 line will return the removed item value
        'shift', 'pop',
        // the following 1 line will return the changed original array
        'sort', 'reverse', 'fill',
        // provided method
        'insert', 'remove'];
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inArray */ "b"])(key, methods)) {
          return function () {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            var nonAs = function nonAs() {
              if (key === 'push' || key === 'unshift') {
                return origin.length;
              } else if (key === 'splice') {
                return [];
              } else if (key === 'shift') {
                return media[0];
              } else if (key === 'pop') {
                return media[origin.length - 1];
              } else if (key === 'insert') {
                return -1;
              } else {
                return media;
              }
            };
            if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
              receive(parents, origin, key, args);
            }
            if (Object.isFrozen(origin)) {
              return nonAs();
            }
            if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(parents, origin)) {
              return nonAs();
            }

            // a hook to modify args for array push, shift inputs
            if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(key, options) && Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(options[key])) {
              var res = options[key](parents, args);
              // when return false, it means don't change the value
              if (res === false) {
                return nonAs();
              }
              // when return array, use it as new args
              if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(res)) {
                args = res;
              }
              // when return object, switch to another method
              else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ "l"])(res)) {
                var to = res.to,
                  newArgs = res.args;
                key = to;
                args = newArgs;
              }
            }
            var max = origin.length;
            var output = null;

            // create sub children
            if (key === 'push') {
              // change original data
              Array.prototype[key].apply(origin, args);
              var medias = args.map(function (item, i) {
                var index = max + i;
                return create(item, [].concat(_toConsumableArray(parents), [index]));
              });
              output = Array.prototype.push.apply(media, medias);
            } else if (key === 'splice') {
              // change original data
              Array.prototype[key].apply(origin, args);
              var _args1 = args,
                _args10 = _toArray(_args1),
                start = _args10[0],
                len = _args10[1],
                items = _arrayLikeToArray(_args10).slice(2);
              if (!items.length) {
                output = Array.prototype.splice.call(media, start, len);
              } else if (len === items.length) {
                var _medias = items.map(function (item, i) {
                  var index = start + i;
                  return create(item, [].concat(_toConsumableArray(parents), [index]));
                });
                var params = [start, len].concat(_toConsumableArray(_medias));
                output = Array.prototype.splice.apply(media, params);
              }
              // the ones which are right in media will be changed
              else {
                output = media.slice(start, start + len);
                var _items = origin.slice(start);
                var _medias2 = _items.map(function (item, i) {
                  var index = start + i;
                  return create(item, [].concat(_toConsumableArray(parents), [index]));
                });
                var _params = [start, origin.length].concat(_toConsumableArray(_medias2));
                Array.prototype.splice.apply(media, _params);
              }
            } else if (key === 'fill') {
              // change original data
              Array.prototype[key].apply(origin, args);
              var _args11 = args,
                _args12 = _slicedToArray(_args11, 3),
                item = _args12[0],
                _args12$ = _args12[1],
                _start2 = _args12$ === void 0 ? 0 : _args12$,
                _args12$2 = _args12[2],
                end = _args12$2 === void 0 ? max : _args12$2;
              var _items2 = [];
              for (var i = _start2; i < end; i++) {
                _items2.push(create(item, [].concat(_toConsumableArray(parents), [i])));
              }
              var _params2 = [_start2, end - _start2, _items2];
              Array.prototype.splice.apply(media, _params2);
              output = media;
            } else if (key === 'insert') {
              if (args.length < 1) {
                return -1;
              } else if (args.length < 2) {
                var _args13 = args,
                  _args14 = _slicedToArray(_args13, 1),
                  _item3 = _args14[0];
                output = origin.length;
                Array.prototype.push.call(origin, _item3);
                Array.prototype.push.call(media, _item3);
              } else {
                var _args15 = args,
                  _args16 = _slicedToArray(_args15, 2),
                  _item4 = _args16[0],
                  before = _args16[1];
                var beforeIndex = Object(_syntax_js__WEBPACK_IMPORTED_MODULE_2__[/* decideby */ "a"])(function () {
                  var mediaIndex = media.indexOf(before);
                  if (mediaIndex > -1) {
                    return mediaIndex;
                  }
                  var originIndex = origin.indexOf(before);
                  return originIndex;
                });
                if (beforeIndex < 0) {
                  return -1;
                }
                Array.prototype.splice.call(origin, beforeIndex, 0, _item4);
                Array.prototype.splice.call(media, beforeIndex, 0, _item4);
                output = beforeIndex;
              }
            } else if (key === 'remove') {
              var _args17 = args,
                _args18 = _slicedToArray(_args17, 1),
                _item5 = _args18[0];
              var index = Object(_syntax_js__WEBPACK_IMPORTED_MODULE_2__[/* decideby */ "a"])(function () {
                var mediaIndex = media.indexOf(_item5);
                if (mediaIndex > -1) {
                  return mediaIndex;
                }
                var originIndex = origin.indexOf(_item5);
                return originIndex;
              });
              if (index < 0) {
                return index;
              }
              Array.prototype.splice.call(origin, index, 1);
              Array.prototype.splice.call(media, index, 1);
              output = index;
            } else {
              // change original data
              Array.prototype[key].apply(origin, args);
              output = Array.prototype[key].apply(media, args);
            }
            if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
              dispatch({
                keyPath: parents,
                value: origin,
                next: origin,
                active: proxy,
                prev: origin,
                invalid: proxy,
                fn: key,
                result: output
              }, true);
            }
            return output;
          };
        }
        var keyPath = [].concat(_toConsumableArray(parents), [key]);
        var active = Reflect.get(target, key, receiver);

        // here should be noticed
        // a Symbol key will not to into `get` option function
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_get2) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key)) {
          var _output2 = _get2(keyPath, active);
          return _output2;
        } else {
          return active;
        }
      },
      set: function set(target, key, value, receiver) {
        var keyPath = [].concat(_toConsumableArray(parents), [key]);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
          receive(keyPath, value);
        }
        if (Object.isFrozen(origin)) {
          return true;
        }
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath, value)) {
          return true;
        }
        var descriptor = Object.getOwnPropertyDescriptor(media, key);
        if (descriptor) {
          if (!('value' in descriptor)) {
            if ('set' in descriptor) {
              origin[key] = value;
            }
            return true;
          }
          if (!descriptor.writable) {
            return true;
          }
        }

        // operate like media.length = 0
        if (key === 'length') {
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(parents, origin)) {
            return true;
          }
          origin.length = value;
          media.length = value;
          if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
            dispatch({
              keyPath: parents,
              value: origin,
              next: origin,
              prev: origin,
              active: proxy
            }, true);
          }
          return true;
        }
        var prev = origin[key];
        var invalid = media[key];
        var input = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_set) ? _set(keyPath, value) : value;
        var active;
        var next;
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inObject */ "c"])(key, media) && (value === prev || value === invalid || input === prev || input === invalid)) {
          next = prev;
          active = invalid;
        } else {
          next = input;
          active = create(next, keyPath);
        }
        origin[key] = next;
        Reflect.set(target, key, active, receiver);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
          dispatch({
            keyPath: keyPath,
            value: value,
            next: next,
            active: active,
            prev: prev,
            invalid: invalid
          });
        }
        return true;
      },
      deleteProperty: function deleteProperty(target, key) {
        var keyPath = [].concat(_toConsumableArray(parents), [key]);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(receive)) {
          receive(keyPath);
        }
        if (Object.isFrozen(origin)) {
          return true;
        }
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(writable) && !writable(keyPath)) {
          return true;
        }
        var descriptor = Object.getOwnPropertyDescriptor(media, key);
        if (!descriptor) {
          return true;
        }
        if (!descriptor.configurable) {
          return true;
        }
        var prev = origin[key];
        var invalid = media[key];
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(del) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(key)) {
          del(keyPath);
        }
        delete origin[key];
        Reflect.deleteProperty(target, key);
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(dispatch)) {
          var none = undefined;
          dispatch({
            keyPath: keyPath,
            value: none,
            next: none,
            active: none,
            prev: prev,
            invalid: invalid
          }, !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isUndefined */ "o"])(prev));
        }
        return true;
      },
      has: function has(target, key) {
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* inArray */ "b"])(key, ['remove', 'insert'])) {
          return true;
        }
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(enumerable)) {
          var keyPath = [].concat(_toConsumableArray(parents), [key]);
          return enumerable(keyPath);
        }
        return key in target;
      },
      isExtensible: function isExtensible() {
        if (Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(extensible)) {
          var keyPath = _toConsumableArray(parents);
          return extensible(keyPath);
        }
        return true;
      }
    });
    each(origin, function (descriptor, i) {
      if ('value' in descriptor) {
        var value = descriptor.value;
        var keyPath = [].concat(_toConsumableArray(parents), [i]);
        if (Object.isFrozen(origin)) {
          media[i] = create(value, keyPath);
        } else {
          var needRewrite = Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunction */ "h"])(_set) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_1__[/* isSymbol */ "n"])(i);
          var next = needRewrite ? _set(keyPath, value) : value;
          if (needRewrite) {
            origin[i] = next;
          }
          media[i] = create(next, keyPath);
        }
      } else {
        Object.defineProperty(media, key, descriptor);
      }
    }, true);
    return proxy;
  };
  var output = create(origin);
  return output;
}

/**
 * determine whether an object is a Proxy
 * @param {any} value
 * @returns {boolean}
 */
function isProxy(value) {
  return !!(value && value[ProxySymbol]);
}

/**
 * refine the original value from a Proxy
 * @param {object} obj
 * @returns {any}
 */
function refineProxy(obj) {
  return obj ? obj[ProxySymbol] : void 0;
}

/**
 * get the string of a symbol
 * @param {symbol} symb
 * @returns {string}
 */
function getSymbolContent(symb) {
  if (symb.description) {
    return symb.description;
  }
  var str = symb.toString();
  return str.substring(7, str.length - 1);
}

/**
 * convert an object to an entry array
 * @param {object} obj
 * @returns {array[]}
 */
function toEntries(obj) {
  var keys = Object.keys(obj);
  return keys.map(function (key) {
    return [key, obj[key]];
  });
}

/**
 * conver an entry/key-value array to an object
 * @param {array[] | object[]} entries
 * @param {boolean} kv
 * @returns {object}
 */
function fromEntries(entries) {
  var kv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var obj = {};
  entries.forEach(function (item) {
    if (kv) {
      var _key4 = item.key,
        value = item.value;
      obj[_key4] = value;
    } else {
      var _item6 = _slicedToArray(item, 2),
        _key5 = _item6[0],
        _value2 = _item6[1];
      obj[_key5] = _value2;
    }
  });
  return obj;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isUndefined; });
/* unused harmony export isNull */
/* unused harmony export isNullish */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isSymbol; });
/* unused harmony export isFinite */
/* unused harmony export isInfinite */
/* unused harmony export isBoolean */
/* unused harmony export isNumeric */
/* unused harmony export isBlob */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isFile; });
/* unused harmony export isFormData */
/* unused harmony export isEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isFunction; });
/* unused harmony export isConstructor */
/* unused harmony export isTruthy */
/* unused harmony export isFalsy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEqual; });
/* unused harmony export isLt */
/* unused harmony export isLte */
/* unused harmony export isGt */
/* unused harmony export isGte */
/* unused harmony export isPromise */
/* unused harmony export isInstanceOf */
/* unused harmony export isInheritedOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return inObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasOwnKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inArray; });
/* unused harmony export isShallowEqual */
/* unused harmony export isOneInArray */
/* unused harmony export isAllInArray */
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


/**
 * @param {any} value
 * @returns {boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNull(value) {
  return value === null;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNullish(value) {
  return isUndefined(value) || isNull(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNone(value) {
  return isNullish(value) || isNaN(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isObject(value) {
  return value && _typeof(value) === 'object' && value.constructor === Object;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isDate(value) {
  return isInstanceOf(value, Date);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNaN(value) {
  return typeof value === 'number' && Number.isNaN(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isSymbol(value) {
  return _typeof(value) === 'symbol';
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isFinite(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isInfinite(value) {
  return typeof value === 'number' && !Number.isNaN(value) && !Number.isFinite(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isBoolean(value) {
  return value === true || value === false;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isNumeric(value) {
  return isString(value) && /^\-{0,1}[0-9]+\.{0,1}([0-9]+){0,1}$/.test(value);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isBlob(value) {
  return isInstanceOf(value, Blob) || value && typeof value.size === 'number' && typeof value.type === 'string';
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isFile(value) {
  return isInstanceOf(value, File) || isBlob(value) && (_typeof(value.lastModifiedDate) === 'object' || typeof value.lastModified === 'number') && typeof value.name === 'string';
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isFormData(value) {
  return isInstanceOf(value, FormData);
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isEmpty(value) {
  if (isNone(value) || value === '' || isNaN(value)) {
    return true;
  } else if (isArray(value)) {
    return value.length === 0;
  } else if (isObject(value)) {
    return Object.getOwnPropertyNames(value).length === 0;
  } else {
    return false;
  }
}

/**
 * @param {any} value
 * @param {boolean} [isStrict] where Constructor is to return false
 * @returns {boolean}
 */
function isFunction(value, isStrict) {
  if (typeof value !== 'function') {
    return false;
  }
  return isStrict ? !isConstructor(value, 2) : true;
}

/**
 * judge whether a value is a Constructor
 * @param {any} f
 * @param {number} [strict] strict level
 * - 4: should must be one of native code, native class
 * - 3: can be babel transformed class
 * - 2: can be some function whose prototype has more than one properties
 * - 1: can be some function which has this inside
 * - 0: can be some function which has prototype
 * @returns {boolean}
 */
function isConstructor(f, strict) {
  if (typeof f !== 'function') {
    return false;
  }
  if (f === Symbol) {
    return false;
  }

  // bond function && arrow function
  if (!f.prototype) {
    return false;
  }
  var entire = f + '';
  var fnBody = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}")).trim();

  // native class definition
  var isNativeClass = entire.indexOf('class ') === 0;
  // std lib: String, Number...
  var isNativeSTD = fnBody === "[native code]";
  var level4 = isNativeClass || isNativeSTD;
  if (strict >= 4) {
    return level4;
  }
  var topCtx = fnBody.replace(/function.*?\{.*?\}/gm, '').replace(/return/gm, '').replace(/\n+/gm, ';').replace(/\s+/gm, '').replace(/;;/gm, ';');
  // babel transformed class, begin with '_classCallCheck(this,', may by minified by compile tool
  var isBabelTransformedClass = /^_classCallCheck\(this,/.test(topCtx);
  // @babel/plugin-transform-runtime '(0, _classCallCheck2["default"])(this,'
  var isBabelRuntimeTransformedClass = /^\(.*?_classCallCheck.*?\)\(this,/.test(topCtx);
  // webpack minified
  var isBabelTransformedMinifiedClass = /^[0-9a-zA-Z_;!?:]*?\(this,/.test(topCtx);
  var level3 = level4 || isBabelTransformedClass || isBabelRuntimeTransformedClass || isBabelTransformedMinifiedClass;
  if (strict == 3) {
    return level3;
  }

  // there are some properties on f.prototype
  var protos = Object.getOwnPropertyDescriptors(f.prototype);
  var keys = Object.keys(protos).filter(function (item) {
    return item !== 'constructor';
  });
  var hasProtos = !!keys.length;
  var level2 = level3 || hasProtos;
  if (strict == 2) {
    return level2;
  }

  // function() { this.name = 'xx' }
  var hasThisInside = topCtx.indexOf('this.') === 0 || topCtx.indexOf(';this.') > -1 || topCtx.indexOf('=this;') > -1;
  var level1 = level2 || hasThisInside;
  if (strict == 1) {
    return level1;
  }
  return true;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isTruthy(value) {
  return !!value;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isFalsy(value) {
  return !value;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isEqual(val1, val2) {
  var equal = function equal(obj1, obj2) {
    var keys1 = Object.getOwnPropertyNames(obj1);
    var keys2 = Object.getOwnPropertyNames(obj2);
    var keys = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__[/* unionArray */ "c"])(keys1, keys2);
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i];
      if (!inArray(key, keys1)) {
        return false;
      }
      if (!inArray(key, keys2)) {
        return false;
      }
      var value1 = obj1[key];
      var value2 = obj2[key];
      if (!isEqual(value1, value2)) {
        return false;
      }
    }
    return true;
  };
  if (isObject(val1) && isObject(val2)) {
    return equal(val1, val2);
  } else if (isArray(val1) && isArray(val2)) {
    return equal(val1, val2);
  } else {
    return val1 === val2;
  }
}

/**
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function isLt(a, b) {
  return a < b;
}

/**
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function isLte(a, b) {
  return a <= b;
}

/**
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function isGt(a, b) {
  return a > b;
}

/**
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
function isGte(a, b) {
  return a >= b;
}

/**
 * @param {any} value
 * @returns {boolean}
 */
function isPromise(value) {
  return isInstanceOf(value, Promise) || value && (_typeof(value) === 'object' || typeof value === 'function') && typeof value.then === 'function';
}

/**
 * @param {any} value
 * @param {any} Constructor
 * @param {boolean} [isStrict]
 * @returns {boolean}
 */
function isInstanceOf(value, Constructor, isStrict) {
  if (!value || _typeof(value) !== 'object') {
    return false;
  }
  if (isStrict) {
    return value.constructor === Constructor;
  } else {
    return value instanceof Constructor;
  }
}

/**
 * @param {any} SubConstructor
 * @param {any} Constructor
 * @param {boolean} [isStrict]
 * @returns {boolean}
 */
function isInheritedOf(SubConstructor, Constructor, isStrict) {
  if (typeof SubConstructor !== 'function') {
    return false;
  }
  var ins = SubConstructor.prototype;
  if (!ins) {
    return false;
  }
  return isInstanceOf(ins, Constructor, isStrict);
}

/**
 * check wether a property is the given object's own property,
 * it will check:
 * - only string properties (except symbol properties, different from hasOwnKey),
 * - only enumerable properties;
 * @param {string} key
 * @param {object} obj
 * @param {boolean} [own] use hasOwnKey to check
 * @returns {boolean}
 */
function inObject(key, obj, own) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }
  if (own) {
    return hasOwnKey(obj, key);
  }
  return _typeof(key) !== 'symbol' && Object.prototype.propertyIsEnumerable.call(obj, key);
}

/**
 * check wether a property is the given object's own property,
 * as default, it will check:
 * - both string and symbol properties (different from inObject),
 * - both enumerable and non-enumerable properties;
 * @param {object|array} obj
 * @param {string} key
 * @param {boolean} [enumerable]
 * @returns {boolean}
 */
function hasOwnKey(obj, key) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * @param {any} item
 * @param {array} arr
 * @returns {boolean}
 */
function inArray(item, arr) {
  return isArray(arr) && arr.includes(item);
}

/**
 * @param {object} objA
 * @param {object} objB
 * @param {number} deepth how many deepth to check
 */
function isShallowEqual(objA, objB, deepth) {
  if (objA === objB) {
    return true;
  }

  // not object. number, string, boolean, null
  if (!(_typeof(objA) === 'object' && objA !== null) || !(_typeof(objB) === 'object' && objB !== null)) {
    return false;
  }

  // object vs. array
  if ([objA, objB].filter(function (item) {
    return isArray(item);
  }).length === 1) {
    return false;
  }
  var keysA = Object.keys(objA).sort();
  var keysB = Object.keys(objB).sort();
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (var i = 0; i < keysA.length; i++) {
    var keyA = keysA[i];
    var keyB = keysB[i];
    if (keyA !== keyB) {
      return false;
    }
    var key = keyA;
    if (objA[key] !== objB[key]) {
      if (deepth && _typeof(objA[key]) === 'object' && _typeof(objB[key]) === 'object') {
        if (!isShallowEqual(objA[key], objB[key], deepth - 1)) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
}
function isOneInArray(items, arr) {
  return arr.some(function (one) {
    return items.includes(one);
  });
}
function isAllInArray(items, arr) {
  return !arr.some(function (one) {
    return !items.includes(one);
  });
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unionArray; });
/* unused harmony export interArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return diffArray; });
/* unused harmony export compArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return uniqueArray; });
/* unused harmony export sortArray */
/* unused harmony export toArray */
/* unused harmony export flatArray */
/* unused harmony export groupArray */
/* unused harmony export splitArray */
/* unused harmony export joinArray */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/**
 * @template T
 * @param {T} value
 * @param {number} [count]
 * @returns {T[]}
 */
function createArray(value) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return [].fill.call(new Array(count), value);
}

/**
 * @param {array} a
 * @param {array} b
 * @returns {array}
 */
function unionArray(a, b) {
  return a.concat(b.filter(function (v) {
    return !Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* inArray */ "b"])(v, a);
  }));
}

/**
 * @param {array} a
 * @param {array} b
 * @returns {array}
 */
function interArray(a, b) {
  return a.filter(function (v) {
    return b.includes(v);
  });
}

/**
 * @param {array} a
 * @param {array} b
 * @returns {array}
 */
function diffArray(a, b) {
  return a.filter(function (v) {
    return !b.includes(v);
  });
}

/**
 * @param {array} a
 * @param {array} b
 * @returns {array}
 */
function compArray(a, b) {
  var diffa = diffArray(a, b);
  var diffb = diffArray(b, a);
  return diffa.concat(diffb);
}

/**
 * @param {array} arr
 * @param {string} [prop] unique by which property
 * @returns {array}
 */
function uniqueArray(arr, prop) {
  var exists = [];
  return arr.filter(function (item) {
    if (prop) {
      var value = item[prop];
      if (exists.includes(value)) {
        return false;
      } else {
        exists.push(value);
        return true;
      }
    } else {
      if (exists.includes(item)) {
        return false;
      } else {
        exists.push(item);
        return true;
      }
    }
  });
}

/**
 * @param {array} items
 * @param {string} [by] which property sort by
 * @param {boolean} [decs]
 * @returns {array}
 */
function sortArray(items, by) {
  var decs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var res = [].concat(items);
  res.sort(function (a, b) {
    var oa = by ? a[by] : a;
    var ob = by ? b[by] : b;
    oa = !Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isNaN */ "i"])(+oa) ? +oa : Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "m"])(oa) ? oa : 10;
    ob = !Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isNaN */ "i"])(+ob) ? +ob : Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "m"])(ob) ? ob : 10;
    if (oa < ob) {
      return decs ? 1 : -1;
    }
    if (oa === ob) {
      return 0;
    }
    if (oa > ob) {
      return decs ? -1 : 1;
    }
  });
  return res;
}

/**
 * @param {any} arr
 * @returns {array}
 */
function toArray(arr) {
  return Array.from(arr);
}

/**
 * @param {any[][]} arr
 * @returns {any[]}
 */
function flatArray(arr) {
  var res = [];
  arr.forEach(function (item) {
    var items = Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(item) ? item : [item];
    res.push.apply(res, _toConsumableArray(items));
  });
  return res;
}

/**
 * slice an array into [count] sub-array
 * @param {array} arr
 * @param {number} count
 * @returns {array[]}
 */
function groupArray(arr, count) {
  var results = [];
  arr.forEach(function (item, i) {
    var index = parseInt(i / count);
    results[index] = results[index] || [];
    results[index].push(item);
  });
  return results;
}

/**
 * split an array to sevral
 * @param {array} arr
 * @param {*|function} split
 * @returns {array[]}
 * @ts_declare function splitArray(arr: any[], split: any | ((item: any, i: number) => boolean)): any[]
 */
function splitArray(arr, split) {
  var results = [];
  var temp = [];
  arr.forEach(function (item, i) {
    if (split === item || Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "h"])(split) && split(item, i)) {
      results.push(temp);
      temp = [];
    } else {
      temp.push(item);
      if (i === arr.length - 1) {
        results.push(temp);
      }
    }
  });
  return results;
}

/**
 * @param {any[][]} arr
 * @param {any} join
 * @returns {any[]}
 */
function joinArray(arr, join) {
  var results = [];
  arr.forEach(function (items) {
    results.push.apply(results, _toConsumableArray(items).concat([join]));
  });
  return results;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAllChars */
/* unused harmony export formatString */
/* unused harmony export padLeft */
/* unused harmony export padRight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStringHash; });
/* unused harmony export createRandomString */
/* unused harmony export interpolate */
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


// the order could never be changed, becuase we use it for number convertion
function getAllChars() {
  return '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
}

/**
 * @param {string} input
 * @param {string} separator
 * @param {array} segments
 * @param {boolean} alignright
 * @returns {string}
 */
function formatString(input, separator, segments, alignright) {
  if (typeof input !== 'string' || !input) {
    return '';
  }
  if (typeof separator !== 'string' || !separator) {
    return input;
  }
  if (!segments) {
    return input;
  }
  var letters = input.split('');
  if (alignright) {
    letters.reverse();
  }
  var points = Array.isArray(segments) ? [].concat(segments) : [segments];
  var result = [];
  var count = points[0];
  for (var i = 0, len = letters.length; i < len; i++) {
    if (typeof segments === 'number') {
      if (i > 0 && i % count === 0) {
        result.push(separator);
      }
    } else if (Array.isArray(segments) && points.length) {
      if (i > 0 && i % count === 0) {
        result.push(separator);
        points.shift();
        count += points.length ? points[0] : 0;
      }
    }
    var _char = letters[i];
    result.push(_char);
  }
  if (alignright) {
    result.reverse();
  }
  var output = result.join('');
  return output;
}

/**
 * @param {string} str
 * @param {number} len
 * @param {boolean} pad
 * @returns {string}
 */
function padLeft(str, len, pad) {
  if (str.length >= len) {
    return str;
  }
  var diff = len - str.length;
  var letters = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__[/* createArray */ "a"])(pad, diff);
  return letters.join('') + str;
}

/**
 * @param {string} str
 * @param {number} len
 * @param {boolean} pad
 * @returns {string}
 */
function padRight(str, len, pad) {
  if (str.length >= len) {
    return str;
  }
  var diff = len - str.length;
  var letters = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__[/* createArray */ "a"])(pad, diff);
  return str + letters.join('');
}

/**
 * @param {string} str
 * @returns {string}
 */
function getStringHash(str) {
  var hash = 5381;
  var i = str.length;
  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }
  return hash >>> 0;
}

/**
 * @param {number} len
 * @returns {string}
 */
function createRandomString() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var CHARS = getAllChars();
  var text = '';
  for (var i = 0; i < len; i++) {
    text += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return text;
}

// https://github.com/gillesruppert/node-interpolate/blob/master/lib/interpolate.js
/**
 * @param {string} template
 * @param {object} data
 * @param {object} [opts]
 * @returns {string}
 */
function interpolate(template, data, opts) {
  var regex,
    lDel,
    rDel,
    delLen,
    lDelLen,
    delimiter,
    // For escaping strings to go in regex
    regexEscape = /([$\^\\\/()|?+*\[\]{}.\-])/g;
  opts = opts || {};
  delimiter = opts.delimiter || '{}';
  delLen = delimiter.length;
  lDelLen = Math.ceil(delLen / 2);
  // escape delimiters for regex
  lDel = delimiter.substr(0, lDelLen).replace(regexEscape, "\\$1");
  rDel = delimiter.substr(lDelLen, delLen).replace(regexEscape, "\\$1") || lDel;

  // construct the new regex
  regex = new RegExp(lDel + "[^" + lDel + rDel + "]+" + rDel, "g");
  return template.replace(regex, function (placeholder) {
    var key = placeholder.slice(lDelLen, -lDelLen),
      keyParts = key.split("."),
      val,
      i = 0,
      len = keyParts.length;
    if (key in data) {
      // need to be backwards compatible with "flattened" data.
      val = data[key];
    } else {
      // look up the chain
      val = data;
      for (; i < len; i++) {
        if (keyParts[i] in val) {
          val = val[keyParts[i]];
        } else {
          return placeholder;
        }
      }
    }
    return val;
  });
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decideby; });
/* unused harmony export caseby */
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * get value by using a function
 * @param {function} decide
 * @param {...any} args
 */
function decideby(decide) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return decide.apply(void 0, args);
}

/**
 * get value by different conditions
 * @param {Array<Function,Function>} entries [[condition, getter]]
 */
function caseby(entries) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var _iterator = _createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        cond = _step$value[0],
        get = _step$value[1];
      if (cond.apply(void 0, args)) {
        return get.apply(void 0, args);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMLocalStorage; });
var _VMLocalStorage;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var VMLocalStorage = /*#__PURE__*/_createClass(function VMLocalStorage() {
  _classCallCheck(this, VMLocalStorage);
});
_VMLocalStorage = VMLocalStorage;
_defineProperty(VMLocalStorage, "getKey", function (key) {
  return 'JQVM_ls_' + key;
});
_defineProperty(VMLocalStorage, "getVal", function (key) {
  return JSON.parse(localStorage.getItem(_VMLocalStorage.getKey(key)));
});
_defineProperty(VMLocalStorage, "setVal", function (key, val) {
  val = String(val);
  localStorage.setItem(_VMLocalStorage.getKey(key), JSON.stringify(val));
});
_defineProperty(VMLocalStorage, "reloadJqvmLocalStorage", function (state, status) {
  // user handed some data into storage key
  if (state.storage !== undefined) {
    // get data from const storage
    var stateStorage = Object.assign({}, state.storage);
    Object.keys(stateStorage).forEach(function (name, index) {
      var localStorageValue = _VMLocalStorage.getVal(name);

      // set state from storage if exists and it mount step (pipe)
      if (status === '$mount') {
        _VMLocalStorage.setVal(state.storage[name]);
        var localStoreVal = _VMLocalStorage.getVal(name);
        if (localStoreVal === null || localStoreVal === undefined) {
          _VMLocalStorage.setVal(name, String(state.storage[name]));
        } else {
          state.storage[name] = localStoreVal;
        }
      }

      // local storage empty
      if (localStorageValue === null) {
        _VMLocalStorage.setVal(name, stateStorage[index]);

        // storage have items, load it
      } else {
        if (status === '$change') {
          _VMLocalStorage.setVal(name, state.storage[name]);
        }
      }
    });
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debounce */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttle; });
/**
 * 创建防抖函数
 * @param {function} fn
 * @param {number} wait
 * @param {boolean} [immediate] 是否立即执行函数
 * @returns {function}
 */
function debounce(fn, wait, immediate) {
  var timeout = null;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var callNow = immediate && !timeout;
    var next = function next() {
      timeout = null;
      if (!immediate) {
        fn.apply(_this, args);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
    if (callNow) {
      fn.apply(this, args);
    }
  };
}

/**
 * 创建节流函数
 * @param {function} fn
 * @param {number} wait
 * @param {boolean} [immediate] 是否立即执行
 * @returns {function}
 */
function throttle(fn, wait, immediate) {
  var timeout = null;
  var lastTime = 0;
  return function () {
    var _this2 = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var callNow = immediate && !timeout;
    var nowTime = Date.now();
    var next = function next() {
      timeout = null;
      fn.apply(_this2, args);
    };
    if (timeout || lastTime && nowTime < lastTime + wait) {
      return;
    }
    lastTime = nowTime;
    if (callNow) {
      fn.apply(this, args);
    } else {
      timeout = setTimeout(next, wait);
    }
  };
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shareState; });
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var ts_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);


/**
 *
 * @param {object} initState
 * @param {object} options
 * @param {function} options.onChange invoke when state change
 * @param {function} options.drive drive the state to be changed, i.e. (update) => { setInterval(() => update(state => state.age ++, 1000)) }
 * @returns
 */
function shareState(initState, options) {
  var views = [];
  return function () {
    var view = this;
    if (views.indexOf(view) === -1) {
      views.push(view);
    }
    view.on('$change', function () {
      return function (e, _ref) {
        var keyPath = _ref.keyPath,
          value = _ref.value;
        views.forEach(function (item) {
          if (item === view) {
            if (options && Object(ts_fns__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "h"])(options.onChange)) {
              options.onChange(keyPath, value);
            }
            return;
          }
          item.update(function (state) {
            Object(ts_fns__WEBPACK_IMPORTED_MODULE_1__[/* assign */ "a"])(state, keyPath, value);
          });
        });
      };
    });
    view.on('$destroy', function () {
      views.forEach(function (item, i) {
        if (item === view) {
          views.splice(i, 1);
        }
      });
    });
    if (options && Object(ts_fns__WEBPACK_IMPORTED_MODULE_0__[/* isFunction */ "h"])(options.drive)) {
      options.drive(function (arg) {
        return view.update(arg);
      });
    }
    return initState;
  };
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeKeyChain */
/* unused harmony export makeKeyPath */
/* unused harmony export makeKey */
/* unused harmony export parse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* unused harmony export remove */
/* unused harmony export keyin */
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/**
 * convert a keyPath string to be an array
 * @param {string} path
 * @param {boolean} [isStrict] whether to keep square bracket keys
 * @returns {array}
 */
function makeKeyChain(path, isStrict) {
  var mapping = [];
  var text = path.replace(/\[.*?\]/g, function (matched, position) {
    var index = mapping.length;
    mapping.push(matched);
    return "".concat(position ? '.' : '', "{").concat(index, "}");
  });
  var chain = text.split('.');
  chain.forEach(function (item, i) {
    if (/^\{\d+\}$/.test(item)) {
      var index = item.substring(1, item.length - 1);
      var str = mapping[index];
      var key = isStrict ? str : str.substring(1, str.length - 1);
      chain[i] = key;
    }
  });
  return chain;
}

/**
 * convert an array to be a keyPath string
 * @param {array} chain the array for path, without any symbol in it
 * @param {boolean} [isStrict] wether to use [] to wrap number key
 * @returns {string}
 */
function makeKeyPath(chain, isStrict) {
  // if there is only one item, return the first one
  // this support return a symbol
  if (chain.length === 1) {
    return chain[0];
  }
  var path = '';
  for (var i = 0, len = chain.length; i < len; i++) {
    var key = chain[i];
    // do not support symbols
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isSymbol */ "n"])(key)) {
      var symbol = key.toString();
      path += '[' + symbol + ']';
    }
    // 1
    else if (isStrict && Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isNumber */ "k"])(key)) {
      path += '[' + key + ']';
    }
    // '1'
    else if (isStrict && Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "m"])(key) && /^[0-9]+$/.test(key)) {
      path += '[' + key + ']';
    }
    // '[1]' or '[a]' or '[a.b]'
    else if (isStrict && Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "m"])(key) && /^\[.*\]$/.test(key)) {
      path += key;
    }
    // 'a.b'
    else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "m"])(key) && key.indexOf('.') > -1) {
      path += '[' + key + ']';
    } else {
      path += path ? '.' + key : key;
    }
  }
  return path;
}

/**
 * convert a keyPath array or string to be a keyPath string
 * @param {string|array} keyPath
 * @returns {string}
 */
function makeKey(keyPath) {
  var chain = Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(keyPath) ? keyPath : makeKeyChain(keyPath);
  var key = makeKeyPath(chain);
  return key;
}

/**
 * parse a property's value by its keyPath
 * @param {object|array} obj
 * @param {string|array} key
 */
function parse(obj, key) {
  var chain = Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(key) ? _toConsumableArray(key) : makeKeyChain(key);
  if (!chain.length) {
    return obj;
  }
  var target = obj;
  var _loop = function _loop() {
      // fallback, without error
      if (!target || _typeof(target) !== 'object') {
        return {
          v: void 0
        };
      }
      var key = chain[i];

      // want an array
      if (key === '*') {
        if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(target)) {
          return {
            v: void 0
          };
        }
        if (i + 1 >= len) {
          return {
            v: target
          };
        }
        var restChain = chain.slice(i + 1);
        var items = target.map(function (item) {
          return parse(item, restChain);
        });
        return {
          v: items
        };
      }

      // want a value
      var node = target[key];
      target = node;
    },
    _ret;
  for (var i = 0, len = chain.length; i < len; i++) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return target;
}

/**
 * assign a property's value by its keyPath
 * @param {object|array} obj
 * @param {string|array} key
 * @returns {object|array}
 */
function assign(obj, key, value) {
  var chain = Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(key) ? _toConsumableArray(key) : makeKeyChain(key);
  if (!chain.length) {
    return obj;
  }
  var tail = chain.pop();
  if (!chain.length) {
    obj[tail] = value;
    return obj;
  }
  var target = obj;
  for (var i = 0, len = chain.length; i < len; i++) {
    var current = chain[i];
    var next = chain[i + 1];
    // at the end
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isUndefined */ "o"])(next) && i === len - 1) {
      next = tail;
    }
    if (Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isNumber */ "k"])(next) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(target[current])) {
      target[current] = [];
    } else if (Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "m"])(next) && /^[0-9]+$/.test(next) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(target[current])) {
      target[current] = [];
    } else if (target[current] === null || _typeof(target[current]) !== 'object') {
      target[current] = {};
    }
    target = target[current];
  }
  target[tail] = value;
  return obj;
}

/**
 * remove a property by its keyPath
 * @param {object|array} obj
 * @param {string|array} key
 * @returns {object|array}
 */
function remove(obj, key) {
  var chain = Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(key) ? _toConsumableArray(key) : makeKeyChain(key);
  if (!chain.length) {
    return obj;
  }
  if (chain.length === 1) {
    delete obj[chain[0]];
    return obj;
  }
  var tail = chain.pop();
  var target = parse(obj, chain);
  if (!Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isObject */ "l"])(target) && !Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(target)) {
    return obj;
  }
  delete target[tail];
  return obj;
}

/**
 * check whether a keyPath is in the given object,
 * both string and symbol properties will be checked,
 * as default, it will check:
 *  - both enumerable and non-enumerable properties;
 *  - both own and prototype-chain properties;
 * if enumerable=true, it will check:
 *  - only enumerable properties;
 *  - only own properties;
 * @param {*} key
 * @param {*} obj
 * @param {*} [enumerable]
 * @returns {boolean}
 */
function keyin(key, obj, enumerable) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }
  var chain = Object(_is_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(key) ? _toConsumableArray(key) : makeKeyChain(key);
  if (!chain.length) {
    return false;
  }
  var tail = chain.pop();
  var has = function has(obj, key) {
    return Object.prototype.propertyIsEnumerable.call(obj, key);
  };
  if (!chain.length) {
    return enumerable ? has(obj, tail) : tail in obj;
  }
  var target = obj;
  for (var i = 0, len = chain.length; i < len; i++) {
    var _key = chain[i];
    var node = enumerable ? has(target, _key) ? target[_key] : null : target[_key];
    if (!node || _typeof(node) !== 'object') {
      return false;
    }
    target = node;
  }
  return enumerable ? has(target, tail) : tail in target;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAsyncComponent; });
function createAsyncComponent(defer, callback) {
  var component = null;
  var deferer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!deferer) {
      var view = this.view;
      deferer = defer().then(function (res) {
        if (typeof Symbol !== 'undefined' && res && res[Symbol.toStringTag] === 'Module') {
          component = res["default"];
        } else if (res && res.__esModule) {
          component = res["default"];
        } else {
          component = res;
        }
        if (callback) {
          component = callback.call.apply(callback, [view, component].concat(args)) || component;
        }
        view.update(true);
      });
    }
    return component;
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRouter; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function rewriteHistory(type) {
  var origin = window.history[type];
  return function () {
    var rv = origin.apply(this, arguments);
    var e = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
}
window.history.pushState = rewriteHistory('pushState');
window.history.replaceState = rewriteHistory('replaceState');
var Base = /*#__PURE__*/function () {
  function Base(options) {
    _classCallCheck(this, Base);
    this.events = [];
    var off = this.init(options);
    if (off) {
      this.on('$destroy', off);
    }
  }
  return _createClass(Base, [{
    key: "init",
    value: function init() {}
  }, {
    key: "on",
    value: function on(e, fn) {
      this.events.push({
        e: e,
        fn: fn
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(e, fn) {
      var _this = this;
      this.events.forEach(function (item, i) {
        if (item.e === e && item.fn === fn) {
          _this.events.splice(i, 1);
        }
      });
      return this;
    }
  }, {
    key: "emit",
    value: function emit(e) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this.events.forEach(function (item) {
        if (item.e === e) {
          item.fn.apply(item, args);
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.emit('$destroy');
    }
  }]);
}();
var Navigation = /*#__PURE__*/function (_Base) {
  function Navigation() {
    _classCallCheck(this, Navigation);
    return _callSuper(this, Navigation, arguments);
  }
  _inherits(Navigation, _Base);
  return _createClass(Navigation, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.actionType = '';
      this.latestState = window.history.state;
      var onUrlChanged = function onUrlChanged(e) {
        _this2.actionType = e.type;
        var currentState = _this2.latestState;
        _this2.latestState = window.history.state;
        var nextState = _this2.latestState;
        if (e.type === 'popstate') {
          if ((currentState === null || currentState === void 0 ? void 0 : currentState.prev) === nextState) {
            _this2.actionType = 'back';
          } else if ((currentState === null || currentState === void 0 ? void 0 : currentState.next) === nextState) {
            _this2.actionType = 'forward';
          }
        }
        _this2.emit(_this2.actionType, window.location.href);
        _this2.emit('change', window.location.href);
      };
      var onBeforeUnload = function onBeforeUnload(e) {
        if (_this2.events.some(function (item) {
          return item.e === 'protect';
        })) {
          var prevented = false;
          var resolve = function resolve() {
            return void 0;
          };
          var reject = function reject() {
            return prevented = true;
          };
          _this2.emit('protect', resolve, reject);
          if (prevented) {
            e.preventDefault();
          }
        }
      };
      window.addEventListener('popstate', onUrlChanged);
      window.addEventListener('replaceState', onUrlChanged);
      window.addEventListener('pushState', onUrlChanged);
      window.addEventListener('beforeunload', onBeforeUnload);
      return function () {
        window.removeEventListener('popstate', onUrlChanged);
        window.removeEventListener('replaceState', onUrlChanged);
        window.removeEventListener('pushState', onUrlChanged);
        window.removeEventListener('beforeunload', onBeforeUnload);
      };
    }
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "forward",
    value: function forward() {
      window.history.forward();
    }
  }, {
    key: "push",
    value: function push(url) {
      if (window.location.href === url) {
        return;
      }
      var state = window.history.state;
      var next = {
        prev: state,
        url: url
      };
      window.history.pushState(next, null, url);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var _state$prev;
      if (window.location.href === url) {
        return;
      }
      var state = window.history.state;
      var prev = state === null || state === void 0 || (_state$prev = state.prev) === null || _state$prev === void 0 ? void 0 : _state$prev.state;
      var next = {
        prev: prev,
        url: url
      };
      window.history.replaceState(next, null, url);
    }
  }, {
    key: "open",
    value: function open(url) {
      window.open(url);
    }
  }]);
}(Base);
var navigation = new Navigation();
var Router = /*#__PURE__*/function (_Base2) {
  function Router() {
    _classCallCheck(this, Router);
    return _callSuper(this, Router, arguments);
  }
  _inherits(Router, _Base2);
  return _createClass(Router, [{
    key: "init",
    value: function init(options) {
      var _this3 = this;
      this.options = options;
      this.url = this.getUrl();
      var onChange = function onChange() {
        var _options$baseUri = options.baseUri,
          baseUri = _options$baseUri === void 0 ? '' : _options$baseUri;
        var url = _this3.getUrl();
        var prev = _this3.url;
        _this3.url = url;

        // dont trigger change
        if (prev === url) {
          return;
        }
        var flag = true;
        if (baseUri && url.indexOf(baseUri) !== 0) {
          flag = false;
        }
        if (flag) {
          _this3.emit('change', url);
        }
      };
      navigation.on('change', onChange);
      return function () {
        return navigation.off('change', onChange);
      };
    }
  }, {
    key: "navigate",
    value: function navigate(type, to) {
      var mode = this.options.mode;
      if (mode === 'history') {
        navigation[type](to);
      } else {
        var _window$location = window.location,
          pathname = _window$location.pathname,
          _window$location$sear = _window$location.search,
          search = _window$location$sear === void 0 ? '' : _window$location$sear;
        var url = pathname + search + '#' + to;
        navigation[type](url);
      }
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      var mode = this.options.mode;
      var _window$location2 = window.location,
        hash = _window$location2.hash,
        href = _window$location2.href,
        origin = _window$location2.origin;
      if (mode === 'history') {
        return href.replace(origin, '');
      }
      return hash.replace('#', '') || '/';
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      var url = this.getUrl();
      var _url$split = url.split('?'),
        _url$split2 = _slicedToArray(_url$split, 2),
        pathname = _url$split2[0],
        _url$split2$ = _url$split2[1],
        search = _url$split2$ === void 0 ? '' : _url$split2$;
      var params = {};
      search.split('&').filter(Boolean).forEach(function (item) {
        var _item$split = item.split('='),
          _item$split2 = _slicedToArray(_item$split, 2),
          key = _item$split2[0],
          value = _item$split2[1];
        params[key] = value;
      });
      return {
        pathname: pathname,
        search: search,
        params: params
      };
    }
  }, {
    key: "setParams",
    value: function setParams(params) {
      var _this$getLocation = this.getLocation(),
        pathname = _this$getLocation.pathname,
        query = _this$getLocation.query;
      var next = _objectSpread(_objectSpread({}, query), params);
      var search = Object.keys(next).reduce(function (str, key) {
        var value = next[key];
        var pre = str ? str + '&' : '';
        if (typeof value === 'undefined') {
          return pre + key;
        }
        return pre + key + '=' + value;
      }, '');
      var url = pathname + (search ? '?' + search : '');
      this.navigate('push', url);
    }
  }, {
    key: "isMatch",
    value: function isMatch(uri) {
      var url = this.getUrl();
      if (uri instanceof RegExp) {
        return uri.test(url);
      }
      return url === uri;
    }
  }]);
}(Base);
function createRouter() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mode = options.mode,
    baseUri = options.baseUri;
  var router = new Router({
    mode: mode,
    baseUri: baseUri
  });
  return function () {
    var view = this.view;
    var $route = {};
    Object.defineProperty($route, 'params', {
      get: function get() {
        var _router$getLocation = router.getLocation(),
          params = _router$getLocation.params;
        return params;
      },
      enumerable: true
    });
    view.directive('w-route', function ($el, attrs) {
      var attr = attrs['w-route'];
      var hidden = "<!-- ".concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[/* getNodeName */ "d"])($el[0]), " w-route=\"").concat(attr, "\" (hidden) -->");
      var toMatch = attr;
      if (/^\/.+?\/[a-z]*$/.test(toMatch)) {
        var str = toMatch.substring(1);
        var items = str.split('/');
        var sym = items.pop();
        var exp = items.join('/');
        var reg = new RegExp(exp, sym);
        toMatch = reg;
      }
      if (!(toMatch instanceof RegExp)) {
        toMatch = this.scope.parse(attr);
      }
      if (!router.isMatch(toMatch)) {
        return hidden;
      }
    });
    view.directive('w-navigate', function ($el, attrs) {
      var type = attrs['w-navigate'];
      if (['back', 'forward'].indexOf(type) > -1) {
        if (!$el.attr('href')) {
          $el.attr('href', '#');
        }
      } else if (type === 'open') {
        if ($el.attr('target') !== '_blank') {
          $el.attr('target', '_blank');
        }
      } else {
        if (mode !== 'history') {
          var href = $el.attr('href');
          var url = href.replace(/^#+/, '');
          $el.attr('href', '#' + url);
        }
      }
    }, function ($el, attrs) {
      var type = attrs['w-navigate'] || 'push';
      var navigate = function navigate(e) {
        if (['back', 'forward'].indexOf(type) > -1) {
          e.preventDefault();
          router.navigate(type);
        } else if (['push', 'replace'].indexOf(type) > -1) {
          e.preventDefault();
          var href = $el.attr('href');
          var url = href.replace(/^#+/, '');
          router.navigate(type, url);
        }
      };
      $el.on('click', navigate);
      return function () {
        return $el.off('click', navigate);
      };
    });
    var routerChange = function routerChange() {
      view.emit('$route', router.getUrl());
      view.update(true);
    };
    return {
      $init: function $init(state) {
        view.$router = router;
        state.$route = $route;
        router.on('change', routerChange);
      },
      $destroy: function $destroy() {
        router.off('change', routerChange);
        router.destroy();
      },
      $clone: function $clone(state, clonedView) {
        clonedView.$router = router;
      }
    };
  };
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createWire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $wire; });
/* unused harmony export noopAjax */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var strategies = {
  drop: function drop(serverState, key, incoming) {
    serverState[key] = incoming;
  },
  push: function push(serverState, key, incoming) {
    var current = serverState[key];
    if (Array.isArray(current) && Array.isArray(incoming)) {
      serverState[key] = current.concat(incoming);
    } else {
      serverState[key] = incoming;
    }
  },
  nomerge: function nomerge() {},
  error: function error(serverState, key, incoming, failHandlers) {
    var current = serverState[key];
    var isEmpty = current === null || current === undefined || Array.isArray(current) && current.length === 0 || _typeof(current) === 'object' && !Array.isArray(current) && Object.keys(current).length === 0;
    if (!isEmpty) {
      var err = new Error('wire:error — ключ "' + key + '" уже содержит данные');
      err.strategy = 'error';
      err.key = key;
      failHandlers.forEach(function (fn) {
        fn(err);
      });
      return;
    }
    serverState[key] = incoming;
  },
  // зарезервировано — умный мерж по id для пагинации
  merge: function merge(serverState, key, incoming) {
    var current = serverState[key];
    if (Array.isArray(current) && Array.isArray(incoming)) {
      serverState[key] = current.concat(incoming);
    } else {
      serverState[key] = incoming;
    }
  }
};
function noopAjax() {
  // заглушка когда jQuery недоступен — используется в тестах
  // никогда не резолвится, просто возвращает deferred
  return {
    done: function done() {
      return this;
    },
    fail: function fail() {
      return this;
    },
    always: function always() {
      return this;
    }
  };
}
function defaultAjax(options) {
  if (typeof $ !== 'undefined' && $.ajax) return $.ajax(options);
  throw new Error('$wire: jQuery не найден. Подключите jQuery или передайте ajax в опциях createWire.');
}
function createWire(options) {
  options = options || {};
  var ajaxFn = options.ajax || defaultAjax;
  var csrf = options.csrf || null;
  var pending = {};
  var listeners = {};
  function emit(event) {
    var args = Array.prototype.slice.call(arguments, 1);
    (listeners[event] || []).forEach(function (fn) {
      fn.apply(null, args);
    });
  }
  function on(event, fn) {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(fn);
    return wire;
  }
  function request(method, url, data, strategy) {
    strategy = strategy || 'drop';
    var doneHandlers = [];
    var failHandlers = [];
    var alwaysHandlers = [];
    var hasDone = false;
    var state = null;
    var target = null;
    var chain = {
      to: function to(ref) {
        target = ref;
        return chain;
      },
      // .before(fn) вызывает fn немедленно при регистрации —
      // это позволяет писать .get().before(fn) и fn вызовется до ответа
      before: function before(fn) {
        fn();
        return chain;
      },
      done: function done(fn) {
        hasDone = true;
        doneHandlers.push(fn);
        return chain;
      },
      fail: function fail(fn) {
        failHandlers.push(fn);
        return chain;
      },
      always: function always(fn) {
        alwaysHandlers.push(fn);
        return chain;
      },
      withState: function withState(s) {
        state = s;
        return chain;
      }

      // TODO: затычки для w-wire декларативного сахара
      // _prefetch:   null,
      // _bindView:   null,
      // _watchState: null,
    };
    pending[url] = true;
    emit('$wiring', 'start', url);
    var ajaxOptions = {
      url: url,
      method: method.toUpperCase(),
      headers: {}
    };
    if (csrf) ajaxOptions.headers['X-CSRF-TOKEN'] = csrf;
    if (data && (method === 'post' || method === 'put')) {
      ajaxOptions.data = JSON.stringify(data);
      ajaxOptions.contentType = 'application/json';
    }
    var req = ajaxFn(ajaxOptions);
    req.done(function (responseData) {
      emit('$wiring', 'done', url);

      // если указан .to() — пишем туда напрямую
      if (target !== null) {
        // пишем всё содержимое ответа прямо туда
        if (Array.isArray(target)) {
          target.length = 0;
          responseData.forEach(function (item) {
            target.push(item);
          });
        } else {
          Object.assign(target, responseData);
        }
        doneHandlers.forEach(function (fn) {
          fn(responseData);
        });
        return;
      }

      // авто-мерж всегда
      if (state && state.server && _typeof(responseData) === 'object' && responseData !== null) {
        var strategyFn = strategies[strategy] || strategies.drop;
        Object.keys(responseData).forEach(function (key) {
          strategyFn(state.server, key, responseData[key], failHandlers);
        });
      }

      // .done() просто дополнительный колбэк, не отменяет мерж
      doneHandlers.forEach(function (fn) {
        fn(responseData);
      });
    });
    req.fail(function (jqXHR, textStatus) {
      emit('$wiring', 'fail', url);
      failHandlers.forEach(function (fn) {
        fn(jqXHR, textStatus);
      });
    });
    req.always(function () {
      delete pending[url];
      emit('$wiring', 'always', url);
      alwaysHandlers.forEach(function (fn) {
        fn();
      });
    });
    return chain;
  }

  // $wire()       → true если хоть один запрос активен
  // $wire('/url') → true если этот URL активен
  function wire(url) {
    if (url === undefined) return Object.keys(pending).length > 0;
    return !!pending[url];
  }
  wire.get = function (url, strategy) {
    return request('get', url, null, strategy);
  };
  wire.post = function (url, data, strategy) {
    return request('post', url, data, strategy);
  };
  wire.put = function (url, data, strategy) {
    return request('put', url, data, strategy);
  };
  wire["delete"] = function (url, strategy) {
    return request('delete', url, null, strategy);
  };
  wire.on = on;
  return wire;
}
var $wire = createWire();


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setupModal; });
/* harmony import */ var _wex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * modal.js
 * Bootstrap 5 modal integration — часть Wex-стека.
 *
 * Импортируется как side-effect в index.js:
 *   import './modal.js'
 *
 * Не использует window.$ напрямую — регистрирует директиву через
 * тот же directive() что и весь стек, а $.fn.modal патчится внутри
 * useJQuery() через хук который мы сюда экспортируем.
 */



// ─── $.fn.modal патчится при вызове useJQuery ─────────────────────────────
// Экспортируем функцию-установщик. index.js передаёт её в useJQuery
// или вызывает вручную после useJQuery(jQuery).
// Смотри index.js — там: setupModal($)

function setupModal($) {
  if (!$) return;
  $.fn.modal = function (action, options) {
    return this.each(function () {
      var _getInstance, _getInstance2, _getInstance3, _getInstance4;
      var el = this;
      var bs = window.bootstrap;
      if (!bs) {
        console.warn('[wex-modal] Bootstrap 5 не найден — $.fn.modal не работает');
        return;
      }
      var getInstance = function getInstance() {
        return bs.Modal.getInstance(el);
      };
      var getOrCreate = function getOrCreate(opts) {
        return getInstance() || new bs.Modal(el, opts || {});
      };
      if (_typeof(action) === 'object' || action === undefined) {
        getOrCreate(action);
        return;
      }
      switch (action) {
        case 'show':
          getOrCreate(options).show();
          break;
        case 'hide':
          (_getInstance = getInstance()) === null || _getInstance === void 0 || _getInstance.hide();
          break;
        case 'toggle':
          el.classList.contains('show') ? (_getInstance2 = getInstance()) === null || _getInstance2 === void 0 ? void 0 : _getInstance2.hide() : getOrCreate(options).show();
          break;
        case 'handleUpdate':
          (_getInstance3 = getInstance()) === null || _getInstance3 === void 0 || _getInstance3.handleUpdate();
          break;
        case 'dispose':
          (_getInstance4 = getInstance()) === null || _getInstance4 === void 0 || _getInstance4.dispose();
          break;
        default:
          console.warn("[wex-modal] \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 action: \"".concat(action, "\""));
      }
    });
  };
}

// ─── Директива w-modal ────────────────────────────────────────────────────
// Регистрируется сразу при импорте модуля — directive() не требует $,
// он просто пишет в globalDirectives массив внутри wex.js

Object(_wex_js__WEBPACK_IMPORTED_MODULE_0__[/* directive */ "c"])('w-modal', null, function ($el, attrs) {
  var modalKey = attrs['w-modal'];
  var scope = this.scope,
    view = this.view;

  // ── guard ────────────────────────────────────────────────────────────
  var rawState = scope.data;
  if (!rawState || !('modal' in rawState)) {
    console.error("[wex-modal] \u0411\u0440\u043E, \u0432\u0441\u0451 \u0445\u043E\u0440\u043E\u0448\u043E \u2014 \u0442\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043E\u0435-\u0447\u0442\u043E \u0437\u0430\u0431\u044B\u043B!\n" + "\u0414\u043E\u0431\u0430\u0432\u044C \u043F\u043E\u043B\u0435 \"modal\" \u0432 \u0441\u0442\u0435\u0439\u0442 \u0438 \u0432\u043D\u0443\u0442\u0440\u0438 \u043D\u0435\u0433\u043E \u043A\u043B\u044E\u0447 \"".concat(modalKey, "\":\n\n") + "  .state({\n" + "    modal: {\n" + "      ".concat(modalKey, ": false,\n") + "    }\n" + "  })");
    return;
  }
  if (!(modalKey in rawState.modal)) {
    console.error("[wex-modal] \u0411\u0440\u043E, \u0432\u0441\u0451 \u0445\u043E\u0440\u043E\u0448\u043E \u2014 \u0442\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043E\u0435-\u0447\u0442\u043E \u0437\u0430\u0431\u044B\u043B!\n" + "\u041F\u043E\u043B\u0435 \"modal\" \u0435\u0441\u0442\u044C, \u043D\u043E \u0432 \u043D\u0451\u043C \u043D\u0435\u0442 \u043A\u043B\u044E\u0447\u0430 \"".concat(modalKey, "\":\n\n") + "  .state({\n" + "    modal: {\n" + "      ".concat(modalKey, ": false,  // \u2190 \u0434\u043E\u0431\u0430\u0432\u044C \u044D\u0442\u043E\n") + "    }\n" + "  })");
    return;
  }
  // ── /guard ──────────────────────────────────────────────────────────

  var getModalEl = function getModalEl() {
    return document.getElementById(modalKey);
  };
  var getInstance = function getInstance() {
    var bs = window.bootstrap;
    if (!bs) return null;
    var el = getModalEl();
    return el ? bs.Modal.getInstance(el) || new bs.Modal(el) : null;
  };

  // Клик — toggle через view.on, делегированный на корень вью
  var selector = "[w-modal=\"".concat(modalKey, "\"]");
  var onClick = function onClick(state) {
    state.modal[modalKey] = !state.modal[modalKey];
  };
  view.on('click', selector, onClick);

  // Стейт → Bootstrap
  var syncToBootstrap = function syncToBootstrap() {
    var value = rawState.modal[modalKey];
    var instance = getInstance();
    if (!instance) return;
    var modalEl = getModalEl();
    var isOpen = modalEl === null || modalEl === void 0 ? void 0 : modalEl.classList.contains('show');
    if (value && !isOpen) instance.show();
    if (!value && isOpen) instance.hide();
  };
  syncToBootstrap();

  // Bootstrap → стейт + хуки Wex
  var modalEl = getModalEl();
  var onBsShow = function onBsShow() {
    rawState.modal[modalKey] = true;
    view.emit('$modalShow', modalKey);
  };
  var onBsShown = function onBsShown() {
    view.emit('$modalShown', modalKey);
  };
  var onBsHide = function onBsHide() {
    view.emit('$modalHide', modalKey);
  };
  var onBsHidden = function onBsHidden() {
    rawState.modal[modalKey] = false;
    view.emit('$modalHidden', modalKey);
  };
  if (modalEl) {
    modalEl.addEventListener('show.bs.modal', onBsShow);
    modalEl.addEventListener('shown.bs.modal', onBsShown);
    modalEl.addEventListener('hide.bs.modal', onBsHide);
    modalEl.addEventListener('hidden.bs.modal', onBsHidden);
  }
  return function () {
    view.off('click', selector, onClick);
    if (modalEl) {
      modalEl.removeEventListener('show.bs.modal', onBsShow);
      modalEl.removeEventListener('shown.bs.modal', onBsShown);
      modalEl.removeEventListener('hide.bs.modal', onBsHide);
      modalEl.removeEventListener('hidden.bs.modal', onBsHidden);
    }
  };
});

/***/ })
/******/ ]);
});