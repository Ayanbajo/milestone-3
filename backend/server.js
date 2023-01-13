const express = require("express");
const app = express();
const { Sequelize } = require('sequelize')
require("dotenv").config();
app.use(express.json())
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hey there!!!");
});


app.use('/articles', require('./controller/articles_controller'))
app.use('/users', require('./controller/users_controller'))

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
