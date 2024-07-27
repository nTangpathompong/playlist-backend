import TrackModel from "../models/track.js";
const GetTrackService = async (search) => {
  try {
    const query = {}
    if (search) {
      query.name = { $regex: search, $options: 'i' }
    }
    const result =
      await TrackModel
        .find(query)
        .select({
          name: 1,
          artist: 1,
          albumn: 1
        }).lean()
    return result
  } catch (error) {
    throw error
  }
}
export {
  GetTrackService
}