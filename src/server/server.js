import { Server } from "miragejs";
import { mentorData, videoData } from "../utils/data.js";
export const dropoutServer = (params) => {
  let history = [];
  let likedVideo = [];
  let watchedlater = [];
  let playlist = [];
  return new Server({
    routes() {
      this.namespace = "/";
      this.get("/mentor/:mentorId", (schema, request) => {
        let { mentorId } = request.params;
        let currentMentor = mentorData.find(
          (item) => item.mentorId === mentorId
        );
        let mentorVideos = videoData.filter((item) => {
          if (item.mentorId === mentorId) {
            return true;
          }
          return false;
        });
        return {
          mentor: currentMentor,
          videos: mentorVideos,
          status: 200,
        };
      });

      this.get("/video/:videoId", (schema, request) => {
        let { videoId } = request.params;

        let currenntVideo = videoData.find((item) => item.videoId === videoId);
        let currentMentor = mentorData.find(
          (item) => item.mentorId === currenntVideo.mentorId
        );
        let recommendedVideos = videoData.filter((item) => {
          if (
            item.category.name === currenntVideo.category.name &&
            item.videoId != currenntVideo.videoId
          ) {
            return true;
          }
          return false;
        });
        history=[currenntVideo,...history];

        return {
          mentor: currentMentor,
          video: currenntVideo,
          recommendations: recommendedVideos,
          status: 200,
        };
      });


      this.get("/history",(schema,request)=>{
        return {history:history}
      })
    },
  });
};
