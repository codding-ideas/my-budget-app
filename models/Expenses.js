const mongoose = require('mongoose');

//Schema holds the fields we want
//We send this file/model to route that need to create or manipulate user details

const ExpensesSchema = new mongoose.Schema({
    depositor: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    },

    description: {
        type: String,
        required: true,
        unique: true
    },
    
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Expenses = mongoose.model('expenses', ExpensesSchema);