$(document).ready(function(){
    $('body').tooltip({
        selector: '[rel=tooltip]'
    });
    $('body').on('show.bs.collapse', '.panel-collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('body').on('hide.bs.collapse', '.panel-collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });
});
var mainFeed = [];
// Store a list of all the rss feeds
var feeds = [
    "https://linux.codehelp.co.uk/blog.xml",
    "http://www.workofard.com/feed/",
    "https://pierrchen.blogspot.com/rss.xml",
    "http://www.metaklass.org/rss/",
    "https://blog.sirena.org.uk/feed/",
    "https://marcin.juszkiewicz.com.pl/feed/",
    "https://fullshovel.wordpress.com/feed/",
    "https://translatedcode.wordpress.com/feed/",
    "http://suihkulokki.blogspot.com/feeds/posts/default/-/linaro",
    "http://nerdrambles.wordpress.com/category/Linaro/feed/",
    "https://www.stylesen.org/taxonomy/term/50/0/feed",
    "http://www.bennee.com/~alex/blog/tag/linaro/feed/",
    "https://station.eciton.net/index.rss",
    "https://blog.duraffort.fr/feed/tag/linaro/rss",
    "https://nbhat-ho2016.blogspot.co.uk/rss.xml",
    "https://feedmix.novaclic.com/atom2rss.php?source=http%3A%2F%2Fthetestingcorner.com%2Ffeed.xml"
];
var sortableFeeds = [
    "https://linux.codehelp.co.uk/blog.xml",
    "http://www.workofard.com/feed/",
    "https://pierrchen.blogspot.com/rss.xml",
    "http://www.metaklass.org/rss/",
    "https://blog.sirena.org.uk/feed/",
    "https://marcin.juszkiewicz.com.pl/feed/",
    "https://fullshovel.wordpress.com/feed/",
    "https://translatedcode.wordpress.com/feed/",
    "http://suihkulokki.blogspot.com/feeds/posts/default/-/linaro",
    "http://nerdrambles.wordpress.com/category/Linaro/feed/",
    "https://www.stylesen.org/taxonomy/term/50/0/feed",
    "http://www.bennee.com/~alex/blog/tag/linaro/feed/",
    "https://station.eciton.net/index.rss",
    "https://blog.duraffort.fr/feed/tag/linaro/rss",
    "https://nbhat-ho2016.blogspot.co.uk/rss.xml",
    "https://feedmix.novaclic.com/atom2rss.php?source=http%3A%2F%2Fthetestingcorner.com%2Ffeed.xml"
];
// Collect Feed Channel Info
var feedChannels = [];
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_desc(a, b) {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_asc(a, b) {
    return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime();
}
// Add feed items to Array
var count = 0;
function addJSONToGlobalArr(json, end){
    mainFeed.push(json);
    if(end == true){
        if(count == feeds.length - 1){
            outputFeed();
        }
        else{
            // console.log(count + " vs " + feeds.length)
            count += 1;
        }
    }
}
var feedCount = 0;
// Add Channels to Array
function addFeedChannel(json){
    feedChannels.push(json);
    if (feedCount == feeds.length - 1) {
        outputFeedList();
    }
    else {
        feedCount += 1;
    }
}
function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0]; 
}

function getJSON(url){
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: url,
            api_key: 'bno3vk93kxtom3cvdcylvqtvrcocukgboz5misiv',
            count: 4
        },
        success: function (response) {
            // Log response
            console.log(response);
            addFeedChannel(response.feed);
            for(i=0;i<response.items.length;i++){
                if(i == response.items.length - 1){
                    addJSONToGlobalArr(response.items[i], end=true);
                }
                else{
                    addJSONToGlobalArr(response.items[i], end=false);
                }
            }
        }
    });
}
// Loop over each feed and add to the main array 
console.log("Generating the Planet Linaro feed...");
for(i=0;i<feeds.length;i++){
    var items = getJSON(feeds[i]);
}

// outputs list of feeds their original sites
function outputFeedList(){
    var feedList = '<div class="list-group">';
    for (i = 0; i < feedChannels.length; i++) {
        feedList += '<li data-toggle="tooltip" title="' + feedChannels[i].description + '" href="#" class="list-group-item feed-link" data-feed="' + feedChannels[i] + '">';
        feedList += feedChannels[i].title;
        feedList += '<span class="pull-right">';
        feedList += '<a href="' + feedChannels[i].link + '"><span class="fa fa-external-link"></span></a>';
        feedList += '<a class="btn btn-xs" href="' + feedChannels[i].url + '"><span class="fa fa-rss"></span></a>';
        feedList += '</span>';
        feedList += '</li>';
    }
    feedList += '</div>';
    $(feedList).appendTo("#planet-list");
}
// Slugify a string in javascript
function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
    return str;
}

function outputFeed(){
    var sortedFeed = mainFeed.slice(0).sort(sort_by_date_desc); //Create a new array
    console.log(sortedFeed.sort(sort_by_date_desc));
    for(n=0;n<sortedFeed.slice(0,25).length;n++){
        var uniqueId = string_to_slug(sortedFeed[n].guid);
        var textEl = '<div class="panel panel-default">';
        textEl += '<div class="panel-heading" role="tab" id="' + uniqueId +'">';
        textEl += '<h4 class="panel-title text-center">';
        textEl += '<a class="collapsed" role="button" data-toggle="collapse" href="#' + uniqueId + '-Collapse" aria-expanded="true" aria-controls="' + uniqueId + '-Collapse">';
        textEl += sortedFeed[n].title + ' - ' + sortedFeed[n].author + ' - ' + extractDateString(sortedFeed[n].pubDate);
        textEl += '</a>';
        textEl += '</h4>';
        textEl += '</div>';
        textEl += '<div id="' + uniqueId + '-Collapse" class="panel-collapse collapse" role="tabpanel" aria-labelledby="' + uniqueId +'">';
        textEl += '<div class="panel-body">';
        textEl += sortedFeed[n].content;
        textEl += '<br> <a href="' + sortedFeed[n].link + '">View on Authors Site </a>';
        textEl += '</div>';
        textEl += '</div>';
        textEl += '</div>';
        $(textEl).appendTo("#accordion");
    }
    $("#loader").hide();
    $("#feed").show();
    console.log("Planet Linaro feed generated.");
}
