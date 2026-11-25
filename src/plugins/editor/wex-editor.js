// wex.editor.js
// WYSIWYG-редактор для Wex. Без зависимостей.
// Подключать после wex.js и wex-doc.js.
//
//   <div w-editor="post.body"></div>   редактор; документ лежит в state (post.body)
//   <div w-doc="post.body"></div>      вывод (директива из wex.doc.js)
//
//   view.plugin(createEditor({
//     toolbar: ['h1', 'h2', 'p', '|', 'bold', 'italic', '|', 'center', 'link'],
//     modules: [HotKeys],              // горячие клавиши подключаются отдельно
//     placeholder: 'Начните писать…',
//     debounce: 0,                     // мс до записи в state; 0 = в следующем кадре
//   }))
//
// Свой пункт тулбара — объект прямо в массиве toolbar или Editor.register(name, def):
//   { name, title, icon: '<svg…>', hotkey: 'mod+alt+k', isActive(ed) {…}, run(ed) {…} }

import {
    FORMATS, esc, safeUrl, classOk, renderDoc, renderNodes,
    stable, emptyDoc, isDoc, clone, addStyle, docAffect
} from './wex-doc.js'
import * as Wex from '../../wex.js'

const wexView = Wex.view || (window.Wex && window.Wex.view)
const component = Wex.component

const { directive } = Wex

// как в wex-doc.js: в браузере берём report ядра, вне его — обычный console
const report = Wex.report || ((title, ctx) => console.error('[WexEditor]', title, ctx || {}))

// =====================================================================
// Парсер: DOM → JSON
// =====================================================================

const BLOCK = new Set('P DIV H1 H2 H3 H4 H5 H6 LI UL OL BLOCKQUOTE PRE SECTION ARTICLE HEADER FOOTER ASIDE NAV MAIN FIGURE FIGCAPTION TABLE THEAD TBODY TR TD TH DL DT DD HR'.split(' '))
const SKIP = new Set('SCRIPT STYLE IFRAME OBJECT EMBED NOSCRIPT TEMPLATE SVG CANVAS AUDIO VIDEO HEAD META LINK TITLE IMG FORM INPUT BUTTON SELECT TEXTAREA'.split(' '))
const FMT_TAGS = {
    B: 'bold', STRONG: 'bold', I: 'italic', EM: 'italic', U: 'underline',
    S: 'strikethrough', STRIKE: 'strikethrough', DEL: 'strikethrough',
    CODE: 'code', SUB: 'subscript', SUP: 'superscript',
}
const ALIGNS = ['left', 'center', 'right', 'justify']

const tag = n => n.tagName.toUpperCase()

function pushText(out, text, fmt) {
    const format = FORMATS.filter(f => fmt.includes(f))
    const last = out[out.length - 1]
    if (last && last.type === 'text' && last.format.join() === format.join()) last.text += text
    else out.push({ type: 'text', text, format })
}

// форматы из style (вставка из Word/Google Docs приходит со style, в том числе на блоках)
function styleFormats(n, fmt) {
    let f = fmt
    const add = x => { if (!f.includes(x)) f = f.concat(x) }
    const st = n.style
    if (st) {
        if (/^(bold|[6-9]00)$/.test(st.fontWeight)) add('bold')
        if (st.fontStyle === 'italic') add('italic')
        const td = st.textDecoration || st.textDecorationLine || ''
        if (td.includes('underline')) add('underline')
        if (td.includes('line-through')) add('strikethrough')
    }
    return f
}

function inline(n, fmt, out) {
    if (n.nodeType === 3) {
        const t = n.nodeValue.replace(/[ \t\r\n\f]+/g, ' ') // nbsp не трогаем
        if (t) pushText(out, t, fmt)
        return
    }
    if (n.nodeType !== 1) return

    const t = tag(n)
    if (SKIP.has(t)) return
    if (t === 'BR') { out.push({ type: 'linebreak' }); return }

    if (t === 'A') {
        const url = safeUrl(n.getAttribute('href'))
        const kids = []
        for (const c of n.childNodes) inline(c, fmt, kids)
        if (url && kids.length) out.push({ type: 'link', url, children: kids })
        else out.push(...kids)
        return
    }

    const f = styleFormats(n, FMT_TAGS[t] ? fmt.concat(FMT_TAGS[t]) : fmt)
    for (const c of n.childNodes) inline(c, f, out)
}

