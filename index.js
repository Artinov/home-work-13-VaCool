var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {
	console.log(request.url);
	var url = request.url.substring(1);
	var firstNumber = parseInt(url);
	var textFirstNumber = firstNumber + "";
	var secondNumber = parseInt(url.substring(textFirstNumber.length + 1));
	if (typeof(firstNumber) == "number" && typeof(secondNumber) == "number"){
	switch(url.substring(textFirstNumber.length, textFirstNumber.length + 1)) {
		case '-':
			response.end(firstNumber - secondNumber + "");
			break;
		case '+':
			response.end(firstNumber + secondNumber + "");
			break;
		case '*':
			response.end(firstNumber * secondNumber + "");
			break;
		case '/':
			response.end(firstNumber / secondNumber + "");
			break;
		case '%':
			response.end(firstNumber % secondNumber + "");
			break;
		default:
			response.end("incorrect data");
			break;
	}
	}
	else {
		response.end("incorrect data");
	}
});

server.listen(port, function() {
    console.log("Server is listening port: " + port);
    console.log("Visit http://localhost:" + port + "to see your app");
})