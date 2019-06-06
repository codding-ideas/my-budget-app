const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

//===MongoDb connection function
connectDb()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))


//ROUTES
app.get('/', (req, res) => {
    res.json({developers: "Emma & Gift"})
})
app.use('/api/users', require('./routes/api/users'))


//===SERVER PORT========================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});
