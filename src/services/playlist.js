import PlaylistModel from "../models/playlist.js";
import mongoose from "mongoose";
const GetPlaylistService = async () => {
  try {
    const result =
      await PlaylistModel
        .find({})
        .select({
          name: 1,
          detail: 1,
          image: 1,
          creatorName: 1
        }).lean()
    return result
  } catch (error) {
    throw error
  }
}
const GetPlaylistDetailService = async (id) => {
  try {
    const result =
      await PlaylistModel
        .findOne({ _id: id })
        .select({
          name: 1,
          detail: 1,
          image: 1,
          creatorName: 1
        }).lean()
    return result
  } catch (error) {
    throw error
  }
}
const CreatePlaylistService = async (id) => {
  try {
    let index = 1
    const getLastPlayList = await PlaylistModel.find({}).sort({ index: - 1 }).select({ index: 1 }).limit(1).lean()
    if (getLastPlayList.length) {
      index = getLastPlayList[0].index + 1
    }
    const result =
      await PlaylistModel.create({
        name: `Play List #${index}`,
        image: null,
        index,
        description: "My playlist",
        creatorName: "John Doe"
      })
    return result
  } catch (error) {
    throw error
  }
}
const UpdatePlaylistService = async (id, data) => {
  try {
    const result =
      await PlaylistModel.updatedOne({
        _id: id
      },
        {
          name: data.name,
          description: data.description,
        }
      )
    return result
  } catch (error) {
    throw error
  }
}
const DeletePlaylistService = async (id) => {
  try {
    const result = await PlaylistModel.deleteOne({ _id: id })
    if (result.deletedCount !== 1) {
      return false
    }
    return true
  } catch (error) {
    throw error
  }
}
const AddTrackService = async (id, trackId) => {
  try {
    const result = await PlaylistModel.updateOne({ _id: id }, {
      $push: {
        tracks: {
          _id: new mongoose.Types.ObjectId(),
          trackId: trackId,
          createdAt: new Date()
        }
      }
    })
    if (result.modifiedCount !== 1) {
      return false
    }
    return true
  }
  catch (error) {
    throw error
  }
}
const RemoveTrackService = async (id, trackId) => {
  try {
    const result = await PlaylistModel.updateOne({ _id: id }, {
      $pull: {
        tracks: {
          _id: new mongoose.Types.ObjectId(trackId)
        }
      }
    })
    if (result.modifiedCount !== 1) {
      return false
    }
    return true
  } catch (error) {
    throw error
  }
}
const GetTrackService = async (id) => {
  try {
    const result = await PlaylistModel.findOne({
      _id: id
    })
      .populate({
        path: 'tracks',
        populate: {
          path: 'trackId',
          model: 'Track'
        }
      })
      .select({
        tracks: 1
      })
      .lean()
    return result?.tracks || []
  }
  catch (error) {
    throw error
  }
}
export {
  GetPlaylistService,
  GetPlaylistDetailService,
  CreatePlaylistService,
  UpdatePlaylistService,
  DeletePlaylistService,
  AddTrackService,
  RemoveTrackService,
  GetTrackService
}