// пробелы по краям блока и пустые текстовые узлы убираем
function trimEdges(out) {
    const first = out[0]
    const last = out[out.length - 1]
    if (first && first.type === 'text') first.text = first.text.replace(/^ +/, '')
    if (last && last.type === 'text') last.text = last.text.replace(/ +$/, '')
    return out.filter(n => n.type !== 'text' || n.text)
}

function inlineKids(el) {
    const out = []
    const f = styleFormats(el, [])
    for (const c of el.childNodes) inline(c, f, out)
    const last = out[out.length - 1]
    if (last && last.type === 'linebreak') out.pop() // «пустой» <br> в конце строки, который ставит браузер
    return trimEdges(out)
}

function alignOf(el) {
    const a = String((el.style && el.style.textAlign) || el.getAttribute('align') || '').toLowerCase()
    return ALIGNS.includes(a) ? a : undefined
}

function mk(type, el, children, keep, extra) {
    const n = Object.assign({ type }, extra)
    const a = alignOf(el)
    if (a) n.align = a
    if (keep) {
        const classes = [...el.classList].filter(classOk)
        if (classes.length) n.meta = { classes }
    }
    n.children = children
    return n
}

const hasBlockChild = el => [...el.children].some(c => BLOCK.has(tag(c)))

// keep = true: читаем классы в meta (свой документ); false: чужой HTML, классы выбрасываем
function parseBlocks(parent, out, keep) {
    let run = []
    const flush = () => {
        const kids = trimEdges(run)
        run = []
        if (kids.length) out.push({ type: 'paragraph', children: kids })
    }

    for (const n of parent.childNodes) {
        const t = n.nodeType === 1 ? tag(n) : ''

        // текст и inline-элементы вне блока копятся в «висячий» абзац
        if (n.nodeType === 3 || (n.nodeType === 1 && !BLOCK.has(t) && !SKIP.has(t))) {
            inline(n, [], run)
            continue
        }
        if (n.nodeType !== 1 || SKIP.has(t)) continue

        flush()
        if (t === 'HR') continue
        if (/^H[1-6]$/.test(t)) out.push(mk('heading', n, inlineKids(n), keep, { tag: t.toLowerCase() }))
        else if (hasBlockChild(n)) parseBlocks(n, out, keep)
        else out.push(mk('paragraph', n, inlineKids(n), keep))
    }
    flush()
}

// чужой HTML → документ (вставка из буфера, миграция старых статей)
export function htmlToDoc(html) {
    const body = new DOMParser().parseFromString(String(html), 'text/html').body
    const out = []
    parseBlocks(body, out, false)
    if (!out.length) out.push({ type: 'paragraph', children: [] })
    return { root: { type: 'root', children: out } }
}

// =====================================================================
// Иконки (свои, без наборов)
// =====================================================================

const svg = inner => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`
const glyph = (t, style = '') => `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><text x="12" y="17" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor" style="${style}">${t}</text></svg>`

// =====================================================================
// Редактор
// =====================================================================

const DEFAULT_TOOLBAR = [
    'undo', 'redo', '|', 'h1', 'h2', 'p', '|',
    'bold', 'italic', 'underline', 'strike', '|',
    'left', 'center', 'right', '|', 'link',
]
const DEFAULTS = { toolbar: DEFAULT_TOOLBAR, placeholder: 'Начните писать…', modules: [], doc: null, onChange: null, debounce: 0 }

const el = (cls, name) => {
    const e = document.createElement(name || 'div')
    e.className = cls
    return e
}

const MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '')
const hotkeyLabel = hk => hk.split('+').map(p => (
    p === 'mod' ? (MAC ? '⌘' : 'Ctrl') : p === 'alt' ? (MAC ? '⌥' : 'Alt') : p === 'shift' ? (MAC ? '⇧' : 'Shift') : p.toUpperCase()
)).join(MAC ? '' : '+')

let customCount = 0

export class Editor {
    constructor(host, options = {}) {
        this.host = host
        this.options = Object.assign({}, DEFAULTS, options)
        this.events = {}
        this.items = []          // определения пунктов тулбара по порядку
        this.buttons = new Map() // def → <button>
        this.listeners = []
        this.modules = []
        this.key = ''            // stable-строка последнего известного документа
        this._range = null

        this._build()
        this.setDoc(this.options.doc)
        this.modules = this.options.modules.map(M => new M(this))
    }

