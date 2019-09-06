$(document).ready(function() {

    $(".timeline-jump-btn").click(function(){
        var slideIndex = $(this).data("slide-index");
        $('.timeline-carousel').trigger('to.owl.carousel', [slideIndex, 500, true]);
    });

  var timelineCarousel = $("#timelineCarousel");
  var officeCarousel = $(".office-carousel");
  var remoteTeamCarousel = $(".remote-team-carousel");
  var orgCarousel = $(".organisation-carousel");

  timelineCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:true,
      dots: false,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              nav: true
          },
          733:{
              items:3,
              nav: true

          },
          1082:{
              items:4,
              nav: true

          },
          1200:{
              items:4,
              nav: true
              }
      }
  });
  orgCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: true,
              nav: false
          },
          1000:{
              items:1,
              nav: false

          }
      }
  });
  officeCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: true,
              nav: false
          },
          1000:{
              items:1,
              nav: false

          }
      }
  });
  remoteTeamCarousel.owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay:false,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: true,
              nav: false
          }
      }
  });
});
