$(document).ready(function () {

var youtube = document.querySelectorAll( ".youtube" );

for (var i = 0; i < youtube.length; i++) {

    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

    var image = new Image();
       image.src = source;
       image.addEventListener( "load", function() {
           youtube[ i ].appendChild( image );
       }(i) );

       youtube[i].addEventListener( "click", function() {
           var iframe = document.createElement( "iframe" );
           iframe.setAttribute( "frameborder", "0" );
           iframe.setAttribute( "allowfullscreen", "" );
           iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

           this.innerHsTML = "";
           this.appendChild( iframe );
       } );
};

    //Reset form when bootstrap modal closes.
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });

    $('#stacked-nav-bar').on('show.bs.collapse', function() {
        $('.nav-pills').addClass('nav-stacked');
    });
    //Unstack menu when not collapsed
    $('#stacked-nav-bar').on('hidden.bs.collapse', function() {
        $('.nav-pills').removeClass('nav-stacked');
    });

    $("a.dev-services").click(function(){
        $("#developer-services-contact-modal").modal('show');
    });
    //Scrolling sticking on IOS7
    if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)){$('html').addClass('ios7');}


    $("#closeForm").click(function(){
        $("#searchDropdown").dropdown('toggle');
    });

    $(".dropdown-toggle").dropdown();
    
    
    //Nav Bar
    
    $('.main-navbar > nav').removeClass('no-js-navbar');

    // $('.main-navbar .dropdown.main').on('show.bs.dropdown', function() {
    //   $(this).find('.dropdown-menu.menu').first().stop(true, true).css('opacity', 0).slideDown("fast").animate(
    //     { opacity: 1 },
    //     { queue: false, duration: 'fast' }
    //   );
    // });
    // 
    // $('.main-navbar .dropdown.main').on('hide.bs.dropdown', function() {
    //   $(this).find('.dropdown-menu.menu').first().stop(true, true).slideUp("fast").animate(
    //     { opacity: 0 },
    //     { queue: false, duration: 'fast' }
    //   );
    // });
    

    // $('.main-navbar li.dropdown.menu').on('hide.bs.dropdown',function() {
    //       $(this).find('.dropdown-menu.menu').stop(true, true).delay(200).fadeOut(500);
    //   });
    //   
    // $('.main-navbar li.dropdown.menu').on('show.bs.dropdown',function() {
    //       $(this).find('.dropdown-menu.menu').stop(true, true).delay(200).fadeIn(500);
    //   });
    //   
    // 
    // $('li.dropdown-submenu.sub-menu').hover(function() {
    //   $(this).find('.dropdown-menu.sub-menu').stop(true, true).delay(200).fadeIn(500);
    // }, function() {
    //   $(this).find('.dropdown-menu.sub-menu').stop(true, true).delay(200).fadeOut(500);
    // });
    
    
    

    $('.main-navbar li.dropdown.main > ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();

        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
            var newpos = - menu.width();
        } else {
            var newpos = $(this).parent().width();
        }
        menu.css({ left:newpos });

    });

    $("#searchDropdown").click(function() {
       $("#dlDropDown").dropdown("toggle");
    });

    $('body').css('zoom', '');



    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if (!a.test(this.href)) {
          $(this).attr("target","_blank");
       }
    });


    $("#searchform").show();

});

// Add slideDown animation to Bootstrap dropdown when expanding.
$('.main-navbar .dropdown.main').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).css('opacity', 0).slideDown("fast").animate(
    { opacity: 1 },
    { queue: false, duration: 'fast' }
  );
});

$('.main-navbar .dropdown.main').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast").animate(
    { opacity: 0 },
    { queue: false, duration: 'fast' }
  );
});


$(function () {

    function closeSearch() {
        var $form = $('.navbar-collapse form[role="search"].active');
        $form.removeClass('active');
        $form.trigger('reset');

    }
    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input'),
            $resetForm = $(this).closest('.navbar-collapse form[role="search"]:not(.active) button[type="reset"]')


        $form.addClass('active');
        $input.focus();



    });

    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {

        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');


        $("input[type='hidden']").attr("value", "96Boards"); //Neeeded to stop the hidden input from being not included on second search.
        if($input.val().length !== 0){
            $form.submit();
            closeSearch();
        }

    });

    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="reset"]', function(event)
    {
        closeSearch();
    });
    

});
