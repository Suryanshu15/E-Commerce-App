const mongoose = require('mongoose')

async function dbConnect(){
    const DB_URL = process.env.DB_URL
    const DB = process.env.DB_NAME
    try {
        await mongoose.connect(DB_URL+"/"+DB)
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database Error: "+ error);
    }
}

module.exports = dbConnect