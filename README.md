<img src="wex.png" style="margin-top: 10px; margin-bottom: 0; padding-bottom: 0">

# 🌀 Wex.

Wex - это реактивный CDN фронтенд фреймворк. Он использует API jQuery, на основании самого jQuery. <br>
Другими словами, используя реактивность Wex, Вы так же поулчаете огромный арсенал jQuery из коробки. <br>
<br>
> [!IMPORTANT]
> Очень приятный момент!⚡ Wex позволяет использовать Вам бесплатный хостинг GitHub Pages, не платя за него ничего. 
> При этом, Вы получаете возможность создавать компоненты! То есть Вам не потребуется дублировать каждый HTML!

## 🔌⚡ Подключение.

```html 
<script src="https://unpkg.com/jquery/dist/jquery.min.js"></script>
<script src="https://cbcdn.githack.com/wemmbley/wex/raw/branch/master/dist/wex.min.js"></script>
```

## Философия

Философия нашего движка простая: ясность и минимализм. Функционал должен быть чёткий, ясный, понятный. <br>
Функционала должно быть немного: только самое необходимое. Он полный аналог Vue/React/Svelte но в CDN. <br>
<br>
Другими словами, Вам не понадобиться огромный npm-сборщик, папка npm_modules, и новые концепции. <br>
Так же Вам не понадобятся фреймворки, по типу Next/Nuxt, когда захотите сделать SEO на сайте. <br>
<br>
Бонусом же Вы получаете всю экосистему jQuery с миллионами плагинами сразу из коробки. <br>
И это всё делается в одну строчку кода. Буквально. Выглядит она следующим образом: <br>
```html 
<script src="https://cdn.jsdelivr.net/gh/wemmbley/wex-js@master/dist/wex.min.js"></script>
```

## Что умеет Wex?

- система компонентов которые подключаются прямо по ссылке
- реактивное состояние приложения как во всех фреймворках.
- шаблонизатор, прямой конкурент Vue: `w-for`, `w-if` и другие.
- двусторонний биндинг как во всех фреймворках.
- императивный подход jQuery в chain-цепочках, вместо декларативного black-box-magic современных фреймворках.
- встроенные хуки как в React: `$mount`, `$update` и другие.
- свой собственный Ajax пишуший прямо в стейт, такого нигде не было.
- свой собственный аналог Pinia/Redux - запись стейта прямо в `localStorage`.
- компонентная система как React/Vue.
- открытый исходный код, который стремится к минимализму, а не к экспансии.
- и многое-многое другое. Ознакомиться можете в документации.

## Примеры кода

### ⚡Использование компонентов отдельно из другого HTML-файла! (работает на GitHub Pages!)
`Components/MyComponent.html`:
```html 
<template>
    <slot></slot>
    <p>Встроенный стейт: {{ myState }}</p>
    <p>Статический пропс: {{ varStatic }}</p>
    <p>Динамический пропс: {{ varDynamic }}</p>
</template>

<script type="module">
    export default ($component) => $component
        .state({
            myState: 'Кнопка',
            varStatic: '', 
            varDynamic: '',
        })
</script>
```
`Index.html`:
```html
<template id="app">
    <testComponent varStatic="123" :varDynamic="myVar">
        Содержимое слота
    </testComponent>
</template>

<script>
    $('#app')
       .state({ myVar: 'test' })
       .component('testComponent', 'Components/MyComponent.html')
       .mount()
</script>
```
Внимание! Ваш тэг компонента ВСЕГДА должен иметь закрывающий тэг! `<MyTag></MyTag>`

### 🌏 Загрузка JSON-данных по API-ссылке с плавным появлением при клике на кнопку.

```html 
<template id="wire-test">
    <button class="my-btn">Загрузить посты</button>
    <div w-for="post in posts" w-transition>
        <a href="#">{{ post.title }}</a>
    </div>
</template>
```
```js 
$('#wire-test')
  .state({ posts: {} })
  .on('click', '.my-btn', state => {
    $wire
      .get('https://jsonplaceholder.typicode.com/posts/')
      .to(state.posts)
  })
  .mount()
```

### 🍍 Хранилище стейта в браузере (аналог Pinia/Redux).

Сохраняет все данные положенные в `state.sotorage` между обновлениями страницы блягодаря технологии `cookies`.

```html 
<template id="score">
    <p>Score: {{ storage.score }}</p>
    <button class="increase-btn">Increase</button>
</template>
```
```js 
$('#score')
  .state({
    storage: {
      score: 0,
      test: 1,
    }
  })
  .on('click', '.increase-btn', state => {
    state.storage.score = ++state.storage.score;
  })
  .mount()
```

### 🛤️️ Классический SPA-Роутер без перезагрузок.

