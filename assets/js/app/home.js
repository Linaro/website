// When the DOM is ready
$(document).ready(function() {
  $("#testimonial_slider").owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    lazyLoad: true,
    margin: 25,
    autoplay: false,
    items: 1
  });
});
