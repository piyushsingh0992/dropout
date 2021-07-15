const express = require("express");
const router = express.Router();
const Subscribe = require("../models/subscribe.model.js");

router.get("/:userKey", async (req, res) => {
  let { userKey } = req.params;

  try {
    let SubscribeResponse = await Subscribe.findById(userKey);

    if (SubscribeResponse) {
      res.status(200).send({ mentor: SubscribeResponse });
    } else {
      res.status(500).send({
        message: "error occured Cann't Fetch your subscribed Mentor List",
      });
    }
  } catch (error) {
    console.error("error ->", error);
    res.status(500).send({
      message: "error occured Cann't Fetch your subscribed Mentor List",
    });
  }
});

router.post("/:mentorId", async (req, res) => {
  let { mentorId } = req.params;
  let { userKey } = req.body;

  try {
    let SubscribeResponse = await Subscribe.findById(userKey);
    SubscribeResponse.subscriptions.push(mentorId);
    SubscribeResponse = await SubscribeResponse.save();

    res.status(200).send({ mentorId: mentorId });
  } catch (error) {
    console.error("error ->", error);
    res.status(500).send({
      message: "Error Occured Cann't subscribe to the mentor Right now",
    });
  }
});

router.delete("/:mentorId", async (req, res) => {
  let { mentorId } = req.params;
  let { userKey } = req.body;

  try {
    let SubscribeResponse = await Subscribe.findById(userKey);
    SubscribeResponse.subscriptions = SubscribeResponse.subscriptions.filter(
      (item) => item != mentorId
    );
    SubscribeResponse = await SubscribeResponse.save();

    res.status(200).send({ mentorId: mentorId });
  } catch (error) {
    console.error("error ->", error);
    res.status(500).send({
      message: "Error Occured Cann't subscribe to the mentor Right now",
    });
  }
});

module.exports = router;
