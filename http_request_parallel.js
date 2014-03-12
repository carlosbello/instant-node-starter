var http = require('http');

var urls = [
    'http://search.twitter.com/search.json?q=Node',
    'http://search.twitter.com/search.json?q=javascript'
];

var allResults = [];
var responded = 0;

function collectResponse(res) {
    var responseBody = '';
    res.setEncoding('utf8');
    
    // collect the response body
    res.on('data', function(d) {
        responseBody += d;
    });
    
    // when the response ends, we should have all the response body
    res.on('end', function () {
        var response = JSON.parse(responseBody);
        if (response.results) { // CB: Added: The original source dosen't control if it get the espected result or not.
            allResults = allResults.concat(response.results);
            console.log('I have %d results for', response.results.length, res.req.path);
            responded++;
            // check if we have responses to all requests
            if (responded == urls.length) {
                 console.log('All responses ended. Number of total results:', allResults.length);
            }
        } else {                // CB: Added: Shows the obtined body content
            console.error('There was some errors. Response body: ' + responseBody);
        }
    });
}

urls.forEach(function(url) {
    http.get(url, collectResponse);
});