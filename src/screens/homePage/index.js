import React, { useEffect, useState } from "react";
import "./style.css";
import Hero from "../../components/hero/index.js";
import { apiCall } from "../../apiCall/apiCall";
import Loader from "../../components/loader/index.js";

const HomePage = () => {
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
    <div className="homePage">
      <Hero mentorArray={mentorArray} />
    </div>
  );
};

export default HomePage;
