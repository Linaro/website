$(document).ready(function() {
  $('#feedback-form').submit(function(event) {
      event.preventDefault();
      var form = $(this),
        url = $form.attr("action");
      
      $.post(url, $("#feedback-form").serialize())
        .done(function(data) {
          $('#feedback-form').hide();
          $('#feedback-response').html(data);
        });
  });
});
