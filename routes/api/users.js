const express = require('express');
const userRouter = express.Router();
const User = require('../../models/users')


//CREATING USER
userRouter.post('/create', (req, res) => {
    const user = new User(req.body)
      user.save()
      .then((user) => {
        res.json(user)
      })
})

        //===== FETCHING ALL USERS
        userRouter.get('/users', (req, res) => {
          User.find()
          .then((user) => {
            return res.json(user)
          })
        })

        

// UPDATING USER
//---STEPS
//1. Create a route that will display a single user info base on his id and will keep his data into state

userRouter.get('/user/:id', (req, res) => {
 
  User.findById(req.params.id)
  .then((user) => {
    
  res.json(user)
  })
  
})

//2. Create a route that that will take the id of the user created above and make another request if that user is found then we can grap all the data from that user from the state and make them available to user to edit through form
userRouter.post('/update/:id', (req, res) => {
 
       User.findById(req.params.id, (err, user) => {
         
          if(!user) {
            res.status(400).send('Update failed')
          }else {
            //if the user is found by the id, at this point the user all the fields properties attached as user.name, user.email etc, now we are replacing the former data with the data coming from the request body
             user.name = req.body.name;
             user.country = req.body.country;
             user.bio = req.body.bio;
             user.passwrod = req.body.passwrod;
             user.email = req.body.email;
             user.marritalStatus = req.body.marritalStatus

          }
          user.save().then((user) => {
           return res.json(user)
          })
       })
})



module.exports = userRouter