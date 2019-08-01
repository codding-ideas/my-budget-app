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
incomeRouter.post('/income',  async (req, res) => {

  
    try {

      const user = await User.findOne({email: 'e.tweneboah1@gmail.com'});

      if(!user){
            return console.log('No User Found')
      }else {
             //1. Destructure
     const { description, amount } = req.body
     
     Income.create({
           description: "This is my Description",
           amount: '3000'
     }, function(err, income) {
           User.findOne({email: 'e.tweneboah1@gmail.com'}, function(err, foundUser){
                 if(err){
                       console.log(err)
                 }else {
                       foundUser.income.push(income)
                       foundUser.save(function(err, data){
                             if(err) {
                                   console.log(err)
                             }else {

                              res.json({
                                    data: data
                                })
                                   console.log(data)
                             }
                       })
                 }
           })
     })





     //const income = new Income({description, amount});
//      user.income.push(income)
//      await income.save();
   
//       return res.json({
//         income: income
//       })
      }


    } catch (error) {
       console.log(error.message)
      
    }

})


//FETCH ALL POST BY USER

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

//FETCH ALL USERS BASE ON USERS
// incomeRouter.get('/me', auth,  async (req, res) => {
//       try {
//               const allIncome =  await Income.find({user: req.user.id}).populate('user', ['name', 'email']);
//               res.json(allIncome)
//       } catch (error) {
            
//       }
// })

//FETCH ALL INCOME FROM ALL USERS

// incomeRouter.get('/',  async (req, res) => {
//       try {
//               const allIncome =  await Income.find().populate('user', ['name', 'email']);
//               res.json(allIncome)
//       } catch (error) {
            
//       }
// })

// incomeRouter.get('/',  async (req, res) => {
//       try {
//               const allIncome =  await Income.find()
//               res.json(allIncome)
//       } catch (error) {
            
//       }
// })



module.exports = incomeRouter;