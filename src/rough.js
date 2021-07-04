const express = require("express");
const router = express.Router();

const Video = require("../models/video.model.js");

router.get("/:videoId", async (req, res) => {
  let { videoId } = req.params;
  try {
    let videoResponse = await Video.findById(videoId).populate("mentor");
    let recommendation = await Video.find({
      playlist: videoResponse.playlist,
    }).populate("mentor");

    recommendation = recommendation.filter((video) => video._id != videoId);

    res.send(recommendation);
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
