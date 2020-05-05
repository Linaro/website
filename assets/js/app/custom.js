$(document).ready(function () {
  if ($("#projects_slider").length > 0) {
    $("#projects_slider").owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        400: {
          items: 4,
        },
        700: {
          items: 6,
        },
        1000: {
          items: 8,
        },
        1200: {
          items: 9,
        },
      },
    });
  }
  if ($("#members_slider").length > 0) {
    $("#members_slider").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: true,
      lazyLoad: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },
        1000: {
          items: 3,
          dots: true,
          nav: false,
        },
      },
    });
  }
  if ($("#testimonial_slider").length > 0) {
    $("#testimonial_slider").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay: false,
      items: 1,
    });
  }
  if ($("#engineering_slider_mobile").length > 0) {
    $("#engineering_slider_mobile").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay: true,
      rewind: true,
      autoHeight: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      items: 1,
    });
  }
  if ($("#engineering_slider").length > 0) {
    $("#engineering_slider").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoHeight: true,
      autoplay: true,
      rewind: true,
      autoplayHoverPause: true,
      autoplayTimeout: 4000,
      items: 4,
    });
  }
});
