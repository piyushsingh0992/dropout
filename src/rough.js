const express = require("express");
const router = express.Router();
const Video = require("../models/video.model.js");
const History = require("../models/history.model.js");

router.post("/:videoId", async (req, res) => {
  let { videoId } = req.params;
  let { userKey } = req.body;

  try {
    let VideoResponse = await Video.findById(videoId).populate("mentor");
    VideoResponse.views = VideoResponse.views + 1;
    VideoResponse = await VideoResponse.save();

    let HistoryResponse = await History.findById(userKey);

    HistoryResponse.videos.push({ video: videoId });

    HistoryResponse = await HistoryResponse.save();

    res.send(VideoResponse);
  } catch (error) {
    console.error("error ->", error);
    res.send("error");
  }
});

module.exports = router;
