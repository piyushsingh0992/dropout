import React, { useState, useEffect } from "react";
import "./subscribeButton.css";
import Button from "../button";
import { useSubscribe } from "../../contexts/subscribeContext/index.js";
import {
  subscribeMentor,
  unSubscribeMentor,
} from "../../utils/subscribeFunction.js";
import { useToast } from "../../contexts/toastContext/index.js";
import { useAuth } from "../../contexts/authContext/index.js";
const SubscribeButton = ({ mentorId }) => {
  const [subscribe, subscribeSetter] = useState(false);
  const { subscribeState, subscribeDispatch } = useSubscribe();
  const { toastDispatch } = useToast();
  const { login } = useAuth();

  const { userKey } = login;
  useEffect(() => {
    const present = subscribeState.find((item) => item === mentorId);
    if (present) {
      subscribeSetter(true);
    } else {
      subscribeSetter(false);
    }
    return () => {
      subscribeSetter(false);
    };
  }, [subscribeState, mentorId]);

  function subscribeHandler() {
    if (subscribe) {
      unSubscribeMentor(
        mentorId,
        subscribeDispatch,
        subscribeSetter,
        toastDispatch,
        userKey
      );
    } else {
      subscribeMentor(
        mentorId,
        subscribeDispatch,
        subscribeSetter,
        toastDispatch,
        userKey
      );
    }
  }

  return subscribe ? (
    <Button
      clickFunction={subscribeHandler}
      type="secondary"
      text="unsubscribe"
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
