$(window).on("load", function () {
    if ($("#boards-blogs").length > 0) {
        // JSONP url
        var jsonp_url = "https://www.96boards.org/assets/json/blog.json?callback=func";
        // Add the JSONP to a script element
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = jsonp_url;
        
        // This function handles the jsonp data we receive
        // Adds a list element for each result in the JSONP data
        function func(jsonData){
            var listElements = '';
            var len = jsonData.length;
            for(var i=0;i<len;i++){
                blogEntry = jsonData[i];
                listElements += '<a href="' + blogEntry.url +'"><li class="list-group-item fly">' + blogEntry.title + '</li></a>';
            }
            document.getElementById('boards-blog').innerHTML = listElements;
        }

    }    
});