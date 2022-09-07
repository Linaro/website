var SLIDER_PAUSED = false;
var CURRENT_TAB_NUMBER = 0;
var ON_DESKTOP = true;

const update_size = () => {
  let { sm, md, lg, xl } = checkSize();
  ON_DESKTOP = sm || md || lg || xl;
  console.log("ON DESKTOP: ", ON_DESKTOP);
  if (!ON_DESKTOP) {
    $(`#theme_tabs .item`).each(function () {
      $(this).addClass("selected");
    });
  } else {
    $(`#theme_tabs .item`).each(function () {
      if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
      }
    });
  }
};
const switch_tab = (tab_id) => {
  update_size();
  $(`.nav-link`).each(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
  });
  $(`.tab-pane`).each(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    }
  });
  $(`#${tab_id}-tab`).addClass("active");
  $(`#${tab_id}`).addClass("active");
  $(`[data-tab-id="${tab_id}"]`).addClass("selected");
  $(`#homepage_header [data-theme-id]`).each(function () {
    $(this).addClass("hidden_image");
  });
  $(`#homepage_header [data-theme-id="${tab_id}"]`).removeClass("hidden_image");
};
const sliderLoop = () => {
  let tab_items = $("#theme_tabs .item");
  console.log(tab_items);
  update_size();
  let interval = setInterval(() => {
    if (!SLIDER_PAUSED) {
      update_size();
      console.log(
        `Switching to ${$(tab_items[CURRENT_TAB_NUMBER])[0].dataset.tabId}`
      );
      console.log(CURRENT_TAB_NUMBER);
      switch_tab($(tab_items[CURRENT_TAB_NUMBER])[0].dataset.tabId);
      if (CURRENT_TAB_NUMBER < tab_items.length - 1) {
        CURRENT_TAB_NUMBER++;
      } else {
        CURRENT_TAB_NUMBER = 0;
      }
    }
  }, 3000);
  $(document).on("page:beforeout", function (e) {
    clearInterval(interval);
  });
};
$(document).ready(() => {
  if ($("#theme_tabs").length > 0) {
    update_size();
    $(window).resize(function () {
      update_size();
    });
    sliderLoop();
    $("#theme_tabs").hover(
      () => {
        SLIDER_PAUSED = true;
      },
      () => {
        SLIDER_PAUSED = false;
      }
    );
  }
  if ($("#theme_section").length > 0) {
    $("#theme_section").hover(
      () => {
        SLIDER_PAUSED = true;
      },
      () => {
        SLIDER_PAUSED = false;
      }
    );
  }
  if ($("#stats_slider").length > 0) {
    $("#stats_slider").owlCarousel({
      loop: false,
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
    // Set initial selected tab
    $(`[data-tab-id="automotive-iot-edge-devices"]`).addClass("selected");
    // $("#theme_tabs .item").click((e) => {
    //   e.preventDefault();
    //   SLIDER_PAUSED = true;
    //   let tab_id = e.currentTarget.attributes["data-tab-id"].value;
    //   switch_tab(tab_id);
    // });
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
