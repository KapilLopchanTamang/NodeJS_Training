// copied from nojeJs(Express)

const express = require('express');
const { testFunction, even } = require('./controllers/testController');
const app = express()

const db = require("./model/index.js");
db.sequelize.sync({ force: false })
app.get("/", (req, res) => {
  res.json({
    message: "hello world from / route",
  });
});

app.get("/aboutus", even)
let PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is started in ${PORT}`);
});