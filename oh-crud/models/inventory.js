const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchena = new Schema({
    name: {
        type:String,
        required : true
    },
    price:{
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Inventory", inventorySchena)