import React, { useState, useEffect } from "react";
import "./subscribeButton.css";
import axios from "axios";
import Button from "../button/Button.js";
import { useSubscribe } from "../../contexts/subscribeContext/subscribeContext.js";
const SubscribeButton = ({ mentorId }) => {
  const [subscribe, subscribeSetter] = useState(false);
  const { subscribeState, subscribeDispatch } = useSubscribe();

  useEffect(() => {
   
    const present = subscribeState.find(item => item === mentorId);
    if (present) {
      subscribeSetter(true);
    } else {
      subscribeSetter(false);
    }
    return () => {
      subscribeSetter(false);
    };
  }, [mentorId]);

  function subscribeHandler() {
    if (subscribe) {
      (async function () {
        try {
          let { data } = await axios.delete(`/subscribe/${mentorId}`);
          
          subscribeDispatch({
            payload: "UNSUBSCRIBE",
            mentorId: data.mentorId,
          });
          subscribeSetter(false);
        } catch (error) {
          console.error("error");
        }
      })();
    } else {
      (async function () {
        try {
          let { data } = await axios.post(`/subscribe/${mentorId}`);
          
          subscribeDispatch({
            payload: "SUBSCRIBE",
            mentorId: data.mentorId,
          });
          subscribeSetter(true);
        } catch (error) {
          console.error("error");
        }
      })();
    }
  }

  return subscribe ? (
    <Button
      clickFunction={subscribeHandler}
      type="secondary"
      text="Unsubscribe"
      size="subscribe-btn"
    />
  ) : (
    <Button
      clickFunction={subscribeHandler}
      text="Subscribe"
      size="subscribe-btn"
    />
  );
};

export default SubscribeButton;
