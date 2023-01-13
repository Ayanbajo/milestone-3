const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hey there!!!");
});


app.use('/articles', require('./controller/articles_controller'))
app.use('/users', require('./controller/users_controller'))

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
