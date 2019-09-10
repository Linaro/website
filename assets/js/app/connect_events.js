$(document).ready(function() {
  function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0];
  }
  var connects_json_file =
    "https://connect.linaro.org/assets/json/connects.json";
  var previous_connects = [];
  var future_connects = [];
  $.getJSON(connects_json_file, function(data) {
    $.each(data, function(key, val) {
      var start_date = val["start-date"];
      var formatted_date = extractDateString(start_date);
      var connect_date_obj = new Date(formatted_date);
      var todays_date = new Date();
      if (todays_date > connect_date_obj) {
        previous_connects.push(val);
      } else {
        future_connects.push(val);
      }
    });
  });

  $(document).ajaxStop(function() {
    // Check/pull in details of previous Linaro Connect events
    if ($("#previous_connect_events").length > 0) {
      var previous_connect_html_elements = [];
      $.each(previous_connects, function(key, val) {
           var placeholder_url =
             "https://connect.linaro.org/assets/images/content/" +
             val.placeholder;
        var html_el = '<div class="col-sm-4 no-padding">';
        html_el +=
          '<a href="https://connect.linaro.org/resources/' +
          val.id.toLowerCase() +
          '/">';
        html_el += '<div class="event-block">';
        html_el +=
          '<div class="event-image" style="background-image: url(' +
          placeholder_url +
          ');"></div>';
        html_el +=
          '<div class="event-title"><h3>' + val["long-name"] + "</h3></div>";
        html_el += "</div>";
        html_el += "</a>";
        html_el += "</div>";
        previous_connect_html_elements.push(html_el);
      });

      $("#previous_connect_events").html(
        previous_connect_html_elements.join("")
      );
    }
    // Check/pull in previous connect events
    if ($("#future_connect_events").length > 0) {
      var future_connect_events_html_elements = [];
      $.each(future_connects, function(key, val) {
        var placeholder_url =
          "https://connect.linaro.org/assets/images/content/" + val.placeholder;
        var html_el = '<div class="col-sm-4 no-padding">';
        html_el +=
          '<a href="https://connect.linaro.org/resources/' +
          val.id.toLowerCase() +
          '/">';
        html_el += '<div class="event-block">';
        html_el +=
          '<div class="event-image" style="background-image: url(' +
          placeholder_url +
          ');"></div>';
        html_el +=
          '<div class="event-title"><h3>' + val["long-name"] + "</h3></div>";
        html_el += "</div>";
        html_el += "</a>";
        html_el += "</div>";
        future_connect_events_html_elements.push(html_el);
      });

      $("#future_connect_events").html(
        future_connect_events_html_elements.join("")
      );
    }
  });
});
