$(document).ready(function () {
  // Clipboard JS
  if ($("div.highlight").length > 0) {
    $("div.highlight").each(function (index) {
      var uniqueId = "highlight" + index;
      $(this).attr("id", uniqueId);
      var copyBtn =
        '<button id="copyBtn' +
        index +
        '" data-toggle="tooltip" data-placement="bottom" title="Copy to Clipboard" class="btn copyBtn" data-clipboard-target="#' +
        uniqueId +
        '">';
      copyBtn +=
        '<img src="/assets/images/clipboard.svg" width="13" alt="Copy to clipboard"></button>';
      $(this).append(copyBtn);
      (function () {
        new ClipboardJS("#copyBtn" + index);
      })();
      $("#copyBtn" + index).on("click", function () {
        $(this)
          .attr("title", "Copied!")
          .tooltip("_fixTitle")
          .tooltip("show")
          .attr("title", "Copy to clipboard")
          .tooltip("_fixTitle");
      });
    });
  }
  if ($("#jumbotron-slider").length > 0) {
    $("#jumbotron-slider").owlCarousel({
      navigation: true,
      slideSpeed: 300,
      autoplayTimeout: 10000,
      paginationSpeed: 400,
      pagination: false,
      rewindSpeed: 500,
      rewind: true,
      autoplay: false,
      items: 1,
      lazyLoadEager: 0,
      loop: false,
      lazyLoad: true,
      dots: true,
    });
  }
  if ($(".owl-carousel.slider_block").length > 0) {
    $(".owl-carousel.slider_block").each(function (index) {
      // Set Default values for the responsive items
      var xs_items = 1;
      var sm_items = 2;
      var xs_items = 3;
      var lg_items = 4;
      var seconds_per_slide = 5000;
      var dots = false;
      var nav = true;

      if (typeof $(this).data("xs-number") !== "undefined") {
        var xs_items = $(this).data("xs-number");
      }
      if (typeof $(this).data("sm-number") !== "undefined") {
        var sm_items = $(this).data("sm-number");
      }
      if (typeof $(this).data("md-number") !== "undefined") {
        var md_items = $(this).data("md-number");
      }
      if (typeof $(this).data("lg-number") !== "undefined") {
        var lg_items = $(this).data("lg-number");
      }
      if (typeof $(this).data("seconds-per-slide") !== "undefined") {
        var seconds_per_slide = $(this).data("seconds-per-slide") * 1000;
      }
      if (typeof $(this).data("dots") !== "undefined") {
        var dots = $(this).data("dots");
      }
      if (typeof $(this).data("nav") !== "undefined") {
        var nav = $(this).data("nav") * 1000;
      }

      $(this).owlCarousel({
        nav: nav,
        dots: dots,
        slideSpeed: 300,
        autoplayTimeout: seconds_per_slide,
        rewindSpeed: 500,
        rewind: true,
        autoplay: true,
        autoHeight: true,
        responsiveClass: true,
        lazyLoad: true,
        lazyLoadEager: 0,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: xs_items,
          },
          // breakpoint from 480 up
          768: {
            items: sm_items,
          },
          // breakpoint from 768 up
          992: {
            items: md_items,
          },
          1200: {
            items: lg_items,
          },
        },
      });
    });
  }

  // Double Scroll Plugin
  if ($(".double-scroll").length > 0) {
    $(".double-scroll").doubleScroll({
      resetOnWindowResize: true,
      onlyIfScroll: true,
    });
  }
  // Theme navbar setup
  var wrapper = $("#wrapper");
  var universalNav = false;
  // Main Navigation Selector
  var main_nav = $("#main-navigation");
  var wrapper_margin_top = main_nav.height();
  if ($("#universal_nav").length > 0) {
    var universalNav = $("#universal_nav");
    wrapper_margin_top += universalNav.height();
  }
  var stickyOffset = $("#main-navigation").offset().top;
  var wrapper = $("#wrapper");

  function navbar() {
    // Scroll value
    var scroll = $(window).scrollTop();

    if (scroll > stickyOffset) {
      if (universalNav) {
        universalNav.hide();
      }
      wrapper.css("margin-top", wrapper_margin_top);
      main_nav.addClass("fixed-top");
    } else {
      main_nav.removeClass("fixed-top");
      wrapper.css("margin-top", "0px");

      if (universalNav) {
        universalNav.show();
      }
    }
  }
  navbar();
  $(window).scroll(function () {
    navbar();
  });

  //   Multi-level dropdowns
  $(".navbar .dropdown-menu > li:not(.dropdown-item)").on("click", function (
    e
  ) {
    e.stopPropagation();
  });
  $(".navbar .dropdown-item").on("click", function (e) {
    var $el = $(this).children(".dropdown-toggle");
    var $parent = $el.offsetParent(".dropdown-menu");
    if (!$parent.parent().hasClass("navbar-nav")) {
      if ($parent.hasClass("show")) {
        $parent.removeClass("show");
        $el.next().removeClass("show");
        $el.next().css({ top: -999, left: -999 });
      } else {
        $parent.parent().find(".show").removeClass("show");
        $parent.addClass("show");
        $el.next().addClass("show");
        $el
          .next()
          .css({ top: $el[0].offsetTop, left: $parent.outerWidth() - 4 });
      }
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Reset forms when bootstrap modal closes.
  $(".modal").on("hidden.bs.modal", function () {
    $(this).find("form")[0].reset();
  });
  // Stacked Navbar
  $("#stacked-nav-bar").on("hidden.bs.collapse", function () {
    $(".nav-pills").removeClass("nav-stacked");
  });
  // Scrolling sticking on IOS7 (Bug fix)
  if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)) {
    $("html").addClass("ios7");
  }
  // Open External links in a new tab
  $("a").each(function () {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      if ($(this).attr("target") != "_self") {
        $(this).attr("target", "_blank");
      }
    }
  });

  if ($(".nav-tabs").length > 0) {
    let url = location.href.replace(/\/$/, "");

    if (location.hash) {
      const hash = url.split("#");
      $('.nav-tabs a[href="#' + hash[1] + '"]').tab("show");
      url = location.href.replace(/\/#/, "#");
      history.replaceState(null, null, url);
      setTimeout(() => {
        $(window).scrollTop(0);
      }, 400);
    }

    $('a[data-toggle="tab"]').on("click", function () {
      let newUrl;
      const hash = $(this).attr("href");
      newUrl = url.split("#")[0] + hash;
      history.replaceState(null, null, newUrl);
    });
  }

  // COOKIES CONFIG
  // Cookie Consent Setup
  if ($("meta[name=analytics_code]")) {
    var privacy_url = $("meta[name=privacy_url]").attr("content");
    var cookies_popup_title = $("meta[name=cookies_popup_title]").attr(
      "content"
    );
    var cookies_popup_description = $(
      "meta[name=cookies_popup_description]"
    ).attr("content");
    var ga_code = $("meta[name=analytics_code]").attr("content");

    // Options for the Cookie Dialog
    var options = {
      title: "Cookies & Privacy Policy",
      links: [
        { url: "/cookies/", text: "Cookies Policy" },
        { url: "/legal#privacy-policy2", text: "Privacy Policy" },
      ],
      delay: 1000,
      acceptBtnLabel: "Accept All Cookies",
      analyticsChecked: true,
      message:
        "Enabling cookies allows you to use our website to its full extent and to personalize your experience on our sites. They tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches and give us insights into user behavior so we can improve our communications with you.",
      cookieTypes: [
        {
          type: "Analytics",
          value: "analytics",
          checked: true,
          description: "Cookies related to site visits, browser types, etc.",
        },
      ],
      onAccept: function () {
        init_ga();
      },
    };
    // Enabled Google Analytics if cookie to allow us to collect is set.
    function init_ga() {
      if ($.fn.ihavecookies.preference("analytics")) {
        // (function (i, s, o, g, r, a, m) {
        //   i["GoogleAnalyticsObject"] = r;
        //   (i[r] =
        //     i[r] ||
        //     function () {
        //       (i[r].q = i[r].q || []).push(arguments);
        //     }),
        //     (i[r].l = 1 * new Date());
        //   (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        //   a.async = 1;
        //   a.src = g;
        //   m.parentNode.insertBefore(a, m);
        // })(
        //   window,
        //   document,
        //   "script",
        //   "https://www.google-analytics.com/analytics.js",
        //   "ga"
        // );
        // ga("create", ga_code, "auto");
        // ga("send", "pageview");
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js",
          });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", ga_code);
        console.log("Google Analytics started");
      } else {
        console.log("Google analytics not started... :(");
      }
    }
    // Initialize
    init_ga();

    if ($(".cookie_manager").length > 0) {
      var analytics_toggle = $("#analytics_toggle");
      if ($.fn.ihavecookies.preference("analytics")) {
        analytics_toggle.addClass("active");
        options.cookieTypes = [
          {
            type: "Analytics",
            value: "analytics",
            checked: false,
            description: "Cookies related to site visits, browser types, etc.",
          },
        ];
      }
      analytics_toggle.on("click", function () {
        $.removeCookie("_ga");
        $.removeCookie("_ga", { path: "/" });
        $.removeCookie("_gid");
        $.removeCookie("_gid", { path: "/" });
        $.removeCookie("_gat");
        $.removeCookie("_gat", { path: "/" });
        $.removeCookie("cookieControlPrefs");
        $.removeCookie("cookieControlPrefs", { path: "/" });
        $.removeCookie("cookieControl");
        $.removeCookie("cookieControl", { path: "/" });
        options["acceptBtnLabel"] = "Update Cookies";
        $("body").ihavecookies(options, "reinit");
      });
    }
    $("body").ihavecookies(options);
  }
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  if ($("#post_search").length > 0) {
    var file_path = $("#post_search").data("file-path");

    $("#results-container").hide();
    $("#search-input").keyup(function () {
      if ($("#search-input").val().length == 0) {
        $("#results-container").fadeOut("fast");
        $(".close_search").hide();
      } else {
        $("#results-container").fadeIn("fast");
        $(".close_search").show();
      }
    });
    $(".close_search").click(function (e) {
      e.preventDefault();
      $("#search-input").val("");
      $("#results-container").fadeOut("fast");
      $(".close_search").hide();
    });

    console.log(file_path);
    SimpleJekyllSearch({
      searchInput: document.getElementById("search-input"),
      resultsContainer: document.getElementById("results-container"),
      searchResultTemplate:
        '<li class="media flex-row"><picture><img class="lazyload mr-3 img-thumbnail suggested_post_thumb search_result_img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{image}"></picture><div class="media-body"><a href="{url}"><h5 class="mt-0 mb-1">{title}</h5><em class="suggested_post_date">{date}</em><p>{description}</p></a></div></li>',
      json: file_path,
      success: function (data) {
        console.log(data);
      },
    });
  }
});

