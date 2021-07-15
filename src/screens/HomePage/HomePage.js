import React, { useEffect, useState } from "react";
import "./homePage.css";
import Hero from "../../components/hero/Hero.js";
import { apiCall } from "../../apiCall/apiCall";
import Loader from "../../components/loader/Loader.js";

const HomePage = () => {
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
    <div className="homePage">
      <Hero mentorArray={mentorArray} />
    </div>
  );
};

export default HomePage;
