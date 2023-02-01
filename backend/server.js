const express = require("express");
const mongoose = require('mongoose')
require("dotenv").config();
const PORT = process.env.PORT;
const path = require('path')
const app = express();
const cors = require('cors')

const postRoute = require('./controller/articles_controller.js')
const userRoute = require('./controller/users_controller.js')
const authRoute = require("./controller/authentication_controller.js")


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend", 'build')));

// app.get("/", (req, res) => {
//   res.send("Hey there!!!");
// });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend", 'build', 'index.html'));
});

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use("/article", postRoute)
app.use("/users", userRoute)
app.use("/auth", authRoute);



app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
