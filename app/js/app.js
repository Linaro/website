 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 115 //offsets for fixed header
        }, 1000);
        return false;
      }
    }
  });
  //Executed on page load with URL containing an anchor tag.
  if($(location.href.split("#")[1])) {
      var target = $('#'+location.href.split("#")[1]);
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 115 //offset height of header here too.
        }, 1000);
        return false;
      }
    }
});

// OWL JS
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    margin:10,
    nav:false,
    dots:true
  }
  );
});
//
// $(document).ready(function() {
//
//   $("#news-ticker").owlCarousel({
//
//       navigation : false, // Show next and prev buttons
//       slideSpeed : 300,
//       paginationSpeed : 400,
//       singleItem:true
//
//       // "singleItem:true" is a shortcut for:
//       // items : 1,
//       // itemsDesktop : false,
//       // itemsDesktopSmall : false,
//       // itemsTablet: false,
//       // itemsMobile : false
//
//   });
//
// });
