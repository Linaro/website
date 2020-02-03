$(document).ready(function() {
  $(".members_slider").each(function(index) {
    $(this).owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      rewind: true,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      responsiveClass: true,
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
        }
      }
    });
  });
});
