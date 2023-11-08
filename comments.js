// Create web server
// Create a web server that can respond to requests for /hello and /goodbye. 
// Respond to each request with a page that says "Hello" or "Goodbye" respectively. 
// Respond to all other requests with a 404 status code and the text "Page not found".

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url === '/hello'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Hello');
    } else if(req.url === '/goodbye'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Goodbye');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Page not found');
    }
});

server.listen(3000, function(){
    console.log('Server is listening on port 3000. Ready to accept requests!');
});
