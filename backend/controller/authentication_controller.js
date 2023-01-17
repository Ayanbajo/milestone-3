const router = require("express").Router();
const User = require("../models/users")
const bcrypt = require('bcrypt')



//LOG IN AUTHENTICATED USER 
router.post("/login", async (req, res) => {
    try {
        //to check username is correct
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json("Check your username");

        //to check that password is correct 
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        !correctPassword && res.status(400).json("Check your password");

        res.status(200).json("Log In Successful!");
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router