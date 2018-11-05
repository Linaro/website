// $(document).ready(function() {
//     var list_opening_query_builder = new ListOpeningQueryBuilder('linaro');
//     var query_params = list_opening_query_builder
//       .withTitle('Developer').withCity('Mumbai').buildParams();
//     //Sample JQuery code
//     $.ajax({
//       url: 'https:/jsapi.recruiterbox.com/v1/openings',
//       data: query_params,
//       success: function(response) {
//         $("#job-openings").html(JSON.stringify(response));
//       }
//     });
//   });