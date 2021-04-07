const mongoose= require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    content:{
        type: String,
        required:true

    },
    img:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Post', postSchema)