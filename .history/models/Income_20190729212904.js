const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
//  user: {
//   type: mongoose.Schema.Types.ObjectId, //This refers to a particular id in mthe user model
//   ref: 'user'
// },

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

const Income = mongoose.model('income', incomeSchema);

module.exports = Income;