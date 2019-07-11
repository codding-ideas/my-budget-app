const express = require('express');
const usersRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/Users')

//Create user, give token, hash password and authenticate

usersRouter.post('/', async (req, res) => {
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
        const salt = bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt);

        //Save the user
        await user.save()
        
       return  res.json(user)
   } catch (error) {
    res.json({
     myyerror: error
    })
   }

})


usersRouter.get('/', async(req, res) => {
   try {
       const users = await User.find();
       res.json(users)
   } catch (error) {
       res.json(error)
   }
})


module.exports = usersRouter;