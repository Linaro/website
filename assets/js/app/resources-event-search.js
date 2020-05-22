// This global array stores the concatenated and sorted jsonp data
var allConnectResourcesData = [];
// The counter variable counts the number of times results are added to the allJSONData array
// so we know when to process the concatenated data.
var counter = 0;
// Define the sources to append the jsonp script elements and retreive the data.
var event_data_sources = ["https://connect.linaro.org"];
// Stores the URLS for the JSON data file of each Connect
var connectJSONSources = [];
// Get the connects.json file then pa.titlerse and loop through each connect adding the jsonp script
function connects(connectsJSON) {
  // Loop through the connects.json index JSON file.
  for (i = 0; i < connectsJSON.length; i++) {
    // Get the URL of the Connect Resources JSON file
    var jsonp_url =
      event_data_sources[0] +
      "/assets/json/" +
      connectsJSON[i].id.toLowerCase() +
      "/data.json?callback=connectResources";
    // Add the new array to the connectJSONSourcs Array
    connectJSONSources.push(jsonp_url);
    // Create a new script element and set the type and src
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = jsonp_url;
    // Append the new script element to the head.
    $("head").append(script);
  }
}
// This function takes the JSONP data for a specific conncet and concatenates the data.
function connectResources(connectJSON) {
  // Check to see if this is the last source to be loaded in.
  if (counter == connectJSONSources.length - 1) {
    // Concat the final data source to the master JSON array
    allConnectResourcesData = allConnectResourcesData.concat(connectJSON);
    // Sort the data by the date
    var sorted_data = allConnectResourcesData.sort(sort_by_date);
    // Add the resources to the HTML
    console.log(allConnectResourcesData);
    console.log(connectJSONSources);

    addConnectResources(sorted_data, sorted_data.length);
    allJSONData = sorted_data;
    // Add the size of the results
    $("#size").html(sorted_data.length);
    // Run function on each keyup event triggered by the search input
  } else {
    allConnectResourcesData = allConnectResourcesData.concat(connectJSON);
    counter += 1;
  }
}
function extractDateString(dateString) {
  var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
  var arr = rx.exec(dateString);
  return arr[0];
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date(a, b) {
  return (
    new Date(b.date_published).getTime() - new Date(a.date_published).getTime()
  );
}
// Fuzzy search function - this takes the JSON data and then lists results based on the search query from #search-query input.
function listResults(json_data) {
  // Define the underscore.js template settings.
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,
  };
  // Specify a new html _.template
  var listItemTemplate = _.template(
    '<tr class=""><td>{{resource_title}}</td><td>{{resource_summary}}</td><td>{{resource_tracks}}</td><td>{{resource_event}}</td><td>{{resource_speakers}}</td><td>{{resource_resources}}</td><td><a href="{{resource_url}}">View Resource</a></td></tr>'
  );
  // Get the search query val which we are searching for.
  var search = $("#search-query").val();
  // Fuzzy search options
  var options = {
    pre: "<b>",
    post: "</b>",

    // Each element in the data is an object, not a string. We can pass in a
    // function that is called on each element in the array to extract the
    // string to fuzzy search against. In this case, element.dir
    extract: function (entry) {
      return entry.title + "::" + entry.summary;
    },
  };
  // Filter!
  var filtered = fuzzy.filter(search, json_data, options);
  // Map the results to the html we want generated
  var results = filtered.map(function (result) {
    // Split the search items
    // These are the items that are used to match search queries against
    var items = result.string.split("::");

    // Check to see if there is a session ID
    var session_id = "";
    if (result.original.session_id !== "") {
      session_id = result.original.session_id;
    } else {
      sesssion_id = "N/A";
    }
    // Get the session tracks
    var session_tracks = "";
    if (result.original.tracks !== "") {
      session_tracks = result.original.tracks;
    } else {
      session_tracks = "N/A";
    }
    // Get the resource resources - ie video/presentation links
    var resource_resources = "";
    // if(result.)

    // Get the resource speakers
    var resource_speakers = "";
    for (i = 0; i < result.original.speakers.length; i++) {
      resource_speakers =
        resource_speakers + result.original.speakers[i].name + " ";
    }

    return listItemTemplate({
      resource_url: result.original.url,
      resource_title: items[0],
      resource_summary: items[1],
      resource_tracks: session_tracks,
      resource_resources: resource_resources,
      resource_date_published: result.original.date_published,
      resource_session_id: session_id,
    });
  });
  // Append results to the results html container
  $("#result_size").html(filtered.length);
  $("#results").html(results.join(""));
}
// Process all JSON, get the latest news and blog posts and add to the list.
function addConnectResources(results_data, number_of_items) {
  $("#result_size").html(results_data.length);
  var tableRow = "";
  for (var i = 0; i < number_of_items; i++) {
    resource = results_data[i];
    var author = resource.author;
    if (author === "undefined" || author == "") {
      author = resource.url.replace(/(^\w+:|^)\/\//, "");
    }
    // Show the first 10 items and let the rest appear on scroll.
    if (number_of_items > 10 && i < 10) {
      tableRow += "<tr>";
    } else {
      tableRow += '<tr class="">';
    }

    // Get trimmed versions of resource title/summary
    var trimmed_title = resource.title.substring(0, 30);
    var trimmed_summary = resource.summary.substring(0, 40);

    tableRow += "<td>" + trimmed_title + "</td>";
    tableRow +=
      '<td data-toggle="tooltip" data-container="body" data-placement="top" title="' +
      resource.summary +
      '">' +
      trimmed_summary +
      "</td>";
    tableRow += "<td>" + extractDateString(resource.date_published) + "</td>";
    tableRow += '<td><a href="' + resource.url + '">View Resource</a></td>';
    tableRow += "<td>" + resource.title + "</td>";
    tableRow += "</tr>";
  }
  $("#results").html(tableRow);
}
// Delay function - used to detect when the user has stopped typing.
var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

// Check to see if the document has loaded
$(document).ready(function () {
  // Check to see if the div we are adding to exists
  if ($("#results").length > 0) {
    // Get the JSONP url of the main connects.json file.
    var jsonp_url =
      event_data_sources[0] + "/assets/json/connects.json?callback=connects";
    // Add the JSONP to a script element
    // Create a new script element and set the type and src
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = jsonp_url;
    // Append the new script element to the head.
    $("head").append(script);
    // Detect when the user has stopped typing then show the results.
    $("#search-query").keyup(function () {
      delay(function () {
        listResults(allConnectResourcesData);
      }, 1000);
    });
    // Enable Bootstrap tooltips for displaying details of resources
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({ container: "body" });
    });
  } else {
    console.log("Not defined!");
  }
});
