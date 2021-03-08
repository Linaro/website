$(document).ready(function () {
  // Add some invisible elements with Bootstrap CSS visibile utility classes
  $("body").append(
    "<div style='display:none;' class='viewport-check'><span class='d-block'></span><span class='d-sm-block'></span><span class='d-md-block'></span><span class='d-lg-block'></span><span class='d-xl-block'></span></div>"
  );
  // Checks if the span is set to display blcok via CSS
  function checkIfBlock(target) {
    var target = $(target).css("display") == "block";
    return target;
  }
  // Fetch the maintainers data
  const maintainersByProjectData = JSON.parse(
    decodeURIComponent(
      $("#maintainers_by_project").data("maintainers-by-project")
    )
  );
  var maintainersByProjectNums = maintainersByProjectData.map((item) => {
    return item.num;
  });
  var maintainersByProjectLabels = maintainersByProjectData.map((item) => {
    return item.name;
  });
  var maintainersByProjectDisplayValues = maintainersByProjectData.map(
    (item) => {
      if (parseInt(item.num) > 1) {
        return true;
      } else {
        return false;
      }
    }
  );
  var maintainersByProjectDisplayValuesMobile = maintainersByProjectData.map(
    (item) => {
      return false;
    }
  );
  // Create the colours array for Maintainers by Project
  var colourIndex = 0;
  var maintainersByProjectColours = maintainersByProjectData.map((item) => {
    let coloursArray = ["#0081ab", "#339abc", "#66b3cd", "#99cddd", "#cce6ee"];
    let returnColour = coloursArray[colourIndex];
    if (colourIndex === 4) {
      colourIndex = 0;
    } else {
      colourIndex += 1;
    }
    return returnColour;
  });
  const maintainersByCompanyData = JSON.parse(
    decodeURIComponent(
      $("#maintainers_by_company").data("maintainers-by-company")
    )
  );
  var maintainersByCompanyNums = maintainersByCompanyData.map((item) => {
    return item.num;
  });
  var maintainersByCompanyLabels = maintainersByCompanyData.map((item) => {
    return item.name;
  });
  var maintainersByCompanyDisplayValues = maintainersByProjectData.map(
    (item) => {
      return true;
    }
  );
  var maintainersByCompanyDisplayValuesMobile = maintainersByCompanyData.map(
    (item) => {
      return false;
    }
  );
  var maintainersByCompanyColours = maintainersByCompanyData.map((item) => {
    if (item.name === "Linaro") {
      return "rgba(153, 204, 51, 1)";
    } else if (item.name !== "ST") {
      return "rgba(193, 224, 132, 1)";
    } else {
      return "rgba(235, 245, 215, 1)";
    }
  });
  // Setup the configs for charts
  var companyConfig = {
    type: "outlabeledPie",
    data: {
      datasets: [
        {
          data: maintainersByCompanyNums,
          backgroundColor: maintainersByCompanyColours,
        },
      ],
      labels: maintainersByCompanyLabels,
    },
    options: {
      cutoutPercentage: 10,
      rotation: 45,
      maintainAspectRatio: false,
      responsive: true,
      layout: {
        padding: 40,
      },
      legend: {
        display: false,
        position: "bottom",
      },
      zoomOutPercentage: 20,
      plugins: {
        outlabels: {
          zoomOutPercentage: 20,
          backgroundColor: "rgba(1,1,1,0)",
          text: "%l",
          display: maintainersByCompanyDisplayValues,
          color: "black",
          stretch: 45,
          font: {
            resizable: true,
            minSize: 12,
            maxSize: 18,
          },
        },
        deferred: {
          yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
          delay: 200, // delay of 500 ms after the canvas is considered inside the viewport
        },
      },
    },
  };
  var projectConfig = {
    type: "outlabeledPie",
    data: {
      datasets: [
        {
          data: maintainersByProjectNums,
          backgroundColor: maintainersByProjectColours,
        },
      ],
      labels: maintainersByProjectLabels,
    },
    options: {
      layout: {
        padding: 40,
      },
      cutoutPercentage: 10,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "bottom",
      },
      zoomOutPercentage: 10,
      plugins: {
        outlabels: {
          zoomOutPercentage: 10,
          text: "%l",
          backgroundColor: "rgba(1,1,1,0)",
          color: "black",
          display: maintainersByProjectDisplayValues,
          // lineColor: "rgba(61,61,61,1)",
          stretch: 45,
          font: {
            resizable: true,
            minSize: 12,
            maxSize: 18,
          },
        },
        deferred: {
          yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
          delay: 200, // delay of 500 ms after the canvas is considered inside the viewport
        },
      },
    },
  };

  function checkSize() {
    // Set some variables to use with the if checks below
    var mediaQueryXs = checkIfBlock(".viewport-check .d-block");
    var mediaQuerySm = checkIfBlock(".viewport-check .d-sm-block");
    var mediaQueryMd = checkIfBlock(".viewport-check .d-md-block");
    var mediaQueryLg = checkIfBlock(".viewport-check .d-lg-block");
    var mediaQueryXl = checkIfBlock(".viewport-check .d-xl-block");
    if (
      mediaQueryMd === true ||
      mediaQueryLg === true ||
      mediaQueryXl === true
    ) {
      try {
        window.projectPie.destroy();
        window.companyPie.destroy();
      } catch (err) {
        console.log("No charts to destory.");
      }
      projectConfig["options"]["plugins"]["outlabels"][
        "display"
      ] = maintainersByProjectDisplayValues;
      companyConfig["options"]["plugins"]["outlabels"][
        "display"
      ] = maintainersByCompanyDisplayValues;
      var ctx = document
        .getElementById("maintainersByCompanyChart")
        .getContext("2d");
      window.companyPie = new Chart(ctx, companyConfig);
      var ctx = document
        .getElementById("maintainersByProjectChart")
        .getContext("2d");
      window.projectPie = new Chart(ctx, projectConfig);
    } else if (mediaQueryXs === true || mediaQuerySm === true) {
      try {
        window.projectPie.destroy();
        window.companyPie.destroy();
      } catch (err) {
        console.log("No charts to destory.");
      }
      projectConfig["options"]["plugins"]["outlabels"][
        "display"
      ] = maintainersByProjectDisplayValuesMobile;
      companyConfig["options"]["plugins"]["outlabels"][
        "display"
      ] = maintainersByCompanyDisplayValuesMobile;
      var ctx = document
        .getElementById("maintainersByProjectChart")
        .getContext("2d");
      window.projectPie = new Chart(ctx, projectConfig);
      var ctx = document
        .getElementById("maintainersByCompanyChart")
        .getContext("2d");
      window.companyPie = new Chart(ctx, companyConfig);
    }
  }
  // Reload demo on  window resize
  $(window).resize(function () {
    checkSize();
  });
  checkSize();
});
