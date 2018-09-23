
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //console.log(req);
  //console.log(req.method);

  if (req.url === "/"){
    console.log("please play or spin");
  }

  if (req.url === "/spin"){
    console.log("spinning...");
  }

  if (req.url === "/play"){
    console.log("playing....");
  }

  res.writeHead(200);
  res.end("Server live");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

