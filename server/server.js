var http = require('http');
var url = require('url');
const db = require('./db/db.js');
var q;

http.createServer(function (req, res) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    'Content-Type': 'application/json',
    /** add other headers as per requirement */
  };
  let reqUrl = req.url;

  switch (true) {
    case reqUrl.match('/courses') != null:
        //get courses
        db.get_course().then(
          result => {
            res.writeHead(200, headers);
            res.write(JSON.stringify(result));
            res.end();
          }
        )
      break;
    case reqUrl.match('/course') != null:
      q = url.parse(req.url, true).query;
      if (q.id != undefined) {
        // get single course
        db.get_single_course(q.id).then(
          result => {
            res.writeHead(200, headers);
            res.write(JSON.stringify(result));
            res.end();
          }
        )
      } else {
        res.writeHead(200, headers);
        res.write('Missing information');
        res.end();
      }
    break;
    case reqUrl.match('/course/new') != null:
      if (req.method === 'POST') {
        var body = [];
        req.on('data', (data) => {
          body += data;
        })

        req.on('end', () => {
          db.insert_course(JSON.parse(body)).then(
            result => {
              res.writeHead(200, headers);
              res.write(JSON.stringify(result));
              res.end();
            }
          );
        });
      }
      break;
    case reqUrl.match('/course/delete') != null:
      q = url.parse(req.url, true).query;
      db.delete_course(q.id).then(
        result => {
          res.writeHead(200, headers);
          res.write(JSON.stringify(result));
          res.end();
        }
      );
      break;
    default:
      res.writeHead(200, headers);
      res.end();
      break;
  }

}).listen(8080);
