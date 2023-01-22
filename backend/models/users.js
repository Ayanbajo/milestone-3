const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String },
    password: { type: String }

})


const User = mongoose.model('User', userSchema)
module.exports = User
