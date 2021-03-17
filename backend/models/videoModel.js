import mongoose from 'mongoose'

const videosSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  channelId:{
    type: String,
    required:true,
  },
  channelThumbnail:{
    type: Object,
    // required: true,
  },
  channelDescription: {
    type: String,
    // required: true,
  },
  subscribers:{
    type:Number,
    // required:true
  },
  thumbnail: {
    type: Object,
    required: true,
  },
  viewCount: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  dislikes: {
    type: Number,
    required: true,
  },
  channelTitle: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
})

const Video = mongoose.model('Video', videosSchema)
export default Video