    // ---------- сборка ----------

    _build() {
        addStyle('wxe-ui', UI_CSS)
        const o = this.options
        const hints = o.modules.includes(HotKeys)

        this.root = el('wxe')
        this.bar = el('wxe-bar')
        this.bar.setAttribute('role', 'toolbar')
        this.body = el('wxe-body wxe-doc')
        this.body.contentEditable = 'true'
        this.body.setAttribute('role', 'textbox')
        this.body.setAttribute('aria-multiline', 'true')
        this.body.setAttribute('data-placeholder', o.placeholder)
        this.root.append(this.bar, this.body)
        this.host.appendChild(this.root)

        for (const entry of o.toolbar) {
            if (entry === '|') { this.bar.appendChild(el('wxe-sep')); continue }

            const def = typeof entry === 'string' ? Editor.items[entry] : Object.assign({ name: 'custom-' + (++customCount) }, entry)
            if (!def) { console.warn('[WexEditor] неизвестный пункт тулбара: ' + entry); continue }

            const btn = el('wxe-btn', 'button')
            btn.type = 'button'
            btn.title = def.title + (hints && def.hotkey ? ` (${hotkeyLabel(def.hotkey)})` : '')
            btn.setAttribute('aria-label', def.title || def.name)
            btn.innerHTML = def.icon || esc(def.label || def.name)
            // mousedown не должен отнимать фокус и выделение у текста
            btn.addEventListener('mousedown', e => e.preventDefault())
            btn.addEventListener('click', () => this.run(def))
            this.bar.appendChild(btn)
            this.items.push(def)
            this.buttons.set(def, btn)
        }

        try { document.execCommand('defaultParagraphSeparator', false, 'p') } catch (e) {}

        this._on(this.body, 'input', () => { this._normalize(); this._schedule() })
        this._on(this.body, 'blur', () => this.sync())
        this._on(this.body, 'paste', e => this._paste(e))
        this._on(document, 'selectionchange', () => this._selection())
    }

    _on(target, type, fn) {
        target.addEventListener(type, fn)
        this.listeners.push([target, type, fn])
    }

    // ---------- события ----------

    on(name, fn) { (this.events[name] = this.events[name] || []).push(fn); return this }
    off(name, fn) { this.events[name] = (this.events[name] || []).filter(f => f !== fn); return this }
    emit(name, ...args) { (this.events[name] || []).slice().forEach(fn => fn(...args)) }

    // ---------- документ ----------

    getDoc() {
        const out = []
        parseBlocks(this.body, out, true)
        if (!out.length) out.push({ type: 'paragraph', children: [] })
        return { root: { type: 'root', children: out } }
    }

    // «внешняя» загрузка: событие change не вызывается
    setDoc(doc) {
        this.body.innerHTML = renderDoc(isDoc(doc) ? doc : emptyDoc())
        if (!this.body.firstChild) this.body.innerHTML = '<p><br></p>'
        this._empty()
        this.key = stable(this.getDoc())
        return this
    }

    // читаем DOM, и если документ изменился, сообщаем наружу (директива кладёт его в state)
    sync() {
        this._cancel()
        if (this.destroyed) return
        const doc = this.getDoc()
        const key = stable(doc)
        if (key === this.key) return
        this.key = key
        this.emit('change', doc)
        if (this.options.onChange) this.options.onChange(doc)
    }

    // debounce > 0: ждём паузу в наборе столько мс; 0: синхронизируем в ближайшем кадре
    _schedule() {
        this._cancel()
        const ms = Number(this.options.debounce) || 0
        if (ms > 0) this._t = setTimeout(() => this.sync(), ms)
        else this._raf = requestAnimationFrame(() => this.sync())
    }

    _cancel() {
        clearTimeout(this._t)
        cancelAnimationFrame(this._raf)
    }

    _empty() {
        this.body.toggleAttribute('data-empty', !this.body.textContent && this.body.children.length <= 1)
    }

    _normalize() {
        const b = this.body
        if (!b.firstChild) {
            b.innerHTML = '<p><br></p>'
            this._caret(b.firstChild)
        }
        else if (b.firstChild.nodeType === 3) {
            document.execCommand('formatBlock', false, '<p>') // текст без блока → абзац
        }
        this._empty()
    }

    _paste(e) {
        const cd = e.clipboardData
        if (!cd) return
        e.preventDefault()

        // чужой HTML пропускаем через тот же парсер: остаётся только наша схема
        const html = cd.getData('text/html')
        if (html) {
            const blocks = htmlToDoc(html).root.children
            const out = blocks.length === 1 ? renderNodes(blocks[0].children) : renderNodes(blocks)
            if (out) { document.execCommand('insertHTML', false, out); this.sync(); return }
        }
        const text = cd.getData('text/plain')
        if (text) { document.execCommand('insertText', false, text); this.sync() }
    }

    // ---------- выделение ----------

    _sel() {
        const s = window.getSelection()
        return s && s.rangeCount && this.body.contains(s.anchorNode) ? s : null
    }

    _selection() {
        if (!this.root.isConnected) {
            if (this._wasConnected) this.destroy()
            return
        }
        this._wasConnected = true
        if (this._sel()) this.updateToolbar()
    }

    _caret(node) {
        const r = document.createRange()
        r.selectNodeContents(node)
        r.collapse(true)
        const s = window.getSelection()
        s.removeAllRanges()
        s.addRange(r)
    }

    saveRange() { const s = this._sel(); this._range = s ? s.getRangeAt(0).cloneRange() : null }
    restoreRange() {
        if (!this._range) return
        const s = window.getSelection()
        s.removeAllRanges()
        s.addRange(this._range)
    }

    // верхнеуровневый блок, в котором стоит курсор (документ плоский)
    blockEl() {
        const s = this._sel()
        let n = s && s.anchorNode
        while (n && n.parentNode !== this.body) n = n.parentNode
        return n && n.nodeType === 1 ? n : null
    }

    blockTag() {
        const b = this.blockEl()
        const t = b ? b.tagName.toLowerCase() : 'p'
        return /^h[1-6]$/.test(t) ? t : 'p'
    }

    alignment() {
        const b = this.blockEl()
        if (!b) return 'left'
        const a = getComputedStyle(b).textAlign
        return a === 'start' ? 'left' : a === 'end' ? 'right' : a === '-webkit-center' ? 'center' : a
    }

    closest(name) {
        const s = this._sel()
        let n = s && s.anchorNode
        while (n && n !== this.body) {
            if (n.nodeType === 1 && n.tagName === name) return n
            n = n.parentNode
        }
        return null
    }

    // ---------- команды ----------

    exec(cmd, val) {
        this.body.focus()
        document.execCommand(cmd, false, val)
    }

    setBlock(t) { this.exec('formatBlock', `<${t}>`) }

    run(def) {
        this.body.focus()
        if (def.run) def.run(this)
        this._empty()
        this.sync()
        this.updateToolbar()
    }

    updateToolbar() {
        this.buttons.forEach((btn, def) => {
            const on = def.isActive ? !!def.isActive(this) : false
            btn.classList.toggle('is-active', on)
            btn.setAttribute('aria-pressed', on ? 'true' : 'false')
        })
    }

    destroy() {
        if (this.destroyed) return
        this.destroyed = true
        this._cancel()
        this.listeners.forEach(([t, type, fn]) => t.removeEventListener(type, fn))
        this.modules.forEach(m => m.destroy && m.destroy())
        this.root.remove()
        this.emit('destroy')
    }
}

// =====================================================================
// Реестр пунктов тулбара
// =====================================================================

Editor.items = {}
Editor.register = (name, def) => { Editor.items[name] = Object.assign({ name }, def) }

const cmdItem = (name, cmd, title, icon, hotkey) => Editor.register(name, {
    title, icon, hotkey,
    isActive: () => document.queryCommandState(cmd),
    run: ed => ed.exec(cmd),
})

const blockItem = (name, t, title, icon, hotkey) => Editor.register(name, {
    title, icon, hotkey,
    isActive: ed => ed.blockTag() === t,
    // повторный клик по заголовку возвращает обычный абзац
    run: ed => ed.setBlock(t !== 'p' && ed.blockTag() === t ? 'p' : t),
})

