const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
 user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user'
},

 incomeAmount: {
    type: Number,
    required: true
 },
 description: {
  type: String
 },
 date :{
  type: Date(),
  default: date.now()
 }
});

const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;