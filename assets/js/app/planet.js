var mainFeed = [];
// Store a list of all the rss feeds
var feeds = [
    "https://linux.codehelp.co.uk/blog.xml",
    "http://fullshovel.wordpress.com/category/linaro/feed/",
    "https://translatedcode.wordpress.com/feed/",
    "http://suihkulokki.blogspot.com/feeds/posts/default/-/linaro",
    "http://nerdrambles.wordpress.com/category/Linaro/feed/",
    "https://www.stylesen.org/taxonomy/term/50/0/feed",
    "http://www.bennee.com/~alex/blog/tag/linaro/feed/",
    "https://station.eciton.net/index.rss",
    "http://www.workofard.com/category/linaro/feed/",
    "https://blog.duraffort.fr/feed/tag/linaro/rss",
    "http://feeds.launchpad.net/linaro/announcements.atom",
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
}
