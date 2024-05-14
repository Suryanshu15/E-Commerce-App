// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"

import { app } from "./App.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at ${process.env.PORT}`)

    })
})
.catch((err)=>{
    console.log("MONGO connection error:", err)
})





// import mongoose from "mongoose"
// import { DB_Name } from "./constants";
// import express from "express"
// const app=express()


// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.mongodb_URI}/${DB_Name}`)
//         app.on("error", ()=>{
//             console.log("Not able to talk to db")
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log("running server")

//         })
//     }catch(error){
//         console.error("Error: ", error)
//     }
// })()