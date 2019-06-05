const express = require('express');

const app = express();

//ROUTES

// @route GET /
// @desc Home route
// @access public
app.get('/', (req, res) => {
    res.send({routType: 'Homepage'})
})

// @route POST /user
// @desc register user
// @access public 
app.post('/users', (req, res) => {
    res.send({routeType: 'Register user'})
})

// @route GET /USER
// @desc get all users
// @access public 
app.get('/users', (req, res) => {
    res.send({
        routeType: 'List all users'
    })
});

// @route POST /income
// @desc add income
// @access public 
app.post('/income', (req, res) => {
    res.send({
        routeType: 'Create income'
    })
});

// @route GET /income
// @desc List all income
// @access public 
app.get('/income', (req, res) => {
    res.send({
        routeType: 'List all income'
    })
});


// @route POST /expenses
// @desc add expenses
// @access public 
app.post('/expenses', (req, res) => {
    res.send({
        routeType: 'Create expenses'
    })
});


// @route GET /expenses
// @desc get all expenses
// @access public 
app.get('/expenses', (req, res) => {
    res.send({
        routeType: 'Get all expenses routes'
    })
});



//===SERVER PORT========================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});
