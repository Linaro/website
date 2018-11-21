// Define the sources to append the jsonp script elements and retreive the data.
var project_data_sources = [
    ""
];
// This function handles the jsonp data we receive
function projects(jsonData){
    //var sorted_data = sortByKeyAsc(jsonData, "title");
    addProjectsData(jsonData, 10);
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addProjectsData(sorted_data, number_of_items){
    var listElements = '';
    for(var i=0;i<number_of_items;i++){
        project = sorted_data[i];
        listElements += '<li class="list-group-item fly">';
        listElements += '<span class="project-title">' + project.name + '</span>';
        listElements += '<span class="project-stats">' + project.acceptedPatches  + '</span>';
        listElements += '</li>';
    }
    $("#latest-patches").html(listElements);
}
// Check to see if the document has loaded 
$(document).ready(function () {
    // Check to see if the div we are adding to exists
    if ($("#latest-patches").length > 0) {
        // Loop through the sources and the separate script elements.
        for(i=0;i<project_data_sources.length;i++){
            // Adds a list element for each result in the JSONP data
            // JSONP url
            var jsonp_url = project_data_sources[i] + "/assets/json/top10Projects.json?callback=projects";
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