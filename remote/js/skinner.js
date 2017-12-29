 $(document).keypress(function(event) {

var classList = [];
var idList = [];


$('div').each(function(i) {
	if($(this).attr('class')){
		classList.push('.' + $(this).attr("class"));
			$(this).prepend('<p class="labeller">CLASS: ' + $(this).attr("class") + '</p>').addClass('outlined');
			
    		}
    	
    	
    	
    	if($(this).attr('id')){
    	idList.push('#' + $(this).attr("id"));
    	$(this).prepend('<p class="labeller">ID: ' + $(this).attr("id") + '</p>').addClass('outlined');
    }
    

    
  });


var classListAlert = classList.join(', ');
var idListAlert = idList.join(', ');
alert (classListAlert);
alert (idListAlert);

 });
