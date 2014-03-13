var fs = require('fs');
var stream = fs.createWriteStream(__dirname + '/out.txt');

for (var i = 0; i < 50000; i++) {
	if (! stream.write(i.toString() + ' ')) {
		console.log('not flushed');		
	} else {
		console.log('flushed');
	}
}
console.log('write all');

stream.on('drain', function () {
	console.log('drained');
});