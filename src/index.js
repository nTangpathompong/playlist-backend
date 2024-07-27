
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import routes from './routes/index.js'
import mongoose from 'mongoose';
import cors from 'cors'
import initialMusic from './helpers/initialPlaylist.js'

const PORT = process.env.PORT || 8090
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.set('trust proxy', true)
app.use('/api', routes)

mongoose.connect(process.env.DB_URL, {})
  .then(() => {
    console.log('Connected to MongoDB');
    initialMusic()
    const server = app.listen(PORT, async () => {
      console.log("Server api is ready on!!")
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });