/*
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 8080;


var stream = fs.createReadStream('./package.json')
stream.on('data', function (chunk) {
console.log(chunk)
})
stream.on('end', function () {
console.log('finished')
})




const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url);
  let pathname = `.${parsedUrl.pathname}`;
  console.log('pathname',pathname)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.send('index.html');
})
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`)
})
*/

const express = require('express');


var compression = require('compression')
var app = express();

const v8 = require('v8');

app.use(compression())

app.use(express.static('docs'));
app.get("/", function(req, res) {
   console.log('callback',req)
   res.sendfile('index.html')
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
