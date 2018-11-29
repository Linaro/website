$(document).ready(function(){
    $('.dropdown-submenu .sub-menu a').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
});