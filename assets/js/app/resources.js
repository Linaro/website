
// This array stores the concatenated jsonp data
var allJSONData = []
// The counter variable counts the number of times results are added to the allJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Define the sources to append the jsonp script elements and retreive the data.
var sources = [
    "https://www.96boards.org",
    "https://www.trustedfirmware.org",
    "https://www.op-tee.org",
    "https://www.opendataplane.org"
];
var site_logos = {
    "https://www.96boards.org":"/assets/images/content/96boards-vertical-logo.png",
    "https://www.trustedfirmware.org":"/assets/images/content/trusted-firmware-logo.png",
    "https://www.op-tee.org":"/assets/images/content/op-tee-logo.png",
    "https://www.opendataplane.org":"/assets/images/content/ODP-logo.png",
    "http://localhost:4001":"/assets/images/content/linaro-logo.png"
};
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
function formatDate(timestamp) {
    date = new Date(timestamp);
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var date_formatted =  day + ' ' + monthNames[monthIndex] + ' ' + year;

    return date_formatted;
}
function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0]; 
}
// This function handles the jsonp data we receive
function func(jsonData){
    if(counter == (sources.length - 1)){
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
    var listElements = '';
    for(var i=0;i<number_of_items;i++){
        post = allJSONData[i];
        var site_image = site_logos[post.site];
        listElements += '<a target="_self" href="' + post.url +'">';
        listElements += '<li class="list-group-item fly">';
        listElements += '<span class="post-title">' + post.title + '</span>';
        listElements += '<span class="post-date">' + formatDate(Date.parse(extractDateString(post.date_published)))  + '</span>';
        listElements += '<span class="post-site"><img class="img-responsive" src="'+ site_image + '"/></span>';
        listElements += '</li>';
        listElements += '</a>';
    }
    $("#all-news-and-blogs").html(listElements);
}
// Check to see if the document has loaded 
$(document).ready(function () {
    // Check to see if the div we are adding to exists
    if ($("#all-news-and-blogs").length > 0) {
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
        }
    }
    else{
        console.log("#all-news-and-blogs Not defined!");
    }    
});