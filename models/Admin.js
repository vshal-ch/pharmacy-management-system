const mongoose =require('mongoose');

const adminSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    key:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Admin',adminSchema);