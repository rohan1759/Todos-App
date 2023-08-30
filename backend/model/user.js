const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true},
    mobile_no: {type: Number, minLength: 10, required: true},
    password: {type: String, minLength: 6, required: true},
    profile_img: String,
    token: String
})

exports.User = mongoose.model('User', userSchema)