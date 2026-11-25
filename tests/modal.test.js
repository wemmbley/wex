/**
 * wex-modal.test.js
 *
 * Запуск: jest --config jest.config.json
 *
 * Структура:
 *   1. $.fn.modal()    — jQuery API
 *   2. w-modal guard   — exception если стейт не объявлен
 *   3. w-modal toggle  — клик меняет стейт
 *   4. w-modal sync    — стейт → Bootstrap
 *   5. w-modal reverse — Bootstrap → стейт (крестик/backdrop)
 *   6. hooks           — $modalShow / $modalShown / $modalHide / $modalHidden с modalKey
 *   7. cleanup         — listeners снимаются при ре-рендере
 *   8. COMBO           — полный сценарий: две модалки, хуки, крестик, guard
 */

require('./modal-setup')
require('../src/plugins/modal/modal.js')

// ─── helpers ────────────────────────────────────────────────────────────────

/**
 * Создаёт DOM-элемент модалки и вешает его в document.body
 */
function createModalEl(id) {
    const el = document.createElement('div')
    el.id = id
    el.className = 'modal fade'
    document.body.appendChild(el)
    return el
}

/**
 * Создаёт минимальный scope-мок для директивы
 */
function makeScope(state) {
    return {
        data: state,
        parse(expr) {
            // поддерживаем "modal.key" и "!modal.key"
            if (expr.startsWith('!')) return !this.parse(expr.slice(1))
            const parts = expr.split('.')
            let obj = state
            for (const p of parts) obj = obj?.[p]
            return obj
        },
        assign(expr, value) {
            const parts = expr.split('.')
            let obj = state
            for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]]
            obj[parts[parts.length - 1]] = value
        },
    }
}

/**
 * Создаёт минимальный view-мок
 */
function makeView() {
    const emitted = []
    return {
        _updated: 0,
        emitted,
        emit(event, ...args) { emitted.push({ event, args }) },
        update()             { this._updated++ },
    }
}

/**
 * Вызывает affect нашей директивы w-modal напрямую
 * Возвращает { cleanup, $el, view, scope, state }
 */
function runDirective(modalKey, state) {
    const dir   = global._jqvmDirectives['w-modal']
    if (!dir || !dir.affect) throw new Error('w-modal directive not found')

    const modalEl = document.getElementById(modalKey) || createModalEl(modalKey)

    const $el   = { _el: modalEl, _handlers: {}, on: jest.fn(), off: jest.fn() }
    const attrs = { 'w-modal': modalKey }
    const scope = makeScope(state)
    const view  = makeView()

    const ctx = { scope, view, $root: { find: () => ({}) } }

    const cleanup = dir.affect.call(ctx, $el, attrs)
    return { cleanup, $el, view, scope, state, modalEl }
}

// ─── afterEach: очищаем DOM ──────────────────────────────────────────────────
afterEach(() => {
    document.body.innerHTML = ''
    // сбрасываем Bootstrap instanceMap через dispose всех модалок
    document.querySelectorAll('.modal').forEach(el => {
        const i = bootstrap.Modal.getInstance(el)
        if (i) i.dispose()
    })
    jest.clearAllMocks()
})

// ─────────────────────────────────────────────────────────────────────────────
// 1. $.fn.modal() — jQuery API
// ─────────────────────────────────────────────────────────────────────────────

