const express = require('express');
const usersRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const Income = require('../../models/Income')
const auth = require('../../middleware/auth');
const   Account = require('../../models/Income')
const { check, validationResult} = require('express-validator')



//REGISTER

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

     
  

    } catch (error) {
       console.log(error.message)
      //res.status(400).
    }

})



//FIND BY USER ID in the income model

usersRouter.get('/user/:user_id', async (req, res) => {
   try {
      const userProfile = await Income.findOne({user: req.params.user_id}).populate('user', ['name'])
      res.json(userProfile)
   } catch (error) {
     
   }
})

//GET ALL USERS
usersRouter.get('/', async(req, res) => {
  try {
      const allUsers = await User.find();
      res.json(allUsers)
  } catch (error) {
    
  }
})

//DELETE USER

//This only requires a token to delete the user completely
usersRouter.delete('/', auth,  async (req, res) => {
   try {
         await User.findByIdAndRemove({_id: req.user.id})
         res.json({msg: 'User deleted'})
   } catch (error) {
     
   }
})
module.exports = usersRouter;