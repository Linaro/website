// Take the form data from developer_services_form.js and send it
// to the feedback endpoint.
membership_form.onsubmit = (e) => {
  $("#submitButtonMembershipForm").addClass("disabled");
  $("#submitButtonMembershipForm").attr("disabled", true);
  e.preventDefault();
  // Check that the form has values for the required fields
  var message = "";
  if (customfield_13155.value === "") {
    message = message + "You must provide a first name.<br>";
  }
  if (customfield_13156.value === "") {
    message = message + "You must provide a last name.<br>";
  }
  if (email.value === "") {
    message = message + "You must provide an email address.<br>";
  }
  if (customfield_13368.value === "") {
    message = message + "You must provide a Company name.<br>";
  }
  if (customfield_13365.value === "") {
    message =
      message + "You must provide a message regarding how we can help.<br>";
  }
  if (message !== "") {
    $("#submitButtonMembershipForm").removeClass("disabled");
    $("#submitButtonMembershipForm").attr("disabled", false);
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
    try {
      dataLayer.push({ formName: "Membership Form", event: "form_submission" });
    } catch (err) {
      console.log("Couldn't push to dataLayer:", err);
    }
    // Send the POST request.
    fetch(
      "https://avqfk3gzg2.execute-api.us-east-1.amazonaws.com/prod/formSubmit",
      {
        method: "POST",
        body: JSON.stringify(formDataPayloadBody),
        headers: { "X-Api-Key": "ox9fSkYfRK16mxy5Gv6pM121H7iAubAQ6uzsDmoW" },
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
