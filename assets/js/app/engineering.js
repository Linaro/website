$(document).ready(function(){
    $(".engineering-icon").each(function (index) {
        $(this).delay(200 * index).fadeIn(300);
    });
});