const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();


authRouter.get('/', (req, res) => {
  
});

module.exports = authRouter;

