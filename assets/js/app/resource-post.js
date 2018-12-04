$(window).on("load", function () {
    // Use the default functionality for loading resources from the front matter values
    if ($("#video-holder").length > 0) {
        // Get data-src attribute values - this is the youtube video link added from the page front matter in Jekyll
        var url = $("#youtube-iframe").attr("data-src");
        // Function to return the ID of a youtube video given the standard URL
        if (url) {
            function getId(url) {
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = url.match(regExp);

                if (match && match[2].length == 11) {
                    return match[2];
                } else {
                    return 'error';
                }
            }
            // Get the ID for the YouTube video.
            var youtubeId = getId(url);
            // Create the YouTube embed url
            var embedUrl = "//www.youtube.com/embed/" + youtubeId;
            // Set the src to the data-src
            $("#youtube-iframe").attr("src", embedUrl);
            // Set video Iframe to visible and remove the video-skeleton placeholder
            // once the video has loaded with the s
            $("#youtube-iframe").on("load", function () {
                $("#video-embed").removeClass("hidden-iframe");
                $(this).removeClass("hidden-iframe");
                $("#video-skeleton").hide();
                $(this).addClass("visible-iframe");
                $("#video-embed").addClass("visible-iframe");
            });
        }
    }

    // Presentation Lazy load using default src attribute values added
    // using Jekyll from the post's front matter values
    if ($("#presentation-iframe").length > 0) {
        // Get data-src url
        var url = $("#presentation-iframe").attr("data-src");
        // Set the src to the data-src
        $("#presentation-iframe").attr("src", url);

        $("#presentation-iframe").on("load", function () {
            $("#presentation-embed").removeClass("hidden-iframe");
            $(this).removeClass("hidden-iframe");
            $("#presentation-skeleton").hide();
            $(this).addClass("visible-iframe");
            $("#presentation-embed").addClass("visible-iframe");
        });
    }
});