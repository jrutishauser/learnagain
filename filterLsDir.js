//needed components for this module only
var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];

var extensionToFilter = process.argv[3];
var answerArray = [];

module.exports = function (filePath, extensionToFilter, callback){
fs.readdir(filePath, function(err, files){
		if (err){
			return callback(err)	
		}
	files.forEach(function(element, index, array){
		if(path.extname(element) === '.' + extensionToFilter){
			answerArray.push(element);
		}		
	})
	callback(null, answerArray);
});
};
