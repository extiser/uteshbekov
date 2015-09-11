jQuery(document).ready(function ($) {
    $('.top-menu__mobile').click(function () {
        $(this).next().slideToggle();
    });
});