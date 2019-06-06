const express = require('express');
const router = express.Router();
const User = require('../../models/Users')


// @route POST /user
// @desc register user
// @access public 
router.post('/', async (req, res) => {
    
    //REGISTERING
    //Destructuring input from the re.body
    const {
      name,
      email,
      password
    } = req.body //input from users

    try {
      
      let user = await User.findOne({
        email: email
      })
      if (user) {
        return res.status(400).json({
          errors: [{
            msg: 'User already exist'
          }]
        })
      }

      user = new User({
        //Fields from mongoose model and the values from req.body
        //This is what we want from the user before registration
        name: name,
        email: email,
        avatar: avatar,
        password: password
      })


      //saving user to db
      await user.save()

  
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server error')
    }
});


module.exports = router;
