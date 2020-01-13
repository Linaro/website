$(document).ready(function() {
  // Handles the submission of the form
  $("#developer_services_form").on("submit", function(e) {
    e.preventDefault();
    var name = $("#developer_services_form input[name='first_name']").val();
    var surname = $("#developer_services_form input[name='surname']").val();
    var company = $("#developer_services_form input[name='company']").val();
    // var email = $("input[name='email']").val();
    var services_type = $(
      "#developer_services_form select[name='services_type']"
    ).val();
    var source = $("#developer_services_form textarea[name='source']").val();
    var newline = "%0D%0A";

    var mailto_link = "mailto:contact@linaro.org?subject=";
    mailto_link += "Linaro.org Developer Services - ";
    mailto_link += name + " " + surname;
    mailto_link += "&body=";
    mailto_link += "Company: " + company + newline;
    mailto_link += "Services I'm interested in: " + services_type + newline;
    mailto_link += "How I heard about Linaro: " + source + newline;
    window.location.href = mailto_link;
  });
});
