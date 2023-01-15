const express = require('express')
const user = express.Router()
const User = require('../models/users.js')


user.post('/', (req, res) => {
  User.create (req.body)
  .then(foundUser => {
    res.json(foundUser) 
  })
  .catch(err => {
    console.log(err) 
    res.render('error404')
  })
  
})

user.get('/', (req, res) => {
  User.find()
  .then(foundUser => {
      res.send(foundUser)
  })
  .catch(err => { 
      res.render('error404')
    })
})

module.exports = user