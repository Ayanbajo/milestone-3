const mongoose = require('mongoose')
const { Schema } = mongoose


const articleSchema = new Schema ({
    title: { type: String, required: true },
    image: { type: String, default: 'http://placekitten.com/350/500' },
    date: { type: String },
    description: { type: String },
    author: { type: String },
    content: {type: String, required: true },

})


const Article = mongoose.model('Article', articleSchema)
module.exports = Article