$(document).ready(function () {
  $("#ten_years_modal").on("shown.bs.modal", function (e) {
    var videoElement = $(this).find("video");
    videoElement.trigger("play");
  });
  $("#ten_years_modal").on("hide.bs.modal", function (e) {
    var videoElement = $(this).find("video");
    videoElement.trigger("pause");
  });
  if ($("#ten_years_modal").length > 0) {
    var confetti = {
      maxCount: 150,
      speed: 2,
      frameInterval: 15,
      alpha: 1,
      gradient: !1,
      start: null,
      stop: null,
      toggle: null,
      pause: null,
      resume: null,
      togglePause: null,
      remove: null,
      isPaused: null,
      isRunning: null,
    };
    !(function () {
      (confetti.start = s),
        (confetti.stop = w),
        (confetti.toggle = function () {
          e ? w() : s();
        }),
        (confetti.pause = u),
        (confetti.resume = m),
        (confetti.togglePause = function () {
          i ? m() : u();
        }),
        (confetti.isPaused = function () {
          return i;
        }),
        (confetti.remove = function () {
          stop(), (i = !1), (a = []);
        }),
        (confetti.isRunning = function () {
          return e;
        });
      var t =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame,
        n = ["rgba(168,0,250,", "rgba(255,0,5,", "rgba(155,195,49,"],
        e = !1,
        i = !1,
        o = Date.now(),
        a = [],
        r = 0,
        l = null;
      function d(t, e, i) {
        return (
          (t.color =
            n[(Math.random() * n.length) | 0] + (confetti.alpha + ")")),
          (t.color2 =
            n[(Math.random() * n.length) | 0] + (confetti.alpha + ")")),
          (t.x = Math.random() * e),
          (t.y = Math.random() * i - i),
          (t.diameter = 10 * Math.random() + 5),
          (t.tilt = 10 * Math.random() - 10),
          (t.tiltAngleIncrement = 0.07 * Math.random() + 0.05),
          (t.tiltAngle = Math.random() * Math.PI),
          t
        );
      }
      function u() {
        i = !0;
      }
      function m() {
        (i = !1), c();
      }
      function c() {
        if (!i)
          if (0 === a.length)
            l.clearRect(0, 0, window.innerWidth, window.innerHeight), null;
          else {
            var n = Date.now(),
              u = n - o;
            (!t || u > confetti.frameInterval) &&
              (l.clearRect(0, 0, window.innerWidth, window.innerHeight),
              (function () {
                var t,
                  n = window.innerWidth,
                  i = window.innerHeight;
                r += 0.01;
                for (var o = 0; o < a.length; o++)
                  (t = a[o]),
                    !e && t.y < -15
                      ? (t.y = i + 100)
                      : ((t.tiltAngle += t.tiltAngleIncrement),
                        (t.x += Math.sin(r) - 0.5),
                        (t.y +=
                          0.5 * (Math.cos(r) + t.diameter + confetti.speed)),
                        (t.tilt = 15 * Math.sin(t.tiltAngle))),
                    (t.x > n + 20 || t.x < -20 || t.y > i) &&
                      (e && a.length <= confetti.maxCount
                        ? d(t, n, i)
                        : (a.splice(o, 1), o--));
              })(),
              (function (t) {
                for (var n, e, i, o, r = 0; r < a.length; r++) {
                  if (
                    ((n = a[r]),
                    t.beginPath(),
                    (t.lineWidth = n.diameter),
                    (i = n.x + n.tilt),
                    (e = i + n.diameter / 2),
                    (o = n.y + n.tilt + n.diameter / 2),
                    confetti.gradient)
                  ) {
                    var l = t.createLinearGradient(e, n.y, i, o);
                    l.addColorStop("0", n.color),
                      l.addColorStop("1.0", n.color2),
                      (t.strokeStyle = l);
                  } else t.strokeStyle = n.color;
                  t.moveTo(e, n.y), t.lineTo(i, o), t.stroke();
                }
              })(l),
              (o = n - (u % confetti.frameInterval))),
              requestAnimationFrame(c);
          }
      }
      function s(t, n, o) {
        var r = window.innerWidth,
          u = window.innerHeight;
        window.requestAnimationFrame =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (t) {
            return window.setTimeout(t, confetti.frameInterval);
          };
        var m = document.getElementById("confetti-canvas");
        null === m
          ? ((m = document.createElement("canvas")).setAttribute(
              "id",
              "confetti-canvas"
            ),
            m.setAttribute(
              "style",
              "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"
            ),
            document.body.prepend(m),
            (m.width = r),
            (m.height = u),
            window.addEventListener(
              "resize",
              function () {
                (m.width = window.innerWidth), (m.height = window.innerHeight);
              },
              !0
            ),
            (l = m.getContext("2d")))
          : null === l && (l = m.getContext("2d"));
        var s = confetti.maxCount;
        if (n)
          if (o)
            if (n == o) s = a.length + o;
            else {
              if (n > o) {
                var f = n;
                (n = o), (o = f);
              }
              s = a.length + ((Math.random() * (o - n) + n) | 0);
            }
          else s = a.length + n;
        else o && (s = a.length + o);
        for (; a.length < s; ) a.push(d({}, r, u));
        (e = !0), (i = !1), c(), t && window.setTimeout(w, t);
      }
      function w() {
        e = !1;
      }
    })();
    confetti.start(2500);
  }
});
