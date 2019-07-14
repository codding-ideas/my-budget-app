const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'ser'
},

 incomeAmount: {
    type: Number,
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