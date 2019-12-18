$(document).ready(function() {
  // Handles the submission of the form
  $("#membership_form").on("submit", function(e) {
    e.preventDefault();
    var name = $("#membership_form input[name='first_name']").val();
    var surname = $("#membership_form input[name='surname']").val();
    var company = $("#membership_form input[name='company']").val();
    // var email = $("input[name='email']").val();
    var membership_type = $(
      "#membership_form select[name='membership_type']"
    ).val();
    var source = $("#membership_form textarea[name='source']").val();
    var newline = "%0D%0A";

    var mailto_link = "mailto:contact@linaro.org?subject=";
    mailto_link += "Linaro.org Membership - ";
    mailto_link += name + " " + surname;
    mailto_link += "&body=";
    mailto_link += "Company: " + company + newline;
    mailto_link += "Membership Type: " + membership_type + newline;
    mailto_link +=
      "More information on why you want to work with Linaro: " +
      source +
      newline;
    window.location.href = mailto_link;
  });
});
