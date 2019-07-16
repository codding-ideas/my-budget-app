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


  //CREATING TOKEN
  //1.Create a payload
  //This is use to identify a particular which this token belongs
  //So in our database we have a field called ._id but because of mongoose we can use id.
  //Note we are making referencing to the user created above


  const payload = {
    user: {
      id: user.id,
      name: user.name //
    }
  }

   //2. Sign a token
        jwt.sign(payload, config.get('jwtSecret'), {
                    expiresIn: 360000
                }, (err, token) => {
             if(err){
                 throw err
             }else{
                 return res.json({
                     token: token,
                     user: user
                 })
             }
        })     
  //Encrypt password

  //return jwt
    } catch (error) {
       console.log(error.message)
      // res.status(400).
    }

})

// usersRouter.get('/', async (req, res) => {
//    try {
//       const allUsers = await User.find();
//       res.json(allUsers)
//    } catch (error) {
//       console.log(error.message)
//    }
// })



//FIND BY USER ID

usersRouter.get('/user/:user_id', async (req, res) => {
   try {
      const userProfile = await Income.findOne({user: req.params.user_id}).populate('')
      res.json(userProfile)
   } catch (error) {
     
   }
})
module.exports = usersRouter;