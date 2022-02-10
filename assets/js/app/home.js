$(document).ready(() => {
  if ($("#theme_slider").length > 0) {
    $("#theme_slider").owlCarousel({
      loop: false,
      nav: true,
      rewind: false,
      dots: false,
      lazyLoad: true,
      autoplay: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      responsiveClass: true,
      responsive: {
        0: {
          items: 4,
        },
        576: {
          items: 4,
        },
        768: {
          items: 4,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },
    });
  }
  if ($("#stats_slider").length > 0) {
    $("#stats_slider").owlCarousel({
      loop: true,
      nav: false,
      rewind: true,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplayTimeout: 6000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }
  if ($("#theme_tabs .item").length > 0) {
    $("#theme_tabs .item").click((e) => {
      e.preventDefault();
      $(`.tab-pane`).each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        }
      });
      $(`#theme_tabs .item`).each(function () {
        if ($(this).hasClass("selected")) {
          $(this).removeClass("selected");
        }
      });
      $(`.nav-link`).each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        }
      });
      let tab_id = e.currentTarget.attributes["data-tab-id"].value;
      $(`#${tab_id}-tab`).addClass("active");
      $(`#${tab_id}`).addClass("active");
      $(`data-tab-id=[${tab_id}]`).addClass("selected");
    });
  }
  if ($(".project_button").length > 0) {
    $(".project_button").click((e) => {
      e.preventDefault();
      $(`.project_diagram_wrapper`).each(function () {
        if ($(this).hasClass("d-block")) {
          $(this).addClass("d-none");
          $(this).removeClass("d-block");
        }
      });
      $(`.project_button`).each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        }
      });
      let selected_id = e.target.attributes["id"].value;
      $(`#${selected_id}`).addClass("active");
      $(`#${selected_id}-diagram`).addClass("d-block");
    });
  }
});
