 $(document).ready(function () {



$('.slot').findHeights();
$('.meeting').findHeights();
$('.marker').findHeights();
$('.schedule').findHeights();
$('.heading').findHeights();



 });
 
 $(function() {
  $("a").attr("target","_blank");
});
 
 $.fn.findHeights = function() {
 
 var multiplier = 0.9;
 
	$(this).each(function(){
	
	var curHeight = parseInt($(this).height());
	var curWidth = parseInt($(this).width());
	var curTop = parseInt($(this).css('top'));
	var curLeft = parseInt($(this).css('left'));

	var newHeight = (curHeight * multiplier);
	var newWidth = (curWidth * multiplier);
	var newTop = (curTop * multiplier);
	var newLeft = (curLeft * multiplier);
	

	$(this).css({'height': newHeight, 'min-height': newHeight, 'width': newWidth, 'min-width': newWidth, 'top' : newTop, 'left' : newLeft});
	
	});
	return this;
};

