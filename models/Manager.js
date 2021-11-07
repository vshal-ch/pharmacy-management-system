const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const schemaManager = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
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
      default: bcrypt.hashSync('123456',10)
  }
});

module.exports = mongoose.model('Manager',schemaManager);