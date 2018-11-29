
// This array stores the concatenated jsonp data
var allConnectJSONData = []
// The counter variable counts the number of times results are added to the allConnectJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Connect Data Sources
var connectJSONSources = []
// Define the sources to append the jsonp script elements and retreive the data.
var connect_sources = [
    "https://connect.linaro.org"
];
// Get the connects.json file then pa.titlerse and loop through each connect adding the jsonp script
function connects(connectsJSON){
    // Since we are just showing the top 10 resources just grab the first connect in the json output
    var jsonp_url = connect_sources[0] + "/assets/json/" + connectsJSON[0].id.toLowerCase() + "/data.json?callback=connectResources";
    connectJSONSources.push(jsonp_url);
    // Create a new script element and set the type and src
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = jsonp_url;
    // Append the new script element to the head.
    $("head").append(script);
}
// Sort array by key ascending
function sortByKeyAsc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
// Sort array by key descending
function sortByKeyDesc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
// This function handles the jsonp data we receive
function connectResources(jsonData){
    //var sorted_data = sortByKeyAsc(jsonData, "title");
    var random_data = getRandom(jsonData, 10);
    addLatestResources(random_data, 10);
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestResources(sorted_data, number_of_items){
    var listElements = '';
    for(var i=0;i<number_of_items;i++){
        resource = sorted_data[i];
        if(resource.url.indexOf("https://connect.linaro.org") == -1){
            // Connect URL exits set default image to the connect logo.
            resource_image = "/assets/images/content/connect-icon-alt.png";
        }
        else{
            resource_image = "/assets/images/content/connect-icon-alt.png";
        }
        var textEnd = "";
        if(post.title.length > 40){
            textEnd = "...";
        }
        listElements += '<a target="_self" href="' + resource.url +'">';
        listElements += '<li class="list-group-item fly">';
        listElements += '<span class="post-title">' + resource.title.substring(0, 40) + textEnd + '</span>';
        listElements += '<span class="post-date">' + formatDate(Date.parse(extractDateString(resource.date_published)))  + '</span>';
        listElements += '<span class="post-site"><img class="img-responsive" src="'+ resource_image + '"/></span>';
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
            var jsonp_url = connect_sources[i] + "/assets/json/connects.json?callback=connects";
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