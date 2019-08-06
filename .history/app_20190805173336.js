const express = require('express');
const connectDB = require('./config/db');
const  mongoose = require('mongoose')
const app = express();
const cors = require('cors')

//Connect to DB
 //mongodbConnect()



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