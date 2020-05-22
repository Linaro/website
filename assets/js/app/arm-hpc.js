$(document).ready(function () {
  var featuredSpeakersSlider = $("#featured-speakers-slider");

  featuredSpeakersSlider.owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    responsiveClass: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });
});
