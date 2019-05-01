// Define the sources to append the jsonp script elements and retreive the data.
var project_data_sources = [
    "https://static.linaro.org/assets/json/top10Projects.json"
];
var jsonData = "";
// Process all JSON, get the latest news and blog posts and add to the list.
function addProjectsData(sorted_data, number_of_items){
    var listElements = '';
    for(var i=0;i<number_of_items;i++){
        project = sorted_data[i];
        listElements += '<li class="list-group-item">';
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
            $.ajax({
                url: project_data_sources[i],
                dataType: 'json',
                complete: function (jsonResponse) {
                    jsonData = JSON.parse(jsonResponse.responseText);
                }
            });
        }

    }
    else{
        console.log("Latest Patches JS included but #latest-patches is not defined!");
    }    
});
// Wait for all ajax requests to stop
$(document).ajaxStop(function () {
    console.log(jsonData);
    addProjectsData(jsonData, 10);
});