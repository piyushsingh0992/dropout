import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation.js";
import Mentor from "../../components/mentor/Mentor.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./mentorPage.css";
const MentorPage = () => {
  let { mentorId } = useParams();
  const [mentorDetails, mentorDetailsSetter] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        let { data } = await axios.get(`/mentor/${mentorId}`);
        mentorDetailsSetter(data);
      } catch (error) {
        console.error("error ->", error);
      }
    })();
  }, []);

  
  return mentorDetails ? (
    <div className="mentorPage">
      <Navigation />
      <Mentor mentorDetails={mentorDetails} />
    </div>

  ) : (
    <h1>loading</h1>
  );
};

export default MentorPage;
