const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
 users: {
  type: mongoose.Types.Schema.bjectId,
  ref: 'Users'
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