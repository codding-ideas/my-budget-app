const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();
const auth = require('../../middleware/auth')


authRouter.get('/', as(req, res) => {
  
});

module.exports = authRouter;

