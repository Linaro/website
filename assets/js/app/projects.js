// Define the sources to prepend the jsonp script elements and retreive the data.
// "" will use the current domain - this can be set to a cdn FQDN
var patchesDataSources = [
    "https://static.linaro.org/assets/json/perProjectPatches.json",
];
// Globally accessible JSON data for patches stats
var allJSONData = "";
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
// This function takes a project link name and pulls in the required data and 
// displays as a graph.
function setupGraph(projectLinkName, period){
    // Check to see if the period parameter is undefined - if so then set it - pre ES6
    period = typeof period !== 'undefined' ? period : "7";
    // Create a new data source object for use in instantiating the Chart.js graph
    dataSource = {};
    // Loop through the jsonData and pull relevant patches details
    var projectData = "";
    for (var i = 0; i < allJSONData.length; i++) {
        if (allJSONData[i]["project_link_name"] === projectLinkName) {
            projectData = allJSONData[i];
        }
    }
    // Get the stats labels and data required for graph        
    var statsLabels = Object.keys(projectData[period]).reverse();
    var submittedPatches = [];
    var acceptedPatches = [];
    // Get the submitted/accepted patches
    for (i = 0; i < statsLabels.length; i++) {
        submittedPatches.push(projectData[period][statsLabels[i]][0]);
        acceptedPatches.push(projectData[period][statsLabels[i]][1]);
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
    // Get the ID of the chart in question.
    var chartId = "projectStatsChart-" + projectLinkName + "-" + period;
    console.log("Creating chart:",chartId);
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById(chartId).getContext('2d');
    console.log(dataSource);
    // Instantiate a new chart using 'data'
    var myChart = new Chart(ctx, {
        type: "line",
        data: dataSource,
        options: chartOptions
    });
}
// Process the perProjectPatches.json file and add data to relevant graphs
function createInitialGraph() {
    var projectLinkName = $("ul.stats-period-tabs > li.active > a").data("link-name");
    var chartPeriod = $("ul.stats-period-tabs > li.active > a").data("chart-period");
    setupGraph(projectLinkName, chartPeriod);
}
// Main on-load function
$(window).on("load", function () {
    $(function () {
        var options = {
            selectorAttribute: "data-target",
            backToTop: true
        };
        // $('.nav-tabs').stickyTabs(options);
        $('.nav-tabs').stickyTabs(options);
    });
    // Main Event Listeners
    // Show Bootstrap tooltip on scroll
    $(window).on("scroll", function(){
       $("#subProjectsDropdown").tooltip().mouseover();
       setTimeout(function(){ $("#subProjectsDropdown").tooltip('hide'); }, 3000);
    });
    // Event listener for when bootstrap tabs are toggled to setup graphs for that tab
    $('.projects-tab-panel a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        console.log("Period panel has been clicked!");
        var projectLinkName = $(e.target).data("link-name");
        var projectName = $(e.target).data("project-name");
        var chartPeriod = $(e.target).data("chart-period");
        $(".currentProject").html(projectName);
        // Setup the graph based on the event target's data-chart value
        console.log(projectLinkName);
        setupGraph(projectLinkName, chartPeriod);
    });
    // Event listener for when bootstrap tabs are toggled to setup graphs for that tab
    $('.subProjects a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        console.log("Sub Project tab has been clicked!");
        var projectLinkName = $(e.target).data("link-name");
        var chartPeriod = $(e.target).data("chart-period");
        $(".currentProject").html(projectLinkName);
        // Setup the graph based on the event target's data-chart value
        console.log(projectLinkName);
        setupGraph(projectLinkName, chartPeriod);
    });
    // Enable tooltips
    $('body').tooltip({
        selector: '[data-toggle="tooltip"]'
    });
    // Check to see if the patches graph canvas elements exist in the DOM
    if ($(".projectStatsChart").length > 0) {
        // Loop through the sources and the separate script elements.
        for (i = 0; i < patchesDataSources.length; i++) {
            $.ajax({
                url: patchesDataSources[i],
                dataType: 'json',
                complete: function (jsonResponse) {
                    jsonData = JSON.parse(jsonResponse.responseText);
                    allJSONData = allJSONData.concat(jsonData);
                }
            });
        }

        // Wait for all ajax requests to stop
        $(document).ajaxStop(function () {
            createInitialGraph();;
        });
    }
    else {
        console.log("No patches graphs found!");
    }
});
