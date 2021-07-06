import React, { useEffect, useState } from "react";
import "./videoPlayerPage.css";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../../utils/images/brand/dropout.svg";
import menu from "../../utils/images/icons/menu.svg";
import SideNav from "../../components/sideNav/SideNav.js";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer.js";
import VideoNotes from "../../components/videoNotes/VideoNotes.js";
import RecommendVideoCard from "../../components/recommendVideoCard/RecommendVideoCard.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";

const VideoPlayerPage = () => {
  const { theme } = useTheme();
  const {
    login: { userKey },
  } = useAuth();

  const [side, sideSetter] = useState(false);
  const [loader, loaderSetter] = useState(true);
  let { videoId } = useParams();
  const [videoDetails, videoDetailsSetter] = useState(null);
  const [recommendation, recommendationSetter] = useState([]);
  const [notes, notesSetter] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        loaderSetter(true);
        let response = await axios.post(
          `https://dropout.piyushsingh6.repl.co/video/${videoId}`,
          {
            userKey,
          }
        );

        if (response.status === 200) {
          videoDetailsSetter(response.data);
        }

        response = await axios.get(
          `https://dropout.piyushsingh6.repl.co/recommendation/${videoId}`
        );


        if (response.status === 200) {
          recommendationSetter(response.data);
        }

        response = await axios.get(
          `https://dropout.piyushsingh6.repl.co/notes/${userKey}/${videoId}`
        );

        if (response.status === 200) {
          notesSetter(response.data.notes);
        }
      } catch (error) {
        console.error("error ->", error);
      } finally {
        loaderSetter(false);
      }
    })();
  }, [videoId]);

  return loader ? (
    <h1>loading</h1>
  ) : (
    <div className="videoPlayerPage">
      <div
        className="videoPlayerNavbar"
        style={{ background: theme.highLightBackground }}
      >
        <NavLink to="/">
          <img src={logo} className="videoPlayerBrand" />
        </NavLink>
        <img
          src={theme.menu}
          className="videoPlayerMenu"
          onClick={() => {
            sideSetter((value) => !value);
          }}
        />
      </div>

      <div
        className={`videoPlayerSideNavContainer${
          side ? " videoPlayer-show" : " videoPlayer-hide"
        } `}
        onClick={() => {
          sideSetter((value) => !value);
        }}
      >
        <SideNav />
      </div>

      <div className="videoPlayerPageContainer">
        <VideoPlayer videoDetails={videoDetails} />
        <div className="videoPlayerNotesContainer">
          <VideoNotes videoNotes={notes} videoId={videoDetails._id} />
          {recommendation.map((item) => {
          
            return <RecommendVideoCard videoDetails={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
