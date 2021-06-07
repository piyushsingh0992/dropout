import { Server } from "miragejs";
import { themeHandler } from "../contexts/themeContext/reducer.js";
import { mentorData, videoData } from "../utils/data.js";
export const dropoutServer = (params) => {
  let history = [];
  let likedVideos = [];
  let watchLater = [];
  let playlists = [];
  let subscribedMentors = [];

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
        watchLater = watchLater.filter((item) => {
          if (item.videoId === videoId) {
            return false;
          } else {
            return true;
          }
        });
        return { status: 200, video: currentVideo };
      });

      this.post("/subscribe/:mentorId", (schema, request) => {
        let { mentorId } = request.params;
        subscribedMentors = [...subscribedMentors, mentorId];
        return { status: 200, mentorId };
      });
      this.delete("/subscribe/:mentorId", (schema, request) => {
        let { mentorId } = request.params;
        subscribedMentors = subscribedMentors.filter(
          (item) => item !== mentorId
        );
        return { status: 200, mentorId };
      });

      this.get("/playlist", (schema, request) => {
        return { status: 200, playlists: playlists };
      });

      this.post("/playlist", (schema, request) => {
        let { playlistName } = JSON.parse(request.requestBody);

        playlists = [...playlists, { name: playlistName, videos: [] }];
        return { status: 200, newPlaylist: { name: playlistName, videos: [] } };
      });

      this.post("/playlist/:videoId", (schema, request) => {
        let { playlistarray } = JSON.parse(request.requestBody);
        let { videoId } = request.params;

        let currentVideo = videoData.find((item) => item.videoId === videoId);
        playlists = playlists.map((playlist) => {
          let toBeAddedPlaylist = playlistarray.find(
            (item) => item === playlist.name
          );
          if (toBeAddedPlaylist) {
            const isVideoPresent = playlist.videos.find(
              (item) => item.videoId === videoId
            );
            if (isVideoPresent) {
              return playlist;
            } else {
              return {
                ...playlist,
                videos: [...playlist.videos, currentVideo],
              };
            }
          } else {
            return playlist;
          }
        });

        return { status: 200, playlist: playlists };
      });

      this.post("/playlist/:name/:newName", (schema, request) => {
        let { name, newName } = request.params;
        
        playlists = playlists.map((item) => {
          
          if (item.name === name) {
            return { ...item, name: newName };
          } else {
            return item;
          }
        });

        return { status: 200, playlist: playlists };
      });

      this.delete("/playlist/:name", (schema, request) => {
        const { name } = request.params;
        playlists = playlists.filter((item) => item.name != name);
        return { status: 200, playlist: playlists };
      });

      this.delete("/playlist/:name/:videoId", (schema, request) => {
        const { name, videoId } = request.params;
        playlists = playlists.map((item) => {
          if (item.name === name) {
            let newVideoArray = item.videos.filter(
              (item) => item.videoId != videoId
            );
            return { ...item, videos: newVideoArray };
          } else {
            return item;
          }
        });
        return { status: 200, playlist: playlists };
      });
    },
  });
};
