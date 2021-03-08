$(document).ready(() => {
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
