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
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 6
            },
            1200: {
                items: 8
            }
        }
    });
    // Fly in JS
    var timer = 0;
    function recheck() {
        var window_top = $(this).scrollTop();
        var window_height = $(this).height();
        var view_port_s = window_top;
        var view_port_e = window_top + window_height;

        if (timer) {
            clearTimeout(timer);
        }

        $('.fly').each(function () {
            var block = $(this);
            var block_top = block.offset().top;
            var block_height = block.height();

            if (block_top < view_port_e) {
                timer = setTimeout(function () {
                    block.addClass('show-block');
                }, 100);
            } else {
                timer = setTimeout(function () {
                    block.removeClass('show-block');
                }, 100);
            }
        });
    }

    $(function () {
        $(window).scroll(function () {
            recheck();
        });

        $(window).resize(function () {
            recheck();
        });

        recheck();
    });


});

