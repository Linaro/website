
// Takes incoming JSON data and appends the data to allData array
// This function handles the jsonp data we receive
var allJSONData = []
var counter = 0;
// Define the sources to append the jsonp script elements and retreive the data.
var sources = [
    "https://www.96boards.org",
    "https://www.trustedfirmware.org",
    "https://www.op-tee.org"
];

function sortResults(data, prop, asc) {
    var return_data = data.sort(function(a, b) {
        if (asc) {
            return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
        } else {
            return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    return return_data;
}


function func(jsonData){
    if(counter == (sources.length - 1)){
        allJSONData = allJSONData.concat(jsonData);
        var sorted_data = sortResults(allJSONData, "date_submitted", false);
        addLatestNewsAndBlogs(sorted_data);
    }
    else{
        allJSONData = allJSONData.concat(jsonData);
        counter += 1;
    }
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNewsAndBlogs(allJSONData){
    console.log(allJSONData);
    var listElements = '';
    var len = allJSONData.length;
    for(var i=0;i<len;i++){
        post = allJSONData[i];
        listElements += '<a target="_blank" href="' + post.url +'"><li class="list-group-item fly">' + post.title + ' - ' + post.date_published + ' - ' + post.site + '</li></a>';
    }
    console.log(listElements);
    $("#all-news-and-blogs").html(listElements);
}

// Check to see if the document has loaded 
$(document).ready(function () {
    // Check to see if the div we are adding to exists
    if ($("#all-news-and-blogs").length > 0) {

        // var allJSON = [];
        // $.each(sources, function (index, url) {
        //     var jsonp_url = url + "/assets/json/posts.json?callback=func";
        //     var json_data = $.getJSON( jsonp_url, {
        //         format: "jsonp"
        //         })); // Request all data simultaneously
        //     allJSON.push(json_data);
        //     console.log(json_data);
        //     console.log("Fetched the data for: " + jsonp_url);
        // });
        // $.when.apply($, allJSON).then(function () { // We have all data, merge it
        //     var data = [];
        //     $.each(allJSON, function (index, chunk) {
        //         data = data.concat(chunk);
        //     });
        //     addLatestNewsAndBlogs(data); // Do whatever you want to this new collection of data
        // });

        // Loop through the sources and the separate script elements.
        for(i=0;i<sources.length;i++){
            // Adds a list element for each result in the JSONP data
            // JSONP url
            var jsonp_url = sources[i] + "/assets/json/posts.json?callback=func";
            // Add the JSONP to a script element
            console.log("Adding script element");
            console.log(jsonp_url);
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