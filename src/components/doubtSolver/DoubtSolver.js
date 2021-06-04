import React, { useState } from "react";
import "./doubtSolver.css";
import enter from "../../utils/images/icons/enter.svg";
import Avatar from "../avatar/Avatar.js";

import { useTheme } from "../../contexts/themeContext/themeContext.js";

const DoubtSolver = () => {
  const { theme } = useTheme();
  const [currentQuestion, currentQuestionSetter] = useState("");
  const [questionArray, questionArraySetter] = useState([]);

  function addingQuestiononEnter(e) {
    if (currentQuestion.length <= 0 || currentQuestion === "\n") {
      return;
    }

    if (e.keyCode === 13) {
      questionArraySetter((value) => [currentQuestion, ...value]);
      currentQuestionSetter("");
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
        {questionArray.map((item) => {
          return (
            <div className="question">
              <Avatar size="small" name="p" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoubtSolver;
