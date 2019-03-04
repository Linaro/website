// Fuzzy search setup
// Underscore template settings for parsing the template.
var underscore_template_settings = {
    interpolate : /\{\{(.+?)\}\}/g
};
// Setup the template string for results to be added to.
var template_string = '<tr>' +
                        '<td>{{post_title}}</td>' +
                        '<td>{{post_author}}</td>' + 
                        '<td>{{post_date_published}}</td>' +
                        '<td><a href="{{post_url}}">View post</a></td>' +
                        '<td><a href="{{post_site}}"><img class="img-responsive" src="{{site_image}}"/></a></td>' +
                        '</tr>';
// Add the template string to the _.template function
var underscore_table_row_template = _.template(template_string);
// This global array stores the concatenated and sorted jsonp data
var allJSONData = [];
// This array stores the latest JSON data that is being displayed in the results table.
var currentJSON = [];
// The counter variable counts the number of times results are added to the allJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Blog/News JSON Sources
var sources = [
    "https://www.96boards.org/assets/json/posts.json",
    "https://www.trustedfirmware.org/assets/json/posts.json",
    "https://www.op-tee.org/assets/json/posts.json",
    "https://www.devicetree.org/assets/json/posts.json",
    "/assets/json/posts.json"
];
var site_logos = {
    "https://www.96boards.org":"/assets/images/content/96boards-vertical-logo.png",
    "https://www.trustedfirmware.org":"/assets/images/content/trusted-firmware-logo.png",
    "https://www.op-tee.org":"/assets/images/content/op-tee-logo.png",
    "https://staging.linaro.org":"/assets/images/content/linaro-logo.png",
    "http://localhost:4000":"/assets/images/content/linaro-logo.png",
    "https://www.linaro.org":"/assets/images/content/linaro-logo.png"
};
// Detects if an element is in an array
function isInArray(value, array) {
    for(i=0;i<array.length;i++){
        if(array[i].indexOf(value) > -1){
            return true;
        } 
    }
    return false;
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
    currentJSON = [];
    
    // Map the original item to a new currentJSON Array
    filtered.map(function(item) {        
       currentJSON.push(item.original);
    });

    // Append results to the results html container
    $('#result_size').html(filtered.length);
    $('#results').html(results.join(''));
}
// This function gets the unique values of a certain key from an array
function getUniqueValuesOfKey(array, key){
    return array.reduce(function(carry, item){
      if(item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
      return carry;
    }, []);
}
// This function takes all the JSON data as input and adds the filter elements to the html
function addFilters(allJSONData){
    // Add the unique authors to the author select
    var unqiueAuthors = getUniqueValuesOfKey(allJSONData, "author");
    var authorElements = '<option value="choose">Choose an Author</option>';
    for(i=0;i<unqiueAuthors.length;i++){
        var authorElements = authorElements + '<option value="' + unqiueAuthors[i] + '">' + unqiueAuthors[i] + '</option>';
    }
    // Append the authors to the author select
    $("#author-select").append(authorElements);
    console.log(authorElements);
    // Add unique sites to the site select
    var uniqueSites = getUniqueValuesOfKey(allJSONData, "site");
    var siteElements = '<div class="checkbox"><label><input type="checkbox" value="all-sites" id="all-sites" checked=checked><span class="checkbox-text">All Sites</span></label></div>';
    for(i=0;i<uniqueSites.length;i++){
        var formatted_site = uniqueSites[i].replace(/(^\w+:|^)\/\//, '');
        var siteElements = siteElements + '<div class="checkbox"><label><input class="site-checkbox" type="checkbox" value="'+ uniqueSites[i] +'" id="' + formatted_site + '"><span class="checkbox-text">'+ formatted_site +'</span></label></div>';
    }
    // Append the authors to the author select
    $("#site-checkboxes").append(siteElements);
    console.log(siteElements);
    // Create a new checked_boxes array
    var checked_boxes = [];
    // Detect when a site url checkbox is checked and added any checked boxes to the checked_boxes array
    $(".site-checkbox").click(function(){
        // Set the all-sites checkbox to unchecked 
        $("#all-sites").prop("checked", false);
         // Use Jquery's grep method to loop over checked_boxes and return only the items that do no equal
        // the already checked boxes value.
        if($(this).prop("checked")){
            checked_boxes.push($(this).attr("value"));
        }
        // Remove the checkbox if already checked.
        else{
            checked_boxes.splice($.inArray($(this).attr("value"),checked_boxes) ,1);
        }
        console.log(checked_boxes);
        // Filter the results based on a key and an array of potential keys
        filter_results(currentJSON, "site", checked_boxes, underscore_table_row_template);
    });
    // Detect when all sites checkbox is clicked and then toggle other checkboxes and list allJSONData
    $("#all-sites").click(function(){
        // Set the checked_boxes array to empty
        checked_boxes = [];
        // If checkbox is already checked then make sure it stays checked. Toggling all-sites checkbox without selecting
        // other site does nothing...
        $(this).prop("checked", true);
        $(".site-checkbox").each(function(){
            // Set the all-sites checkbox to unchecked 
            $(this).prop("checked", false);
        });
        // Show all JSON data
        listResults(allJSONData);
    });
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
    if(filter == "author" || filter == "site"){
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
        for (i = 0; i < sources.length; i++) {
            $.ajax({
                url: sources[i],
                dataType: 'json',
                complete: function (jsonResponse) {
                    jsonData = JSON.parse(jsonResponse.responseText);
                    allJSONData = allJSONData.concat(jsonData);
                }
            });
        }

    }
    else{
        console.log("Not defined!");
    }    
});
// Wait for all ajax requests to stop
$(document).ajaxStop(function () {
    var sorted_data = allJSONData.sort(sort_by_date);
    addLatestNewsAndBlogs(sorted_data, sorted_data.length);
    // Event listeners
    // Monitor for the keyup event with a 1 second delay.
    $('#search-query').keyup(function () {
        delay(function () {
            listResults(allJSONData);
        }, 1000);
    });
    // Monitor for the clicking of sort filters (table headings)
    $("th.filter").click(function () {
        // Supply the filter and current setting(toggle)
        sortDataViaFilter($(this).attr("data-filter"), $(this).attr("data-toggle"));
    });
    $("#show-all-results").click(function () {
        var toggle = $(this).hasClass("active");
        if (toggle === false) {
            // Clear the search query field
            $('#search-query').val("");
            // Show all results using the allJSONData array
            listResults(allJSONData);
            $(this).addClass("active");
        }
        else {
            $(this).removeClass("active");
        }
    });
});