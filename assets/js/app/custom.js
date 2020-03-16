$(document).ready(function() {
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
          nav: false
        },
        1000: {
          items: 3,
          dots: true,
          nav: false
        }
      }
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
      items: 1
    });
  }
});
