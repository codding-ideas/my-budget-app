const mongoose = require('mongoose');


const accountSchema = new mongoose.Schema({
 user: {
  type: mongoose.type.o
 }
})