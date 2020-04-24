function func(jsonData) {
  var listElements = "";
  var len = jsonData.length;
  for (var i = 0; i < len; i++) {
    blogEntry = jsonData[i];
    listElements +=
      '<a target="_blank" href="' +
      blogEntry.url +
      '"><li class="list-group-item">' +
      blogEntry.title +
      "</li></a>";
  }
  console.log(listElements);
  $("#boards-blogs").html(listElements);
}

$(document).ready(function () {
  if ($("#boards-blogs").length > 0) {
    // JSONP url
    var jsonp_url =
      "https://www.96boards.org/assets/json/blog.json?callback=func";
    // Add the JSONP to a script element
    console.log("Adding script element");
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = jsonp_url;
    $("head").append(script);
    // This function handles the jsonp data we receive
    // Adds a list element for each result in the JSONP data
  } else {
    console.log("Not defined!");
  }
});
