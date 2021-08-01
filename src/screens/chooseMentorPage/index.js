import React, { useEffect, useState } from "react";
import "./style.css";
import Navigation from "../../components/navigation";
import MentorGrid from "../../components/mentorGrid";
import Heading from "../../components/heading";
import Loader from "../../components/loader";
import { apiCall } from "../../apiCall";

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
