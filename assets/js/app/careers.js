$(document).ready(function() {
  var careersCarousel = $(".careers-carousel");
  careersCarousel.owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    lazyLoad: true,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false
      }
    }
  });
});
