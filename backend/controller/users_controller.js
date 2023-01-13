const user = require('express').Router()
const db = require('../models')
const { User } = db

user.post('/', async (req, res) => {
    const {password, ...rest} = req.body;
    const user = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password, 15)
    })
    res.json(user)
})


user.get('/', async (req, res) => {
    try {
        const users = await User.findAll()
        res.json (users)
      } catch (error) {
        res.json(error)
      }
})

module.exports = user