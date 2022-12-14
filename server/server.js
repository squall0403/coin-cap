const express = require('express')
const cors = require("cors");
const app = express()
const port = 8080
app.use(cors());

const dbo = require("./db/db");

app.get('/', (req, res) => {
  res.send('')
})

app.get("/course", (req, res, next) => {
  var sql = "SELECT * FROM courses"
  dbo.get_all_courses(sql).then((results) => {
    res.json(results)
  });
});

app.get("/course/view/:id", (req, res, next) => {
  var sql = "SELECT * FROM courses WHERE course_id = ?"
  var params = [req.params.id]
  dbo.get_course(sql,params).then((results) => {
    res.json(results)
  });
});

app.delete("/course/delete/:id", (req, res, next) => {
  var sql = "DELETE FROM courses WHERE course_id = ?"
  var params = [req.params.id]
  dbo.delete_course(sql,params).then((results) => {
    res.json(results)
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})