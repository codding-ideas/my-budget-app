const express = require('express');
const  mongoose = require('mongoose')
const app = express();
const cors = require('cors')


//Connect to DB
//LOCAL CONNECTION


mongoose.connect('mongodb://localhost/DevConnectorVV2', {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log("DB Connected. Great!!"));


app.use(express.json({ extended: false }));
app.use(cors())

//Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));

app.get('/', (req, res) => {
   res.json({
      app: 'EXPENSES APP'
   })
})


//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`The server has started on port ${PORT}`)
})