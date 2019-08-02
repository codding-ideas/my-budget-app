const express = require('express');
const mongoose = require('mongoose');
//routes

const usersRouter = require('./routes/api/users');
const incomeRoute = require('./routes/api/income');
const getMyProfileAuth = require('./routes/api/authRoutes/getMyProfileAuth')
const postRoute = require('./routes/api/post');
const loginAuth = require('./routes/api/authRoutes/loginAuth');
const mongodbConnect = require('./config/db');
const path = require('path');
const app = express();
const cors = require('cors');



// //Connect to DB
 //mongodbConnect()

mongoose.connect('mongodb://localhost/My-Budget-App', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log("DB Connected successfully"));



//SERVING CLIENT FOLDER @ PRODUCTION
app.use(express.static(path.join(__dirname, 'client/build')));


//MIDDLEWARE
app.use(express.json({ extended: false }));
app.use(cors())



//SERVING ROUTES

app.use('/api/users', usersRouter);
app.use('/api/usersgetMyProfile', getMyProfileAuth);
// app.use('/api/user/login', loginAuth);
app.use('/api', incomeRoute);



// Right before your app.listen(), add this:
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
}); 



//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`The server has started on port ${PORT}`)
})