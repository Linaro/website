function hideAllProjectCollapses(callback = false) {
  $("#accordion .collapse").collapse("hide");
  $(`.project_card`).addClass("d-none");
  $(`.project_card`).each(function () {
    if ($(this).hasClass("d-block")) {
      $(this).removeClass("d-block");
    }
  });
  if (callback !== false) callback();
}
function filterOnTheme(theme, callback = false) {
  console.log("filtering on theme: ", theme);
  // Close any open projects
  hideAllProjectCollapses();
  // Hide any theme descriptions.
  $(`.theme_description`).addClass("d-none");
  $(`.theme_description`).each(function () {
    if ($(this).hasClass("d-block")) {
      $(this).removeClass("d-block");
    }
  });
  // Switch theme tab / selecet menu
  if ($("#themeSelectCollapse").is(":visible")) {
    // Make sure the correct theme is selected
    $("#themeSelectCollapse").val(theme);
    // Update the projects menu to show only theme related projects
    $("#projectsDropdown > .dropdown-menu > button").addClass("d-none");
    $("#projectsDropdown > .dropdown-menu > button").each(function () {
      if ($(this).hasClass("d-block")) {
        $(this).removeClass("d-block");
      }
    });
    // Show project buttons with the given theme id.
    if (theme === "allProjects") {
      $(`#projectsDropdown > .dropdown-menu > button`).addClass("d-block");
    } else {
      // $(
      //   `#projectsDropdown > .dropdown-menu > button[data-theme='${theme}']`
      // ).addClass("d-block");
      // Show relevant theme description
      $(`.theme_description[data-theme-id='${theme}']`).addClass("d-block");
      $(`#projectsDropdown > .dropdown-menu > button`).each(function () {
        var themes = $(this).data("themes").split(",");
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === theme) {
            $(this).addClass("d-block");
          }
        }
      });
    }
  } else {
    $(`#project_theme_tabs a[data-theme='${theme}']`).tab("show");
    if (theme === "allProjects") {
      $(".project_card").addClass("d-block");
    } else {
      // $(`.project_card[data-theme='${theme}']`).addClass("d-block");
      // Show relevant theme description
      $(`.theme_description[data-theme-id='${theme}']`).addClass("d-block");
      $(`.project_card`).each(function () {
        var themes = $(this).data("themes").split(",");
        for (let i = 0; i < themes.length; i++) {
          if (themes[i] === theme) {
            $(this).addClass("d-block");
          }
        }
      });
    }
  }
  if (callback) callback();
}
function showProjectCollapse(projectId) {
  console.log("Showing project collapse");
  if ($(`.project_card[data-project-id='${projectId}']`).hasClass("d-none")) {
    $(`.project_card[data-project-id='${projectId}']`).removeClass("d-none");
  }
  $(`.project_card[data-project-id='${projectId}']`).addClass("d-block");
  $(`#${projectId}`).collapse("show");
  if (!$(`#${projectId}`).hasClass("show")) {
    $(`#${projectId}`).addClass("show");
  }
  if (!$("#themeSelectCollapse").is(":visible")) {
    scroll_to_anchor(`#${projectId}`);
  }
}
function handleHashChange(hash) {
  var separatedHash;
  separatedHash = hash.replace("#", "").split("_");
  console.log(separatedHash);
  var projectId = "";
  var themeId = "";
  var projectIdArr = [];
  var themeIdArr = [];
  // If _ exists then theme and project exists
  if (separatedHash.length > 1) {
    themeId = separatedHash[0];
    projectId = separatedHash[1];
  } else {
    // Only the theme or project ID exists
    // For backwards compatability we need to check
    // to see if the id is a theme or project.
    $(".project_card").each(function () {
      if (projectIdArr.indexOf($(this).data("project-id")) === -1) {
        projectIdArr.push($(this).data("project-id"));
      }
      var themes = $(this).data("themes").split(",");
      for (let i = 0; i < themes.length; i++) {
        if (themeIdArr.indexOf(themes[i]) === -1) {
          themeIdArr.push(themes[i]);
        }
      }
    });
    // Check the separated hash to see if it matches a project or theme id.
    if (projectIdArr.indexOf(separatedHash[0]) !== -1) {
      projectId = separatedHash[0];
    }
    console.log(themeIdArr);
    if (themeIdArr.indexOf(separatedHash[0]) !== -1) {
      themeId = separatedHash[0];
    }
  }
  // show the correct theme tab
  if (themeId !== "") {
    filterOnTheme(themeId, function () {
      // show the correct project info panel.
      console.log("running callback.");
      if (projectId !== "") {
        showProjectCollapse(projectId);
      }
    });
  } else if (projectId !== "") {
    // show the correct project info panel.
    showProjectCollapse(projectId);
  }
}
function scroll_to_anchor(hash) {
  const splitHash = hash.split("#");
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#" + splitHash[1]).offset().top - 200,
    },
    500
  );
}
// Projects links
function handleDeepLinkHash() {
  let url = location.href.replace(/\/$/, "");
  var hash = "";
  if (location.hash) {
    if (location.hash.indexOf("#") !== -1) {
      hash = location.hash.split("#")[1];
    } else {
      hash = location.hash;
    }
    handleHashChange(hash);
  }
  // On hash get project ID / theme id and open tab / theme.
  // $(window).on("hashchange", function () {
  //   var hash = window.location.hash;
  //   handleHashChange(hash);
  // });

  //   $(".collapse").on("show.bs.collapse", function (e) {
  //     let newUrl;
  //     const hash = $(this).attr("id");
  //
  //   });
}

$(document).ready(() => {
  // If we are on a mobile screen
  // 1) Hide all the project cards
  if ($("#themeSelectCollapse").is(":visible")) {
    hideAllProjectCollapses();
    // Projects dropdown on click handler setup
    $("#projectsDropdown button.dropdown-item").on("click", function (e) {
      hideAllProjectCollapses();
      window.location.hash = `${$(this).data("themes").split(",")[0]}_${$(
        this
      ).data("project-id")}`;
      console.log(
        `${$(this).data("themes").split(",")[0]}_${$(this).data("project-id")}`
      );
      console.log($(this).data("themes"));
      showProjectCollapse($(this).data("project-id"));
    });
  }
  $("#project_theme_tabs a").on("click", function () {
    var theme_val = $(this).data("theme");
    filterOnTheme(theme_val);
  });
  // Check URL for deep link and open relevant theme
  // and project.
  $("#themeSelectCollapse").on("change", function () {
    var theme_val = this.value;
    // Show the theme tab.
    filterOnTheme(theme_val);
  });
  // // Detect change in accordion and update the page hash.
  $("#accordion").on("show.bs.collapse", function (e) {
    let hash = `${$(e.target).data("themes").split(",")[0]}_${$(e.target).data(
      "project-id"
    )}`;
    window.location.hash = hash;
  });
  handleDeepLinkHash();
});
