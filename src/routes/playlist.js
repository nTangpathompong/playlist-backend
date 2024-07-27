import express from "express"
import {
  GetPlayListController,
  GetPlayListDetailController,
  CreatePlayListController,
  UpdatePlayListController,
  DeletePlayListController,
  AddTrackController,
  RemoveTrackController,
  GetTrackController
} from "../controllers/playlist.js"

const router = express.Router()
router.get("/", GetPlayListController)
router.get("/:id", GetPlayListDetailController)
router.get("/:id/track", GetTrackController)
router.post("/", CreatePlayListController)
router.post("/:id", UpdatePlayListController)
router.delete("/:id", DeletePlayListController)
router.put("/:id/track", AddTrackController)
router.delete("/:id/track/:trackId", RemoveTrackController)

export default router