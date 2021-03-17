import express from 'express'
import {
  updateTrendingVideos,
  getVideoById,
  getVideos,
} from '../controller/videoController.js'

const router = express.Router()

router.route('/').get(getVideos)
router.route('/update').get(updateTrendingVideos)
router.route('/:id').get(getVideoById)

export default router
