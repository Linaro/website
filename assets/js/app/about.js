$(document).ready(() => {
  // Add some invisible elements with Bootstrap CSS visibile utility classes
  $("body").append(
    "<div style='display:none;' class='viewport-check'><span class='d-block'></span><span class='d-sm-block'></span><span class='d-md-block'></span><span class='d-lg-block'></span><span class='d-xl-block'></span></div>"
  );
  // Checks if the span is set to display blcok via CSS
  function checkIfBlock(target) {
    var target = $(target).css("display") == "block";
    return target;
  }
  // YouTube embed
  const videoEmbed = $(".videoPlayer");
  function updateVideo() {
    const id = $(".videoPlayer").attr("id").replace("vid-", "");
    $(".videoPlayer").addClass("embed-responsive-16by9"); // adds responsive styling to the video iframe via a css class
    $(".videoPlayer").html(
      '<iframe src="//www.youtube.com/embed/' +
        id +
        '?autoplay=1" width="560" height="315" frameborder="0" allowfullscreen></iframe>'
    );
  }
  videoEmbed.on("click", updateVideo);
});
