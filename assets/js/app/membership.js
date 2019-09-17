$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ container: 'body'})
    });

    var projectSlider = $("#projects-slider");

    projectSlider.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 4
            },
            700: {
                items: 6
            },
            1000: {
                items: 8
            },
            1200: {
                items: 12
            }
        }
    });

    var relatedNewsSlider = $("#related-news-slider");

    relatedNewsSlider.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    var testimonialSlider = $("#testimonial_slider");

    testimonialSlider.owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});
