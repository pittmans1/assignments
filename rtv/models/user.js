const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        hide: true,
        minlength: [4, 'Password doesnt meet minimum length Requirements!']
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    memeberSince:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)