$(document).ready(function () {
    $('#slider').slick({
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        draggable: true,
        fade: true,
        dots: false,
        pauseOnHover: true
    });
});
jQuery(document).ready(function ($) {
    $('.top-menu__mobile').click(function () {
        $(this).next().slideToggle();
    });
});