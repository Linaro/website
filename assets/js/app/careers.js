$(document).ready(function () {
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
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: false,
      },
    },
  });
  $(document).ready(() => {
    // YouTube embed
    const videoEmbed = $(".videoPlayer");
    function updateVideo() {
      const id = $(".videoPlayer").attr("id").replace("vid-", "");
      $(".videoPlayer").addClass("embed-responsive-16by9"); // adds responsive styling to the video iframe via a css class
      $(".videoPlayer").html(
        '<iframe src="//www.youtube.com/embed/' +
          id +
          '?autoplay=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>'
      );
    }
    videoEmbed.on("click", updateVideo);
  });
});
