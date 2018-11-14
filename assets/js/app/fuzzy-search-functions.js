// This function extracts a date string by matching against a regex string.
function extractDateString(dateString) {
    var rx = /(\d\d\d\d)\-(\d\d)\-(\d\d)/g;
    var arr = rx.exec(dateString);
    return arr[0]; 
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_desc(a, b) {
    return new Date(b.date_published).getTime() - new Date(a.date_published).getTime();
}
// Sort function which takes the data array, property to sort by and an asc boolean.
function sort_by_date_asc(a, b) {
    return new Date(a.date_published).getTime() - new Date(b.date_published).getTime();
}
// dynamicSort sorts is a sort function used in .sort to sort an array by a specific key in alphabetical order
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

// Filters Results based on a set "key" and "potential_keys"
// Using fuzzy search js library by Matt York and underscore.js
// Requires the "current_json_data" to filter results on
// A "key" to match "potential_keys" to.
// "potential_keys" are the values of "key" that should be accepted in the filter
//
// Example configuration
//
// var template_settings = {
//     interpolate : /\{\{(.+?)\}\}/g
// };
// var template_string = '<tr>' +
//                         '<td>{{post_title}}</td>' +
//                         '<td>{{post_author}}</td>' + 
//                         '<td>{{post_date_published}}</td>' +
//                         '<td><a href="{{post_url}}">View post</a></td>' +
//                         '<td><a href="{{post_site}}"><img class="img-responsive" src="{{site_image}}"/></a></td>' +
//                         '</tr>';
// var underscore_table_row_template = _.template(template_string);
function filter_results(current_json_data, key, potential_keys, underscore_table_row_template) {
    // Define the underscore.js template settings.
     _.templateSettings = {
            interpolate : /\{\{(.+?)\}\}/g
        };
    // Specify a new html _.template
    var listItemTemplate = underscore_table_row_template;
    // Get the search query val which we are searching for.
    var search = $('#search-query').val();
    // Fuzzy search options
    var options = {
        pre: "<b>"
      , post: "</b>"

      // Each element in the data is an object, not a string. We can pass in a
      // function that is called on each element in the array to extract the
      // string to fuzzy search against. In this case, element.dir
      , extract: function(entry) {
            return entry.title + '::' + entry.author;
        }
    }
    // Filter!
    var filtered = fuzzy.filter(search, current_json_data, options);
    // Map the results to the html we want generated
    var results = filtered.map(function(result){
        var items = result.string.split('::');
        // Check if the author is set and if not then replace with stripped url.
        var author = result.original.author;
        if(author == "undefined" || author == ""){
            author = result.original.site.replace(/(^\w+:|^)\/\//, '');
        }
        else{
            author = items[1];
        }
        var formatted_date = extractDateString(result.original.date_published);
        var formatted_site = result.original.site.replace(/(^\w+:|^)\/\//, '');
        var site_image = site_logos[result.original.site];
        if (isInArray(result.original[key], potential_keys)){
            return listItemTemplate({
                post_url: result.original.url
                , post_title: items[0]
                , post_author: author
                , post_date_published: formatted_date
                , post_site: result.original.site
                , post_site_formatted: formatted_site
                , site_image: site_image
            });
        }
    });
    // Add original JSON array to currentJSON
    currentJSON = [];
    
    // Map the original item to a new currentJSON Array
    filtered.map(function(item) {
        if(isInArray(item.original[key], potential_keys)){
            currentJSON.push(item.original);
        }        
    });
    // Append results to the results html container
    $('#result_size').html(filtered.length);
    $('#results').html(results.join(''));
}
