import { Server } from "miragejs";
import { mentorData, videoData } from "../utils/data.js";
export const dropoutServer = (params) => {
  let history = [];
  let likedVideos = [];
  let watchLater = [];
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
            item.category.id === currenntVideo.category.id &&
            item.videoId != currenntVideo.videoId
          ) {
            return true;
          }
          return false;
        });
        history = [currenntVideo, ...history];
      
        return {
          mentor: currentMentor,
          video: currenntVideo,
          recommendations: recommendedVideos,
          status: 200,
        };
      });

      this.get("/history", (schema, request) => {
        return { history: history };
      });

      this.post("/likedVideos", (schema, request) => {
        let { videoId } = JSON.parse(request.requestBody);
        let currentVideo = videoData.find((item) => item.videoId === videoId);
        currentVideo = { ...currentVideo, liked: true };
        likedVideos = [currentVideo, ...likedVideos];
        return { status: 200, video: currentVideo };
      });

      this.delete("/likedVideos", (schema, request) => {
        let { videoId } = request.queryParams;
        let currentVideo = videoData.find((item) => item.videoId === videoId);
        likedVideos = likedVideos.filter((item) => {
          if (item.videoId === currentVideo.videoId) {
            return false;
          }
          return true;
        });
        return { status: 200, video: currentVideo };
      });

      this.post("/watchlater/:videoId", (schema, request) => {
        let { videoId } = request.params;
        let currentVideo = videoData.find((item) => item.videoId === videoId);
        currentVideo = { ...currentVideo, watchLater: true };
        watchLater = [currentVideo, ...watchLater];
        return { status: 200, video: currentVideo };
      });


      this.delete("/watchlater/:videoId", (schema, request) => {
        let { videoId } = request.params;
        let currentVideo = videoData.find((item) => item.videoId === videoId);
        watchLater=watchLater.filter(item=>{
          if(item.videoId===videoId){
            return false;
          }else{
            return true;
          }
        })
        


        return { status: 200, video: currentVideo };
      });
    },
  });
};
