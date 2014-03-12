var fs = require('fs');

fs.readFile(__filename, 'utf8', function(err, fileContent) {
    if (err) {
        console.error(err);
    } else {
        console.log('got file content:', fileContent);
    }
});
