import React, { useEffect, useState } from "react";
import "./ChooseMentorPage.css";
import Navigation from "../../components/navigation/Navigation.js";
import MentorGrid from "../../components/mentorGrid/mentorGrid.js";
import Heading from "../../components/heading/Heading.js";
import Loader from "../../components/loader/Loader.js";
import { apiCall } from "../../apiCall/apiCall";

const ChooseMentorPage = () => {
  const [loader, loaderSetter] = useState(true);
  const [mentorArray, mentorArraySetter] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        let { success, data, message } = await apiCall(
          "GET",
          `mentor/allMentor`
        );

        if (success === true) {
          debugger;
          mentorArraySetter(data);
        }

        loaderSetter(false);
      } catch (error) {
        debugger;
        console.error("error ->", error);
      }
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
