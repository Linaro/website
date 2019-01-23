$(window).on("load", function(){
    // Check to see whether the chart exists
    if($(".projectStatsChart").length > 0 ){
        $(this).each(function(){
            var projectLinkName = $(this).data("link-name");
            console.log("Link name retreived!");
            console.log(projectLinkName);
        });
    }
});