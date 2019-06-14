const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const User = require('../../models/users')


router.post('/users',  async (req, res) => {
  //destructering input from req.body. The request will be through a form
  const {firstName, lastName, email, password} = req.body
    user = await new User ({
        firstName,
        lastName,
        email,
        password
    })
    user.save()
    res.json(user)
})

router.get('/users',  async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers)
})


//DETAILS FOR SINGLE PAGE
router.get('/users/:id', async (req, res) => {
   const user = await User.findOne({_id: new ObjectId (req.params.id)});
   res.status(200).json(user)
})




module.exports = router