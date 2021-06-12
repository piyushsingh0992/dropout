import React, { useEffect, useState } from "react";
import "./mentorPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation.js";
import Mentor from "../../components/mentor/Mentor.js";
import Loader from "../../components/loader/Loader.js";
const MentorPage = () => {
  let { mentorId } = useParams();
  const [mentorDetails, mentorDetailsSetter] = useState(null);
  const [loading, loadingSetter] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        let { data } = await axios.get(
          `https://dropout.piyushsingh6.repl.co/mentor/${mentorId}`
        );
        mentorDetailsSetter(data);
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
      <Mentor mentorDetails={mentorDetails} />
    </div>
  );
};

export default MentorPage;
