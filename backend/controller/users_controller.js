const express = require('express')
const user = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')


user.post('/', async (req, res) => {
  const {password, ...rest} = req.body
  const passwordDigest = await bcrypt.hash(password, 12)
  const user ={...rest, password:passwordDigest}
  try{ 
  const foundUser = await User.create(user)
  res.status(200).json(foundUser)  
  }catch(e) {
    res.status(404).json ({message:"Could Not Create User"})
}

    
})

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


// const express = require('express')
// const user = express.Router()
// const User = require('../models/users.js')


// user.post('/', (req, res) => {
//   User.create (req.body)
//   .then(foundUser => {
//     res.json(foundUser) 
//   })
//   .catch(err => {
//     console.log(err) 
//     res.render('error404')
//   })
  
// })

// user.get('/', (req, res) => {
//   User.find()
//   .then(foundUser => {
//       res.send(foundUser)
//   })
//   .catch(err => { 
//       res.render('error404')
//     })
// })

// module.exports = user