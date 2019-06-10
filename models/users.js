const mongoose = require('mongoose');

//Schema holds the fields we want
//We send this file/model to route that need to create or manipulate user details

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
       
    },
     lastName: {
         type: String,
         
     },
    email: {
        type: String
       
        
    },
    password: {
        type: String,
       
    },
   
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('user', UserSchema);