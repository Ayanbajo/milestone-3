//Require express and express router
const router = require('express').Router()

//import user model
const User = require("../models/users")

//require bcrypt to hash passwords
const bcrypt = require('bcrypt')

const jwt = require('json-web-token')



//Login in current user
router.post('/', async (req, res) => {
    console.log("in authentication")

    let user = await User.findOne({
        email: req.body.email
    })
    // console.log(user)

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({
            message: `Could not find a user with the provided username and password`
        })
    } else {
        console.log("create token attempt")
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user._id })
        res.json({ user: user, token: result.value })
    }
})


router.get('/profile', async (req, res) => {
    try {
        // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        // Only handle "Bearer" authorization for now 
        //  (we could add other authorization strategies later):
        if (authenticationMethod == 'Bearer') {

            // Decode the JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            // Get the logged in user's id from the payload
            const { id } = result.value
            console.log("value of id:", id)

            // Find the user object using their id:
            let user = await User.findOne({
                _id: id

            })
            // console.log(user)
            res.status(200).json(user)
        }
    } catch {
        res.status(404).json(null)
    }
})



module.exports = router


