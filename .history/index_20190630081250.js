const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
// const path = require('path');
// const app = express();
// const cors = require('cors')

// //==== IMPORTING ROUTES======
// const userRoutes = require('./routes/api/users');
// const addExpensesRoutes = require('./routes/api/addExpenses')
// //-------End of importing Routes-------


//====== DB CONNECTION===========
    //---Live Connection-----
    // connectDb()
    // ----Local Connection ----

// mongoose.connect('mongodb://localhost/Budget-App', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
// .then(() => console.log("DB Connected. Great!!"));

//--------END OF DB CONNECTION

               //====MIDDLEWARE======
//This replaces bodyparser
app.use(express.json({extended: false}))
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false }))

 
//====USING ROUTES======
// app.use('/api', addExpensesRoutes)
// app.use('/api', userRoutes)


                  //----END OF MIDDLEWARE

                  //====SERVING REACT SIDE OF THE APPLICATION

app.use(express.static(path.join(__dirname, "client", "build")))
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//===SERVER PORT========================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});
