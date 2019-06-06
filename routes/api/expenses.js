const express = require('express');

const router = express.Router();


// @route POST /expenses
// @desc add expenses
// @access public 
router.post('/', (req, res) => {
    res.send({
        routeType: 'Create expenses'
    })
});


// @route GET /expenses
// @desc get all expenses
// @access public 
router.get('/', (req, res) => {
    res.send({
        routeType: 'Get all expenses routes'
    })
});



module.exports = router;