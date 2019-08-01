const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 
           name: {
             type: String,
             required: true
           },
           email: {
             type: String
            
           },
           password: {
             type: String,
             required: true
           },
           avatar: {
             type: String
           },
           date: {
             type: Date,
             default: Date.now
           },
           in
});

module.exports = User = mongoose.model('user', UserSchema);