var mainFeed = [];
// Store a list of all the rss feeds
var feeds = [
    "https://linux.codehelp.co.uk/blog.xml",
    "http://www.workofard.com/feed/",
    "https://pierrchen.blogspot.com/rss.xml",
    "http://www.metaklass.org/rss/",
    "https://blog.sirena.org.uk/feed/",
    "https://marcin.juszkiewicz.com.pl/feed/",
    "http://fullshovel.wordpress.com/category/linaro/feed/",
    "https://translatedcode.wordpress.com/feed/",
    "http://suihkulokki.blogspot.com/feeds/posts/default/-/linaro",
    "http://nerdrambles.wordpress.com/category/Linaro/feed/",
    "https://www.stylesen.org/taxonomy/term/50/0/feed",
    "http://www.bennee.com/~alex/blog/tag/linaro/feed/",
    "https://station.eciton.net/index.rss",
    "https://blog.duraffort.fr/feed/tag/linaro/rss",
    "https://nbhat-ho2016.blogspot.co.uk/rss.xml"
];
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_desc(a, b) {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_asc(a, b) {
    return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime();
}
var count = 0;

function addJSONToGlobalArr(json, end){
    mainFeed.push(json);
    if(end == true){
        if(count == feeds.length - 1){
            outputFeed();
        }
        else{
            console.log(count + " vs " + feeds.length)
            count += 1;
        }
    }
    else{

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
for(i=0;i<feeds.length;i++){
    var items = getJSON(feeds[i]);
}

function outputFeed(){
    console.log("Sorted Feed");
    var sortedFeed = mainFeed.slice(0);
    console.log(sortedFeed.sort(sort_by_date_desc));
    
    for(n=0;n<sortedFeed.length;n++){

        var textEl = '<div class="planet-entry">';
        textEl += '<div class="panel panel-default">';
        textEl += '<div class="panel-heading">' + sortedFeed[n].title + ' - ' + sortedFeed[n].author + ' - ' + extractDateString(sortedFeed[n].pubDate) +'</div>';
        textEl += '<div class="panel-body lazyload">';
        textEl += sortedFeed[n].content;
        textEl += '<br> <a href="' + sortedFeed[n].link + '">View on Origin Site </a>';
        textEl += '</div>';
        textEl += '</div>';
        $(textEl).appendTo("#feed");
    }

    $("#loader").hide();
    $("#feed").show();
}
