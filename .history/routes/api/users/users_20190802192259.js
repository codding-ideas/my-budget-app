const express = require('express');
const usersRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const gravatar = require('gravatar');
const User = require('../../../models/User');
const Income = require('../../../models/Income')
const auth = require('../../../middleware/auth');
const Account = require('../../../models/Income')
const { check, validationResult} = require('express-validator')


//==================
//REGISTER
//====================

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
   
         const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
         });

         //Creare the user
         user = new User({name, email, password, avatar});
         //Encrypt password
         const salt = await bcrypt.genSalt(10);
         user.password = await bcrypt.hash(password, salt);
         await user.save();


            return res.json({
            user
            })

            } catch (error) {
               console.log(error.message)
               
            }

   })

//======================
//GET ALL USERS
//====================

usersRouter.get('/', async(req, res) => {
  try {
      const allUsers = await User.find();
      res.json(allUsers)
  } catch (error) {
    
  }
})

//================
//DELETE USER
//================

//This only requires a token to delete the user completely
usersRouter.delete('/', auth,  async (req, res) => {
   try {
         await User.findByIdAndRemove({_id: req.user.id})
         res.json({msg: 'User deleted'})
   } catch (error) {
     
   }
})

//===============
// Fetch all users and populate it income
//===================================

usersRouter.get('/',   async (req, res) => {
   try {
         await User.find().populate('income').exec()
   } catch (error) {
     
   }
})


//================
//Show more info
//================

usersRouter.get('/:id', async (req, res) => {
  
   try {
      const foundUser = await User.findById(req.params.id)
      console.log(foundUser)
      res.json({
         foundUser: foundUser
        
      })
   } catch (error) {
       console.log(error)
   }
})


//============
//LOGIN
//===========

usersRouter.post('/login', [
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
                        token: token
                        
                    })
                }
           })     
   
       } catch (error) {
          console.log(error.message)
          res.status(500).send('Server error')
       }
   
   })


   //============
   //GET MY PROFILE
   //============


   usersRouter.get('/', auth, async (req, res) => {
      try {
             const user = await User.findById(req.user.id);
            res.json(user)
      } catch (error) {
         console.log(error.message);
         res.status(500).send('server error')
      }
});


module.exports = usersRouter;