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
            const Income = await Income.fin
      } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
      }
})