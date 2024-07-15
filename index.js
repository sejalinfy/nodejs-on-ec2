var http = require('http');

http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Route the request based on the URL
  switch(req.url) {
    case '/':
      res.end('Welcome to A Monk in Cloud');
      break;
    case '/about':
      res.end('About A Monk in Cloud');
      break;
    case '/contact':
      res.end('Contact A Monk in Cloud');
      break;
    default:
      res.writeHead(404);
      res.end('404 Not Found');
  }
}).listen(80);

console.log('Server running on port 80');
