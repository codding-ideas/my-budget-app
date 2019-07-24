const express = require('express');
const mongoose = require('mongoose');
//routes
const usersRoutes = require('./routes/api/users');
const authRouter = require('./routes/api/users');
const incomeRoute = require('./routes/api/income');
const getMyProfileAuth = require('./routes/api/authRoutes/getMyProfileAuth')
const postRoute = require('./routes/api/post')
const mongodbConnect = require('./config/db');
const path = require('path');
const app = express();
const cors = require('cors');



// //Connect to DB
// mongodbConnect()

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
app.use('/api/users', authRouter);
app.use('/api/income', incomeRoute);
app.use('/api/post', postRoute);
app.use('/api/getMyProfile', getMyProfileAuth)



// Right before your app.listen(), add this:
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
}); 


const person = {
   name: "Obaseki Nosa",
   location: "Lagos",
}
localStorage.setItem('user', JSON.stringify(person));

//SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`The server has started on port ${PORT}`)
})