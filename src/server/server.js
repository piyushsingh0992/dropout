import { Server } from "miragejs";
import { mentorData, videoData } from "../utils/data.js";
export const dropoutServer = (params) => {
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

        console.log("currentMentor ->", currentMentor);
        console.log("mentorVideos ->", mentorVideos);
        debugger;
        return {
          mentor: currentMentor,
          videos: mentorVideos,
          status: 200,
        };
      });
    },
  });
};
