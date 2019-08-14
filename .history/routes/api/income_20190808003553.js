const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/')


// CREATE INCOME FOR A SPECIFIC USER
incomeRouter.post('/create', auth, async (req, res) => {
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
                               
                          }
                    })
              }
        })
  })

 } catch (error) {
    console.log(error.message)
   
 }

})

module.exports = incomeRouter;