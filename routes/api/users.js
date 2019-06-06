const express = require('express');
const router = express.Router();
const User = require('../../models/users')

router.get('/', (req, res) => {
  res.send({name: 'Coding-ideas'})
});

router.post('/',  (req, res) => {
  //destructering input from req.body
  const {firstName, lastName, email, password} = req.body
    user = new User ({
        firstName,
        lastName,
        email,
        password
    })

    res.json(user)
    user.save()
})

module.exports = router