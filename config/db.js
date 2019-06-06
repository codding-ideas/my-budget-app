const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('mongoDB Connected')
    } catch (error) {
        console.log(error.message)
    }
    //Exit process with failure
}

module.exports = connectDB;