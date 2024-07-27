import mongoose from "mongoose"
const { Schema } = mongoose
const PlaylistSchema = new Schema({
  name: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  index: {
    type: Number,
    default: 0
  },
  tracks: {
    type: Array,
    default: []
  },
  creatorName: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
})

const Playlist = mongoose.model('Playlist', PlaylistSchema)
export default Playlist