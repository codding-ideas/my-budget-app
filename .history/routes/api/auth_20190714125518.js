const express = require('express');
const auth = require('../../middleware/auth');
const authRouter = express.Router();


//Return my 

authRouter.get('/', async (req, res) => {
     res.send('hi')
});

module.exports = authRouter;

