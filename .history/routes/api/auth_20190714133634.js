const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();
const User = require('../../models/User')
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//Return my profile

authRouter.get('/', auth, async (req, res) => {
      try {
            const user = await User.findById(req.user.id);
            res.json(user)
      } catch (error) {
         console.log(error.message);
         res.status(500).send('server error')
      }
});


//LOGIN

authRouter.post('/', [
check('email', 'Email is required').isEmail(),
check('password', 'Password is required').exists()
], async (req, res) => {
  //set errors
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    //This means if there are errors
     return res.status(400).json({errors: errors.array()})
     //We are sending back the all the errors to the user and there is a method on it call .array() and this contains all the errors
  }
   

  
    try {

     //1. Destructure
     const {email, password } = req.body

      //see if a user exists

      let user = await User.findOne({email: email});
      if(!user){
       return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]}) //Matching errors from the error array, thus either is from name, email or password
      }
 
    //Check if  password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if(!isPasswordMatch){
     return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]}) //Matching errors from the error array, thus either is from name, email or password
    }

  //CREATING TOKEN
  //1.Create a payload
  //This is use to identify a particular which this token belongs
  //So in our database we have a field called ._id but because of mongoose we can use id.
  //Note we are making referencing to the user created above


  const payload = {
    user: {
      id: user.id //
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

    } catch (error) {
       console.log(error.message)
       res.status(400).
    }

})


module.exports = authRouter;

