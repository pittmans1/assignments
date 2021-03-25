const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    post:{
        type: String,
        required: true,
        maxlength: [1000, "please dont exceed 1000 characters"]
    },
   user:{
       type: Schema.Types.ObjectId,
       ref: "User",
       required: true
   }, 
   imgUrl:{
       type: String
   }
})