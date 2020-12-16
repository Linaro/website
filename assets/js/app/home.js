$(document).ready(() => {
  if ($("#members_home_slider").length > 0) {
    $("#members_home_slider").owlCarousel({
      loop: true,
      nav: false,
      rewind: true,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }
  if ($("#stats_slider").length > 0) {
    $("#stats_slider").owlCarousel({
      loop: true,
      nav: false,
      rewind: true,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplayTimeout: 4000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }
});
