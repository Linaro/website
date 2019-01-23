$(window).on("load", function () {
    // Check to see whether the chart exists
    // Grab the patches stats for each graph in the DOM
    $(".projectStatsChart").each(function () {
        var projectLinkName = $(this).data("link-name");
        console.log("Link name retreived!");
        console.log(projectLinkName);
    });
});