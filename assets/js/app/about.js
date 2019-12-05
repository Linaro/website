$(document).ready(function() {
  $("#members_slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    lazyLoad: true,
    autoplay: false,
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
