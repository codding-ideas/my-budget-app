const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth')


const User = require('../../models/User');

//=================
//CREATE A USER
//==============

router.post( '/', [check('name', 'Name is required') .not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 4 or more characters' ).isLength({ min: 4 })
  ],

  async (req, res) => {
    const errors = validationResult(req);
      console.log('My Errors', errors)
    if (!errors.isEmpty()) {
      return res.status(400).json({
         errors: errors.array() 
        });
    }
     //DESTRUCURE THE VALUES COMING FROM THE REQUEST BODY

    const { name, email, password } = req.body;

    try {
      //Check if the user exist
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ 
            errors: [
              { 
                msg: 'User already exists'
               }
            ] 
            });
      }
       
      //Generate avatar for the user
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      //If the email is not created the we create the user
      user = new User({
        name,
        email,
        avatar,
        password
      });

      //Hash the password before saving

      const salt =  await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //Save the user
      await user.save();

      //Create a token for the user
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign( payload, config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          //The token contains the id of the user so we can identify the user whom this token belong
          //Now the user is inside the token
          //We will create a middleware to extract the user,
          //from the token

          //At this 
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


//===========
//LOGING
//

//==GET ALL USERS====

router.get('/',  async (req, res) => {
   const allusers = await User.find()
    res.json(allusers)
})

module.exports = router;
