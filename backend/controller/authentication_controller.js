const express = require('express')
const user = express.Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')

user.post('/', async (req, res) => {
    console.log('IN HERE')
    let user = await User.findOne({
        where: { email: req.body.email }
    })
    console.log(user)
    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        res.json({ user })
    }
})

module.exports = user;

// user.post('/', async (req, res) => {
//     let user = await User.findOne({
//         where: { email: req.body.email }
//     })
//     console.log(user)
//     if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
//         res.status(404).json({ 
//             message: `Could not find a user with the provided username and password` 
//         })
//     } else {
//         res.json({ user })
//     }
// })

// module.exports = user


// const router = require('express').Router()
// const db = require("../models")
// const bcrypt = require('bcrypt')

// const { User } = db