$(document).ready(function () {
  $("body").tooltip({
    selector: '[data-toggle="tooltip"]',
  });
  $("body").on("show.bs.collapse", ".panel-collapse", function () {
    $(this).siblings(".panel-heading").addClass("active");
  });

  $("body").on("hide.bs.collapse", ".panel-collapse", function () {
    $(this).siblings(".panel-heading").removeClass("active");
  });
});
var mainFeed = [];
// Store a list of all the rss feeds
var feeds = [
    "http://www.workofard.com/feed/", // Ard Biesheuvel
    "https://pierrchen.blogspot.com/rss.xml", // Bin Chen
    "https://marcin.juszkiewicz.com.pl/feed/", // Marcin Juszkiewicz
    "https://fullshovel.wordpress.com/feed/", // Tom Gall
    "https://translatedcode.wordpress.com/feed/", // Peter Maydell
    "http://suihkulokki.blogspot.com/feeds/posts/default/-/linaro", // Riku Voipio
    "http://nerdrambles.wordpress.com/category/Linaro/feed/", // James Arnett
    "http://www.bennee.com/~alex/blog/tag/linaro/feed/", // Alex Bennee
    "https://station.eciton.net/index.rss", // Leif Lindholm
    "https://blog.duraffort.fr/feed/tag/linaro/rss", // Remi Duraffort
    "https://nbhat-ho2016.blogspot.co.uk/rss.xml", // Naresh Bhat
    "https://www.davidb.org/index.xml", // David Brown
    "http://www.redfelineninja.org.uk/daniel/category/linaro/feed/", // Daniel Thompson
    "https://feedmix.novaclic.com/atom2rss.php?source=https%3A%2F%2Ftherub.org%2Ffeed.xml", // Dan rue
];
var sortableFeeds = feeds.slice();

// Collect Feed Channel Info
var feedChannels = [];
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_desc(a, b) {
  return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
}
// Sort function for safari browsers
function sort_by_date_desc_safari(a, b) {
  var reg = /-|:|T|\+/; //The regex on which matches the string should be split (any used delimiter) -> could also be written like /[.:T\+]/
  var parsed = [
    //an array which holds the date parts for a and b
    a.pubDate.split(reg), //Split the datestring by the regex to get an array like [Year,Month,Day,Hour,...]
    b.pubDate.split(reg),
  ];
  var dates = [
    //Create an array of dates for a and b
    new Date(parsed[0][0], parsed[0][1], parsed[0][2].split(" ")[0]), //Constructs an date of the above parsed parts (Year,Month...
    new Date(parsed[1][0], parsed[1][1], parsed[1][2].split(" ")[0]),
  ];
  return dates[1] - dates[0]; //Returns the difference between the date (if b > a then a - b < 0)
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_asc(a, b) {
  return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime();
}
// Add feed items to Array
var count = 0;
function addJSONToGlobalArr(json, end) {
  mainFeed.push(json);
  if (end == true) {
    if (count == feeds.length - 1) {
      outputFeed();
    } else {
      // console.log(count + " vs " + feeds.length)
      count += 1;
    }
  }
}
var feedCount = 0;
// Add Channels to Array
function addFeedChannel(json) {
  feedChannels.push(json);
  if (feedCount == feeds.length - 1) {
    outputFeedList();
  } else {
    feedCount += 1;
  }
}
function extractDateString(dateString) {
  var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
  var arr = rx.exec(dateString);
  return arr[0];
}
function extractDateString(dateString) {
  var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
  var arr = rx.exec(dateString);
  return arr[0];
}

function getJSON(url) {
  $.ajax({
    url: "https://api.rss2json.com/v1/api.json",
    method: "GET",
    dataType: "json",
    data: {
      rss_url: url,
      api_key: "bno3vk93kxtom3cvdcylvqtvrcocukgboz5misiv",
      count: 4,
    },
    success: function (response) {
      // Log response
      // console.log(response);
      addFeedChannel(response.feed);
      for (i = 0; i < response.items.length; i++) {
        if (i == response.items.length - 1) {
          addJSONToGlobalArr(response.items[i], (end = true));
        } else {
          addJSONToGlobalArr(response.items[i], (end = false));
        }
      }
    },
  });
}
// Loop over each feed and add to the main array
console.log("Generating the Planet Linaro feed...");

for (i = 0; i < feeds.length; i++) {
  var items = getJSON(feeds[i]);
}

// outputs list of feeds their original sites
function outputFeedList() {
  var feedList = '<div class="list-group">';
  for (i = 0; i < feedChannels.length; i++) {
    feedList +=
      '<li data-toggle="tooltip" title="' +
      feedChannels[i].description +
      '" href="#" class="list-group-item feed-link" data-feed="' +
      feedChannels[i] +
      '">';
    feedList += feedChannels[i].title;
    feedList += '<span class="pull-right">';
    feedList +=
      '<a href="' +
      feedChannels[i].link +
      '"><span class="fa fa-external-link"></span></a>';
    feedList +=
      '<a class="btn btn-xs" href="' +
      feedChannels[i].url +
      '"><span class="fa fa-rss"></span></a>';
    feedList += "</span>";
    feedList += "</li>";
  }
  feedList += "</div>";
  $(feedList).appendTo("#planet-list");
}
// Slugify a string in javascript
function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();
  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
  return str;
}

function outputFeed() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {
      var browser = "other";
    } else {
      var browser = "safari"; // Safari
    }
  } else {
    var browser = "other";
  }

  if (browser == "safari") {
    var sortedFeed = mainFeed.slice(0).sort(sort_by_date_desc_safari); //Create a new array
    console.log(sortedFeed.sort(sort_by_date_desc_safari));
  } else {
    var sortedFeed = mainFeed.slice(0).sort(sort_by_date_desc); //Create a new array
    console.log(sortedFeed.sort(sort_by_date_desc));
  }

  for (n = 0; n < sortedFeed.slice(0, 25).length; n++) {
    var uniqueId = string_to_slug(sortedFeed[n].guid);
    var textEl = '<div class="card">';
    textEl += '<div class="card-header" role="tab" id="' + uniqueId + '">';
    textEl += '<h5 class="card-title text-center">';
    textEl +=
      '<a class="text-dark collapsed" role="button" data-toggle="collapse" href="#' +
      uniqueId +
      '-Collapse" aria-expanded="true" aria-controls="' +
      uniqueId +
      '-Collapse">';
    textEl +=
      sortedFeed[n].title +
      " - " +
      sortedFeed[n].author +
      " - " +
      extractDateString(sortedFeed[n].pubDate);
    textEl += "</a>";
    textEl += "</h5>";
    textEl += "</div>";
    textEl +=
      '<div id="' +
      uniqueId +
      '-Collapse" class="card-body collapse" role="tabpanel" aria-labelledby="' +
      uniqueId +
      '">';
    textEl += '<div class="panel-body">';
    textEl += sortedFeed[n].content;
    textEl +=
      '<br> <a href="' + sortedFeed[n].link + '">View on Authors Site </a>';
    textEl += "</div>";
    textEl += "</div>";
    textEl += "</div>";
    $(textEl).appendTo("#accordion");
  }

  $("#loader").hide();
  $("#feed").show();
  console.log("Planet Linaro feed generated.");
}

//Locate images that are added dynamically to the page and add the img-responsive class
$("body").bind("DOMNodeInserted", function () {
  $(this).find("#feed img").addClass("img-responsive");
});
