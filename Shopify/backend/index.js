import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB  from './db/db.config.cjs'
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

//configure env
dotenv.config()

//database config
connectDB()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)

//rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>")
})

//PORT
process.env.DEV_MODE = "development";

const PORT = 8080;

//run listen
app.listen(PORT, () => {
    console.log(
      `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
    )
  })