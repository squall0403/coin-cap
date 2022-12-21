const express = require('express')
const cors = require("cors");
const serveStatic = require('serve-static')
const bodyParser= require('body-parser')
const multer = require('multer');

const app = express()
const port = 8080
const dbo = require("./db/db");

app.use(cors());
// define storage default URL
// to use: url to call: localhost:8080/content/[folder with content]
app.use('/static', serveStatic('C:/Work/Sample_code/CoinCap/coin-cap/storage', { index: ['story.html',] }))

app.get('/', (req, res) => {
  res.send('/')
})

// START COURSE
app.get("/course", (req, res, next) => {
  var sql = "SELECT * FROM courses"
  dbo.get_all(sql).then((results) => {
    res.json(results)
  });
});

app.get("/course/view/:id", (req, res, next) => {
  var sql = "SELECT * FROM courses WHERE course_id = ?"
  var params = [req.params.id]
  dbo.get_single(sql, params).then((results) => {
    res.json(results)
  });
});

app.delete("/course/delete/:id", (req, res, next) => {
  var sql = "DELETE FROM courses WHERE course_id = ?"
  var params = [req.params.id]
  dbo.delete_single(sql, params).then((results) => {
    res.json(results)
  });
});

// END COURSE

// START CONTENT
app.get("/content", (req, res, next) => {
  var sql = "SELECT * FROM contents"
  dbo.get_all(sql).then((results) => {
    res.json(results)
  });
});

app.get("/content/view/:id", (req, res, next) => {
  var sql = "SELECT * FROM contents WHERE content_id = ?"
  var params = [req.params.id]
  dbo.get_single(sql, params).then((results) => {
    res.json(results)
  });
});
//content by course_id
app.get("/content/view/course/:id", (req, res, next) => {
  var sql = `SELECT cont.* FROM contents cont JOIN courses cour ON cont.course_id = cour.course_id WHERE cour.course_id = ?`
  var params = [req.params.id]
  dbo.get_content_by_course(sql, params).then((results) => {
    res.json(results)
  });
});

app.delete("/content/delete/:id", (req, res, next) => {
  var sql = "DELETE FROM contents WHERE content_id = ?"
  var params = [req.params.id]
  dbo.delete_single(sql, params).then((results) => {
    res.json(results)
  });
});

// END CONTENT

// FILE UPLOAD
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.json(file)
})

// END FILE UPLOAD
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})