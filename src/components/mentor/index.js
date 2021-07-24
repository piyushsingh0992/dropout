import React, { useState } from "react";
import "./mentor.css";
import MentorHeader from "../mentorHeader/index.js";
import VideoCard from "../videoCard/index.js";
import { useLikedVideos } from "../../contexts/likedVideoContext/index.js";
// const Mentor = ({ mentorDetails }) => {
//   
//
//   const { PlaylistDetails, mentorDetails } = mentorDetails;
//   const { likedVideoState } = useLikedVideos();
//   const [categoryId, categoryIdSetter] = useState(mentor.playlist[0].id);

//   let currentPlaylist = videos.filter((item) => {
//     if (item.category.id === categoryId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   return (
//     <div className="mentor">
//       <MentorHeader
//         mentor={mentor}
//         categoryId={categoryId}
//         categoryIdSetter={categoryIdSetter}
//       />
//       <div className="videoCardGrid">
//         {currentPlaylist.map((item) => {
//           return <VideoCard mentorImg={mentor.profile}  videosDetails={item} />;
//         })}
//       </div>
//     </div>
//   );
// };

const Mentor = ({ mentorData }) => {
  const { playlists } = mentorData;
  const [playlistId, playlistIdSetter] = useState(playlists[0]._id);

  let currentPlaylist = playlists.find((item) => item._id === playlistId);


  return (
    <div className="mentor">
      <MentorHeader
        mentorData={mentorData}
        playlistId={playlistId}
        playlistIdSetter={playlistIdSetter}
      />
      <div className="videoCardGrid">
        {currentPlaylist.videos.map((item) => {
          return (
            <VideoCard mentorImg={mentorData.profile} videosDetails={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;
