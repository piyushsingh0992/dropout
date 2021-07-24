import React from "react";
import "./style.css";
import Button from "../button";
const VideoUploader = () => {
  const [link, linkSetter] = useState();
  const [showModal, showModalSetter] = useState(false);

  return (
    <div className="videoUploader">
      <div>
        <p>Paste your Youtube Video link Here </p>
        <div>
          <input value={link} onChange={(e) => linkSetter(e.target.value)} />
          <Button text={"Upload"} />
        </div>
      </div>
      <div>
        <div className="choosePlaylistModal">
          <p>Choose the Playlist you want to upload "{"Video"}" to ?</p>
          <input type="radio" id="age1" name="playlist" value="30" />
          <label for="age1">0 - 30</label>
          <br />

          <div className="choosePlaylistModalButtonContainer"> 
            <Button text={"Cancel"} />
            <Button text={"Upload"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUploader;
