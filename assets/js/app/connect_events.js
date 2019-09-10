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
        $.each(previous_connects, function(key,val){
            var html_el = '<div class="col-sm-4 no-padding">';
            html_el += '';
            html_el += '';
            html_el += '';
            html_el += '';
            html_el += '';
            html_el += '';
            html_el += '';
            previous_connect_html_elements.push(html_el);
        });

    }
    // Check/pull in previous connect events
    if ($("#future_connect_events").length > 0) {
      console.log("Future Connects");
      console.log(future_connects);
      console.log("Previous Connects");
      console.log(previous_connects);
    }
  });
});
