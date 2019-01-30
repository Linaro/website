// Define the sources to prepend the jsonp script elements and retreive the data.
// "" will use the current domain - this can be set to a cdn FQDN
var patchesDataSources = [
    ""
];
// JSONP handler - This function handles the jsonp data we receive
function patches(jsonData) {
    //var sorted_data = sortByKeyAsc(jsonData, "title");
    createPatchesGraphs(jsonData);
}
// Chart.js Options when creating a new chart
var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: false
        }]
    }
};
// Process the perProjectPatches.json file and add data to relevant graphs
function createPatchesGraphs(jsonData) {
    console.log("Creating the patches graphs...");
    var listElements = '';
    $(".projectStatsChart").each(function () {
        // Get the project_link_name to look up stats in the JSON data
        var projectLinkName = $(this).data("link-name");
        // var chartData = {};
        console.log(projectLinkName);
        dataSource = {};
        var projectData = "";
        for (var i = 0; i < jsonData.length; i++) {
            if (jsonData[i]["project_link_name"] === projectLinkName) {
                projectData = jsonData[i];
            }
        }   
        console.log("Project Data from loop:",projectData);
        
        var statsLabels = Object.keys(projectData["7"]).reverse();

        var submittedPatches = [];
        var acceptedPatches = [];

        for(i=0;i<statsLabels.length;i++) {
            submittedPatches.push(projectData["7"][statsLabels[i]][0]);
            acceptedPatches.push(projectData["7"][statsLabels[i]][1]);
        }
        
        // Create the data array for the charts
        var dataSource = {
            labels: statsLabels,
            datasets: [
                {
                    label: "Submitted Patches",
                    backgroundColor: "rgba(124,168,45,0.3)",
                    borderColor: "rgba(124,168,45,1)",
                    borderWidth: "1px",
                    pointStyle: "cross",
                    pointBackgroundColor: "rgba(70,94,26,1)",
                    pointBorderColor: "rgba(70,94,26,1)",
                    pointStrokeColor: "#688d24",
                    pointHighlightFill: "#cde2a7",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: submittedPatches
                },
                {
                    label: "Accepted Patches",
                    fillColor: "rgba(124,168,45,0.3)",
                    strokeColor: "rgba(124,168,45,1)",
                    pointColor: "rgba(70,94,26,1)",
                    pointStrokeColor: "#688d24",
                    pointHighlightFill: "#cde2a7",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: acceptedPatches
                }
            ]
        };

        // for (var i = 0; i < jsonData.length; i++) {
        //     // console.log(jsonData[i]["project_link_name"]);
        //     if (jsonData[i]["project_link_name"] == projectLinkName) {
        //         // Get past 7 day stats
        //         var projectStats = jsonData[i]["7"];
        //         var statsLabels = Object.keys(projectStats).reverse();
                
        //         var submittedPatches = [];
        //         var acceptedPatches = [];

        //         for(i=0;i<statsLabels.length;i++) {
        //              submittedPatches.push(projectStats[statsLabels[i]][0]);
        //              acceptedPatches.push(projectStats[statsLabels[i]][1]);
        //         }

        //         var dataSource = {
        //             labels: statsLabels,
        //             datasets: [
        //                 {
        //                     label: "Submitted Patches",
        //                     backgroundColor: "rgba(124,168,45,0.3)",
        //                     borderColor: "rgba(124,168,45,1)",
        //                     borderWidth: "1px",
        //                     pointStyle: "cross",
        //                     pointBackgroundColor: "rgba(70,94,26,1)",
        //                     pointBorderColor: "rgba(70,94,26,1)",
        //                     pointStrokeColor: "#688d24",
        //                     pointHighlightFill: "#cde2a7",
        //                     pointHighlightStroke: "rgba(220,220,220,1)",
        //                     data: submittedPatches
        //                 },
        //                 {
        //                     label: "Accepted Patches",
        //                     fillColor: "rgba(124,168,45,0.3)",
        //                     strokeColor: "rgba(124,168,45,1)",
        //                     pointColor: "rgba(70,94,26,1)",
        //                     pointStrokeColor: "#688d24",
        //                     pointHighlightFill: "#cde2a7",
        //                     pointHighlightStroke: "rgba(220,220,220,1)",
        //                     data: acceptedPatches
        //                 }
        //             ]
        //         };
        //     }
        // }
        // Get the ID of the chart in question.
        var chartId = $(this).attr("id");
        // Get the context of the canvas element we want to select
        var ctx = document.getElementById(chartId).getContext('2d');
        console.log(dataSource);
        // Instantiate a new chart using 'data'
        var myChart = new Chart(ctx, {
            type: "line",
            data: dataSource,
            options: chartOptions
        });
    });
    $("#latest-patches").html(listElements);
}

$(window).on("load", function () {
    // Enable tooltips
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
    });
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
