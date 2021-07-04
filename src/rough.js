const express = require("express");
const router = express.Router();

const Playlist = require("../models/playlist.model.js");
const Video = require("../models/video.model.js");

let playlists = [];

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    let playlistResponse = await Playlist.find({ userId: userId }).populate({
      path: "videos",
      model: "Video",
      populate: {
        path: "mentor",
        mondel: "Mentor",
      },
    });

    playlistResponse = playlistResponse.filter((item) => item.editable);
    playlistResponse = playlistResponse ? playlistResponse : [];

    res.status(200).send(playlistResponse);
  } catch (error) {
    console.error("error ->", error);
    res.status(404).send([]);
  }
});

router.post("/create", async (req, res) => {
  let { userKey, playlistName } = req.body;
  console.log("playlistName ->", playlistName);
  console.log("userKey ->", userKey);

  try {
    let NewPlaylist = new Playlist({
      userId: userKey,
      name: playlistName,
      videos: [],
    });
    let response = await NewPlaylist.save();
    console.log("response ->", response);

    res.status(200).send(response);
  } catch (error) {
    console.log("error ->", error);
    res.status(404).send({});
  }
});

router.post("/", async (req, res) => {
  let { playlistId, videoId } = req.body;
  console.log("playlistId ->", playlistId);
  console.log("videoId ->", videoId);

  try {
    let CurrentPlaylist = await Playlist.findById(playlistId);
    console.log("CurrentPlaylist ->", CurrentPlaylist);

    CurrentPlaylist.videos.push({ video: videoId });

    let response = await CurrentPlaylist.save();
    console.log("response ->", response);

    res.send(response);
  } catch (error) {
    console.log("error ->", error);
    res.send("error");
  }
});

router.delete("/:name", (req, res) => {
  const { name } = req.params;
  playlists = playlists.filter((item) => item.name != name);
  res.send({ status: 200, playlist: playlists });
});

router.delete("/:name/:videoId", (req, res) => {
  const { name, videoId } = req.params;
  playlists = playlists.map((item) => {
    if (item.name === name) {
      let newVideoArray = item.videos.filter((item) => item.videoId != videoId);
      return { ...item, videos: newVideoArray };
    } else {
      return item;
    }
  });
  res.send({ status: 200, playlist: playlists });
});
router.post("/:name/:newName", (req, res) => {
  let { name, newName } = req.params;
  playlists = playlists.map((item) => {
    if (item.name === name) {
      return { ...item, name: newName };
    } else {
      return item;
    }
  });

  res.send({ status: 200, playlist: playlists });
});

module.exports = router;
