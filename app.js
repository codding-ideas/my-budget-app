 const express = require('express');
 const mongoose = require('mongoose');
 const app = express();
 
 //Local DB Connection
 
  mongoose.connect('mongodb://localhost/My-Budget-App', {
   useNewUrlParser: true,
   useCreateIndex: true
  })
  .then(() => console.log("DB Connected. Great!!"));

//MIDDLEWARE
app.use(express.json({ extended: false }));


  //USING ROUTES

 app.use('/api', require('./routes/api/users'))
 

 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => {
    console.log(`The server has started on port ${PORT}`)
 })