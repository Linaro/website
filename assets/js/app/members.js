$(document).ready(function() {
  // Instantiate a new instance of the bootstrap 3 collapse
  $("#accordion").collapse();
  // Expand and collapse all Collapse panels
  $("#expand-all").click(function() {
    if ($(this).html() == "Expand All") {
      $(".panel-collapse").collapse("show");
      $(this).html("Collapse All");
    } else {
      $(".panel-collapse").collapse("hide");
      $(this).html("Expand All");
    }
  });
  // Check if a hash url is set for opening a given members panel
  $(function() {
    if (window.location.hash != "") {
      $(".panel-collapse.collapse").removeClass("in");
      $(window.location.hash + ".panel-collapse.collapse").collapse("show");
    }
  });
  // Instantiate the clipboard anchor links for panels
  $(".copy_link_to_panel").each(function(index) {
    var uniqueId = "copyLink" + index;
    $(this).attr("id", uniqueId);
    $(uniqueId).click(function(e) {
      e.preventDefault();
    });
    $(uniqueId).tooltip({
      trigger: "click",
      placement: "bottom"
    });
    var clipboard = new ClipboardJS(uniqueId);
  });
});
