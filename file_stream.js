var fs = require('fs');

var stream = fs.createReadStream('./node_modules/request/node_modules/hawk/images/logo.png');

stream.on('readable', function () {
    var chunk;
    while (chunk = stream.read()) {
        console.log('got NPM data chunk of %d bytes', chunk.length);
    }
});

stream.once('end', function () {
    console.log('stram ended');
});
