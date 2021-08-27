import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
// import logo from "../../assets/brand/dropout.svg";
import logo from "../../assets/brand/dropout.svg";
import menu from "../../assets/icons/menu.svg";
import Button from "../button";
import SideNav from "../sideNav";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";

const Hero = ({ mentorArray }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [position, positionSetter] = useState(0);
  const setTimeOutId = useRef();
  const [side, sideSetter] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => {
      slideRight();
    }, 2500);
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
              sideSetter((value) => !value);
            }}
          />
        </div>

        <div
          className={`heroSideNavContainer${
            side ? " hero-show" : " hero-hide"
          } `}
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
            slideLeft();
          }}
        />
        <img
          src={rightArrow}
          className="right-arrow"
          onClick={() => {
            slideRight();
          }}
        />
        <div className="tagline" style={{color:theme.hightLightText}}>
        <h1>Even if you Dropout, you can still learn from best </h1>
        <h3>Choose a mentor and start learning </h3>
        </div>
        <div className="slideShow" style={{ left: `${position}vw` }}>
          {mentorArray.map((item, index) => {
            return (
              <div key={index} className="slide">
                <img src={item.heroImage} className="slideMentorImg" />

                <div className="slideMentorDetails">
                  <h1 className="mentorName">{item.name}</h1>
                  <p className="mentorType">{item.subject}</p>
                  <p className="mentorDescription">{item.description}</p>

                  <NavLink to={`/mentor/${item._id}`}>
                    <Button
                      text={language.startLearning}
                      size="startLearning"
                    />
                  </NavLink>
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
