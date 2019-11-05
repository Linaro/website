$(document).ready(function(){
    $('#accordion').collapse();

    $(".panel-heading").click(function(){
		// $('#accordion .panel-heading').not(this).removeClass('isOpen');
		// $(this).toggleClass('isOpen');
		$(this).next(".panel-collapse:not(.in)").collapse("show");
        $(this).next(".panel-collapse.in").collapse("hide");
	});

    // Expand and collapse all Collapse panels
    $("#expand-all").click(function(){
        if($(this).html() == "Expand All"){
            $(".panel-collapse").collapse("show");
            $(this).html("Collapse All");
        }
        else{
            $(".panel-collapse").collapse("hide");
            $(this).html("Expand All");
        }
    });

   $(function() {
     // check if there is a hash in the url
     if (window.location.hash != "") {
       // remove any accordion panels that are showing (they have a class of 'in')
       $(".panel-collapse.collapse").removeClass("in");

       // show the panel based on the hash now:
       $(window.location.hash + ".panel-collapse.collapse").collapse("show");
     }
   });

});
