const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    content:{
        type:String,
        required: true
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:'User', 
        required: true
    },
    reciever:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required: true
    }

})

module.exports = mongoose.model('Message', messageSchema)