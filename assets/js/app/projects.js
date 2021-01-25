$(document).ready(() => {
  // Check URL for deep link and open relevant theme
  // and project.
  $("#themeSelect").on("change", function () {
    var theme_val = this.value;
    // Updated the browser page hash value
    window.location.hash = theme_val;
    // Close any open projects
    closeOpenProjects();
    // Show the theme tab.
    showThemeTab(theme_val);
  });
  // Handle project toggle
  $(".project_container").on("click", function () {
    //Remove the selected class from prior project selections
    $(".project_container").removeClass("selected");
    // Add to current clicked project.
    $(this).addClass("selected");
  });
});
function closeOpenProjects() {
  $(".project_info_col").addClass("d-none");
  $(".project_info_col").removeClass("d-block");
  $(".project_container").removeClass("selected");
}
function showThemeTab(id) {
  $(`#project_theme_tabs a[href="#${id}"]`).tab("show");
}
function showProject(id) {
  // Hide previously visible project
  $(".project_info_col").addClass("d-none");
  $(".project_info_col").removeClass("d-block");
  // Show selected project.
  $(`#${id}-info .project_info_col`).removeClass("d-none");
  $(`#${id}-info .project_info_col`).addClass("d-block");
  scroll_to_anchor(`#${id}-info`);
}

function handleHashChange(hash) {
  var separatedHash;
  if (hash.indexOf("#") !== -1) {
    hash = hash.split("#")[1];
  }
  separatedHash = hash.split("_");
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

    $(".project_container_anchor").each(function () {
      if (projectIdArr.indexOf($(this).data("project-id")) === -1) {
        projectIdArr.push($(this).data("project-id"));
      }
      if (themeIdArr.indexOf($(this).data("theme-id")) === -1) {
        themeIdArr.push($(this).data("theme-id"));
      }
    });
    // Check the separated hash to see if it matches a project or theme id.
    if (projectIdArr.indexOf(separatedHash[0]) !== -1) {
      projectId = separatedHash[0];
    }
    if (themeIdArr.indexOf(separatedHash[0]) !== -1) {
      themeId = separatedHash[0];
    }
  }
  // show the correct project info panel.
  if (projectId !== "") {
    showProject(projectId);
  }
  // show the correct theme tab
  if (themeId !== "") {
    showThemeTab(themeId);
  }
}

function scroll_to_anchor(hash) {
  const splitHash = hash.split("#");
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#" + splitHash[1]).offset().top - 100,
    },
    500
  );
  //   $("#projects #" + splitHash[1]).collapse("show");
  //   url = location.href.replace(/\/#/, "/#");
  //   history.replaceState(null, null, url);
  setTimeout(() => {
    $(window).scrollTop(0);
  }, 400);
}

// Projects links
function handleDeepLinkHash() {
  let url = location.href.replace(/\/$/, "");
  if (location.hash) {
    handleHashChange(location.hash);
  }
  // On hash get project ID / theme id and open tab / theme.
  $(window).on("hashchange", function () {
    var hash = window.location.hash;
    handleHashChange(hash);
  });

  //   $(".collapse").on("show.bs.collapse", function (e) {
  //     let newUrl;
  //     const hash = $(this).attr("id");
  //     if (url.lastIndexOf("/projects/") > -1) {
  //       console.log("projects url exists");
  //       newUrl =
  //         url.substring(0, url.lastIndexOf("/projects/")) + "/projects/#" + hash;
  //     } else {
  //       newUrl = url.substring(0, url.lastIndexOf("/")) + "/projects/#" + hash;
  //     }
  //     history.replaceState(null, null, newUrl);
  //   });
}
$('#project_theme_tabs a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  closeOpenProjects();
});

handleDeepLinkHash();
