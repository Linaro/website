// When the DOM is ready
$(function () {
    $("#engineering_homepage_slider").owlCarousel({
      loop: false,
      navigation: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
          nav: true
        },
        733: {
          items: 3,
          nav: true
        },
        1082: {
          items: 4,
          nav: true
        },
        1200: {
          items: 4,
          nav: true
        }
      }
    });
    $("#engineering_homepage_slider_mobile").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        lazyLoad: true,
        margin: 25,
        autoplay: false,
        items: 1
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
