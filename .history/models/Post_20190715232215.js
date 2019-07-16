const mongoose = require('mongoose');


const incomeSchema = new mongoose.Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId, //This refers to a particular id in mthe user model
    ref: 'user'
  },

  //This refers to the user model
   title: {
      type: String,
      required: true
   },
   body: {
    type: String
   },
  likes: [
     {
      user: {
       type: Schema.Types.ObjectId,
       ref: 'user'
      }
     }
  ],
  comments: [
   {
    user: {
     type: Schema.Types.ObjectId,
     ref: 'user'
    }
   }
  ],
  date: {
   type: Dat
  }
});

const Income = mongoose.model('income', incomeSchema);

module.exports = Income;