describe('$.fn.modal()', () => {
    test('show — вызывает Bootstrap instance.show()', () => {
        const el  = createModalEl('m1')
        const spy = jest.spyOn(bootstrap.Modal.prototype, 'show')

        $(el).modal('show')

        expect(spy).toHaveBeenCalledTimes(1)
        expect(el.classList.contains('show')).toBe(true)
    })

    test('hide — вызывает instance.hide()', () => {
        const el = createModalEl('m2')
        $(el).modal('show')

        const spy = jest.spyOn(bootstrap.Modal.prototype, 'hide')
        $(el).modal('hide')

        expect(spy).toHaveBeenCalledTimes(1)
        expect(el.classList.contains('show')).toBe(false)
    })

    test('toggle — открывает закрытую модалку', () => {
        const el = createModalEl('m3')
        $(el).modal('toggle')
        expect(el.classList.contains('show')).toBe(true)
    })

    test('toggle — закрывает открытую модалку', () => {
        const el = createModalEl('m4')
        $(el).modal('show')
        $(el).modal('toggle')
        expect(el.classList.contains('show')).toBe(false)
    })

    test('dispose — удаляет инстанс', () => {
        const el = createModalEl('m5')
        $(el).modal('show')
        expect(bootstrap.Modal.getInstance(el)).not.toBeNull()
        $(el).modal('dispose')
        expect(bootstrap.Modal.getInstance(el)).toBeNull()
    })

    test('объект-опции — инициализирует без ошибок', () => {
        const el = createModalEl('m6')
        expect(() => $(el).modal({ backdrop: 'static' })).not.toThrow()
    })

    test('неизвестный action — warn в консоль, не бросает', () => {
        const el   = createModalEl('m7')
        const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})
        expect(() => $(el).modal('flyAway')).not.toThrow()
        expect(warn).toHaveBeenCalledWith(expect.stringContaining('flyAway'))
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 2. w-modal guard — ошибки при неправильном стейте
// ─────────────────────────────────────────────────────────────────────────────

describe('w-modal — guard', () => {
    test('нет поля modal в стейте — error в консоль', () => {
        createModalEl('guardModal')
        const err = jest.spyOn(console, 'error').mockImplementation(() => {})

        const state = { someOtherField: true }
        runDirective('guardModal', state)

        expect(err).toHaveBeenCalledWith(expect.stringContaining('modal'))
        expect(err).toHaveBeenCalledWith(expect.stringContaining('guardModal'))
    })

    test('нет ключа в modal — error с подсказкой', () => {
        createModalEl('unknownKey')
        const err = jest.spyOn(console, 'error').mockImplementation(() => {})

        runDirective('unknownKey', { modal: { otherKey: false } })

        expect(err).toHaveBeenCalledWith(expect.stringContaining('unknownKey'))
    })

    test('всё объявлено — error не вызывается', () => {
        createModalEl('goodModal')
        const err = jest.spyOn(console, 'error').mockImplementation(() => {})

        runDirective('goodModal', { modal: { goodModal: false } })

        expect(err).not.toHaveBeenCalled()
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 3. w-modal — клик делает toggle стейта
// ─────────────────────────────────────────────────────────────────────────────

describe('w-modal — toggle по клику', () => {
    test('клик на false → стейт становится true', () => {
        createModalEl('toggleModal')
        const state = { modal: { toggleModal: false } }
        const { $el } = runDirective('toggleModal', state)

        // достаём onClick который был передан в $el.on('click', ...)
        const onClick = $el.on.mock.calls.find(c => c[0] === 'click')[1]
        onClick()

        expect(state.modal.toggleModal).toBe(true)
    })

    test('клик на true → стейт становится false', () => {
        createModalEl('toggleModal2')
        const state = { modal: { toggleModal2: true } }
        const { $el } = runDirective('toggleModal2', state)

        const onClick = $el.on.mock.calls.find(c => c[0] === 'click')[1]
        onClick()

        expect(state.modal.toggleModal2).toBe(false)
    })

    test('после клика вызывается view.update()', () => {
        createModalEl('toggleModal3')
        const state = { modal: { toggleModal3: false } }
        const { $el, view } = runDirective('toggleModal3', state)

        const onClick = $el.on.mock.calls.find(c => c[0] === 'click')[1]
        onClick()

        expect(view._updated).toBe(1)
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 4. w-modal — синхронизация стейт → Bootstrap
// ─────────────────────────────────────────────────────────────────────────────

describe('w-modal — стейт → Bootstrap', () => {
    test('state.modal.key = true при mount → Bootstrap.show()', () => {
        const el  = createModalEl('syncModal')
        const spy = jest.spyOn(bootstrap.Modal.prototype, 'show')

        runDirective('syncModal', { modal: { syncModal: true } })

        expect(spy).toHaveBeenCalledTimes(1)
    })

    test('state.modal.key = false при mount → show не вызывается', () => {
        createModalEl('syncModal2')
        const spy = jest.spyOn(bootstrap.Modal.prototype, 'show')

        runDirective('syncModal2', { modal: { syncModal2: false } })

        expect(spy).not.toHaveBeenCalled()
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 5. w-modal — обратная синхронизация Bootstrap → стейт
// ─────────────────────────────────────────────────────────────────────────────

describe('w-modal — Bootstrap → стейт (крестик / backdrop)', () => {
    test('hidden.bs.modal → state.modal.key = false', () => {
        const modalEl = createModalEl('reverseModal')
        modalEl.classList.add('show')

        const state = { modal: { reverseModal: true } }
        runDirective('reverseModal', state)

        modalEl.dispatchEvent(new Event('hidden.bs.modal'))

        expect(state.modal.reverseModal).toBe(false)
    })

    test('show.bs.modal → state.modal.key = true', () => {
        const modalEl = createModalEl('reverseModal2')
        const state   = { modal: { reverseModal2: false } }
        runDirective('reverseModal2', state)

        modalEl.dispatchEvent(new Event('show.bs.modal'))

        expect(state.modal.reverseModal2).toBe(true)
    })

    test('hidden.bs.modal → view.update() вызывается', () => {
        const modalEl = createModalEl('reverseModal3')
        const state   = { modal: { reverseModal3: true } }
        const { view } = runDirective('reverseModal3', state)

        modalEl.dispatchEvent(new Event('hidden.bs.modal'))

        expect(view._updated).toBeGreaterThan(0)
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 6. Хуки — $modalShow / $modalShown / $modalHide / $modalHidden с modalKey
// ─────────────────────────────────────────────────────────────────────────────

describe('w-modal — хуки Wex', () => {
    test('show.bs.modal → view.emit("$modalShow", modalKey)', () => {
        const modalEl = createModalEl('hooksModal')
        const state   = { modal: { hooksModal: false } }
        const { view } = runDirective('hooksModal', state)

        modalEl.dispatchEvent(new Event('show.bs.modal'))

        const hook = view.emitted.find(e => e.event === '$modalShow')
        expect(hook).toBeDefined()
        expect(hook.args[0]).toBe('hooksModal')
    })

    test('shown.bs.modal → view.emit("$modalShown", modalKey)', () => {
        const modalEl = createModalEl('hooksModal2')
        const state   = { modal: { hooksModal2: false } }
        const { view } = runDirective('hooksModal2', state)

        modalEl.dispatchEvent(new Event('shown.bs.modal'))

        const hook = view.emitted.find(e => e.event === '$modalShown')
        expect(hook.args[0]).toBe('hooksModal2')
    })

    test('hide.bs.modal → view.emit("$modalHide", modalKey)', () => {
        const modalEl = createModalEl('hooksModal3')
        modalEl.classList.add('show')
        const state = { modal: { hooksModal3: true } }
        const { view } = runDirective('hooksModal3', state)

        modalEl.dispatchEvent(new Event('hide.bs.modal'))

        const hook = view.emitted.find(e => e.event === '$modalHide')
        expect(hook.args[0]).toBe('hooksModal3')
    })

    test('hidden.bs.modal → view.emit("$modalHidden", modalKey)', () => {
        const modalEl = createModalEl('hooksModal4')
        const state   = { modal: { hooksModal4: false } }
        const { view } = runDirective('hooksModal4', state)

        modalEl.dispatchEvent(new Event('hidden.bs.modal'))

        const hook = view.emitted.find(e => e.event === '$modalHidden')
        expect(hook.args[0]).toBe('hooksModal4')
    })

    test('эмиттится правильный modalKey при нескольких модалках', () => {
        const el1 = createModalEl('hookA')
        const el2 = createModalEl('hookB')

        const state = { modal: { hookA: false, hookB: false } }
        const { view: viewA } = runDirective('hookA', state)
        const { view: viewB } = runDirective('hookB', state)

        el1.dispatchEvent(new Event('hidden.bs.modal'))
        el2.dispatchEvent(new Event('hidden.bs.modal'))

        expect(viewA.emitted.find(e => e.event === '$modalHidden').args[0]).toBe('hookA')
        expect(viewB.emitted.find(e => e.event === '$modalHidden').args[0]).toBe('hookB')
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 7. Cleanup — listeners снимаются при ре-рендере
// ─────────────────────────────────────────────────────────────────────────────

describe('w-modal — cleanup', () => {
    test('cleanup снимает click-listener с $el', () => {
        createModalEl('cleanModal')
        const state = { modal: { cleanModal: false } }
        const { cleanup, $el } = runDirective('cleanModal', state)

        cleanup()

        expect($el.off).toHaveBeenCalledWith('click', expect.any(Function))
    })

    test('cleanup снимает Bootstrap event listeners', () => {
        const modalEl = createModalEl('cleanModal2')
        const state   = { modal: { cleanModal2: false } }
        const { cleanup } = runDirective('cleanModal2', state)

        const spy = jest.spyOn(modalEl, 'removeEventListener')
        cleanup()

        const removedEvents = spy.mock.calls.map(c => c[0])
        expect(removedEvents).toContain('show.bs.modal')
        expect(removedEvents).toContain('shown.bs.modal')
        expect(removedEvents).toContain('hide.bs.modal')
        expect(removedEvents).toContain('hidden.bs.modal')
    })

    test('после cleanup Bootstrap-события не меняют стейт', () => {
        const modalEl = createModalEl('cleanModal3')
        const state   = { modal: { cleanModal3: false } }
        const { cleanup } = runDirective('cleanModal3', state)

        cleanup()
        modalEl.dispatchEvent(new Event('show.bs.modal'))

        expect(state.modal.cleanModal3).toBe(false)
    })
})

// ─────────────────────────────────────────────────────────────────────────────
// 8. COMBO — полный экстремальный сценарий
//
//    Две модалки на странице. Пользователь:
//      1. Кликает на кнопку открытия confirmModal
//      2. Подтверждает (программно hide)
//      3. Закрывает infoModal крестиком (Bootstrap hidden event)
//      4. Пытается зарегистрировать модалку без стейта (guard)
//      5. Проверяем что хуки получили правильные modalKey
//      6. Проверяем что cleanup после всего не оставил слушателей
// ─────────────────────────────────────────────────────────────────────────────

describe('COMBO — два модальных окна, хуки, крестик, guard', () => {
    test('полный сценарий', () => {
        // ── DOM ───────────────────────────────────────────────────────────
        const confirmEl = createModalEl('confirmModal')
        const infoEl    = createModalEl('infoModal')

        // ── State ─────────────────────────────────────────────────────────
        const state = {
            modal: {
                confirmModal: false,
                infoModal:    true,   // infoModal уже открыта при монтировании
            }
        }

        // ── Монтируем обе директивы ───────────────────────────────────────
        const { cleanup: cleanConfirm, $el: elConfirm, view: viewConfirm } =
            runDirective('confirmModal', state)

        const { cleanup: cleanInfo, $el: elInfo, view: viewInfo } =
            runDirective('infoModal', state)

        // ── Шаг 1: infoModal открылась автоматически (state=true при mount) ─
        expect(infoEl.classList.contains('show')).toBe(true)

        // ── Шаг 2: клик на confirmModal → toggle false→true ────────────────
        const onClickConfirm = elConfirm.on.mock.calls.find(c => c[0] === 'click')[1]
        onClickConfirm()
        expect(state.modal.confirmModal).toBe(true)

        // ── Шаг 3: хук $modalShow пришёл с правильным ключом ──────────────
        confirmEl.dispatchEvent(new Event('show.bs.modal'))
        const showHook = viewConfirm.emitted.find(e => e.event === '$modalShow')
        expect(showHook).toBeDefined()
        expect(showHook.args[0]).toBe('confirmModal')

        // ── Шаг 4: пользователь подтвердил — программный hide ─────────────
        $(confirmEl).modal('hide')
        expect(confirmEl.classList.contains('show')).toBe(false)

        // Bootstrap fire hidden event → стейт обновляется
        confirmEl.dispatchEvent(new Event('hidden.bs.modal'))
        expect(state.modal.confirmModal).toBe(false)

        const hiddenHook = viewConfirm.emitted.find(e => e.event === '$modalHidden')
        expect(hiddenHook.args[0]).toBe('confirmModal')

        // ── Шаг 5: infoModal закрыта крестиком (только Bootstrap event) ───
        infoEl.dispatchEvent(new Event('hide.bs.modal'))
        infoEl.dispatchEvent(new Event('hidden.bs.modal'))
        expect(state.modal.infoModal).toBe(false)

        const infoHiddenHook = viewInfo.emitted.find(e => e.event === '$modalHidden')
        expect(infoHiddenHook.args[0]).toBe('infoModal')

        // ── Шаг 6: пытаемся добавить модалку без стейта ───────────────────
        createModalEl('orphanModal')
        const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
        const badState = { modal: {} }  // ключа нет
        runDirective('orphanModal', badState)
        expect(errSpy).toHaveBeenCalledWith(expect.stringContaining('orphanModal'))

        // ── Шаг 7: cleanup — все слушатели сняты ──────────────────────────
        const confirmRemoveSpy = jest.spyOn(confirmEl, 'removeEventListener')
        const infoRemoveSpy    = jest.spyOn(infoEl,    'removeEventListener')

        cleanConfirm()
        cleanInfo()

        expect(confirmRemoveSpy).toHaveBeenCalledWith('hidden.bs.modal', expect.any(Function))
        expect(infoRemoveSpy).toHaveBeenCalledWith('hidden.bs.modal', expect.any(Function))

        // После cleanup события не меняют стейт
        state.modal.confirmModal = false
        confirmEl.dispatchEvent(new Event('show.bs.modal'))
        expect(state.modal.confirmModal).toBe(false)

        // ── Шаг 8: итоговый стейт ─────────────────────────────────────────
        expect(state.modal.confirmModal).toBe(false)
        expect(state.modal.infoModal).toBe(false)
    })
})