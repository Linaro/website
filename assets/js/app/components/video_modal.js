$(document).ready(function() {
  $(".video_modal").on("shown.bs.modal", function(e) {
    var videoElement = $(this).find("video");
    videoElement.trigger("play");
  });
  $(".video_modal").on("hide.bs.modal", function(e) {
    var videoElement = $(this).find("video");
    videoElement.trigger("pause");
  });
});
