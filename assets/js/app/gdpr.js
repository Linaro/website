$(document).scroll(function () {
    var y = $(this).scrollTop();
    var x = $("#linaro-gdpr-row").position();

    if (y > (x.top - 50)) { // -50 so things don't overlap
        // $(".magic").addClass(
        //     "bounceInRight");
        console.log("Test");
    }
    else {
        // $(".magic").removeClass(
        //     "bounceInRight");
        console.log("Test Out");

    }
});