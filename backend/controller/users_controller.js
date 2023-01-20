const express = require('express')
const user = express.Router()
const User = require('../models/users.js')
//require bcrypt to hash passwords
const bcrypt = require('bcrypt')


user.post('/', async (req, res) => {
  const { password, ...rest } = req.body
  const passwordDigest = await bcrypt.hash(password, 12)
  const user = { ...rest, password: passwordDigest }
  try {
    const foundUser = await User.create(user)
    res.status(200).json(foundUser)
  } catch (e) {
    res.status(404).json({ message: "Could not create user" })
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

//DELETE USER???



module.exports = user