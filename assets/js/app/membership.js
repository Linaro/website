$(document).ready(function() {
  $(function() {
    $('[data-toggle="tooltip"]').tooltip({ container: "body" });
  });
  $(document).ready(function() {
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
          nav: false
        },
        1000: {
          items: 3,
          dots: true,
          nav: false
        }
      }
    });
  });

  var projectSlider = $("#projects_slider");

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
        items: 9
      }
    }
  });
});
