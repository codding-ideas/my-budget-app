 const express = require('express');
 const usersRouter = express.Router();
 const User = require('../../models/Users')
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
const config = require('config')


//CREATE A USER AND GET A TOKEN

usersRouter.post('/users', async (req, res) => {
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

         //Hash password before saving
         const salt = await bcrypt.genSalt(10);

         //Take only the password and has it
         user.password = await bcrypt.hash(password, salt)

         //Save the user
         await user.save()

         //Creating a token

         //We are taking the id of the user as an identifier to the token

         const payload = {
             user: {
                 id: user.id
             }
         }
         
         jwt.sign(payload, 'secret', { expiresIn: 360000 },
            (err, token) => {
              if (err) throw err;
                res.json({ token });
            }
          );


         console.log('payload', payload)
        return  res.json(token)
    } catch (error) {
     
    }

})

 usersRouter.get('/', (req, res) => {
  res.send('Hii')
 })






 module.exports = usersRouter;