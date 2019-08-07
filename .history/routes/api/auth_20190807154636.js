const express = require('express');
const autRouter = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');


//=================
//CREATE A USER
//==============

autRouter.post( '/register', [check('name', 'Name is required') .not().isEmpty(),
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



//==============
//=======login
//=================

autRouter.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


//=================


// GET MY PROFILE : for creating loadUser()

autRouter.get('/', auth,  async (req, res) => {

    //At this point, thus when the auth middleware extract the user from,
    //from the token, the user now is available in the request body as,
    //req.user and when we want the id we will do req.user.id.
    //Now we have to find this id in our database so that we display,
    //that user profile
    
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log(req)
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Errors');
  }
});



module.exports = autRouter;
