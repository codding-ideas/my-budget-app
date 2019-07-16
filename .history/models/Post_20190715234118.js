const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId, //This refers to a particular id in mthe user model
    ref: 'user'
  },

  //This refers to the user model
   title: {
      type: String,
     
   },
   text: {
    type: String
   },
  likes: [
     {
      user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'user'
      }
     }
  ],
  comments: [
   {
    user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'user'
    }
   }
  ],
  date: {
   type: Date,
   default: Date.now()
  }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;