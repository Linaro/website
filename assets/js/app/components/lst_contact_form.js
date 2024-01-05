$(document).ready(function () {
  // Check form exists and setup onsubmit handler
  if ($("#lts_contact_form").length > 0) {
    $("#lts_contact_form").on("submit", function (e) {
      e.preventDefault();

      // Check that the form has values for the required fields
      var message = "";
      if ($("#customfield_13155").val() === "") {
        message = message + "You must provide a first name.<br>";
      }
      if ($("#customfield_13156").val() === "") {
        message = message + "You must provide a last name.<br>";
      }
      if ($("#email").val() === "") {
        message = message + "You must provide an email address.<br>";
      }
      if ($("#customfield_13368").val() === "") {
        message = message + "You must provide a Company name.<br>";
      }

      if (message !== "") {
        $("#lts_contact_form").addClass("was-validated");
      } else {
        $("#feedback_error").html("");
        var data = new FormData($("#lts_contact_form")[0]);
        var formData = [...data];
        var formDataPayloadBody = {};
        for (var index in formData) {
          formDataPayloadBody[formData[index][0]] = formData[index][1];
        }

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
            $("#lts_contact_form").hide();
            $("#feedback_response").html(result.message);
          })
          .catch((error) => console.error("Error:", error));
      }
    });
  }

  // Additional code for handling the contact form button click
  if ($(".lts_contact_form_btn").length > 0) {
    $(".lts_contact_form_btn").on("click", () => {
      $("#lts_contact_form").modal("toggle");
    });
  }

  // If the other field exists
  // If clicked then toggle the disabled prop.
  if ($("#customfield_13373").length > 0) {
    $("#other").on("click", function () {
      $("#customfield_13373").prop("disabled", function (i, v) {
        return !v;
      });
    });
  }
});
