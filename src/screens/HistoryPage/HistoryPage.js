import React, { useEffect, useState } from "react";
import "./historyPage.css";
import axios from "axios";
import moment from "moment";
import Navigation from "../../components/navigation/Navigation.js";
import HistoryVideoCard from "../../components/historyVideoCard/HistoryVideoCard.js";
import Heading from "../../components/heading/Heading.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import Loader from "../../components/loader/Loader.js";
import { apiCall } from "../../apiCall/apiCall";
const HistoryPage = () => {
  const [history, historyArraySetter] = useState([]);
  const [loading, loadingSetter] = useState(true);
  const { theme } = useTheme();

  const {
    login: { userKey },
  } = useAuth();
  useEffect(() => {
    (async function () {
      try {
        let { data, success, message } = await apiCall(
          "GET",
          `history/${userKey}`
        );
        if (success === true) {
          historyArraySetter(data.videos);
        }

        loadingSetter(true);
      } catch (error) {
        console.error(error);
        loadingSetter(false);
      } finally {
        loadingSetter(false);
      }
    })();
  }, []);

  return loading ? (
    <Loader size={5} />
  ) : (
    <div className="pageContainer">
      <Navigation />

      <div className="screenContainer">
        <Heading text={"History"} />
        {history.map(({ video }) => {
          let { title, thumbnail, _id, mentor, views, created_at } = video;

          let time = moment(created_at).startOf("hour").fromNow();

          return (
            <HistoryVideoCard
              title={title}
              views={views}
              mentor={mentor}
              thumbnail={thumbnail}
              videoId={_id}
              time={time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
