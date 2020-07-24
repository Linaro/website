// Take the form data from developer_services_form.js and send it
// to the feedback endpoint.
feedback_form.onsubmit = (e) => {
  e.preventDefault();
  // Check that the form has values for the required fields
  var message = "";
  if (customfield_10902.value === "") {
    message = message + "You must provide a first name.<br>";
  }
  if (customfield_10903.value === "") {
    message = message + "You must provide a last name.<br>";
  }
  if (feedback_email.value === "") {
    message = message + "You must provide an email address.<br>";
  }
  if (customfield_12401.value === "") {
    message = message + "You must provide a Company name.<br>";
  }
  var checked_count = 0;
  $("#feedback_form")
    .find('input[type="checkbox"]')
    .each(function () {
      if ($(this).is(":checked")) {
        checked_count += 1;
      }
    });
  if (checked_count === 0) {
    message = message + "You must select at least one service of interest.<br>";
  }
  if (message !== "") {
    $("#feedback_form").addClass("was-validated");
    feedback_error.innerHTML = `<p>${message}</p>`;
  } else {
    feedback_error.innerHTML = "";
    // Copy some field values over to new names to keep the feedback
    // plugin happy.
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    // Loop over them and prevent submission
    var data = new FormData(feedback_form);
    data.append("first-name", customfield_10902.value);
    data.append("last-name", customfield_10903.value);
    data.append("company-name", customfield_12401.value);
    fetch("https://servicedesk.linaro.org/plugins/servlet/feedback/create", {
      method: "POST",
      body: data,
    })
      .then((response) => response.text())
      .then((result) => {
        feedback_form.style.display = "none";
        feedback_response.innerHTML = result;
      });
  }
};
