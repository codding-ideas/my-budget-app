## Workflow ->

## Description
This is an inventory app to keep record of customers, income and expenses. Future functionalities will be added

#### project link
https://budget-app-v1.herokuapp.com/

## Technology to be used
a. React-Redux - Frontend

b. Node-js,  Express js, mongoDb - Backend

## How to run this app
1. Clone the app
2. run npm install
3. npm run dev

## Runing both Client and Server
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\" "
  },



## PROXY

1) In the client/ directory install this package:

npm install http-proxy-middleware --save



2) Create setupProxy.js file in client/src/ directory. There is no need to import this file anywhere, CRA looks for a file by this name and loads it.



3) Then add your proxies to the setupProxy.js file:

There are a few different ways to add proxies:

Method 1:

(Thanks to Torleif B. for finding this cleaner more efficient method)

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}


Method 2:

const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/**', { target: 'http://localhost:5000' }));
};


5) Restart start your servers with npm run dev and the proxies should now work as expected. Note - Anytime you make a change to the proxy or the Google Project's URI or Origins settings you should restart the server.


## POINTS
Always set your header to content-type application/json

# express validator
we pass it as a second middleware to a route


## Creating express validator

```javascript

usersRouter.post('/', [check('name', 'Name is require').not().isEmpty(),
check('email', 'Email is required').isEmail(),
check('password', 'Password is required with minimum length of 4').isLength({min: 4})
], (req, res) => {
   console.log(req.body)
})
```
1. You put all the logic in an array
2. The check method accept the field name and the custome message and then a rule 




```
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


```


## Creating user and hashing password

```javascript
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

     //1. Destructure
     const { name, email, password } = req.body

      //see if a user exists

      let user = await User.findOne({email: email});
      if(user){
       return res.status(400).json({errors: [{msg: 'User already exisit'}]}) //Matching errors from the error array, thus either is from name, email or password
      }
 

  //Creare the user 
  user = new User({name, email, password});
  //Encrypt password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

  res.send('user')

  //Encrypt password

  //return jwt
    } catch (error) {
       console.log(error.message)
      // res.status(400).
    }
  


})

```

## CREATING TOKEN

```javasript
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

     //1. Destructure
     const { name, email, password } = req.body

      //see if a user exists

      let user = await User.findOne({email: email});
      if(user){
       return res.status(400).json({errors: [{msg: 'User already exisit'}]}) //Matching errors from the error array, thus either is from name, email or password
      }
 

  //Creare the user 
  user = new User({name, email, password});
  //Encrypt password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();


  //CREATING TOKEN
  //1.Create a payload
  //This is use to identify a particular which this token belongs
  //So in our database we have a field called ._id but because of mongoose we can use id.
  //Note we are making referencing to the user created above


  const payload = {
    user: {
      id: user.id //
    }
  }

   //2. Sign a token
        jwt.sign(payload, config.get('jwtSecret'), {
                    expiresIn: 360000
                }, (err, token) => {
             if(err){
                 throw err
             }else{
                 return res.json({
                     token: token,
                     user: user
                 })
             }
        })     
  //Encrypt password

  //return jwt
    } catch (error) {
       console.log(error.message)
      // res.status(400).
    }
  


})

module.exports = usersRouter;
```

## CREATING A MIDDLEWARE TO VERIFY THE USER TO ACCESS PROTECTIVE ROUTES


 // //make sure the alert object is not null or empty, since we are using more than one express we will do it like this
  props.alerts !== null && props.alerts.length > 0 && props.alerts.map((alert) => {
   return (
      <div>
       {alert.message}
      </div>
   )
  })