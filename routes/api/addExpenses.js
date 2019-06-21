const express = require('express');
const expensesRouter = express.Router();
const Expenses = require('../../models/Expense')


//CREATING EXPENSES
expensesRouter.post('/addexpenses', (req, res) => {
    console.log('eeee')
    const expenses = new Expenses(req.body)
      expenses.save()
      .then((user) => {
        res.json(user)
      })
})

        //===== FETCHING ALL Expenses
        expensesRouter.get('/expenses', (req, res) => {
            Expenses.find()
            .then((expense) => {
              return res.json(expense)
            })
          })
  
  

module.exports = expensesRouter