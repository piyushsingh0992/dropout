const express = require("express");
const router = express.Router();
const Video = require("../models/video.model.js");
const Watchlater = require("../models/watchLater.model.js");

router.get("/:userId", async (req, res) => {
  let { userId } = req.params;
  try {
    let watchlaterResponse = await Watchlater.findById(userId).populate({
      path: "videos",
      model: "Video",
      populate: {
        path: "mentor",
        model: "Mentor",
      },
    });

    if (watchlaterResponse) {
      res.status(200).send(watchlaterResponse);
    } else {
      res.status(500).send({ message: "Can't find Watch later playlist" });
    }
  } catch (error) {
    res.status(500).send({ message: "Can't find Watch later playlist" });
  }
});
router.post("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  const { userKey } = req.body;

  try {
    let watchlaterResponse = await Watchlater.findById(userKey);
    let videoResponse = await Video.findById(videoId).populate("mentor");

    if (watchlaterResponse && videoResponse) {
      watchlaterResponse.videos.push(videoId);
      watchlaterResponse = await watchlaterResponse.save();

      res.status(200).send({ video: videoResponse });
    } else {
      res.status(500).send({ message: "Cann't add to Watch Later right now" });
    }
  } catch {
    res.status(500).send({ message: "Cann't add to Watch Later right now" });
  }
});

router.delete("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  const { userKey } = req.body;

  try {
    let watchlaterResponse = await Watchlater.findById(userKey);
    let videoResponse = await Video.findById(videoId).populate("mentor");

    if (watchlaterResponse && videoResponse) {
      watchlaterResponse.videos = watchlaterResponse.videos.filter((item) => {
        return item != videoId;
      });
      watchlaterResponse = await watchlaterResponse.save();

      res.status(200).send({ video: videoResponse });
    } else {
      res
        .status(500)
        .send({ message: "Cann't remove from Watch Later right now" });
    }
  } catch (error) {
    console.error("error ->", error);
    res
      .status(500)
      .send({ message: "Cann't remove from Watch Later right now" });
  }
});

module.exports = router;
