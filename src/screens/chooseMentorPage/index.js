import React, { useEffect, useState } from "react";
import "./style.css";
import Navigation from "../../components/navigation/index.js";
import MentorGrid from "../../components/mentorGrid/index.js";
import Heading from "../../components/heading/index.js";
import Loader from "../../components/loader/index.js";
import { apiCall } from "../../apiCall/apiCall";

const ChooseMentorPage = () => {
  const [loader, loaderSetter] = useState(true);
  const [mentorArray, mentorArraySetter] = useState(true);
  useEffect(() => {
    (async function () {
     
        let { success, data, message } = await apiCall(
          "GET",
          `mentor/allMentor`
        );

        if (success === true) {
          
          mentorArraySetter(data);
        }

        loaderSetter(false);
      
    })();
  }, []);
  return loader ? (
    <Loader size={5} />
  ) : (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Choose Mentor"} />
        <MentorGrid mentorArray={mentorArray} />
      </div>
    </div>
  );
};

export default ChooseMentorPage;
