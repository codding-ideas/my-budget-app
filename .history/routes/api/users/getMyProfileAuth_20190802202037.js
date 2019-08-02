const express = require('express');
const auth = require('../../../middleware/auth');
const getMyProfileAuth = express.Router();
const User = require('../../../models/User')

//============
// Get my Profile and populate income created
//=========================


getMyProfileAuth.get('/', auth, async (req, res) => {
      try {
             await User.findById(req.user.id).populate('income').exec(function(err, user) {
                  res.json(user)
             });
           
      } catch (error) {
         console.log(error.message);
         res.status(500).send('server error')
      }
});



module.exports = getMyProfileAuth;
