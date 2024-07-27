import mongoose from "mongoose"
const { Schema } = mongoose

const TrackSchema = new Schema({
  name: {
    type: String,
    default: null
  },
  artist: {
    type: String,
    default: null
  },
  album: {
    type: String,
    default: null
  },
  duration: {
    type: Number,
    default: 0
  },
  index: {
    type: Number,
    default: 0
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

const Track = mongoose.model('Track', TrackSchema)
export default Track