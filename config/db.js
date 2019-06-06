
const mongoose = require('mongoose')


 const dbConnect = mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true
});

module.exports = dbConnect;