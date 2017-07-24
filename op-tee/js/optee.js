$(document).ready(function () {

	$('a').each(function() {
	   var a = new RegExp('/' + window.location.host + '/');
	   if (!a.test(this.href)) {
	      $(this).attr("target","_blank");
	   }
	});


	$(".projects-row i").mouseenter(function(){
	    $(this).addClass('animated jello');
	});
	$(".projects-row i").mouseleave(function(){
	    $(this).removeClass('animated jello');
	});


    $(".projects-row span").mouseenter(function(){
	    $(this).addClass('animated jello');
	});
	$(".projects-row span").mouseleave(function(){
	    $(this).removeClass('animated jello');
	});


	$("span.spanwobble").mouseenter(function(){
	    $(this).addClass('animated jello');
	});
	$("span.spanwobble").mouseleave(function(){
	    $(this).removeClass('animated jello');
	});

});
