const express = require("express");
const router = express.Router();
const Video = require("../models/video.model.js");
const User = require("../models/user.model.js");

router.post("/:videoId", async (req, res) => {
  let { videoId } = req.params;
  const { userKey, comment } = req.body;
  try {
    let videoResponse = await Video.findById(videoId);
    let user = await User.findById(userKey);
    if (user && videoResponse) {
      videoResponse.comments.push({ user: userKey, comment });
      videoResponse = await videoResponse.save();
      console.log("videoResponse comments->", videoResponse);
      res.status(200).send({ comment: { user, comment } });
    } else {
      res
        .status(500)
        .send({
          message: "Error Occured Cann't publish your Comment right Now",
        });
    }
  } catch (error) {
    res
      .status(404)
      .send({ message: "Error Occured Cann't publish your Comment right Now" });
  }
});

module.exports = router;
