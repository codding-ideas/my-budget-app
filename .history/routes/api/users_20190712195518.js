const express = require('express');
const usersRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/Users');
const auth = require('../../middleware/auth')

//Create user, give token, hash password and authenticate

usersRouter.post('/',  async (req, res) => {
   //Destructure the data coming from the req body
   const {name, email, password} = req.body;
   //Check if the email is already registered
   try {
       let user = await User.findOne({email: email});
       if(user) {
        return res.status(400).json({errors: [{msg: 'User already exist'}]})
       }
        //If the email is not created the we create the user
        user = new User({name, email, password})

         //Hash the password
        const salt = await bcrypt.genSalt(10)
         user.password = await bcrypt.hash(password, salt)
  
           //Save the user
           await user.save()

         //Create a token for the user

         //1. Create a payload
         const payload = {
             user: {
                 id: user.id
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
    res.json({
     error: error
    })
   }

})



usersRouter.get('/', auth, async(req, res) => {
   
   try {
       const users = await User.find();
       res.json(users)
   } catch (error) {
       res.json(error)
   }
})


usersRouter.get('/me', auth, async (req, res) => {
    try {
      //Since we have a user embeded into profile model,
      //And remember that user id is what we use to sign for token,
      // and when decoded using middleware we get the user as req.user and,
      //when we want the id is req.user.id
      //Remember, when creating a profile, you need a token and that token,
      //is use to create a profile
  
      const profile = await User.findOne({ user: req.user.id })
  
    //   if (!profile) {
    //     return res.status(400).json({ msg: 'There is no profile for this user' });
    //   }
  
     return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = usersRouter;