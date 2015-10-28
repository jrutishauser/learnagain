var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var extensionToFilter = process.argv[3];
var answerArray = [];
fs.readdir(filePath, function(err, files){
	files.forEach(function(element, index, array){
		if(path.extname(element) === '.' + extensionToFilter){
			answerArray.push(element);
			console.log(element);
		}		
	})
});
