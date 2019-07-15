const express = require('express');
const incomeRouter = express.Router();
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const Income = require('../../models/Income')


//FETCH ALL INCOME
// incomeRouter.get('/', auth, async (req, res) => {
//       try {
//             const income =  await Income.findOne({user: req.user.id}).populate('user', ['name', 'email']) //Searching if there is authenticated user in the income model. If there is a user then we will add the user's details to this request by using populate

//           if(!income){
//                 return res.status(400).json({msg: 'There is no income details for this user'})
//           }

//           res.json(income)

//       } catch (error) {
//         console.log(error.message);
//         res.status(500).send('Server Error')
//       }
// });

//CREATE AN INCOME BASE ON A USER

incomeRouter.post('/create', auth,  async (req, res) => {

      //We want to associate the user who has login to create the post so we can build an object to include the user in token so that we can create a data base on that user

      const incomeAmountFields = {
            user: req.user.id,
            incomeAmount: req.body.income
      }

      try {
            const { incomeAmount, description } = req.body
            const income = new Income({incomeAmount, description, user: req.user.id});

            await income.save();
            res.json(income)
      } catch (error) {
            
      }
})


//FETCH ALL USERS BASE ON USERS
incomeRouter.get('/me', auth,  async (req, res) => {
      try {
              const allIncome =  await Income.find({user: req.user.id});
              res.json(allIncome)
      } catch (error) {
            
      }
})

//FETCH ALL INCOME FROM ALL USERS

incomeRouter.get('/',  async (req, res) => {
      try {
              const allIncome =  await Income.find();
              res.json(allIncome)
      } catch (error) {
            
      }
})


//CREATE INCOME
// incomeRouter.post('/', auth, [
//       check('incomeAmount', 'income is required') .not().isEmpty(),
//       check('description', 'Description is required').not().isEmpty()
// ], async (req, res) => {

//       //handling errors
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       try {
           
//             //Building up the income model
//             //NOTE:
//             //If you check the income model there is a user and this user is the one that is authenticated, it will be created automatically

//             const incomeFields = {
//                   user: req.user.id,
//                   incomeAmount: req.body.incomeAmount,
//                   description: req.body.description
//             }
            
//             //UPDATE
//             let income = await Income.findOne({ user: req.user.id });
//             // 
//             if (income) {
//               // Update
//               income = await Income.findOneAndUpdate(
//                 { user: req.user.id },
//                 { $set: incomeFields },
//                 { new: true }
//               );
      
//               return res.json(income);
//             }

//             //Creating the income account
//            income = new Income(incomeFields)

//             await income.save();
//             res.json(income)


//       } catch (error) {
//             console.error(error.message);
//             res.status(500).send('Server Error');
//       }
// })

//Get All income 

      // incomeRouter.get('/', async (req, res) => {
      //       try {
      //             const allIncome = await Income.find();

      //             res.json(allIncome)
                  
      //       } catch (error) {
      //             console.log(error.message)
      //       }
      // });



module.exports = incomeRouter;