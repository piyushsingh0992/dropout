import React, { useEffect, useState } from "react";
import "./style.css";
import moment from "moment";
import Navigation from "../../components/navigation";
import HistoryVideoCard from "../../components/historyVideoCard";
import Heading from "../../components/heading";
import { useAuth } from "../../contexts/authContext";
import Loader from "../../components/loader";
import { apiCall } from "../../apiCall";
import { useHistory } from "../../contexts/historyContext";
const HistoryPage = () => {
  const { history, historyDispatch } = useHistory();
  const [loading, loadingSetter] = useState(history.status === "idle");

  const {
    login: { userKey },
  } = useAuth();

  useEffect(() => {
    if (history.status === "idle") {
      (async function () {
        let { data, success } = await apiCall("GET", `history/${userKey}`);
        if (success === true) {
          historyDispatch({
            type: "FIRST_LOAD",
            payload: { videos: data.videos },
          });
        }
        loadingSetter(false);
      })();
    }
  }, [userKey]);

  return loading ? (
    <Loader size={5} />
  ) : (
    <div className="pageContainer">
      <Navigation />

      <div className="screenContainer">
        <Heading text={"History"} />
        {history &&
          history.videos.map(({ video, created_at }) => {
            let { title, thumbnail, _id, mentor, views } = video;
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
