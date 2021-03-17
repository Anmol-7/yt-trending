import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import videoRoute from './routes/videoRoute.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(errorHandler)

app.use('/api/trending',videoRoute);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server running on port '+PORT))