const ALIGN_ITEMS = {
    left: ['justifyLeft', 'По левому краю', 'M4 6h16M4 10h10M4 14h16M4 18h10', 'mod+shift+l'],
    center: ['justifyCenter', 'По центру', 'M4 6h16M7 10h10M4 14h16M7 18h10', 'mod+shift+e'],
    right: ['justifyRight', 'По правому краю', 'M4 6h16M10 10h10M4 14h16M10 18h10', 'mod+shift+r'],
    justify: ['justifyFull', 'По ширине', 'M4 6h16M4 10h16M4 14h16M4 18h16', 'mod+shift+j'],
}

Editor.register('undo', {
    title: 'Отменить', hotkey: 'mod+z', run: ed => ed.exec('undo'),
    icon: svg('<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'),
})
Editor.register('redo', {
    title: 'Повторить', hotkey: 'mod+shift+z', run: ed => ed.exec('redo'),
    icon: svg('<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'),
})

blockItem('h1', 'h1', 'Заголовок 1', glyph('H1', 'font-size:18px'), 'mod+alt+1')
blockItem('h2', 'h2', 'Заголовок 2', glyph('H2', 'font-size:18px'), 'mod+alt+2')
blockItem('p', 'p', 'Абзац', glyph('¶'), 'mod+alt+0')

cmdItem('bold', 'bold', 'Жирный', glyph('B'), 'mod+b')
cmdItem('italic', 'italic', 'Курсив', glyph('I', 'font-style:italic;font-family:serif;font-weight:400'), 'mod+i')
cmdItem('underline', 'underline', 'Подчёркнутый', glyph('U', 'text-decoration:underline;font-weight:400'), 'mod+u')
cmdItem('strike', 'strikeThrough', 'Зачёркнутый', glyph('S', 'text-decoration:line-through;font-weight:400'), 'mod+shift+x')

Object.keys(ALIGN_ITEMS).forEach((name) => {
    const [cmd, title, path, hotkey] = ALIGN_ITEMS[name]
    Editor.register(name, {
        title, hotkey, icon: svg(`<path d="${path}"/>`),
        isActive: ed => ed.alignment() === name,
        run: ed => ed.exec(cmd),
    })
})

Editor.register('link', {
    title: 'Ссылка',
    hotkey: 'mod+k',
    icon: svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
    isActive: ed => !!ed.closest('A'),
    run: (ed) => {
        if (ed.closest('A')) { ed.exec('unlink'); return }
        ed.saveRange()
        const url = safeUrl(window.prompt('Адрес ссылки', 'https://'))
        if (!url || url === 'https://') return
        ed.restoreRange()
        const s = window.getSelection()
        if (s && s.isCollapsed) ed.exec('insertHTML', `<a href="${esc(url)}">${esc(url)}</a>`)
        else ed.exec('createLink', url)
    },
})

// =====================================================================
// Горячие клавиши (отдельный модуль: modules: [HotKeys])
// Берёт `hotkey` у пунктов тулбара, поэтому работает и для своих пунктов.
// =====================================================================

const normHotkey = (s) => {
    const p = String(s).toLowerCase().split('+')
    const key = p.pop()
    return ['mod', 'alt', 'shift'].filter(m => p.includes(m)).concat(key).join('+')
}

const comboOf = (e) => {
    // по e.code, потому что на Mac Alt+1 даёт «¡» вместо «1»
    const key = /^(Key|Digit)/.test(e.code) ? e.code.slice(-1).toLowerCase() : String(e.key).toLowerCase()
    return [(e.ctrlKey || e.metaKey) && 'mod', e.altKey && 'alt', e.shiftKey && 'shift', key].filter(Boolean).join('+')
}

export class HotKeys {
    constructor(editor) {
        this.editor = editor
        this.map = new Map()
        editor.items.forEach((def) => { if (def.hotkey) this.map.set(normHotkey(def.hotkey), def) })

        this.handler = (e) => {
            const def = this.map.get(comboOf(e))
            if (!def) return
            e.preventDefault()
            editor.run(def)
        }
        editor.body.addEventListener('keydown', this.handler)
    }

    destroy() {
        this.editor.body.removeEventListener('keydown', this.handler)
    }
}

