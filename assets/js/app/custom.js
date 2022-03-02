// i18n support
$(document).ready(function () {
  // Check if i18n functionality is enabled.
  if ($("#language_switcher").length > 0) {
    const i18n_site_versions = {
      en: "/",
      "en-GB": "/",
      "en-US": "/",
      ja: "/ja/",
    };
    // On click handler for language switcher.
    $("#language_switcher a").on("click", function (anchor) {
      anchor.preventDefault();
      let lang = $(this).attr("data-lang");
      console.log("Clicked lang: ", lang);
      localStorage.setItem("siteLang", lang);
      localStorage.setItem("siteLangOverride", true);
      checkUserIsOnCorrectLanguage(lang);
    });

    const checkUserIsOnCorrectLanguage = (setLanguage) => {
      let currentPath = window.location.pathname;
      console.log("Current path:", currentPath);
      // If the current path does not include the correct language sub path, redirect users to the correct version of the page.
      console.log("Set lanugage: ", setLanguage);
      console.log("Set language path:", i18n_site_versions[setLanguage]);
      // Check to see if language subpath exists in the current path. E.g /ja/ in /ja/about/ or /about/
      let hasLangInUrl = currentPath.match(/\/[A-Za-z]{2}\//g);
      // Check if a lang code already exists in the pathname.
      if (hasLangInUrl) {
        console.log("language exists in url:", hasLangInUrl);
        let newPath = currentPath.replace(
          hasLangInUrl[0],
          i18n_site_versions[setLanguage]
        );
        console.log(newPath);
        if (currentPath !== newPath) {
          console.log("Redirecting user to correct path: ", newPath);
          window.location.href = newPath;
        } else {
          console.log("No redirect needed");
        }
      } else {
        let newPath =
          i18n_site_versions[setLanguage] + currentPath.substring(1);
        console.log(newPath);
        if (currentPath !== newPath) {
          console.log("Redirecting user to correct path: ", newPath);
          window.location.href = newPath;
        } else {
          console.log("No redirect needed");
        }
      }
    };
    // Get the current siteLang from local storage.
    const currentSetLang = localStorage.getItem("siteLang");
    const userOverriden = localStorage.getItem("siteLangOverride");
    // Get the current set lang on the browser.
    var browserLang = navigator.language || navigator.userLanguage;
    // Check to see if currentLang is null or not the same as the browser lang.
    console.log("Current set lang:", currentSetLang);
    console.log("Browser lang:", browserLang);
    if (
      currentSetLang === null ||
      (currentSetLang !== browserLang && userOverriden === null)
    ) {
      console.log("No current language set or the browser lang is different.");
      // Get the available locale keys.
      let availableKeys = Object.keys(i18n_site_versions);
      if (availableKeys.includes(browserLang)) {
        localStorage.setItem("siteLang", browserLang);
        checkUserIsOnCorrectLanguage(browserLang);
      } else {
        console.log("No alternate language available");
        localStorage.setItem("siteLang", "en");
        checkUserIsOnCorrectLanguage("en");
      }
    } else {
      console.log("A current language has been set.");
      // Get the current path and check that the user is on the correct version of the page.
      checkUserIsOnCorrectLanguage(currentSetLang);
    }
  }
});
$(document).ready(function () {
  if ($("#community_projects_slider").length > 0) {
    $("#community_projects_slider").owlCarousel({
      items: 4,
      loop: false,
      dots: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        1000: {
          items: 6,
        },
      },
    });
  }
  if ($("#projects_slider").length > 0) {
    $("#projects_slider").owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        400: {
          items: 4,
        },
        700: {
          items: 6,
        },
        1000: {
          items: 8,
        },
        1200: {
          items: 9,
        },
      },
    });
  }
  if ($("#members_slider").length > 0) {
    $("#members_slider").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: true,
      lazyLoad: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },
        1000: {
          items: 3,
          dots: true,
          nav: false,
        },
      },
    });
  }
  if ($("#testimonial_slider").length > 0) {
    $("#testimonial_slider").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay: false,
      items: 1,
    });
    $(".video_modal").on("hidden.bs.modal", function (e) {
      // do something...
      let video = $(this).find("video:first-child");
      video.get(0).pause();
    });
  }
  if ($("#engineering_slider_mobile").length > 0) {
    $("#engineering_slider_mobile").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoplay: true,
      rewind: true,
      autoHeight: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      items: 1,
    });
  }
  if ($("#engineering_slider").length > 0) {
    $("#engineering_slider").owlCarousel({
      loop: false,
      nav: false,
      dots: true,
      lazyLoad: true,
      margin: 25,
      autoHeight: true,
      autoplay: true,
      rewind: true,
      autoplayHoverPause: true,
      autoplayTimeout: 4000,
      items: 4,
    });
  }
});