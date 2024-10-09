// BAsic Syntax

const http = require("http");

const server = http.createServer((req, res) => {
  // both req and res are objects with a bunch of properties ,req stands for request,res for response

  // console.log(req);

  res.write("hello from the server");
  res.end();
});

server.listen(5000);
