const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addExpensesSchema = new mongoose.Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    withdrawer: {
        type: String,
       
    },
     description: {
         type: String,
         
     },
    amount: {
        type: String
            
    },
    
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Expenses = mongoose.model('expenses', addExpensesSchema);