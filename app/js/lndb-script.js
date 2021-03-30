$(function() {

// Function to get the paratmeter from the url
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

//Delete Duplicate posts

var removeDuplicates = function removeDuplicates()
{
	var liText = '', liList = $('.lndb-list li'), listForRemove = [];
	$(liList).each(function () {

	var text = $(this).text();

	if (liText.indexOf('|'+ text + '|') == -1)
	liText += '|'+ text + '|';
	else
	listForRemove.push($(this));

	});

	$(listForRemove).each(function () { $(this).remove(); });
}


// Find the number of groups/posts in the parameter
var fetch_posts = function fetch_posts() {
	var result = [];
	var groupLists = getUrlParameter('group');
	if (groupLists)
	{
	var groupListsArr = groupLists.split(",");
	$.each(groupListsArr, function( index, value ) {
		send_request(value);
	});
	}
	var memberLists = getUrlParameter('member');
	if (memberLists)
	{
	var memberListsArr = memberLists.split(",");
	$.each(memberListsArr, function( index, value ) {
		send_request(value);
	});
	}
	var productLists = getUrlParameter('product');
	if (productLists)
	{
	var productListsArr = productLists.split(",");
	$.each(productListsArr, function( index, value ) {
		send_request(value);
	});
	}

}
var get_posts = function get_posts(params,divClass) {
var values = params.split(",")
$.each(values, function( index, value ) {
		send_request(value,divClass);
	});
}
// Sends Ajax requests to fetch the posts based on the input passed from fetch_posts function
var send_request = function send_request(searchText,divClass) {
	var url = '';
	if (searchText.toLowerCase() == "all")
	{
		url = 'http://news.linaro.org/api/getposts?perpage=100'
	}
	else
	{
		url = 'http://news.linaro.org/api/search_posts/?query='+searchText+'&search_level=2&perpage=100'
	}
	$.ajax({
	  url: url,
	  type: 'GET',
	  dataType: 'jsonp',
	  success: function (data, response) {
	    if (response == 'success') {
	        lndb_listPosts(data.result,searchText,divClass);
	    // return data.result;
	    }
	    else
	    {
	    	console.log("Error in server")
	    }
	  }
	});
}

// Function used to populate the page using the response from the server
var lndb_listPosts = function lndb_listPosts(data,searchText,divClass) {
	//console.log(data);
//  var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';
	var output = '';
  $.each(data, function(key, val) {

  	var taxonomiesData = "";
  	  	var selectedData = [];

	    if(val.taxonomies.groups)
	    {
	    	
	    	for (i = 0; i < val.taxonomies.groups.length; i++) { 
	        taxonomiesData += '<small class="lndbgroup group-' + val.taxonomies.groups[i].name + '">' + val.taxonomies.groups[i].name + '</small> ';
	        selectedData.push(val.taxonomies.groups[i].name);
	    	}
	    	taxonomiesData += '/ ';
	    }

	     if(val.taxonomies.members)
	    {
	    	for (i = 0; i < val.taxonomies.members.length; i++) { 
	        taxonomiesData += '<small class="lndbmember member-'+ val.taxonomies.members[i].name +'">' + val.taxonomies.members[i].name + '</small> ';
	        selectedData.push(val.taxonomies.members[i].name);
	   		 }
	   		taxonomiesData += '/ ';
	    }
	    

	    
	    if(val.taxonomies.products)
	    {
	    	for (i = 0; i < val.taxonomies.products.length; i++) { 
	        taxonomiesData += '<small class="lndbproduct product-'+ val.taxonomies.products[i].name +'">' + val.taxonomies.products[i].name + '</small> ';
	        selectedData.push(val.taxonomies.products[i].name);
	   		 }
	   		taxonomiesData += '/ ';
	    }

	    taxonomiesData += '<small class="lndb-date">' + val.post_date + '</small>';


	   var lowerCaseItems = $.map(selectedData, function(n,i){return n.toLowerCase();});

		if ((lowerCaseItems.indexOf(searchText.toLowerCase())>=0) || (searchText.toLowerCase()=='all'))
		{
			output += '<li class="lndb-' + val.post_format 	+ '">';
			output += '<a href=' + val.custom_fields.source_url + ' target="_blank">';
			output += val.post_title;
			output += '</a>';

			output += '<div class="lndb-meta">'; // Div holder for meta info

			output  = output + taxonomiesData;

			output += '</div>';
			// Meta info finish

			output += '</li>';
		}


  }); //go through each post
  
  $(divClass).append(output);
  removeDuplicates();

  
} //listPosts
//fetch_posts();
});
