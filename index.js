var http = require('http');
http.createServer(function (req, res) {
  // Route the request based on the URL
  switch(req.url) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Welcome to A Monk in Cloud');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About A Monk in Cloud');
      break;
    case '/contact':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Contact A Monk in Cloud');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
  }
}).listen(3000);

console.log('Server running on port 3000');
