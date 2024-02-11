const http = require("http");
const fs = require("fs");

let jsonData = fs.readFileSync("data.json");

const server = http.createServer((req, res) => {
  console.log("Server Started");
  //   res.end("hello world!");

  res.setHeader("Content-Type", "text/html");
  res.end(jsonData);
});

server.listen(8000);
