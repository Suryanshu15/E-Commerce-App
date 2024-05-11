const mongoose = require('mongoose')

async function dbConnect(){
    const DB_URL = "mongodb+srv://rahulkumar:rahul9060@cluster0.fac4epa.mongodb.net"
    const DB = process.env.DB_NAME
    try {
        await mongoose.connect(DB_URL+"/"+DB)
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("Database Error: "+ error);
    }
}

module.exports = dbConnect
