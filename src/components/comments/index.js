import React, { useState, useEffect } from "react";
import "./style.css";

import enter from "../../assets/icons/enter.svg";
import Avatar from "../avatar";

import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";

import { useToast } from "../../contexts/toastContext";
import { apiCall } from "../../apiCall";
import MiniLoader from "../miniloader";

const Comments = ({ comments, videoId }) => {
  const { theme } = useTheme();
  const [currentQuestion, currentQuestionSetter] = useState("");
  const [questionArray, questionArraySetter] = useState([]);

  const { login } = useAuth();
  const { toastDispatch } = useToast();
  const [loader, loaderSetter] = useState(false);
  let { userKey } = login;

  useEffect(() => {
    questionArraySetter(comments);
  }, []);

  async function addComment(comment) {
    loaderSetter(true);
    let { data, success, message } = await apiCall(
      "POST",
      `comment/${videoId}`,
      {
        userKey,
        comment,
      }
    );

    if (success === true) {
      questionArraySetter((value) => [data.comment, ...value]);
      currentQuestionSetter("");
    } else {
      toastDispatch({ type: "error", message });
    }
    loaderSetter(false);
  }

  function addCommentonEnter(e) {
    if (currentQuestion.length <= 0 || currentQuestion === "\n") {
      return;
    }

    if (e.keyCode === 13) {
      addComment(currentQuestion);
    }
  }

  function addingQuestiononClick(e) {
    if (currentQuestion.length <= 0 || currentQuestion === "\n") {
      return;
    }
    addComment(currentQuestion);
  }

  return (
    <div className="comments">
      <div className="questionBox">
        <Avatar size="large" name="p" />
        <input
          placeholder="Type question's for mentor's here"
          style={{
            fontSize: `1.3rem`,
            padding: `1rem`,
            borderBottom: `1px solid ${theme.boldText}`,
            backgroundColor: theme.primaryBackground,
            color: theme.boldText,
          }}
          value={currentQuestion}
          onKeyDown={(e) => {
            addCommentonEnter(e);
          }}
          onChange={(e) => {
            currentQuestionSetter(e.target.value);
          }}
        />

        {loader ? (
          <MiniLoader />
        ) : (
          <img
            src={enter}
            className="enterComment"
            onClick={addingQuestiononClick}
          />
        )}
      </div>
      <div className="questionContainer">
        {questionArray.map(({ user, comment }) => {
          return (
            <div className="question" style={{ color: theme.boldText }}>
              <Avatar size="small" name={user.userName} />
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
