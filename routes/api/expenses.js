const express = require('express');
const router = express.Router();
const Expenses = require('../../models/Expenses')



router.post('/', async (req, res) => {
    //destructering input from req.body
    const {  depositor, amount, description} = req.body

   try {
       const expense =  new Expenses({
           depositor,
           amount,
           description
       })
       res.json(expense);
       await expense.save()

   } catch (error) {
       console.log(error.message)
   }
})

//Display all expenses
router.get('/', async (req, res) => {
    const allExpenses = await Expenses.find();
    res.json(allExpenses)
})

module.exports = router