const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
 U: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Users'
},

 incomeAmount: {
    type: String,
    required: true
 },
 description: {
  type: String
 },
 date :{
  type: Date,
  default: Date.now()
 }
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;