const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')




//FETCH ALL INCOME
incomeRouter.get('/',  auth, async (req, res) => {
      try {
            const income =  await Income.findOne({user: req.user.id}).populate('user', ['name', 'email']) //Searching if there is authenticated user in the income model. If there is a user then we will add the user's details to this request by using populate

          if(!income){
                return res.status(400).json({msg: 'There is no income details for this user'})
          }

          res.json(income)

      } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
      }
});


//CREATE INCOME
incomeRouter.post('/', auth, async, (req, res) => {
      const { incomeAmount, description } = req.body
      
})

module.exports = incomeRouter;