```html 
<template id="app">
    <nav>
        <a href="#/" w-navigate="push">Главная</a>
        <a href="#/catalog" w-navigate="push">Каталог</a>
        <a href="#/about" w-navigate="push">О нас</a>
    </nav>

    <div w-route="'/'">
        <h1>Добро пожаловать!</h1>
        <p>Это главная страница.</p>
    </div>

    <div w-route="'/catalog'">
        <h1>Каталог товаров</h1>
    </div>

    <div w-route="'/about'">
        <h1>О нас</h1>
    </div>
</template>

<script>
    $('#app').state().mount()
</script>
```

### 🐢 Объявление собственных методов (замена on-событиям)

```html 
<template id="app">
    <p>Count: {{ count }}</p>
    <button w-on="click:increase">Increase</button>
    <button w-on="click:decrease">Decrease</button>
</template>

<script>
    $('#app')
        .state({ count: 0 })
        .method('increase', () => {
            state.count += 1;
        })
        .method('decrease', () => {
            if(state.count >= 1) {
                state.count += 1; 
            }
        })
        .mount()
</script>
```

### ☄️ Модалки Bootstrap 5 из коробки с глубокой интеграцией в стейт.

Не забудьте подключить сам Bootstrap 5 перед использованием.

```html 
<template id="app">
    <button class="btn btn-primary" w-modal="myModal">Toggle myModal</button>
</template>

<div id="myModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Моя модалка</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">Просто контент</div>
        </div>
    </div>
</div>
```
```js 
$('#app')
    .state({
        modal: { 
            myModal: false 
        }
    })
    .mount()
```

### 🐳 TODO-Лист (сборка всего функционала Wex в одном месте)

```html 
<template id="app">
    <div>
        <input w-bind="newTodo" placeholder="Новая задача..." />
        <button w-on="click:addTodo">Добавить</button>

        <div w-for="todo,index in todos traceby todo.id">
            <span>{{ todo.text }}</span>
            <button w-on="click:remove(todo.id)">Удалить</button>
        </div>
    </div>
</template>

<script>
    // Выбираем элемент для монтирования
    $('#app')

        // Обьявляем реактивный стейт
        .state(() => ({
            newTodo: '',
            todos: [],
        }))

        // Кнопка добавить
        .method('addTodo', function (state) {
            // Наш инупт забинжен через w-bind="newTodo", данные сразу тут будут
            let inputText = state.newTodo.trim()

            let newTodo = {
                id: Date.now(), // даём уникальный ид
                text: inputText // заносим сюда текст из инпута
            }

            state.todos.push(newTodo) // пушим наш новый туду в стейт
            state.newTodo = '' // очищаем инпут, ведь он забинжен и очистится вместе со стейтом
        })

        // Кнопка удалить
        .method('remove', function (state, id) {

            // формируем список новых тудушек, покаместь пустой
            let newTodos = []

            // пробегаемся по текущим тудушкам чтобы вычислить все айдишники
            for (let i = 0; i < state.todos.length; i++) {

                // создаём новую локальную переменную с текущей тудушкой
                let todo = state.todos[i]

                // проверяем что текущая тудушка из нашей for-крутилки
                // не равна айдишнику удаляемой тудушки
                if (todo.id !== id) {

                    // все остальные тудушки кроме текущей удаляемой добавляем в новый список
                    newTodos.push(todo)
                }
            }

            // реактивно обновляем стейт новыми тудушками без той что мы удалили
            state.todos = newTodos
        })

        // Монтируем
        .mount()
</script>
```

За бОльшим количеством примеров обращайтесь в официальную книгу сообщества в папке `book`.

## API и документация.

Со всеми дополнительными данными Вы можете ознакомиться в папке `docs` или `book` текущего репозитория. <br>
<br>
Первая папка `docs` хранит упорядоченный API, который больше подойдёт как справочник. <br>
Вторая папка `book` хранит электронную книгу, которую удобно читать при освоении фреймворка. <br>
<br>
Стоит так же учесть, что книга написано универсальным языком. Понятия, которые там излагаются, <br>
применимы и на другие реактивные фронент-фреймворки. <br>
<br>
Если Вы используете ИИ в своём обучении/разработке, то настоятельно Вам рекомендуем взять файл `ai.txt` <br>
Который находится по следующиму пути: `book/ai.txt`. В нём собрана вся книга в одном файле понятном ИИ.

## Поддержка.

На 2027 год фреймворк активно поддерживается и разрабатывается. <br>
<br>
О любых багах Вы можете сообщить открыв issue прямо в репозитории по следующей ссылке: https://github.com/wemmbley/wex/issues <br>
<br>
Если Вы заинтересованы в поддержке фреймворка то можете открыть PR: https://github.com/wemmbley/wex/pulls <br>
Поблагодарить автора в денежном или словестном эквиваленте можно тут: https://t.me/saint_lucius <br>
Там же можете и подсказать какую-либо идею под реализацию! ⚡⚡⚡