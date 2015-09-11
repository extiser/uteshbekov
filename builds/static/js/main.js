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
        pauseOnHover: false
    });

    $('.slider').append('<div class="slick-pause"></div>');

    $('.slick-pause').click(function () {
        if ($(this).hasClass('active')) {
            $('#slider').slick('slickPlay');
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('#slider').slick('slickPause');
        }
    });
});
jQuery(document).ready(function ($) {
    $('.top-menu__mobile').click(function () {
        $(this).next().slideToggle();
    });
});