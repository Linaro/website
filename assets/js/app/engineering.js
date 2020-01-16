$(document).ready(function() {
  // $(".engineering-icon").each(function (index) {
  //     $(this).delay(200 * index).fadeIn(300);
  // });
  // $("#hover-icon").click(function () {
  //     if ($(this).attr("toggled") == "True"){
  //         console.log("Toggled - Fade Out");
  //         $(this).attr("toggled", "False");
  //         $(".core-descriptor.toolchain").fadeOut("fast", function () {
  //             $(".core-descriptor.kernel-validation").fadeOut("fast", function () {
  //                 $(".core-descriptor.security").fadeOut("fast", function () {
  //                     $(".core-descriptor.kernel").fadeOut("fast", function () {
  //                         $(".core-descriptor.power").fadeOut("fast");
  //                     });
  //                 });
  //             });
  //         });
  //     }
  //     else{
  //         console.log("Toggled - Fade In");
  //         $(this).attr("toggled", "True");
  //         $(".core-descriptor.toolchain").fadeIn("fast", function () {
  //             $(".core-descriptor.kernel-validation").fadeIn("fast", function () {
  //                 $(".core-descriptor.security").fadeIn("fast", function () {
  //                     $(".core-descriptor.kernel").fadeIn("fast", function () {
  //                         $(".core-descriptor.power").fadeIn("fast");
  //                     });
  //                 });
  //             });
  //         });
  //     }
  // });

  var projectSlider = $("#projects_slider");

  projectSlider.owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      700: {
        items: 6
      },
      1000: {
        items: 8
      },
      1200: {
        items: 9
      }
    }
  });
});
