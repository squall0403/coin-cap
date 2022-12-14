const express = require('express')
const cors = require("cors");
const app = express()
const port = 8080
app.use(cors());

const dbo = require("./db/db");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/courses", (req, res, next) => {
  var sql = "SELECT * FROM courses"
  dbo.get_all_courses(sql).then((results) => {
    res.json(results)
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})