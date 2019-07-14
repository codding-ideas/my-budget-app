const express = require('express');
const usersRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const Income = require('../../models/Account')
const auth = require('../../middleware/auth');
const   Account = require('../../models/Account')
const { check, validationResult} = require('express-validator')




usersRouter.post('/', [check('name', 'Name is require').not().isEmpty(),
check('email', 'Email is required').isEmail(),
check('password', 'Password is required with minimum length of 4').isLength({min: 4})
], async (req, res) => {
  //set errors
  const errors = validationResult(req)//We pass all the req the validationResults and then we check for errors

  if(!errors.isEmpty()){
    //This means if there are errors
     return res.status(400).json({errors: errors.array()})
     //We are sending back the all the errors to the user and there is a method on it call .array() and this contains all the errors
  }
   

  
    try {

     //1. Destructure
     const { name, email, password } = req.body

      //see if a user exists

      let user = await User.findOne({email: email});
      if(user){
       return res.status(400).json({errors: [{msg: 'User already exisit'}]}) //Matching errors from the error array, thus either is from name, email or password
      }
 

  //Creare the user 
  user = new User({name, email, password});
  //Encrypt password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  res.send('user')

  //CREATING TOKEN
  //1.Create a payload
  //This is use to identify a particular which this token belongs
  //S

  const payload = {
    user: {
      
    }
  }

  //Encrypt password

  //return jwt
    } catch (error) {
       console.log(error.message)
      // res.status(400).
    }
  


})






module.exports = usersRouter;