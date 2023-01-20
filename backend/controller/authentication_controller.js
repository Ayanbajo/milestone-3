const router = require('express').Router()
const User = require('../models/users.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// user.post('/', async (req, res) => {
//     console.log('IN HERE')
//     let user = await User.findById({
//         where: { email: req.body.email }
//     })
//     console.log(user)
//     if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
//         res.status(404).json({ 
//             message: `Could not find a user with the provided username and password` 
//         })
//     } else {
//         res.json({ user:user, token, result.value })
//     }
// })

// module.exports = user;

router.post('/', async (req, res) => {
    console.log('IN HERE')
    let user = await User.findOne({
     email: req.body.email
    })
    console.log(user)
    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user._id })
        res.json({ user:user, token: result.value })
    }
})

router.get('/profile', async (req, res) => {
    try {

        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if (authenticationMethod == 'Bearer') {

            const result = await jwt.decode(process.env.JWT_SECRET, token)

            const { id } = result.value
            console.log("value of id:", id)
            
            let user = await User.findOne({
                _id: id

            })
            console.log(user)
            res.status(200).json(user)
        }
    } catch {
        res.status(404).json(null)
    }
})



module.exports = router











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