$(document).ready(function() {
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
