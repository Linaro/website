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
function createPageElements(items) {
  var page_elements = [];
  var sorted_items = items.sort(sort_by_date);
  $.each(sorted_items, function (key, val) {
    if (
      (val.hasOwnProperty("item_video_url") &&
        val.item_video_url !== undefined &&
        val.item_video_url.length > 0) ||
      (val.hasOwnProperty("item_presentation_url") &&
        val.item_presentation_url !== undefined &&
        val.item_presentation_url.length > 0)
    ) {
      // Create a new element for resource
      var page_element =
        "<div class='col col-12 col-sm-6 col-lg-4 mb-3 d-flex'>";
      page_element += '<div class="card">';
      page_element +=
        '<img class="card-img-top lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="' +
        val.item_thumbnail +
        '" alt="Card image cap">';
      page_element += '<div class="card-body">';
      page_element += '<h5 class="card-title">' + val.item_title + "</h5>";
      if (
        val.hasOwnProperty("item_presentation_url") &&
        val.item_presentation_url !== undefined &&
        val.item_presentation_url.length > 0
      ) {
        page_element +=
          '<a target="_blank" href="' +
          val.item_url +
          '" class="m-2 btn btn-primary">View Presentation</a>';
      }
      if (
        val.hasOwnProperty("item_video_url") &&
        val.item_video_url !== undefined &&
        val.item_video_url.length > 0
      ) {
        page_element +=
          "<a target='_blank' class='m-2 btn btn-primary' href='" +
          val.item_url +
          "'>Watch Video</a>";
      }
      page_element += "</div>";
      var dateObj = new Date(extractDateString(val.item_date_published));
      page_element +=
        "<div class='card-footer'><small class='text-muted'>" +
        dateObj.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }) +
        "</small></div>";
      page_element += "</div>";
      page_element += "</div>";
      page_elements.push(page_element);
    }
  });
  console.log(sorted_items.slice(0, 9));
  return page_elements.slice(0, 9);
}

$(document).ready(function () {
  // Check the related_resources div exists
  if ($("#related_resources").length > 0) {
    // Tracks to search resources for.
    var required_tracks_url = $("#related_resources").data(
      "related-tracks-url"
    );
    $.getJSON(required_tracks_url, function (data) {
      console.log(data);
      // Loop through all resources for specific connect
      $.each(data, function (key, specific_resource) {
        var event = specific_resource.event_id.toUpperCase();
        // Create a new item
        var item = {
          item_title: specific_resource.title,
          item_url: specific_resource.url,
          item_youtube_video_url: specific_resource.youtube_video_url,
          item_thumbnail: specific_resource.thumbnail,
          item_event: "Linaro Connect " + event,
          item_date_published: specific_resource.date_published,
        };
        if (specific_resource.hasOwnProperty("amazon_s3_presentation_url")) {
          item["item_presentation_url"] =
            specific_resource.amazon_s3_presentation_url;
        }
        if (specific_resource.hasOwnProperty("amazon_s3_video_url")) {
          item["item_video_url"] = specific_resource.amazon_s3_video_url;
        }
        console.log(item);
        // Add item to the items array
        items.push(item);
      });
    });
  }
});
// Display resources once the ajaxStop event is fired
$(document).ajaxStop(function () {
  console.log(items);
  var page_elements = createPageElements(items);
  $("#related_resources").html(page_elements);
});
