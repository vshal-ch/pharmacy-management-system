const mongoose = require('mongoose');

const presSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required:true
    },
    prescNum:{
        type: Number,
        required: true
    },
    invoiceNum:{
        type:Number,
        required: true
    },
    drug:{
        type: String,
        required: true
    },
    strength:{
        type: Number,
        required: true
    },
    dose:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Prescription',presSchema);