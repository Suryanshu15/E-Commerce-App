import mongoose, { connect } from "mongoose";
import { DB_Name } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.mongodb_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected DB HOST: ${connectionInstance.connection.host}`)



    } catch (error) {
        console.log("Mongodb connection error", error)
        process.exit(1)
    }
}

export default connectDB