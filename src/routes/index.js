import express from 'express'
import cors from "cors"
import morgan from "morgan"
import PlaylistRoutes from './playlist.js'
import TracksRoutes from './track.js'

const router = express.Router()

const options = {
  allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
  credentials: true,
  methods: "GET,OPTIONS,PUT,POST,DELETE",
  preflightContinue: false,
  origin: "http://localhost:3001",
}

router.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))

router.options('*', cors(options))
router.use('/playlist', PlaylistRoutes)
router.use('/tracks', TracksRoutes)
export default router