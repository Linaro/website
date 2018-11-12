// This global array stores the concatenated and sorted jsonp data
var allJSONData = [];
// This array stores the latest JSON data that is being displayed in the results table.
var currentJSON = [];
// The counter variable counts the number of times results are added to the allJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Define the sources to append the jsonp script elements and retreive the data.
var sources = [
    "https://www.96boards.org",
    "https://www.trustedfirmware.org",
    "https://www.op-tee.org",
    "https://www.opendataplane.org",
    ""
];
var site_logos = {
    "https://www.96boards.org":"/assets/images/content/96boards-vertical-logo.png",
    "https://www.trustedfirmware.org":"/assets/images/content/trusted-firmware-logo.png",
    "https://www.op-tee.org":"/assets/images/content/op-tee-logo.png",
    "https://www.opendataplane.org":"/assets/images/content/ODP-logo.png",
    "https://staging.linaro.org":"/assets/images/content/linaro-logo.png"
};
function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0]; 
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_desc(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_asc(a, b) {
    return new Date(a.date_published).getTime() - new Date(b.date_published).getTime();
}
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}
// Fuzzy Search Setup
function listResults(json_data) {
    // Define the underscore.js template settings.
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
    };  
    // Specify a new html _.template
    var listItemTemplate = _.template('<tr><td>{{post_title}}</td><td>{{post_author}}</td><td>{{post_date_published}}</td><td><a href="{{post_url}}">View post</a></td><td><a href="{{post_site}}"><img class="img-responsive" src="{{site_image}}"/></a></td></tr>');
    // Get the search query val which we are searching for.
    var search = $('#search-query').val();
    // Fuzzy search options
    var options = {
        pre: "<b>"
      , post: "</b>"

      // Each element in the data is an object, not a string. We can pass in a
      // function that is called on each element in the array to extract the
      // string to fuzzy search against. In this case, element.dir
      , extract: function(entry) {
            return entry.title + '::' + entry.author;
        }
    }
    // Filter!
    var filtered = fuzzy.filter(search, json_data, options);
    // Map the results to the html we want generated
    var results = filtered.map(function(result){
        var items = result.string.split('::');
        // Check if the author is set and if not then replace with stripped url.
        var author = result.original.author;
        if(author == "undefined" || author == ""){
            author = result.original.site.replace(/(^\w+:|^)\/\//, '');
        }
        else{
            author = items[1];
        }
        var formatted_date = extractDateString(result.original.date_published);
        var formatted_site = result.original.site.replace(/(^\w+:|^)\/\//, '');
        var site_image = site_logos[result.original.site];
        return listItemTemplate({
         post_url: result.original.url
        , post_title: items[0]
        , post_author: author
        , post_date_published: formatted_date
        , post_site: result.original.site
        , post_site_formatted: formatted_site
        , site_image: site_image
        });
    });
    // Add original JSON array to currentJSON
    var currentJSON = [];
    
    // Map the original item to a new currentJSON Array
    filtered.map(function(item) {        
       currentJSON.push(item.original);
    });

    // Append results to the results html container
    $('#result_size').html(filtered.length);
    $('#results').html(results.join(''));
}
// This function takes all the JSON data as input and adds the filter elements to the html
function addFilters(allJSONData){
    
}
// This function handles the jsonp data we receive
function func(jsonData){
    if(counter == (sources.length - 1)){
        allJSONData = allJSONData.concat(jsonData);
        var sorted_data = allJSONData.sort(sort_by_date_desc);
        addLatestNewsAndBlogs(sorted_data, sorted_data.length);
        allJSONData = sorted_data;
        currentJSON = sorted_data;
        // Add the filters based on JSON Data
        addFilters(allJSONData);
        // Add the size of the results
        $('#size').html(sorted_data.length);
        // Run function on each keyup event triggered by the search input
    }
    else{
        allJSONData = allJSONData.concat(jsonData);
        counter += 1;
    }
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNewsAndBlogs(results_data, number_of_items){
    $('#result_size').html(results_data.length);
    var tableRow  = '';
    for(var i=0;i<number_of_items;i++){
        post = results_data[i];
        var author = post.author;
        if(author == "undefined" || author == ""){
            author = post.site.replace(/(^\w+:|^)\/\//, '');
        }
        var site_image = site_logos[post.site];
        tableRow += '<tr>';
        tableRow += '<td>' + post.title + '</td>';
        tableRow += '<td>' + post.author + '</td>';
        tableRow += '<td>' + extractDateString(post.date_published) + '</td>';
        tableRow += '<td><a href="' + post.url + '">View post</a></td>';
        tableRow += '<td><a href="' + post.site + '"><img class="img-responsive" src="'+ site_image + '"/></a></td>';
        tableRow += '</tr>';
    }
    $("#results").html(tableRow);
}
// Delay function - used to detect when the user has stopped typing.
var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

// This function sorts the data via a pre-defined filter
function sortDataViaFilter(filter, toggle){
    // Filter data based on the date
    if(filter == "date"){
        if(toggle == "desc"){
            var sortedJsonData = currentJSON.sort(sort_by_date_asc);
            listResults(sortedJsonData);
            $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "asc");
        }
        if(toggle == "asc"){
            // Sort data by date desc using the currentJSON being displayed in the table
            var sortedJsonData = currentJSON.sort(sort_by_date_desc);
            listResults(sortedJsonData);
            // Set the new data-toggle value
            $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "desc");
        }
    }
    // Filter the data based on the author
    if(filter == "author"){
        if(toggle == "desc"){
            var sortedJsonData = currentJSON.sort(dynamicSort(filter));
            listResults(sortedJsonData);
            $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "asc");
        }
        if(toggle == "asc"){
            // Sort data by date desc using the currentJSON being displayed in the table
            var sortedJsonData = currentJSON.sort(dynamicSort("-" + filter));
            listResults(sortedJsonData);
            // Set the new data-toggle value
            $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "desc");
        }
    }
    // Filter the data based on the source
    if(filter == "site"){
        if(toggle == "desc"){
            var sortedJsonData = currentJSON.sort(dynamicSort(filter));
            listResults(sortedJsonData);
            $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "asc");
        }
        if(toggle == "asc"){
            // Sort data by date desc using the currentJSON being displayed in the table
            var sortedJsonData = currentJSON.sort(dynamicSort("-" + filter));
            listResults(sortedJsonData);
            // Set the new data-toggle value
            $("th.filter[data-filter='" + filter + "']").attr("data-toggle", "desc");
        }
    }
}
// Check to see if the document has loaded 
$(document).ready(function () {
    // Check to see if the div we are adding to exists
    if ($("#results").length > 0) {
        // Loop through the sources and the separate script elements.
        for(i=0;i<sources.length;i++){
            // Adds a list element for each result in the JSONP data
            // JSONP url
            var jsonp_url = sources[i] + "/assets/json/posts.json?callback=func";
            // Add the JSONP to a script element
            // Create a new script element and set the type and src
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = jsonp_url;
            // Append the new script element to the head.
            $("head").append(script);
            // Monitor for the keyup event with a 1 second delay.
            $('#search-query').keyup(function() {
                delay(function(){
                    listResults(allJSONData);
                }, 1000 );
            });
            // Monitor for the clicking of sort filters (table headings)
            $("th.filter").click(function(){
                // Supply the filter and current setting(toggle)
                sortDataViaFilter($(this).attr("data-filter"), $(this).attr("data-toggle"));
            });
            $("#show-all-results").click(function(){
                var toggle = $(this).hasClass("active");
                if(toggle === false){
                    // Clear the search query field
                    $('#search-query').val("");
                    // Show all results using the allJSONData array
                    listResults(allJSONData);
                    $(this).addClass("active");
                }
                else{
                    $(this).removeClass("active");
                }
                
            });
        }
    }
    else{
        console.log("Not defined!");
    }    
});