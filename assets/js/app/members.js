$(document).ready(function(){
    $('#accordion').collapse();
    $(".panel-heading").click(function(){ 
		$('#accordion .panel-heading').not(this).removeClass('isOpen');
		$(this).toggleClass('isOpen');
		$(this).next(".panel-collapse").addClass('thePanel');
		$('#accordion .panel-collapse').not('.thePanel').slideUp("fast"); 
    	$(".thePanel").slideToggle("fast").removeClass('thePanel'); 
	});
});