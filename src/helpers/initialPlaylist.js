import TrackModel from "../models/track.js";
const playlists = [
  { "name": "Not Like Us", "artist": "Kendrick Lamar", "duration": 210, "album": "Not Like Us" },
  { "name": "Million Dollar Baby", "artist": "Tommy Richman", "duration": 224, "album": "Million Dollar Baby" },
  { "name": "Espresso", "artist": "Sabrina Carpenter", "duration": 232, "album": "Espresso" },
  { "name": "Please Please Please", "artist": "Sabrina Carpenter", "duration": 214, "album": "Please Please Please" },
  { "name": "Too Sweet", "artist": "Hozier", "duration": 256, "album": "Too Sweet" },
  { "name": "Lose Control", "artist": "Teddy Swims", "duration": 220, "album": "Lose Control" },
  { "name": "Beautiful Things", "artist": "Benson Boone", "duration": 218, "album": "Beautiful Things" },
  { "name": "Houdini", "artist": "Eminem", "duration": 211, "album": "Houdini" },
  { "name": "Good Luck, Babe!", "artist": "Chappell Roan", "duration": 230, "album": "Good Luck, Babe!" },
  { "name": "Lies Lies Lies", "artist": "Morgan Wallen", "duration": 245, "album": "Lies Lies Lies" }
]
const initialMusic = async () => {
  try {
    const totalTrack = await TrackModel.countDocuments({})
    if (totalTrack === 0) {
      await TrackModel.insertMany(playlists)
    }
  } catch (error) {
    console.log("Can't initiate the music list")
  }
}

export default initialMusic