const router = require("express").Router();
const User = require("models/users.js")

// router.post("/signup", async (req, res) => {
//     try {
//         const newUser = new User ({
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email,
//             passwordDigest: req.body.passwordDigest
//         })
//         const user = await newUser.save();
//         res.status(200).json("User was created")
//         }catch(err){
//             res.status(500).json(err);


//     }
   
// })


// module.exports = router