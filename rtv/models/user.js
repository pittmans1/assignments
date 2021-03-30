const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


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

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash)=>{
      if(err) return next(err)
      user.password= hash
      next()
    })
  })

  userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
      if(err) return callback(err)
      return callback(null, isMatch)
    })
  }

module.exports = mongoose.model('User', userSchema)