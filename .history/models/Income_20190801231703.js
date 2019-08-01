const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({

//This refers to the user model
 description: {
    type: String,
    required: true
 },
 amount: {
  type: String,
  required: true
 },
 date :{
  type: Date,
  default: Date.now()
 }
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;