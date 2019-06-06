const express = require('express');
require('./config/db')

const app = express();

//ROUTES

// @route GET /
// @desc Home route
// @access public
app.get('/', (req, res) => {
    res.send({routType: 'Homepage'})
})


//=====Defining Routes==============================
app.use('/api/users', require('./routes/api/users'));
app.use('/api/expenses', require('./routes/api/expenses'));
app.use('/api/income', require('./routes/api/income'))
//--------------------------------------------------

//===SERVER PORT========================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});
