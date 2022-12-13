var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
}).listen(8080);

const db = require('./db/db');

db.create_course_db();