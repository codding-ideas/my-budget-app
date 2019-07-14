const mongoose = require('mongoose');


const accountSchema = new mongoose.Schema({
 user: {
  type: mongoose.Types.Schema.objectId,
  ref: 'user'
 },

 incomeAmount: {
    type: Number,
    required: true
 },
 des: {
  type
 }
})