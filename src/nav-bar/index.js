import './index.scss'

(function (window, document) {
    var menu = document.getElementById('menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function (el) {
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    document.getElementById('toggle').addEventListener('click', function (e) {
        toggleMenu();
        e.preventDefault();
    });

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(window, window.document);

$('.custom-toggle').hover(function () {
    if (!$(this).hasClass('x')) $(this).addClass('x')
}, function () {
    if (!$('.custom-wrapper').hasClass('open')) $(this).removeClass('x')
})
$('.pure-menu-heading').click(function () {
    if ($('.slider').slick) {
        $('.slider').slick('slickGoTo', 0)
    }
})
$('.pure-menu-link').click(function () {
    const slideIndex = $(this).data('slide')
    if ($('.slider').slick) {
        $('.slider').slick('slickGoTo', slideIndex)
    }
})