// =====================================================================
// Интеграция с Wex
// =====================================================================
export function createEditorView(options = {}) {
    return wexView('<!---->', () => ({ doc: null }))
        .on('$init', function () { this.__subscribe() })
        .on('$mount', function (state) {
            const doc = isDoc(state.doc) ? clone(state.doc) : emptyDoc()
            const ed = new Editor(this.root, Object.assign({}, options, { doc }))
            this.__ed = ed                                  // на экземпляре, а не в замыкании: view клонируется
            ed.on('change', next => this.emit('change', next))
        })
        .on('$change', function (state) {                   // doc изменили снаружи (загрузка с сервера)
            const ed = this.__ed
            if (!ed) return
            const doc = isDoc(state.doc) ? clone(state.doc) : emptyDoc()
            if (stable(doc) !== ed.key) ed.setDoc(doc)
        })
        .on('$unmount', function () {
            if (this.__ed) { this.__ed.destroy(); this.__ed = null }
        })
}

// w-editor="post.body": редактор создаётся на элементе один раз и пишет разобранный
// документ обратно в state по указанному пути. Повторный вызов affect (изменились
// прочитанные данные) только синхронизирует содержимое, не пересоздавая редактор.
function editorAffect($el, attrs, options) {
    const el = $el[0]
    const expr = attrs['w-editor']
    const scope = this.scope

    let doc
    try { doc = scope.parse(expr) }
    catch (e) {
        report(`w-editor: ошибка в выражении «${expr}»: ${e.message}`, { view: this.view, el, expr, level: 'error' })
        return
    }

    const key = stable(doc)

    // редактор уже живёт на этом элементе: обновляем, только если документ изменили снаружи
    if (el.__wexEditor && !el.__wexEditor.destroyed) {
        if (el.__wexEditorKey !== key) {
            el.__wexEditorKey = key
            el.__wexEditor.setDoc(doc)
        }
        return
    }

    const ed = new Editor(el, Object.assign({}, options || {}, { doc }))
    el.__wexEditor = ed
    el.__wexEditorKey = key

    ed.on('change', (next) => {
        el.__wexEditorKey = stable(next)   // своё же изменение не должно вернуться как внешнее
        scope.assign(expr, next)
    })
}

directive('w-editor', null, editorAffect)

export function createEditor(options = {}) {
    return function () {
        // прямо на view: не зависит от того, в каком экземпляре ядра зарегистрирована глобальная директива
        this.view.directive('w-editor', null, function ($el, attrs) {
            return editorAffect.call(this, $el, attrs, options)
        })
        this.view.directive('w-doc', null, docAffect)
    }
}

// =====================================================================
// Стили интерфейса. Без Quas, чтобы редактор не зависел от порядка подключения.
// Тёмная тема: html.dark (как в Quas).
// =====================================================================

// const UI_CSS = `
// .wxe{--wxe-bg:#fff;--wxe-fg:#18181b;--wxe-border:#e4e4e7;--wxe-bar:#fafafa;--wxe-hover:#f4f4f5;--wxe-active:#e4e4e7;--wxe-muted:#a1a1aa;border:1px solid var(--wxe-border);border-radius:.75rem;background:var(--wxe-bg);color:var(--wxe-fg);overflow:hidden}
// html.dark .wxe{--wxe-bg:#09090b;--wxe-fg:#fafafa;--wxe-border:#27272a;--wxe-bar:#18181b;--wxe-hover:#27272a;--wxe-active:#3f3f46;--wxe-muted:#71717a}
// .wxe-bar{display:flex;flex-wrap:wrap;align-items:center;gap:2px;padding:6px;border-bottom:1px solid var(--wxe-border);background:var(--wxe-bar)}
// .wxe-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:6px;color:inherit;background:transparent;cursor:pointer;transition:background-color .12s}
// .wxe-btn:hover{background:var(--wxe-hover)}
// .wxe-btn.is-active{background:var(--wxe-active)}
// .wxe-btn:focus-visible{outline:2px solid #3b82f6;outline-offset:-2px}
// .wxe-sep{width:1px;height:20px;margin:0 4px;background:var(--wxe-border)}
// .wxe-body{position:relative;min-height:12rem;padding:14px 16px;outline:none;word-break:break-word}
// .wxe-body[data-empty]::before{content:attr(data-placeholder);position:absolute;top:14px;left:16px;color:var(--wxe-muted);pointer-events:none}
// `

