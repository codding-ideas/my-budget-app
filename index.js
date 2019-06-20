const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors')

//====MongoDb connection function
connectDb()


//====MIDDLEWARE======
//This replaces bodyparser
app.use(express.json({
    extended: false
}))

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false 
}))

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


//ROUTES
app.get('/', (req, res) => {
    res.json({developers: "Emma & Gift ...v3"})
})



// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//===SERVER PORT========================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});
