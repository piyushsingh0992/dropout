import React, { useState, useEffect } from "react";
import "./style.css";
import { useTheme } from "../../contexts/themeContext";
import TextField from "../textField";
import Button from "../button";
import { useToast } from "../../contexts/toastContext";
import validator from "validator";
import { youtube } from "../../utils/youtube";
import { apiCall } from "../../apiCall";
const UploadVideo = ({
  trigger,
  triggerSetter,
  userName,
  playlists,
  mentorDetails,
  videosSetter,
}) => {
  const { theme } = useTheme();
  const [loader, loaderSetter] = useState(false);
  const { toastDispatch } = useToast();
  const [videoDetails, videoDetailsSetter] = useState({
    link: "",
    playlist: "Playlist",
  });

  async function uploadVideoToserver(videoData) {
    let { success, message, data } = await apiCall(
      "POST",
      `video/${mentorDetails.mentorId}/create`,
      { videoData }
    );
    if (success) {
      
      videosSetter((value) => {
        return [data.VideoResponse, ...value];
      });
      loaderSetter(false);
      toastDispatch({ type: "success", message: data.message });
      triggerSetter(false);
    } else {
      toastDispatch({ type: "error", message });
      loaderSetter(false);
    }
  }

  async function getvideoDetails(link) {
    let { status, message, data } = await youtube(link);
    if (status) {
      uploadVideoToserver(data);
    } else {
      toastDispatch({ type: "error", message });
      loaderSetter(false);
    }
  }

  useEffect(() => {
    if (loader) {
      getvideoDetails({ videoDetails, mentorDetails });
    }

    return () => {};
  }, [loader]);

  const handleChange = (event) => {
    const name = event.target.name;
    videoDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };

  return (
    <div
      className={`uploadVideo-modal-container ${
        trigger ? "uploadVideo-modal-show" : "uploadVideo-modal-hide"
      }`}
    >
      <div
        className="uploadVideo-modal"
        style={{
          backgroundColor: theme.primaryBackground,
          color: theme.boldText,
        }}
      >
        <h2>Hey {userName} </h2>
        <h3>Paste Your Youtube Video link to upload Video </h3>
        <div className="uploadDetails">
          <TextField
            label={"Youtube Link"}
            value={videoDetails.link}
            onChangeFunction={handleChange}
            name="link"
          />
          <select
            className="selectPlaylist"
            style={{
              backgroundColor: theme.primaryBackground,
              color: theme.boldText,
            }}
            name="playlist"
            onChange={handleChange}
            value={videoDetails.playlist}
          >
            <option>Playlist</option>

            {playlists.map((item) => {
              return <option value={item._id}>{item.name}</option>;
            })}
          </select>
        </div>

        <div className="btns-container">
          <div className="btn-container">
            <Button
              text="cancel"
              type="secondary"
              clickFunction={() => {
                triggerSetter(false);
              }}
            />
          </div>
          <Button
            text="Upload"
            loading={loader}
            clickFunction={() => {
              if (!validator.isURL(videoDetails.link)) {
                toastDispatch({
                  type: "error",
                  message: "Please enter a valid Link",
                });
                return;
              }
              if (videoDetails.playlist === "Playlist") {
                toastDispatch({
                  type: "error",
                  message: "Please select a Playlist",
                });
                return;
              }

              loaderSetter(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
