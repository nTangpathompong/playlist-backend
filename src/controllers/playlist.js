import {
  CreatePlaylistService,
  GetPlaylistService,
  GetPlaylistDetailService,
  DeletePlaylistService,
  UpdatePlaylistService,
  AddTrackService,
  RemoveTrackService,
  GetTrackService,
} from '../services/playlist.js'
const GetPlayListController = async (req, res, next) => {
  try {

    const result = await GetPlaylistService()
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

const GetPlayListDetailController = async (req, res, next) => {
  try {
    const {
      id
    } = req.params

    if (!id) {
      return res.status(400).json({
        status: false,
        message: "ID is required."
      })
    }

    const result = await GetPlaylistDetailService(id)
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

const CreatePlayListController = async (req, res, next) => {
  try {
    const result = await CreatePlaylistService()
    res.status(200).json({
      status: true,
      message: "Create playlist successfully.",
    })

  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}

const UpdatePlayListController = async (req, res, next) => {
  try {
    const {
      id
    } = req.params

    const {
      data
    } = req.body

    if (!data) {
      res.status(400).json({
        status: false,
        message: "Data is required",
      })
    }
    await UpdatePlaylistService(id, data)

    res.status(200).json({
      status: true,
      message: "Update successfully",
    })

  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}

const DeletePlayListController = async (req, res, next) => {
  try {

    const {
      id
    } = req.params

    if (!id) {
      res.status(400).json({
        status: false,
        message: "Id is required.",
      })
    }
    const result = await DeletePlaylistService(id)
    if (!result) {
      return res.status(400).json({
        status: false,
        message: "Can't find your playlist.",
      })
    }

    return res.status(200).json({
      status: true,
      message: "Delete successfully.",
    })

  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}
const AddTrackController = async (req, res, next) => {
  try {
    const {
      id
    } = req.params
    const {
      trackId
    } = req.body

    let result = await AddTrackService(id, trackId)
    if (!result) {
      return res.status(400).json({
        status: false,
        message: "Can't add track.",
      })
    }
    return res.status(200).json({
      status: true,
      message: "Add track successfully.",
    })

  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}
const RemoveTrackController = async (req, res, next) => {
  try {
    const {
      id,
      trackId
    } = req.params

    let result = await RemoveTrackService(id, trackId)
    if (!result) {
      return res.status(400).json({
        status: false,
        message: "Playlist ID is not found.",
      })
    }
    return res.status(200).json({
      status: true,
      message: "Add track successfully.",
    })
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}
const GetTrackController = async (req, res, next) => {
  try {
    const {
      id
    } = req.params

    let result = await GetTrackService(id)

    return res.status(200).json({
      status: true,
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      message: error?.message,
    })
  }
}
export {
  GetPlayListController,
  GetPlayListDetailController,
  CreatePlayListController,
  UpdatePlayListController,
  DeletePlayListController,
  AddTrackController,
  RemoveTrackController,
  GetTrackController
}