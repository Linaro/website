$(document).ready(function(){
    $(".engineering-icon").each(function (index) {
        $(this).delay(200 * index).fadeIn(300);
    });
    $("#hover-icon").hover(function () {
        $("#hover-icon").animate({opacity: 0}, 1000, function(){
            $(".hidden-icon-left").addClass(".show-icon-left");
            $(".hidden-icon-right").addClass(".show-icon-right");
        });
    // Mouseout callback
    }, function(){
        $("#hover-icon").fadeIn("fast");
        $(".hidden-icon-left").removeClass(".show-icon-left");
        $(".hidden-icon-right").removeClass(".show-icon-right");
    });
});
