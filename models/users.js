const mongoose = require('mongoose')

const wishSchema = mongoose.Schema({
    title: String,
    description: String,
    content: String,
    urlToImage: String,
})


const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    token: String,
    salt: String, 
    wishlist: [wishSchema],
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel