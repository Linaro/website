$(document).ready(() => {
  var stickyOffset =
    $("#homepage_header").offset().top +
    $("#homepage_header").height() -
    $("#main-navigation").height();
  var sticky_icons_row = $("#header_icons_row_sticky");
  // Calculate the margin needed to add row below the navbars.
  var wrapper_margin_top = $("#main-navigation").css("height");
  function sticky_icons() {
    // Scroll value
    var scroll = $(window).scrollTop();
    if (scroll > stickyOffset) {
      sticky_icons_row.removeClass("d-none");
      sticky_icons_row.addClass("fixed-top");
      sticky_icons_row.css("margin-top", wrapper_margin_top);
    } else {
      sticky_icons_row.addClass("d-none");
      sticky_icons_row.removeClass("fixed-top");
      sticky_icons_row.css("margin-top", "0px");
    }
  }
  sticky_icons();
  $(window).scroll(function () {
    sticky_icons();
  });

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
      autoplayTimeout: 6000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }
  if ($("#sticky_icons_slider").length > 0) {
    $("#sticky_icons_slider").owlCarousel({
      loop: false,
      nav: false,
      rewind: true,
      dots: false,
      lazyLoad: false,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 5,
        },
      },
    });
  }
});
