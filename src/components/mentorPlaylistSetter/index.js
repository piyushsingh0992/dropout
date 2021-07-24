import React from "react";
import "./mentorPlaylistSetter.css";

import { useTheme } from "../../contexts/themeContext/index.js";
import { useLanguage } from "../../contexts/languageContext/index.js";

const MentorPlaylistSetter = ({ playlists, playlistId, playlistIdSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className="mentorPlaylistSetter"
      style={{ backgroundColor: theme.cardBackground }}
    >
      {playlists.map((item) => {
        return (
          <p
            style={
              item._id === playlistId
                ? {
                    borderBottom: `2px solid ${theme.hightLightText}`,
                    color: theme.hightLightText,
                    fontWeight: "bold",
                  }
                : {
                    borderBottom: `1px solid ${theme.boldText}`,
                    color: theme.boldText,
                  }
            }
            onClick={() => {
              playlistIdSetter(item._id);
            }}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default MentorPlaylistSetter;
