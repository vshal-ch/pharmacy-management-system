const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    drug:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    company:{
        type:String,
        required: true
    },
    supplier:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    unitCost:{
        type:Number,
        required: true
    },
})

module.exports = mongoose.model('Stock',stockSchema);