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
      check('Description', 'Skills is required').not().isEmpty()
], async (req, res) => {

      //handling errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { incomeAmount, description } = req.body

      try {
            const income = new Income({incomeAmount, description})

            await income.save();
            res.json(income)
      } catch (error) {
            console.error(err.message);
      res.status(500).send('Server Error');
      }
})

module.exports = incomeRouter;