//requiring my module
var filterModule = require('./filterLsDir.js');
//setting arguments to variables
var filePath = process.argv[2];
var extensionToFilter = process.argv[3];

filterModule(filePath, extensionToFilter, function(err, files){
	if (err){
		return console.error('Bad news:', err)	
	}
	//consoling the answerArray
	console.log(files);
});

