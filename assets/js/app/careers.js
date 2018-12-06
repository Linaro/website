$(document).ready(function() {

  var careersCarousel = $(".careers-carousel");

  careersCarousel.owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      lazyLoad: true,
      autoplay:false,
      autoplayHoverPause:true,
      responsiveClass: true,
      navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1,
              dots: false,
              nav: true
          }
      }
  });
  $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });

  var youtube = document.querySelectorAll( ".youtube" );
        
  for (var i = 0; i < youtube.length; i++) {
      
      var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

      var image = new Image();
              image.src = source;
              image.addEventListener( "load", function() {
                  youtube[ i ].appendChild( image );
              }( i ) );
      
              youtube[i].addEventListener( "click", function() {

                  var iframe = document.createElement( "iframe" );

                          iframe.setAttribute( "frameborder", "0" );
                          iframe.setAttribute( "allowfullscreen", "" );
                          iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                          this.innerHTML = "";
                          this.appendChild( iframe );
              } );	
  }

});