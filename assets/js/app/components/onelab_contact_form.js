$(document).ready(function () {
  // Check form exists and setup onsubmit handler
  if ($("#onelab_contact_form_modal").length > 0) {
    onelab_contact_form.onsubmit = (e) => {
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
        $("#onelab_contact_form").addClass("was-validated");
      } else {
        feedback_error.innerHTML = "";
        var data = new FormData(onelab_contact_form);
        console.log("data", data);
        var formData = [...data];
        var formDataPayloadBody = {};
        for (var index in formData) {
          formDataPayloadBody[formData[index][0]] = formData[index][1];
        }
        console.log(formData);
        console.log(formDataPayloadBody);

        // Send the POST request to your form submission endpoint
        fetch(
          "https://avqfk3gzg2.execute-api.us-east-1.amazonaws.com/prod/formSubmit",
          {
            method: "POST",
            body: JSON.stringify(formDataPayloadBody),
            headers: {
              "X-Api-Key": "ox9fSkYfRK16mxy5Gv6pM121H7iAubAQ6uzsDmoW",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            onelab_contact_form.style.display = "none";
            submitButtononelabForm.style.display = "none";
            feedback_response.innerHTML = result.message;
            form_text.style.display = "none"
          });
      }
    };
  }
  // Contact Form Button Click handler
  if ($(".submitButtononelabForm").length > 0) {
    $(".submitButtononelabForm").on("click", () => {
      $("#onelab_contact_form_modal").modal("toggle");
    });
  }
  // If the other field exsits
  // If clicked then toggle the disabled prop.
  if ($("#customfield_13373").length > 0) {
    $("#other").on("click", function () {
      $("#customfield_13373").prop("disabled", function (i, v) {
        return !v;
      });
    });
  }
});
