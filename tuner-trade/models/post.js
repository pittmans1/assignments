const mongoose= require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    post:{
        type: String,
        required:true

    },
    img:{
        data: Buffer,
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema)