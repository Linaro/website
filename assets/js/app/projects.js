$(window).on("load", function () {
    // Define the sources to prepend the jsonp script elements and retreive the data.
    // "" will use the current domain - this can be set to a cdn FQDN
    var patchesDataSources = [
        ""
    ];
    // This function handles the jsonp data we receive
    function patches(jsonData) {
        //var sorted_data = sortByKeyAsc(jsonData, "title");
        createPatchesGraphs(jsonData, 10);
    }
    // Process the perProjectPatches.json file and add data to relevant graphs
    function createPatchesGraphs(jsonData) {
        var listElements = '';
        for (var i = 0; i < jsonData[0].length; i++) {
            console.log(jsonData[0][i]);
            // Check to see whether the chart exists
            // Grab the patches stats for each graph in the DOM
            $(".projectStatsChart").each(function () {
                var projectLinkName = $(this).data("link-name");
                // var chartData = {};
                console.log(projectLinkName);
                // Create the data array for the charts 
            });
        }
        $("#latest-patches").html(listElements);
    }
    // Check to see if the patches graph canvas elements exist in the DOM
    if ($(".projectStatsChart").length > 0) {
        // Loop through the sources and the separate script elements.
        for (i = 0; i < patchesDataSources.length; i++) {
            // Adds a list element for each result in the JSONP data
            // JSONP url
            var jsonp_url = patchesDataSources[i] + "/assets/json/perProjectPatches.json?callback=patches";
            // Add the JSONP to a script element
            // Create a new script element and set the type and src
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = jsonp_url;
            // Append the new script element to the head.
            $("head").append(script);
        }
    }
    else {
        console.log("No patches graphs found!");
    }
});