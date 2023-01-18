const router = require('express').Router
const db = require("../models/users")
const { User } = db
const bcrypt = require('bcrypt')



router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })
    console.log(user)
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({
            message: `Could not find a user with the provided username and password`
        })
    } else {
        res.json({ user })
    }
})

module.exports = router


//LOG IN AUTHENTICATED USER 
// router.post("/", async (req, res) => {
//     try {
//         //to check username is correct
//         const user = await User.findOne({ username: req.body.username })
//         !user && res.status(400).json("Check your username");

//         //to check that password is correct 
//         const correctPassword = await bcrypt.compare(req.body.password, user.password);
//         !correctPassword && res.status(400).json("Check your password");

//         res.status(200).json("Log In Successful!");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

