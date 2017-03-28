var http = require('http');
var port = 3000;

var server = http.createServer(function(request, response) {
	console.log(request.url);
	var a = request.url.substring(1);
	var b = parseInt(a);
	var d = parseInt(a.substring(c.length+1));
	var e = new Boolean(false);
	if (a.substring(c.length, c.length + 1) === "-" || a.substring(c.length, c.length + 1) === "+" 
		|| a.substring(c.length, c.length + 1) === "*" || a.substring(c.length, c.length + 1) === "/"
		|| a.substring(c.length, c.length + 1) === "%") {
		e = true;
	}	
	if (typeof(b) == "number" && typeof(b) == "number" && e == true){
	switch(a.substring(c.length, c.length + 1)) {
		case '-':
			var result = b - d;
			response.end(result);
			break;
		case '+':
			response.end(b+d);
			break;
		case '*':
			response.end(b*d);
			break;
		case '/':
			response.end(b/d);
			break;
		case '%':
			response.end(b%d);
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