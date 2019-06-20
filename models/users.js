const mongoose = require('mongoose');

//Schema holds the fields we want
//We send this file/model to route that need to create or manipulate user details

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
     country: {
         type: String,
         
     },
    email: {
        type: String
       
        
    },
    password: {
        type: String,
       
    },
    bio: {
        type: String,
       
    },
    marritaStatus: {
        type: Boolean,
       
    },
   
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('Users', UsersSchema);