import React, { useEffect, useState } from "react";
import "./style.css";

import moment from "moment";
import Navigation from "../../components/navigation";
import HistoryVideoCard from "../../components/historyVideoCard";
import Heading from "../../components/heading";
import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";
import Loader from "../../components/loader";
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
      let { data, success } = await apiCall("GET", `history/${userKey}`);
      if (success === true) {
        historyArraySetter(data.videos);
      }
      loadingSetter(false);
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
