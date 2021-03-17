import asyncHandler from "express-async-handler";
import axios from "axios";
import Video from "../models/videoModel.js";

const getVideos = asyncHandler(async (req, res) => {
  const videos = await Video.find({});
  res.json(videos);
});

const updateTrendingVideos = asyncHandler(async (req, res) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=15&key=${process.env.YOUTUBE_API_KEY}`
  );
  data.items.map(async (item) => {
    const existingVideo = await Video.findOne({ videoId: item.id });
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${item.snippet.channelId}&key=${process.env.YOUTUBE_API_KEY}`
    );
    const videoDetail = {
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.id,
      thumbnail: item.snippet.thumbnails,
      channelTitle: item.snippet.channelTitle,
      channelId: item.snippet.channelId,
      likes: item.statistics.likeCount,
      dislikes: item.statistics.dislikeCount,
      viewCount: item.statistics.viewCount,
      channelThumbnail: data.items[0].snippet.thumbnails,
      channelDescription: data.items[0].snippet.description,
      subscribers: data.items[0].statistics.subscriberCount,
      updatedAt: Date.now(),
    };
    if (existingVideo) {
      await Video.findOneAndUpdate({ videoId: item.id }, videoDetail);
    } else {
      const video = new Video(videoDetail);
      await video.save();
    }
  });
  await Video.find({}).sort({ updatedAt: -1 });
  res.send(data);
});
const getVideoById = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  res.json(video);
});

export { getVideos, updateTrendingVideos, getVideoById };
