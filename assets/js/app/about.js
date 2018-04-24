$(document).ready(function() {

  var owl = $(".timeline-carousel");
  var orgCarousel = $(".organisation-carousel");
  var officeCarousel = $(".office-carousel");
  var remoteTeamCarousel = $(".remote-team-carousel");
 
  owl.owlCarousel({
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
              items:6,
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