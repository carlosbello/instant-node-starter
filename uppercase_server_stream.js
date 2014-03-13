var Transform = require('stream').Transform;

var server = require('net').createServer();
server.on('connection', function(stream) {
	stream.setEncoding('utf8');
	var uppercase = new Transform({decodeStrings: false});
	uppercase._transform = function(d, encoding, cb) {
		cb(null, d.toUpperCase());
	};
	stream.pipe(uppercase).pipe(stream);
});

server.listen(8080);