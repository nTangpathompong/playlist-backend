import {
  GetTrackService
} from '../services/track.js'
const GetTrackController = async (req, res, next) => {
  try {
    const {
      search
    } = req.query
    const result = await GetTrackService(search)
    return res.status(200).json({
      status: true,
      data: result
    })
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}

export {
  GetTrackController
}