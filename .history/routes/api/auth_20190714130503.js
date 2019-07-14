const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();
const User = require('../../models/User')


//Return my profile

authRouter.get('/', auth, async (req, res) => {
      try {
            const user = await User.findById(req.user.id);
            res.json(user)
      } catch (error) {
         console.log(error.message);
         res.status(500).se
      }
});

module.exports = authRouter;

