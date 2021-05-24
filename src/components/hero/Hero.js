import React, { useEffect, useState, useRef } from "react";

import { useTheme } from "../../contexts/themeContext/themeContext.js";
import "./hero.css";
import logo from "../../utils/images/brand/dropout.svg";
import menu from "../../utils/images/icons/menu.svg";
import Button from "../button/Button.js";
import SideNav from "../sideNav/SideNav.js";

import leftArrow from "../../utils/images/icons/leftArrow.svg";
import rightArrow from "../../utils/images/icons/rightArrow.svg";

import { useMentorDetails } from "../../utils/common.js";

const Hero = () => {
  const { theme } = useTheme();
  const { mentorDetails } = useMentorDetails();
  const [position, positionSetter] = useState(0);
  const setTimeOutId = useRef();
  const [side, sideSetter] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      slideRight();
    }, 2000);
    setTimeOutId.current = id;
  }, [position]);

  function slideLeft() {
    clearInterval(setTimeOutId.current);
    if (position >= 0) {
      positionSetter(0);
      return;
    }
    positionSetter((value) => value + 100);
  }

  function slideRight() {
    clearInterval(setTimeOutId.current);
    if (position < -400) {
      positionSetter(0);
      return;
    }
    positionSetter((value) => value - 100);
  }

  return (
    <div className="hero">
      <img src={theme.heroBackground} className="heroBackground" />

      <div className="heroContainer">
        <div className="heroNavbar">
          <img src={logo} className="heroBrand" />
          <img
            src={menu}
            className="menuBrand"
            onClick={() => {
              console.log("clicked");
              sideSetter((value) => !value);
            }}
          />
        </div>

        <div
          className={`heroSideNavContainer${side ? " hero-show" : " hero-hide"} `}
          onClick={() => {
            sideSetter((value) => !value);
          }}
        >
          <SideNav />
        </div>

        <img
          src={leftArrow}
          className="left-arrow"
          onClick={() => {
            console.log("clicked left");
            slideLeft();
          }}
        />
        <img
          src={rightArrow}
          className="right-arrow"
          onClick={() => {
            console.log("clicked right");
            slideRight();
          }}
        />
        <div className="slideShow" style={{ left: `${position}vw` }}>
          {mentorDetails.map((item) => {
            return (
              <div className="slide">
                <img src={item.heroImage} className="slideMentorImg" />

                <div className="slideMentorDetails">
                  <h1 className="mentorName">{item.name}</h1>
                  <p className="mentorType">{item.category}</p>
                  <p className="mentorDescription">tanay work's at microsoft</p>

                  <div>
                    <Button text="Start Learning" size="startLearning" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
