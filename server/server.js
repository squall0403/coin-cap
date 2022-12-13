var http = require('http');
const db = require('./db/db.js');
db.get_course();

http.createServer(function (req, res) {


  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end();

}).listen(8080);
