
const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  var queryData = url.parse(req.url, true).query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);
  //console.log(req);
  //console.log(req.method);
  var re;

  if (queryData.amount) {
    // user told us their name in the GET request, ex: http://host:8000/?name=Tom
    console.log("playing..."+"amount :" + queryData.amount);
    
    
  }
  re = queryData.amount;
  if (req.url === "/spin"){

    if(re == "max"){
      console.log("spinning.." + "\n" +"Jackpot!!!");

    }
      console.log("spinning.." + "\n" +"amount lost:"+ re);
      
  }


  res.end("Server live");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

