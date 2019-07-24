const express = require('express');
const auth = require('../../middleware/auth');
const getMy = express.Router();
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



module.exports = authRouter;

