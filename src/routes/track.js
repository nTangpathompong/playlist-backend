import express from "express"
import {
  GetTrackController
} from "../controllers/track.js"

const router = express.Router()
router.get("/", GetTrackController)

export default router