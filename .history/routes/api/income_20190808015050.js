
const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')


// CREATE INCOME FOR A SPECIFIC USER
incomeRouter.post('/', auth, async (req, res) => {

    try {

     Income.create({
           description: req.body.de,
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


//FETCH ALL POST BY USER

incomeRouter.get('/', (req, res) => {
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

module.exports = incomeRouter;