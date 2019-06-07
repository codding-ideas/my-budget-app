const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const userRoute = require('./routes/api/users')
const expensesRoute = require('./routes/api/expenses')

const app = express();

//====MongoDb connection function
connectDb()


//====MIDDLEWARE======
//This replaces bodyparser
app.use(express.json({
    extended: false
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false 
}))


//ROUTES
app.get('/', (req, res) => {
    res.json({developers: "Emma & Gift"})
})


app.use('/api/users', userRoute);
app.use('/api/expenses/', expensesRoute)


if(process.env.NODE_ENV === 'production'){
  //Making sure express server server  production asset like main.js or min.css
  app.use(express.static('client/build/'))


  //Express will server up the index.html file if it doesn't recocognise the route
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

//===SERVER PORT========================
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
});
