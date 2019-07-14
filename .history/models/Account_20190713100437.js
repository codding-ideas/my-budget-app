const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
 user: {
  type: mongoose.Types.Schema.objectId,
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

const 