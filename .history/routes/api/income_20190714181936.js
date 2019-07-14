const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')
incomeRouter.post('/', auth, (req, res) => {
     
});


//FETCH ALL INCOME
incomeRouter.get('/',  auth, async (req, res) => {
      try {
            const Income = await Income.f //Searching if there is authenticated user in the income model. If there is a user then we will add the user's details to this request by using populate
      } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
      }
})