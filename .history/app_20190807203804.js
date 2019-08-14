const express = require('express');
const  mongoose = require('mongoose')
const app = express();
const cors = require('cors')


//Connect to DB
//LOCAL CONNECTION


mongoose.connect('mongodb://localhost/Budget-App', {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log("DB Connected. Great!!"));


app.use(express.json({ extended: false }));
app.use(cors())

//Routes
app.use('/api/income')
app.use('/api/auth', require('./routes/api/auth')); //Login, Register and loadUser anytime the app loads

//app.use('/api/users', require('./routes/api/users'));




//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`The server has started on port ${PORT}`)
})