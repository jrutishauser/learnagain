var fs = require('fs');
var fileToRead = process.argv[2];
var fileContent = fs.readFileSync(fileToRead, 'utf8').toString();
var count = fileContent.split('\n').length - 1;
console.log(count);
