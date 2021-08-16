import axios from "axios";
import { setupAuthHeaderForServiceCalls } from "./common";
export async function youtube({ videoDetails, mentorDetails }) {
  let videoId =
    videoDetails.link.split("?")[1] &&
    videoDetails.link.split("?")[1].split("&") &&
    videoDetails.link
      .split("?")[1]
      .split("&")
      .find((item) => item.includes("v=")) &&
    videoDetails.link
      .split("?")[1]
      .split("&")
      .find((item) => item.includes("v="))
      .split("=")[1];
  if (videoId) {
    const { token } = JSON.parse(localStorage.getItem("loginStatus"));
    try {
      setupAuthHeaderForServiceCalls(null);
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=player,snippet,contentDetails&id=${videoId}&key=AIzaSyAPepQIklNY4Pv-POpkHXofHi959_3F94E`
      );

      if (response.data.items[0].snippet.channelId != mentorDetails.channelId) {
        return {
          status: false,
          message: `You can only upload Videos from ${mentorDetails.channelName} Youtube channel`,
        };
      }
      let details = {
        title: response.data.items[0].snippet.title,
        mentor: mentorDetails.mentorId,
        playlist: videoDetails.playlist,
        embededLink: `https://www.youtube.com/embed/${videoId}`,
        thumbnail: response.data.items[0].snippet.thumbnails.high.url,
        comments: [],
      };

      setupAuthHeaderForServiceCalls(token);
      return { status: true, data: details };
    } catch {
      setupAuthHeaderForServiceCalls(token);

      return {
        status: false,
        message: "Please Try copying the Link Properly 1",
      };
    }
  }

  return { status: false, message: "Please Try copying the Link Properly 2 " };
}
