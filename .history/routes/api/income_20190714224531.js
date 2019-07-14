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
incomeRouter.post('/', auth, [
      check('incomeAmount', 'income is required') .not().isEmpty(),
      check('description', 'Description is required').not().isEmpty()
], async (req, res) => {

      //handling errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
           
            //Building up the income model
            //NOTE:
            //If you check the income model there is a user and this user is the one that is authenticated, it will be created automatically

            const incomeFields = {
                  user: req.user.name,
                  incomeAmount: req.body.incomeAmount,
                  description: req.body.description
            }
            
            //Creating the income account
            const income = new Income(incomeFields)

            await income.save();
            res.json(income)


      } catch (error) {
            console.error(err.message);
      res.status(500).send('Server Error');
      }
})


incomeRouter.get('/me', async (req, res) => {
    try {
          const allIncome = await Income.find().populate('user', ['name', 'email','passport]')
          res.json(allIncome)
    } catch (error) {
          
    }
})



incomeRouter.patch('/update')


module.exports = incomeRouter;