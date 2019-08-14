const express = require('express');
const bodyParser = require('body-parser');


const app = express();



//===============
// MIDDLEWARES
//================
app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");



app.get('/', (req, res) => {
    res.render('index')
})





app.listen(5000, () => {
    console.log('Buget App v2 server is runing')
})