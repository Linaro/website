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
    "https://www.opendataplane.org/"
];
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
// Fuse Search Setup
function fuse_setup(json_data){
    var options = {
        shouldSort: true,
        tokenize: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "title",
          "url",
          "author",
          "summary"
      ]
      };
    // Instantiate the Fuse javascript class.
    var fuse = new Fuse(json_data, options); // "list" is the item array
    // Wait for input change and then filter results based on value
    $('#search-query').on('input',function(e){
        var result = fuse.search($(this).val());
        // Add results to table
        addLatestNewsAndBlogs(result, result.length);
    });
}
// This function handles the jsonp data we receive
function func(jsonData){
    if(counter == (sources.length - 1)){
        allJSONData = allJSONData.concat(jsonData);
        var sorted_data = allJSONData.sort(sort_by_date);
        addLatestNewsAndBlogs(sorted_data, sorted_data.length);
    }
    else{
        allJSONData = allJSONData.concat(jsonData);
        counter += 1;
    }
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestNewsAndBlogs(allJSONData, number_of_items){
    console.log(allJSONData);
    var tableRow  = '';
    for(var i=0;i<number_of_items;i++){
        post = allJSONData[i];
        tableRow += '<a href="' + post.url + '">';
        tableRow += '<tr>';
        tableRow += '<th scope="row">' + i + '</th>';
        tableRow += '<td>' + post.title + '</td>';
        tableRow += '<td>' + post.author + '</td>';
        tableRow += '<td><a href="' + post.site + '">' + post.site + '</a></td>';
        tableRow += '</tr>';
        tableRow += '</a>';
    }
    $("#results").html(tableRow);
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
        }
    }
    else{
        console.log("Not defined!");
    }    
});