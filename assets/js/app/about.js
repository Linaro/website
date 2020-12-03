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
    type: "doughnut",
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
      cutoutPercentage: 30,
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
        position: "bottom",
      },
      plugins: {
        deferred: {
          yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
          delay: 200, // delay of 500 ms after the canvas is considered inside the viewport
        },
      },
    },
  };
  var projectConfig = {
    type: "doughnut",
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
      cutoutPercentage: 30,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "bottom",
      },
      plugins: {
        deferred: {
          yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
          delay: 200, // delay of 500 ms after the canvas is considered inside the viewport
        },
      },
    },
  };
  window.onload = function () {
    var ctx = document
      .getElementById("maintainersByCompanyChart")
      .getContext("2d");
    window.myPie = new Chart(ctx, companyConfig);
    var ctx = document
      .getElementById("maintainersByProjectChart")
      .getContext("2d");
    window.myPie = new Chart(ctx, projectConfig);
  };
});
