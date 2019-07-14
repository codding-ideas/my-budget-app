const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();
const auth = require('../')


authRouter.get('/', (req, res) => {
  
});

module.exports = authRouter;

