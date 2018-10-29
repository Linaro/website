
// This array stores the concatenated jsonp data
var allJSONData = []
// The counter variable counts the number of times results are added to the allJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Define the sources to append the jsonp script elements and retreive the data.
var connect_sources = [
    "https://staging.connect.linaro.org"
];
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
// This function handles the jsonp data we receive
function connectResources(jsonData){
    if(counter == (connect_sources.length - 1)){
        allJSONData = allJSONData.concat(jsonData);
        var sorted_data = allJSONData.sort(sort_by_date);
        addLatestNewsAndBlogs(sorted_data, 10);
    }
    else{
        allJSONData = allJSONData.concat(jsonData);
        counter += 1;
    }
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNewsAndBlogs(allJSONData, number_of_items){
    console.log(allJSONData);
    var listElements = '';
    for(var i=0;i<number_of_items;i++){
        post = allJSONData[i];
        listElements += '<a target="_self" href="' + post.url +'">';
        listElements += '<li class="list-group-item fly">';
        listElements += '<span class="post-title">' + post.title + '</span>';
        listElements += '<span class="post-date">' + post.date_published + '</span>';
        listElements += '<span class="post-site">'+ post.site + '</span>';
        listElements += '</li>';
        listElements += '</a>';
    }
    $("#event-resources").html(listElements);
}
// Check to see if the document has loaded 
$(document).ready(function () {
    // Check to see if the div we are adding to exists
    if ($("#event-resources").length > 0) {
        // Loop through the sources and the separate script elements.
        for(i=0;i<connect_sources.length;i++){
            // Adds a list element for each result in the JSONP data
            // JSONP url
            var jsonp_url = connect_sources[i] + "/assets/json/yvr18/data.json?callback=connectResources";
            // Add the JSONP to a script element
            // Create a new script element and set the type and src
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = jsonp_url;
            // Append the new script element to the head.
            $("head").append(script);
        }
    }
    else{
        console.log("Not defined!");
    }    
});