/*
 * Get TwitPic Feed
 * 
 * Pull back TwitPic feed of images realted to linaro
 *  
 */

var tp_timeout = '';
var tp_cache = [];
var tp_request = 'http://www.linaro.org/remote/twitpic.php';
var tp_src = 'http://twitpic.com/show/thumb/'

function image_loaded(image_id){
	if($.inArray(image_id, tp_cache) > -1){
		return true;
	}else{
		return false;
	}
}

function reload_tp(){
	$.getJSON(tp_request, function(data){
		if(data.images == null){
		
		}else{
			$.each(data.images, function(i, image){
	 			if(i <= 20) {
	      			if(image_loaded(image.id) == false){
	      				tp_cache.push(image.id);
	      				var src = tp_src+image.short_id
	      				$('<img />').hide().attr('src', src).load(function(){
	      					$("#twitpic .thumbs").prepend($(this));
	      					$(this).fadeIn();
	      				});
	      			}
	     		}
			});
			tp_timeout = setTimeout("reload_tp()",30000);
		}
	});
}

$(function(){ 
	$.getJSON(tp_request, function(data){
		$('#twitpic .loader').fadeOut();
		if(data.images == null){
			$('#twitpic .error .no-images').fadeIn();
		}else{
	 		$.each(data.images, function(i, image){
	 			if(i <= 20) {
	      			tp_cache.push(image.id);
	      			var src = tp_src+image.short_id
	      			$('<img />').hide().attr('src', src).load(function(){
	      				$("#twitpic .thumbs").append($(this));
	      				$(this).fadeIn();
	      			});
	     		}
			});
			tp_timeout = setTimeout("reload_tp()",30000);
		}
 	});
});