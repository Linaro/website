var items = [];
function extractDateString(dateString) {
  var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
  var arr = rx.exec(dateString);
  return arr[0];
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
  return (
    new Date(b.item_date_published).getTime() -
    new Date(a.item_date_published).getTime()
  );
}
// This takes and array of items and creates the neccessary page elements
function createPageElements(items){
    var page_elements = [];
    var sorted_items = items.sort(sort_by_date);
    $.each(sorted_items, function (key, val) {
        // Create a new element for resource
        var page_element = "<a href='" + val.item_url + "'>";
        page_element += "<div class='col-xs-12 col-sm-4'>";
        page_element += "<div class='resource_block_inner' style='background-image:url(" + val.item_thumbnail + ")'>";
        page_element += "<h3>" + val.item_title + "</h3>";
        page_element += "<small>" + extractDateString(val.item_date_published) + "</small>";
        page_element += "<small>" + val.item_event + "</small>";
        if (val.hasOwnProperty("item_presentation_url")) {
            page_element += "<a class='btn btn-primary' href='" + val.item_presentation_url + "'>Presentation</a>";
        }
        page_element += "<a class='btn btn-primary' href='" + val.item_video_url + "'>Video</a>";
        page_element += "</div>";
        page_element += "</div>";
        page_element += "</a>";
        page_elements.push(page_element);
    });
    return page_elements;
}

$(document).ready(function(){
    // Check the related_resources div exists
    if($("#related_resources").length > 0){
        // Tracks to search resources for.
        var required_tracks = $("#related_resources")
          .data("related-tracks")
          .split(",")
          .map(function(item) {
            return item.trim();
          });

        // Fetch relevant Connect resources
        $.getJSON("https://connect.linaro.org/assets/json/connects.json", function (data) {
            $.each(data, function (key, val) {
                var start_date = new Date(val["start-date"]).getTime();
                if (start_date < new Date().getTime()){
                    // Get the JSON url for each Linaro Connect
                    var json_url = "https://connect.linaro.org/assets/json/" + val.id.toLowerCase() + "/data.json";
                    $.getJSON(json_url, function (data) {
                        // Loop through all resources for specific connect
                        $.each(data, function (key, specific_resource) {
                            // Find resources that match the required tracks
                            if (specific_resource.hasOwnProperty("tracks")){
                                // Loop over required tracks
                                $.each(required_tracks, function(key, val){
                                    // Check that the resource contains one of the required tracks
                                    if(specific_resource.tracks.indexOf(val) > -1){
                                        var event = specific_resource.event_id.toUpperCase();
                                        // Create a new item
                                        var item = {
                                            item_title: specific_resource.title,
                                            item_url: specific_resource.url,
                                            item_video_url: specific_resource.youtube_video_url,
                                            item_thumbnail: specific_resource.thumbnail,
                                            item_event: "Linaro Connect " + event,
                                            item_date_published: specific_resource.date_published
                                        };
                                        if (specific_resource.hasOwnProperty("amazon_s3_presentation_url")) {
                                            item["item_presentation_url"] = specific_resource.amazon_s3_presentation_url;
                                        }
                                        // Add item to the items array
                                        items.push(item);
                                        // Break out of each loop
                                        return false;
                                    }
                                });
                            }
                        });
                    });
                }
            });
        });
    }
});
// Display resources once the ajaxStop event is fired
$(document).ajaxStop(function () {
    var page_elements = createPageElements(items);
    $("#resources").html(page_elements);
    $("#resources_count").html(page_elements.length.toString() + " resources found");
});
