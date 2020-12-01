$(document).ready(() => {
  var config = {
    type: "pie",
    data: {
      datasets: [
        {
          data: [10],
          label: "Linaro",
        },
        {
          data: [10],
          label: "RedHat",
        },
        {
          data: [10],
          label: "Arm",
        },
        {
          data: [10],
          label: "Qualcomm",
        },
        {
          data: [10],
          label: "ST",
        },
        {
          data: [10],
          label: "TI",
        },
        {
          data: [10],
          label: "Socionext",
        },
      ],
      labels: ["Linaro", "RedHat", "Arm", "Qualcomm", "ST", "TI", "Socionext"],
    },
    options: {
      responsive: true,
    },
  };

  window.onload = function () {
    var ctx = document
      .getElementById("maintainersByCompanyChart")
      .getContext("2d");
    window.myPie = new Chart(ctx, config);
  };
});
