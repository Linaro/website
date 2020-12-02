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
  var maintainersByProjectColours = maintainersByProjectData.map((item) => {
    let randomColourOptions = ["#0081ab", "#98ccdd", "#65b4cd"];
    if (item.name === "Linux Kernel") {
      return "#0081ab";
    } else {
      var randomNumber =
        Math.floor(Math.random() * (randomColourOptions.length - 0 + 1)) + 0;
      return randomColourOptions[randomNumber];
    }
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
      return "#99cc33";
    } else if (item.name !== "ST") {
      return "#c1e084";
    } else {
      return "#ebf5d7";
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
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 30,
      legend: {
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