const UI_CSS = `
.wxe {
  --wxe-bg: #ffffff;
  --wxe-fg: #09090b;
  --wxe-muted-fg: #71717a;
  --wxe-placeholder: #a1a1aa;
  --wxe-border: #e4e4e7;
  --wxe-border-focus: #a1a1aa;
  --wxe-ring: rgba(24, 24, 27, 0.08);
  --wxe-bar: #fafafa;
  --wxe-hover: #f4f4f5;
  --wxe-active: #e4e4e7;
  --wxe-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  display: flex;
  flex-direction: column;
  border: 1px solid var(--wxe-border);
  border-radius: 0.5rem;
  background: var(--wxe-bg);
  color: var(--wxe-fg);
  box-shadow: var(--wxe-shadow);
  overflow: hidden;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html.dark .wxe {
  --wxe-bg: #09090b;
  --wxe-fg: #fafafa;
  --wxe-muted-fg: #a1a1aa;
  --wxe-placeholder: #52525b;
  --wxe-border: #27272a;
  --wxe-border-focus: #52525b;
  --wxe-ring: rgba(250, 250, 250, 0.08);
  --wxe-bar: #121215;
  --wxe-hover: #27272a;
  --wxe-active: #3f3f46;
  --wxe-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.4);
}

/* Мягкий полупрозрачный focus-ring без резкой черноты */
.wxe:focus-within {
  border-color: var(--wxe-border-focus);
  box-shadow: 0 0 0 3px var(--wxe-ring), var(--wxe-shadow);
}

/* Тулбар */
.wxe-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3px;
  padding: 6px;
  border-bottom: 1px solid var(--wxe-border);
  background: var(--wxe-bar);
}

/* Кнопки 32x32 с хорошо читаемыми иконками 18px */
.wxe-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 0.375rem;
  color: var(--wxe-muted-fg);
  background: transparent;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}

.wxe-btn svg {
  width: 18px;
  height: 18px;
  stroke-width: 2;
  flex-shrink: 0;
}

.wxe-btn:hover {
  background: var(--wxe-hover);
  color: var(--wxe-fg);
}

.wxe-btn:active {
  transform: scale(0.96);
}

.wxe-btn.is-active {
  background: var(--wxe-active);
  color: var(--wxe-fg);
}

.wxe-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--wxe-bg), 0 0 0 4px var(--wxe-border-focus);
}

.wxe-btn:disabled {
  opacity: 0.45;
  pointer-events: none;
}

/* Разделитель */
.wxe-sep {
  width: 1px;
  height: 18px;
  margin: 0 4px;
  background: var(--wxe-border);
  flex-shrink: 0;
}

/* Рабочая область редактора */
.wxe-body {
  position: relative;
  min-height: 12rem;
  padding: 14px 16px;
  font-size: 0.9375rem; /* 15px — комфортнее для чтения */
  line-height: 1.6;
  outline: none;
  word-break: break-word;
}

.wxe-body[data-empty]::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--wxe-placeholder);
  pointer-events: none;
}

/* Типографика контента внутри редактора */
.wxe-body > *:first-child { margin-top: 0; }
.wxe-body > *:last-child { margin-bottom: 0; }
.wxe-body p { margin: 0.5rem 0; }
.wxe-body h1 { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.025em; margin: 1rem 0 0.5rem; }
.wxe-body h2 { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.025em; margin: 0.875rem 0 0.5rem; }
.wxe-body h3 { font-size: 1.125rem; font-weight: 600; letter-spacing: -0.02em; margin: 0.75rem 0 0.375rem; }
.wxe-body ul { list-style-type: disc; padding-left: 1.25rem; margin: 0.5rem 0; }
.wxe-body ol { list-style-type: decimal; padding-left: 1.25rem; margin: 0.5rem 0; }
.wxe-body blockquote {
  border-left: 2px solid var(--wxe-border);
  padding-left: 0.875rem;
  color: var(--wxe-muted-fg);
  font-style: italic;
  margin: 0.75rem 0;
}
.wxe-body code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.85em;
  background: var(--wxe-hover);
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
}
.wxe-body a {
  color: var(--wxe-fg);
  text-decoration: underline;
  text-underline-offset: 4px;
}
`;

if (typeof window !== 'undefined') {
    window.WexEditor = { Editor, HotKeys, createEditor, htmlToDoc }
}