import React, { useState, useEffect } from "react";
import "./doubtSolver.css";
import enter from "../../utils/images/icons/enter.svg";
import Avatar from "../avatar/Avatar.js";

import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import axios from "axios";

const DoubtSolver = ({ comments, videoId }) => {
  const { theme } = useTheme();
  const [currentQuestion, currentQuestionSetter] = useState("");
  const [questionArray, questionArraySetter] = useState([]);

  const { login } = useAuth();

  let { userKey } = login;

  useEffect(() => {
    questionArraySetter(comments);
  }, []);

  async function addComment(comment) {
    debugger;
    try {
      let { status, data } = await axios.post(
        `https://dropout.piyushsingh6.repl.co/comment/${videoId}`,
        {
          userKey,
          comment,
        }
      );
      debugger;
      if (status === 200) {
        questionArraySetter((value) => [data.comment, ...value]);
        currentQuestionSetter("");
      }
    } catch (error) {
      debugger;
      console.error(error);
    }
  }

  function addingQuestiononEnter(e) {
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

    questionArraySetter((value) => [currentQuestion, ...value]);
    currentQuestionSetter("");
  }

  return (
    <div className="doubtSolver">
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
            addingQuestiononEnter(e);
          }}
          onChange={(e) => {
            currentQuestionSetter(e.target.value);
          }}
        />
        <img
          src={enter}
          className="enterComment"
          onClick={addingQuestiononClick}
        />
      </div>
      <div className="questionContainer">
        {questionArray.map(({ user, comment }) => {
          return (
            <div className="question">
              <Avatar size="small" name={user.userName} />
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoubtSolver;
