// Take the form data from developer_services_form.js and send it
// to the feedback endpoint.
theme_contact_form.onsubmit = (e) => {
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
  if (message !== "") {
    $("#theme_contact_form").addClass("was-validated");
  } else {
    feedback_error.innerHTML = "";
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    // Loop over them and prevent submission
    var data = new FormData(theme_contact_form);
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
    // Remove the "other" checkbox from the payload.
    delete formDataPayloadBody["other"];
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
        theme_contact_form.style.display = "none";
        feedback_response.innerHTML = result.message;
      });
  }
};
$(document).ready(function () {
  // Contact Form Button Click handler
  if ($(".theme_contact_btn").length > 0) {
    $(".theme_contact_btn").on("click", () => {
      $("#themeContactFormModal").modal("toggle");
    });
  }
  // If the other field exsits
  // If clicked then toggle the disabled prop.
  if ($("#customfield_13371").length > 0) {
    $("#other").on("click", function () {
      $("#customfield_13371").prop("disabled", function (i, v) {
        return !v;
      });
    });
  }
});
