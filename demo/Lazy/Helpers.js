// ---------- лог ----------
const t0 = performance.now()
const logEl = document.getElementById('log')
const log = (msg) => {
    logEl.textContent += `[${Math.round(performance.now() - t0)} мс] ${msg}\n`
    logEl.scrollTop = logEl.scrollHeight
}

// ---------- «сервер» ----------
// В реальном проекте вместо этих функций:
//   $wire.get('/api/comments?page=' + lazy.page).done(items => ...)
const delay = (ms, value) => new Promise(res => setTimeout(() => res(value), ms))

const AUTHORS = ['Анна', 'Борис', 'Вера', 'Глеб', 'Дарья', 'Егор']
const COMMENT_TEXTS = [
    'Отличная статья, спасибо!',
    'А можно подробнее про второй пункт?',
    'Не согласен, на практике всё иначе.',
    'Сохранил в закладки, перечитаю вечером.',
    'Подскажите, есть ли пример кода?',
    'Автору респект за понятное изложение.',
]
const CHAT_TEXTS = [
    'Привет! Как дела?', 'Да нормально, работаю.', 'Ты видел новый релиз?',
    'Ещё нет, посмотрю сегодня.', 'Там всё поменяли, прям сильно.',
    'Ого. Тогда точно гляну.', 'Созвонимся вечером?', 'Давай после семи.',
]

const COMMENTS_TOTAL = 50, COMMENTS_PAGE = 10
const CHAT_TOTAL = 100, CHAT_PAGE = 15

const makeComment = id => ({
    id, author: AUTHORS[id % AUTHORS.length], text: COMMENT_TEXTS[id % COMMENT_TEXTS.length],
})
const makeMessage = id => ({
    id, side: id % 3 === 0 ? 'me' : 'them',
    author: id % 3 === 0 ? 'Вы' : 'Собеседник', text: CHAT_TEXTS[id % CHAT_TEXTS.length],
})

// страница комментариев: 1, 2, 3...
const fetchComments = (page) => {
    const items = []
    for (let i = (page - 1) * COMMENTS_PAGE + 1; i <= Math.min(page * COMMENTS_PAGE, COMMENTS_TOTAL); i++) {
        items.push(makeComment(i))
    }
    return delay(700, items)
}

// сообщения старше id `before` (курсорная пагинация), по возрастанию
const fetchOlder = (before) => {
    const items = []
    for (let i = Math.max(1, before - CHAT_PAGE); i < before; i++) items.push(makeMessage(i))
    return delay(700, items)
}