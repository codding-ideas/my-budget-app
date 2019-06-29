const mongoose = require('mongoose');


//Schema holds the fields we want
//We send this file/model to route that need to create or manipulate user details

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String
       
        
    },
    
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('users', UsersSchema);