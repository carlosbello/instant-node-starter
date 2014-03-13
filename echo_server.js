var net = require('net');
var server = net.createServer();

server.on('connection', function(stream) {
	stream.pipe(stream);
	stream.pipe(process.stdout);
});

server.listen(8080);