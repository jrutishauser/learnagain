var fs = require('fs');
var fileToRead = process.argv[2];
var count;
fs.readFile(fileToRead, 'utf8', function(error, theFile){
	count = theFile.toString().split('\n').length - 1;
	console.log(count);
})
