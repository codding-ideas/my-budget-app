const express = require('express');

const router = express.Router();


// @route POST /income
// @desc add income
// @access public 
router.post('/', (req, res) => {
    res.send({
        routeType: 'Create income'
    })
});

// @route GET /income
// @desc List all income
// @access public 
router.get('/', (req, res) => {
    res.send({
        routeType: 'List all income'
    })
});


module.exports = router;