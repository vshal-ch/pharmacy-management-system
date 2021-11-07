const mongoose = require("mongoose");

const schemaPharmacist = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
  },
  staffId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  uname: {
    type: String,
    required: true,
  },
  password:{
      type: String,
      required: true,
      default: '123456'
  }
});

module.exports = mongoose.model('Pharmacist',schemaPharmacist);
