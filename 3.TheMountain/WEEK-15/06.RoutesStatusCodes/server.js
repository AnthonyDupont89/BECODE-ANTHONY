const http = require("node:http");
const fs = require("node:fs")

const server = http.createServer((req, res) => {
  if(req.url ==='/') {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res)
  } else if (req.url === '/about' || req.url === '/about-us') {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/about.html").pipe(res)
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res)
  }
});

server.listen("3000", "localhost", () => {
  console.log("Server running on port 3000");
});



