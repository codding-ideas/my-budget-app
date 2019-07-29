const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')



//CREATE AN INCOME BASE ON A USER

// incomeRouter.post('/create',  async (req, res) => {

//       //We want to associate the user who has login to create the post so we can build an object to include the user in token so that we can create a data base on that user

//       const incomeAmountFields = {
//             user: req.user.id,
//             incomeAmount: req.body.incomeAmount,
//             description: req.body.description
//       }

//       try {
            
//             const income = new Income(incomeAmountFields);

//             await income.save();
//             res.json(income)
//       } catch (error) {
            
//       }
// })



//REGISTER
incomeRouter.post('/',  async (req, res) => {

  
    try {

     //1. Destructure
     const { description, amount } = req.body


  //Creare the user
  user = new User({description, amount});

  await user.save();


   return res.json({
     user: user
   })

    } catch (error) {
       console.log(error.message)
      
    }

})




//FETCH ALL USERS BASE ON USERS
incomeRouter.get('/me', auth,  async (req, res) => {
      try {
              const allIncome =  await Income.find({user: req.user.id}).populate('user', ['name', 'email']);
              res.json(allIncome)
      } catch (error) {
            
      }
})

//FETCH ALL INCOME FROM ALL USERS

incomeRouter.get('/',  async (req, res) => {
      try {
              const allIncome =  await Income.find().populate('user', ['name', 'email']);
              res.json(allIncome)
      } catch (error) {
            
      }
})




module.exports = incomeRouter;