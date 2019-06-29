const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
           
    },
    amount: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Expenses = mongoose.model('Expenses', expensesSchema);