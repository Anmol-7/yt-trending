import express from 'express'
import path from "path";
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { errorHandler } from './middleware/errorMiddleware.js'
import videoRoute from './routes/videoRoute.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/trending',videoRoute);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/build")));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
  }

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server running on port '+PORT))
