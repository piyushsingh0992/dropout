import React, { useState, useEffect } from "react";
import "./style.css";

import enter from "../../assets/icons/enter.svg";
import Avatar from "../avatar";

import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";

import { useToast } from "../../contexts/toastContext";
import { apiCall } from "../../apiCall";
import MiniLoader from "../miniloader";
import deleteIcon from "../../assets/icons/delete.svg";

const Comments = ({ comments, videoId }) => {
  const { theme } = useTheme();
  const [currentQuestion, currentQuestionSetter] = useState("");
  const [questionArray, questionArraySetter] = useState([]);

  const { login, userName } = useAuth();

  const { toastDispatch } = useToast();
  const [loader, loaderSetter] = useState("");
  let { userKey } = login;

  const [deleteLoader, deleteLoaderSetter] = useState("");
  useEffect(() => {
    questionArraySetter(comments);
  }, []);

  async function addComment(comment) {
    loaderSetter("add");
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
    loaderSetter("");
  }

  async function deleteComment(commentId) {
    deleteLoaderSetter(commentId);
    let { data, success, message } = await apiCall(
      "POST",
      `comment/delete/${videoId}`,
      {
        userKey,
        commentId,
      }
    );

    if (success === true) {
      questionArraySetter((value) =>
        value.filter(({ user, comment, _id }) => {
          return _id !== commentId;
        })
      );
    } else {
      toastDispatch({ type: "error", message });
    }
    deleteLoaderSetter("");
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
        <Avatar size="large" name={login.userName[0]} />
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

        {loader === "add" ? (
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
        {questionArray.map(({ user, comment, _id }) => {
          return (
            <div className="individual-question-container">
              <div className="question" style={{ color: theme.boldText }}>
                <Avatar size="small" name={user.userName} />
                <p>{comment}</p>
              </div>
              {userKey === user._id &&
                (deleteLoader === _id ? (
                  <span className="comment-delete-icon">
                    <MiniLoader />
                  </span>
                ) : (
                  <img
                    src={deleteIcon}
                    className="comment-delete-icon"
                    onClick={() => {
                      deleteComment(_id);
                    }}
                  />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
