const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();
const User = require('../../models/User')


//Return my profile

authRouter.get('/', async (req, res) => {
      try {
            const user = await User.findById(req.user.id);
            res
      } catch (error) {
       
      }
});

module.exports = authRouter;
