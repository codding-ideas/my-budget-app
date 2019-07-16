const express = require('express');
const postRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const Income = require('../../models/Income');
const Post = require()
const auth = require('../../middleware/auth');
const   Account = require('../../models/Income')
const { check, validationResult} = require('express-validator')

postRouter.post('/', auth, async (req, res) => {

   try {
    
   } catch (error) {
    
   }
})