$(document).ready(function() {
    function darkModeSwitcher() {
        let $body = $('body');
        let isDark = localStorage.getItem('wex-dark-mode');

        if(isDark === 'true') {
            $body.addClass('dark');
        } else if (isDark === 'false') {
            $body.removeClass('dark');
        }

        darkModeClasses();

        $('[data-wex-event="themeSwitch"]').on('click', function() {
            $body.toggleClass('dark');

            let isDark = $body.hasClass('dark');

            (isDark)
                ? localStorage.setItem('wex-dark-mode', 'true')
                : localStorage.setItem('wex-dark-mode', 'false');

            darkModeClasses();
        });
    }
    darkModeSwitcher();

    function isDarkMode() {
        let isDark = localStorage.getItem('wex-dark-mode');

        if(isDark === 'true') {
            return true;
        } else if (isDark === 'false') {
            return false;
        } else {
            return $('body').hasClass('dark');
        }
    }

    function modalsInit() {
        let buttonsTogglers = $('[data-wex-event]');

        buttonsTogglers.each((index, el) => {
            const $eventName = $(el).attr('data-wex-event');

            if($eventName.includes('openModal')) {
                let regex = /openModal\((\w+)\)/;
                let matches = $eventName.match(regex);
                let modalId = matches[1];
                let modal = $('#' + modalId).first();

                if(modal.length === 0) {
                    throw Error('Matched modal for ' + $eventName + ' not found. Please, add a modal with this id on page.');
                }

                $(el).on('click', () => {
                    requestAnimationFrame(() => {
                        modal.parent().removeClass('hide');
                        disableScroll();
                    });
                });

                modal.find('[data-wex-dismiss-modal]').each((index, el) => {
                    $(el).on('click', () => {
                        modal.parent().addClass('modal-closing');

                        modal.parent().on('transitionend', function() {
                            modal.parent().addClass('hide');
                            modal.parent().removeClass('modal-closing');
                            modal.parent().off('transitionend');
                            enableScroll();
                        });
                    });
                });
            }
        });
    }
    modalsInit();

    let scrollbarWidth;

    function disableScroll() {
        scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    function enableScroll() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }

    function darkModeClasses() {
        $('[data-wex-dark]').each((index, el) => {
            $node = $(el);

            let nodeDarkClasses = $node.attr('data-wex-dark');

            if(isDarkMode()) {
                $node.addClass(nodeDarkClasses);
            } else {
                $node.removeClass(nodeDarkClasses);
            }
        });
    }
    darkModeClasses();

    function getBreakpoint(width) {
        if (width < 576) return "xs";      // Мобильные (портрет)
        if (width < 992) return "sm";      // Планшеты
        if (width < 1200) return "md";     // Ноутбуки, малые десктопы
        if (width < 1920) return "lg";     // Большие десктопы (Full HD)
        if (width < 3800) return "xl";     // 2K (QHD) дисплеи & UltraWide
        return "2xl";                      // 4K и выше
    }

    const $responsiveElements = $('[data-wex-xs], [data-wex-sm], [data-wex-md], [data-wex-lg], [data-wex-xl], [data-wex-2xl]');
    const breakpointSizes = ["xs", "sm", "md", "lg", "xl", "2xl"];

    // Получаем индекс брейкпоинта для сравнения
    function getBreakpointIndex(breakpoint) {
        return breakpointSizes.indexOf(breakpoint);
    }

    function applyResponsiveClasses() {
        let width = window.innerWidth;
        let currentBreakpoint = getBreakpoint(width);
        let currentBreakpointIndex = getBreakpointIndex(currentBreakpoint);

        $responsiveElements.each((index, el) => {
            let $node = $(el);
            let appliedClasses = [];
            let highestAppliedBreakpoint = null;
            let highestBreakpointIndex = -1;

            // Сначала удаляем все классы от всех брейкпоинтов
            breakpointSizes.forEach(size => {
                let classes = $node.attr(`data-wex-${size}`);
                if (classes) {
                    $node.removeClass(classes);
                }
            });

            // Затем ищем подходящий брейкпоинт - наибольший, который меньше или равен текущему
            for (let i = 0; i <= currentBreakpointIndex; i++) {
                let breakpointSize = breakpointSizes[i];
                let classes = $node.attr(`data-wex-${breakpointSize}`);

                if (classes) {
                    highestAppliedBreakpoint = breakpointSize;
                    highestBreakpointIndex = i;
                    appliedClasses = classes;
                }
            }

            // Проверяем, есть ли брейкпоинт выше текущего
            let hasHigherBreakpoint = false;
            for (let i = currentBreakpointIndex + 1; i < breakpointSizes.length; i++) {
                if ($node.attr(`data-wex-${breakpointSizes[i]}`)) {
                    hasHigherBreakpoint = true;
                    break;
                }
            }

            // Если текущий брейкпоинт точно совпадает с атрибутом, применяем его стили
            if ($node.attr(`data-wex-${currentBreakpoint}`)) {
                $node.addClass($node.attr(`data-wex-${currentBreakpoint}`));
            }
            // Если найден наибольший подходящий брейкпоинт ниже текущего и нет брейкпоинта выше текущего
            else if (highestAppliedBreakpoint && !hasHigherBreakpoint) {
                $node.addClass(appliedClasses);
            }
        });
    }

    // Запускаем при загрузке
    $(document).ready(() => {
        applyResponsiveClasses();
    });

    // Следим за ресайзом с debounce для оптимизации
    let resizeTimeout;
    $(window).on("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(applyResponsiveClasses, 100); // Debounce на 100мс
    });
});