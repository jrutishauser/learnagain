var fs = require('fs');
var path = process.argv[2];
var extensionToFilter = process.argv[3];
fs.readadir(path, function(){
});
console.log(path);
console.log(extensionToFilter);
