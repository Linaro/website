// This array stores the concatenated jsonp data
var allConnectJSONData = [];
var connectsJSONData = [];
// The counter variable counts the number of times results are added to the allConnectJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Connect Data Sources
var connectJSONSources = [];
// Define the sources to append the jsonp script elements and retreive the data.
var connect_sources = ["https://connect.linaro.org/assets/json/connects.json"];
var current_connect_with_resources = "BKK19";

// Get the connects.json file then pa.titlerse and loop through each connect adding the jsonp script
function getConnectsJSON(connectsJSON) {
  // Gets the latest Connect's resources
  var json_url =
    "https://connect.linaro.org/assets/json/" +
    current_connect_with_resources.toLowerCase() +
    "/data.json";
  $.ajax({
    url: json_url,
    dataType: "json",
    complete: function (jsonResponse) {
      jsonData = JSON.parse(jsonResponse.responseText);
      var random_data = getRandom(jsonData, 10);
      addLatestResources(random_data, 10);
    },
  });
}
// Sort array by key ascending
function sortByKeyAsc(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
// Sort array by key descending
function sortByKeyDesc(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
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
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
  return (
    new Date(b.date_published).getTime() - new Date(a.date_published).getTime()
  );
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addLatestResources(sorted_data, number_of_items) {
  var listElements = "";
  for (var i = 0; i < number_of_items; i++) {
    resource = sorted_data[i];
    if (resource.url.indexOf("https://connect.linaro.org") == -1) {
      // Connect URL exits set default image to the connect logo.
      resource_image = "/assets/images/content/connect-icon-alt.png";
    } else {
      resource_image = "/assets/images/content/connect-icon-alt.png";
    }
    var textEnd = "";
    if (resource.title.length > 40) {
      textEnd = "...";
    }
    listElements += '<a target="_self" href="' + resource.url + '">';
    listElements += '<li class="list-group-item">';
    listElements +=
      '<span class="post-title">' +
      resource.title.substring(0, 40) +
      textEnd +
      "</span>";
    listElements +=
      '<span class="post-date">' +
      formatDate(Date.parse(extractDateString(resource.date_published))) +
      "</span>";
    listElements +=
      '<span class="post-site"><img class="img-fluid" src="' +
      resource_image +
      '"/></span>';
    listElements += "</li>";
    listElements += "</a>";
  }
  $("#event-resources").html(listElements);
}
// Check to see if the document has loaded
$(document).ready(function () {
  // Check to see if the div we are adding to exists
  if ($("#event-resources").length > 0) {
    // Loop through the sources and the separate script elements.
    for (i = 0; i < connect_sources.length; i++) {
      $.ajax({
        url: connect_sources[i],
        dataType: "json",
        complete: function (jsonResponse) {
          jsonData = JSON.parse(jsonResponse.responseText);
          getConnectsJSON(jsonData);
        },
      });
    }
  } else {
    console.log("Not defined!");
  }
});
