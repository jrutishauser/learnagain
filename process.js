var processArray = process.argv;
var numberCounter = 0;
processArray.splice(0, 2);
processArray.forEach(function(element, array, index){
	numberCounter = numberCounter + Number(element);	
});
console.log(numberCounter);
