$(document).ready(function(){
    
    var stickyOffset = $('#main-navigation').offset().top;
    var universalNav = $('#universal-nav');
    var wrapper = $('#wrapper');

    $(window).scroll(function(){
        
        var sticky = $('#main-navigation'),
        scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) 
        {
          sticky.removeClass('navbar-static');
          wrapper.css('margin-top', $('#main-navigation').height() + universalNav.height();
          universalNav.hide();
          sticky.addClass('navbar-fixed-top');
        }   
        else 
        {
            sticky.removeClass('navbar-fixed-top');
            wrapper.css('margin-top', '0px');
            universalNav.slideDown("fast");
            sticky.addClass('navbar-static');
        }
        
    });

    
});
