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
// Loop over each feed and add to the main array 
$.each(feeds, function( index, value ){
    $.ajax({
            url: 'https://api.rss2json.com/v1/api.json',
            method: 'GET',
            dataType: 'json',
            data: {
                rss_url: value,
                api_key: 'bno3vk93kxtom3cvdcylvqtvrcocukgboz5misiv',
                count: 4
            }
    }).done(function (response) {
        if(response.status != 'ok'){ throw response.message; }
        console.log('====== ' + response.feed.title + ' ======');
        for(var i in response.items){
            var item = response.items[i];
            console.log(item.title);
        }
        // Concat the returned items
        mainFeed.concat(response.items);
    });
});
// Log concatenated results
console.log("Main feed:");
console.log(mainFeed);
