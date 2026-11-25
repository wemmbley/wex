const path = require('path');
const fs = require('fs');

function mergeMdPlugin(options = {}) {
    const { src, output, enabled } = options;
    if (!enabled) return null;

    return {
        name: 'merge-md-plugin',
        buildStart() {
            try {
                const files = fs.readdirSync(src)
                    .filter(file => file.endsWith('.md'))
                    .sort();

                const content = files
                    .map(file => fs.readFileSync(path.join(src, file), 'utf-8'))
                    .join('\n\n');

                fs.mkdirSync(path.dirname(output), { recursive: true });
                fs.writeFileSync(output, content, 'utf-8');

                console.log(`Merged ${files.length} MD files into ${output}`);
            } catch (err) {
                this.error(err);
            }
        }
    };
}

module.exports = (env = {}) => {
    const docs = !!env.docs;
    const dist = path.join(__dirname, 'dist');

    // Rolldown передаёт в globals уже разрешённый абсолютный путь (/.../src/wex.js), а не строку из import,
    // поэтому ключ externals ищем сначала точно, потом по имени файла ('../../wex.js' -> 'wex.js')
    const makeGlobals = (externals) => (id) => {
        if (externals[id]) return externals[id];
        const base = id.split(/[\\/]/).pop();
        const key = Object.keys(externals).find(k => k.split('/').pop() === base);
        return key ? externals[key] : undefined;
    };

    const createConfig = ({
                              entry,
                              filename,
                              library,
                              externals = {},
                              minimize = false,
                              plugins = [],
                              outputDir = dist,
                          }) => ({
        input: path.join(__dirname, entry),

        output: {
            dir: outputDir,
            entryFileNames: minimize
                ? filename.replace('.js', '.min.js')
                : filename,

            format: library ? 'umd' : 'es',
            name: library,
            exports: 'named',
            globals: makeGlobals(externals),
            minify: minimize,
        },

        external: Object.keys(externals),
        plugins: [...plugins],

        transform: {
            oxc: true,
        }
    });

    const coreExternals = { jquery: 'jQuery' };
    const docLib = { 'WexDoc': 'WexDoc' };

    // ---------- Ядро ----------
    const coreBundle = createConfig({
        entry: 'src/index.js',
        filename: 'wex.js',
        library: 'jqvm',
        externals: coreExternals,
        plugins: [
            mergeMdPlugin({
                src: path.join(__dirname, 'education/Книга'),
                output: path.join(__dirname, 'education/AI.txt'),
                enabled: docs,
            })
        ]
    });

    const coreMin = createConfig({
        entry: 'src/index.js',
        filename: 'wex.js',
        library: 'jqvm',
        externals: coreExternals,
        minimize: true,
    });

    // Исправленная функция для плагинов (путь строится правильно без дублирования)
    // entryFile нужен, когда исходник называется не так, как итоговый бандл (router.js -> wex-router.js)
    const createPluginConfigs = (entryPath, filename, library, externals = {}, entryFile = filename) => {
        const options = {
            entry: `src/plugins/${entryPath}/${entryFile}.js`,
            filename: `${filename}.js`,
            library,
            externals,
            outputDir: path.join(dist, 'plugins'),
        };

        return [
            createConfig(options),
            createConfig({ ...options, minimize: true }),
        ];
    };

    // ---------- Плагины ----------
    // Ключи externals должны совпадать с import-путями в исходниках плагинов
    // (src/plugins/editor/*.js импортирует '../../wex.js' и './wex-doc.js').
    // Иначе rolldown считает ядро внутренним модулем и встраивает его копию
    // в бандл плагина: директивы регистрируются в приватной копии и не работают.
    const docConfigs = createPluginConfigs('editor', 'wex-doc', 'WexDoc', { '../../wex.js': 'jqvm' });
    const editorConfigs = createPluginConfigs(
        'editor',
        'wex-editor',
        'WexEditor',
        {
            '../../wex.js': 'jqvm',
            './wex-doc.js': 'WexDoc'
        }
    );
    const datatable = createPluginConfigs('datatable', 'wex-datatable');
    const datepicker = createPluginConfigs('datepicker', 'wex-datepicker');
    const select = createPluginConfigs('smart-select', 'wex-smart-select');
    const gallery = createPluginConfigs('carousel', 'wex-carousel');
    const dropzone = createPluginConfigs('dropzone', 'wex-dropzone');
    const highlighter = createPluginConfigs('highlighter', 'wex-code', 'WexCode');
    const imageEditor = createPluginConfigs(
        'image-editor',
        'wex-image-editor',
        'WexImageEditor'
    );
    const draggable = createPluginConfigs('draggable', 'wex-draggable');
    const monsterMenu = createPluginConfigs('monster-menu', 'wex-monster-menu');
    // Роутер: ядро и $wire берутся из глобала jqvm (общий экземпляр с основным движком),
    // ключи externals должны совпадать с import-путями в src/plugins/router/router.js
    const router = createPluginConfigs(
        'router',
        'wex-router',
        'WexRouter',
        {
            '../../wex.js': 'jqvm',
            '../../wire.js': 'jqvm',
        },
        'router'
    );

    return [
        coreBundle, coreMin,
        ...docConfigs,
        ...editorConfigs,
        ...datatable,
        ...datepicker,
        ...select,
        ...gallery,
        ...dropzone,
        ...highlighter,
        ...imageEditor,
        ...draggable,
        ...monsterMenu,
        ...router,
    ];
};