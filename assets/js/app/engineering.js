$(document).ready(function(){
    $(".engineering-icon").each(function (index) {
        $(this).delay(200 * index).fadeIn(300);
    });
    $("#hover-icon").hover(function () {
        $(".core-descriptor.toolchain").fadeIn("fast",function(){
            $(".core-descriptor.multimedia").fadeIn("fast", function () {
                $(".core-descriptor.security").fadeIn("fast", function () {
                    $(".core-descriptor.kernel").fadeIn("fast", function () {
                        $(".core-descriptor.power").fadeIn("fast");
                    });
                });
            });
        });
    // Mouseout callback
    }, function(){

        $(".core-descriptor.toolchain").delay(1000).fadeOut("fast", function () {
            $(".core-descriptor.multimedia").fadeOut("fast", function () {
                $(".core-descriptor.security").fadeOut("fast", function () {
                    $(".core-descriptor.kernel").fadeOut("fast", function () {
                        $(".core-descriptor.power").fadeOut("fast");
                    });
                });
            });
        });
    });
});
