const express = require("express");
const router = express.Router();
const Video = require("../models/video.model.js");

router.post("/:mentorId", async (req, res) => {
  let { mentorId } = req.params;

  try {
    let VideoResponse = await Video.find({ mentor: mentorId });
    console.log("VideoResponse ->", VideoResponse);
    res.status(200).send({ videos: VideoResponse });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Sorry Couldn't Load Your Stats Right now" });
  }
});

module.exports = router;
