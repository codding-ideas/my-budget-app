const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')


//FETCH ALL INCOME
// incomeRouter.get('/', auth, async (req, res) => {
//       try {
//             const income =  await Income.findOne({user: req.user.id}).populate('user', ['name', 'email']) //Searching if there is authenticated user in the income model. If there is a user then we will add the user's details to this request by using populate

//           if(!income){
//                 return res.status(400).json({msg: 'There is no income details for this user'})
//           }

//           res.json(income)

//       } catch (error) {
//         console.log(error.message);
//         res.status(500).send('Server Error')
//       }
// });

//CREATE AN INCOME BASE ON A USER

incomeRouter.post('/create', auth,  async (req, res) => {

      //We want to associate the user who has login to create the post so we can build an object to include the user in token so that we can create a data base on that user

      const incomeAmountFields = {
            user: req.user.id,
            incomeAmount: req.body.incomeAmount,
            description: req.body.description
      }

      try {
            
            const income = new Income(incomeAmountFields);

            await income.save();
            res.json(income)
      } catch (error) {
            
      }
})


//FETCH ALL USERS BASE ON USERS
incomeRouter.get('/me', auth,  async (req, res) => {
      try {
              const allIncome =  await Income.find({user: req.user.id});
              res.json(allIncome)
      } catch (error) {
            
      }
})

//FETCH ALL INCOME FROM ALL USERS

incomeRouter.get('/',  async (req, res) => {
      try {
              const allIncome =  await Income.find();
              res.json(allIncome)
      } catch (error) {
            
      }
})




module.exports = incomeRouter;