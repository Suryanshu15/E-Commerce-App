import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({exptended: true, limit:"16kb"}))
app.use(express.static("piblic"))
app.use(cookieParser())


//route import

import userRouter from './routes/user.routes.js'

//routes declaration  
//as we have separated the routes and controls so we can't use app.get()


app.use("/users", userRouter)

// app.use("/admin" , )


export { app }