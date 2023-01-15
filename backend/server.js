const express = require("express");
const mongoose = require('mongoose')
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hey there!!!");

app.use('/articles', require('./controller/articles_controller.js'))
app.use('/users', require('./controller/users_controller.js'))
});

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
