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
    
    function parse_query_string(query) {
      var vars = query.split("&");
      var query_string = {};
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
          query_string[key] = decodeURIComponent(value);
          // If second entry with this name
        } else if (typeof query_string[key] === "string") {
          var arr = [query_string[key], decodeURIComponent(value)];
          query_string[key] = arr;
          // If third or later entry with this name
        } else {
          query_string[key].push(decodeURIComponent(value));
        }
      }
      return query_string;
    }

    var urlQuery = window.location.search.substring(1);
    var queryString = parse_query_string(urlQuery);
    
    if(queryString.expanded){
        $(".panel-collapse").collapse("show");
        $("#expand-all").html("Collapse All");
    }
    
    var timer = 0;
    function recheck() {
        var window_top = $(this).scrollTop();
        var window_height = $(this).height();
        var view_port_s = window_top;
        var view_port_e = window_top + window_height;

        if (timer) {
            clearTimeout(timer);
        }

        $('.fly').each(function () {
            var block = $(this);
            var block_top = block.offset().top;
            var block_height = block.height();

            if (block_top < view_port_e) {
                timer = setTimeout(function () {
                    block.addClass('show-block');
                }, 100);
            } else {
                timer = setTimeout(function () {
                    block.removeClass('show-block');
                }, 100);
            }
        });
    }

    $(function () {
        $(window).scroll(function () {
            recheck();
        });

        $(window).resize(function () {
            recheck();
        });

        recheck();
    });
});