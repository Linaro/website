// Take the form data from developer_services_form.js and send it
// to the feedback endpoint.
membership_form.onsubmit = (e) => {
  e.preventDefault();
  // Check that the form has values for the required fields
  var message = "";
  if (customfield_10902.value === "") {
    message = message + "You must provide a first name.<br>";
  }
  if (customfield_10903.value === "") {
    message = message + "You must provide a last name.<br>";
  }
  if (email.value === "") {
    message = message + "You must provide an email address.<br>";
  }
  if (customfield_12401.value === "") {
    message = message + "You must provide a Company name.<br>";
  }
  if (customfield_12902.value === "") {
    message =
      message + "You must provide a message regarding how we can help.<br>";
  }
  if (message !== "") {
    $("#membership_form").addClass("was-validated");
  } else {
    feedback_error.innerHTML = "";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    // Loop over them and prevent submission
    var data = new FormData(membership_form);
    var formData = [...data];
    var formDataPayloadBody = {};
    for (var index in formData) {
      formDataPayloadBody[formData[index][0]] = formData[index][1];
    }
    console.log(formData);
    console.log(formDataPayloadBody);
    // Get the checkbox group name val.
    var checkboxGroupName = "";
    $(".checkbox_group input[type=checkbox]").each(function () {
      if ($(this).attr("name") !== "other") {
        checkboxGroupName = $(this).attr("name");
        return true;
      }
    });
    // Make sure all the checkbox values are submitted as an array.
    formDataPayloadBody[checkboxGroupName] = data.getAll(checkboxGroupName);
    // Send the POST request.
    fetch(
      "https://pvwhresjz0.execute-api.us-east-1.amazonaws.com/dev/formSubmit",
      {
        method: "POST",
        body: JSON.stringify(formDataPayloadBody),
        headers: { "X-Api-Key": "xpIcQXHk0Y1XUmBBH4xUl5ScFxgddlFnEpQeSzO3" },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        membership_form.style.display = "none";
        feedback_response.innerHTML = result.message;
      });
  }
};
