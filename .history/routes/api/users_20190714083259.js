const express = require('express');
const usersRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const Income = require('../../models/Account')
const auth = require('../../middleware/auth');
const   Account = require('../../models/Account')
const { check, validationResult} = require('express-validator')
// //Create user, give token, hash password and authenticate

// usersRouter.post('/',  async (req, res) => {
//    //Destructure the data coming from the req body
//    const {name, email, password} = req.body;
//    //Check if the email is already registered
//    try {
//        let user = await User.findOne({email: email});
//        if(user) {
//         return res.status(400).json({errors: [{msg: 'User already exist'}]})
//        }
//         //If the email is not created the we create the user
//         user = new User({name, email, password})

//          //Hash the password
//         const salt = await bcrypt.genSalt(10)
//          user.password = await bcrypt.hash(password, salt)
  
//            //Save the user
//            await user.save()

//          //Create a token for the user

//          //1. Create a payload
//          const payload = {
//              user: {
//                  id: user.id,
                
//              }
//          }

//         //2. Sign a token
//         jwt.sign(payload, config.get('jwtSecret'), {
//                     expiresIn: 360000
//                 }, (err, token) => {
//              if(err){
//                  throw err
//              }else{
//                  return res.json({
//                      token: token,
//                      user: user
//                  })
//              }
//         })     
       
//    } catch (error) {
//     res.json({
//      error: error
//     })
//    }

// })


// //GET ALL USERS

// usersRouter.get('/', auth, async(req, res) => {
   
//    try {
//        const users = await User.find();
//        res.json(users)
//    } catch (error) {
//        res.json(error)
//    }
// })



// usersRouter.get('/me', auth,  async (req, res) => {

//     //At this point, thus when the auth middleware extract the user from,
//     //from the token, the user now is available in the request body as,
//     //req.user and when we want the id we will do req.user.id.
//     //Now we have to find this id in our database so that we display,
//     //that user profile
//     console.log(req)
//   try {
//     const user = await Account.findOne({user: req.user.id});
//     console.log(req.user)
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });


// usersRouter.get('/income', auth,  async (req, res) => {

//     //At this point, thus when the auth middleware extract the user from,
//     //from the token, the user now is available in the request body as,
//     //req.user and when we want the id we will do req.user.id.
//     //Now we have to find this id in our database so that we display,
//     //that user profile
//     console.log(req)
//   try {
//     const income = await Income.findOne({ user: req.user.id }).populate('Users',
//     ['name', 'email']
//     );
//     console.log(req.user)
//     res.json(income);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });




// usersRouter.post('/income', auth , async (req, res) => {

//   let income = await Income.findOne({user: req.user.id})
//     const { incomeAmount, description } = req.body;

//     const income = new Income({incomeAmount, description});
//     await income.save()

//     res.json(income)
// })





usersRouter.post('/', [check('name', 'Name is require').not().isEmpty(),
check('email', 'Email is required').isEmail(),
check('password', 'Password is required with minimum length of 4').isLength({min: 4})
], async (req, res) => {
  //set errors
  const errors = validationResult(req)//We pass all the req the validationResults and then we check for errors

  if(!errors.isEmpty()){
    //This means if there are errors
     return res.status(400).json({errors: errors.array()})
     //We are sending back the all the errors to the user and there is a method on it call .array() and this contains all the errors
  }
   

  
    try {
      //see if a user exists

      let user = await User.findOne({email});
      if(user){
        res.status(400).json()
      }
      //1. Destructure
  const { name, email, password } = req.body


  //Encrypt password

  //return jwt
    } catch (error) {
       console.log(error.message)
      // res.status(400).
    }
  


})






module.exports = usersRouter;