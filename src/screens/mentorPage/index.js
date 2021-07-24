import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

import Navigation from "../../components/navigation/index.js";
import Mentor from "../../components/mentor/index.js";
import Loader from "../../components/loader/index.js";
import { apiCall } from "../../apiCall/apiCall";
const MentorPage = () => {
  let { mentorId } = useParams();
  const [mentorData, mentorDataSetter] = useState(null);
  const [loading, loadingSetter] = useState(true);

  function structuringMentorData(data) {
    let { playlists } = data;

    let mentorData = {};

    Object.keys(data).forEach((key) => {
      if (key != "playlists") {
        mentorData[key] = data[key];
      }
    });
    playlists = playlists.map((playlist) => {
      playlist.videos = playlist.videos.map((video) => {
        video.mentor = mentorData;
        return video;
      });
      return playlist;
    });

    data.playlists = playlists;

    return data;
  }

  useEffect(() => {
    (async function () {
     
        let { data, success, message } = await apiCall(
          "GET",
          `mentor/${mentorId}`
        );
        if (success === true) {
          data = structuringMentorData(data);
          mentorDataSetter(data);
          loadingSetter(false);
        }
      
    })();
  }, []);

  return loading ? (
    <Loader size={5} />
  ) : (
    <div className="pageContainer">
      <Navigation />
      <Mentor mentorData={mentorData} />
    </div>
  );
};

export default MentorPage;
