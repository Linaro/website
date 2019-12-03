// When the DOM is ready
$(document).ready(function () {

    $("#engineering_homepage_slider_mobile").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        lazyLoad: true,
        margin: 25,
        autoplay: false,
        items: 1
    });
    $("#engineering_homepage_slider").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        lazyLoad: true,
        margin: 25,
        autoplay: false,
        items: 4
    });

    $("#testimonial_slider").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        lazyLoad: true,
        margin: 25,
        autoplay: false,
        items: 1
    });

});
