const express = require('express');
const postRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const Income = require('../../models/Income');
const Post = require('../../models/Post')
const auth = require('../../middleware/auth');
const   Account = require('../../models/Income')
const { check, validationResult} = require('express-validator')

postRouter.post('/', auth, async (req, res) => {

   try {
    const user = await User.findById(req.user.id).select('-password')

    const newPost = {
      text: req.body.text,
     // name: user.name, //This will come from the user route because we have logged in
      user: req.user.id
    }
    
    const post = new Post(newPost);
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQyYzhjZjA3ZTg5N2JlMWM5NjJmZDE4In0sImlhdCI6MTU2MzIwMzU1MywiZXhwIjoxNTYzNTYzNTUzfQ.F-UHxqkWg6yZEdocV-I7HwOLsTYtwdejgvruNxRZAtU
    res.json(post)


   } catch (error) {
     console.log(error.message)
   }
})

module.exports = postRouter;