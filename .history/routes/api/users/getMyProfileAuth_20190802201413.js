const express = require('express');
const auth = require('../../../middleware/auth');
const getMyProfileAuth = express.Router();
const User = require('../../../models/User')
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//zReturn my profile

getMyProfileAuth.get('/', auth, async (req, res) => {
      try {
             await User.findById(req.user.id).;
            res.json(user)
      } catch (error) {
         console.log(error.message);
         res.status(500).send('server error')
      }
});



module.exports = getMyProfileAuth;

