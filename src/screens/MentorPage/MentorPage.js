import React, { useEffect, useState } from "react";
import "./mentorPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation.js";
import Mentor from "../../components/mentor/Mentor.js";
import Loader from "../../components/loader/Loader.js";
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
      try {
        let { data } = await axios.get(
          `https://dropout.piyushsingh6.repl.co/mentor/${mentorId}`
        );

        data = structuringMentorData(data);
        mentorDataSetter(data);
        loadingSetter(false);
      } catch (error) {
        console.error("error ->", error);
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
