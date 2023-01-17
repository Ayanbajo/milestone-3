const express = require('express')
const user = express.Router()
const User = require('../models/users.js')
//require bcrypt to hash passwords
const bcrypt = require('bcrypt')


// user.post('/', (req, res) => {
//   User.create(req.body)
//     .then(foundUser => {
//       res.json(foundUser)
//     })
//     .catch(err => {
//       console.log(err)
//       res.render('error404')
//     })
// })

//CREATE NEW USER
user.post("/signup", async (req, res) => {
  try {
    //generate a salt and hash
    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    //create a new User with the following properties
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    //save new user
    const user = await newUser.save();
    res.status(200).json("User was created");
  } catch (err) {
    res.status(500).json(err);
  }
})




//FIND USER BY ID
user.get("/:id", async (req, res) => {

  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

// user.get('/:id', (req, res) => {
//   User.findById()
//     .then(foundUser => {
//       res.send(foundUser)
//     })
//     .catch(err => {
//       res.render('error404')
//     })
// })

module.exports = user