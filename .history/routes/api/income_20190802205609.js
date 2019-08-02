const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')




// CREATE INCOME FOR A SPECIFIC USER
incomeRouter.post('/income', auth, async (req, res) => {

    try {

     Income.create({
           description: req.body.description,
           amount: req.body.amount
     }, function(err, income) {
           User.findById(req.user.id , function(err, foundUser){
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

    } catch (error) {
       console.log(error.message)
      
    }

})


//FETCH ALL POST BY USER

incomeRouter.get('/income', (req, res) => {
      User.findOne({email: "e.tweneboah1@gmail.com"}).populate("income").exec(function(err, user){
    if(err){
        console.log('No income for this user');
    } else {
          res.json({
                user: user
          })
        console.log(user);
    }
});

})


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