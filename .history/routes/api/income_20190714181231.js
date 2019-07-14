const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models//User')

incomeRouter.post('/', auth, (req, res) => {
     
});


//FETCH ALL INCOME
incomeRouter.get('/',  auth, async (req, res) => {
      try {
            const 
      } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
      }
})