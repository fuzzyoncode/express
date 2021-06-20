var http = require("http");

http.createServer(function(request,response){
    //Send the http header
    //http Status: 200 : ok
    //Content Type: text/plain
    response.writeHead(200,{'Content-Type': 'text/plain'});

    //Send the response body as "Hello World"
    response.end(' Your JS Application is running\n');


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');