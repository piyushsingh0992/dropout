import React, { useState, useEffect } from "react";
import "./style.css";
import enter from "../../assets/icons/enter.svg";
import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";

import { useToast } from "../../contexts/toastContext";
import { apiCall } from "../../apiCall";
import MiniLoader from "../miniloader";
const VideoNotes = ({ videoNotes, videoId }) => {
  
  const [notes, notesSetter] = useState([]);
  const [currentNote, currentNoteSetter] = useState("");
  const [loader, loaderSetter] = useState(false);
  const { theme } = useTheme();
  const { login } = useAuth();
  const { toastDispatch } = useToast();

  const { userKey } = login;

  useEffect(() => {
    notesSetter(videoNotes);
  }, [videoNotes]);

  async function addingNotes() {
    loaderSetter(true);
    let { data, success, message } = await apiCall("POST", `notes/${videoId}`, {
      userKey,
      note: currentNote,
    });

    if (success === true) {
      notesSetter(data.notes);
      currentNoteSetter("");
    } else {
      toastDispatch({ type: "error", message });
    }
    loaderSetter(false);
  }

  function currentNoteHandler(e) {
    currentNoteSetter(e.target.value);
  }

  function addingNotesonEnter(e) {
    if (currentNote.length <= 0 || currentNote === "\n") {
      return;
    }

    if (e.keyCode === 13) {
      addingNotes();
    }
  }

  function addingNotesonClick() {
    if (currentNote.length <= 0 || currentNote === "\n") {
      return;
    }

    addingNotes();
  }
  return (
    <div className="videoNotes" style={{ background: theme.cardBackground }}>
      <p style={{ color: theme.boldText }}>Notes</p>
      <div
        style={{
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
        }}
        className="allNotes"
      >
        {notes.map((item) => {
          return <p style={{ color: theme.boldText }}>{item}</p>;
        })}
      </div>
      <div className="writingNotes">
        <textarea
          rows="2"
          cols="23"
          value={currentNote}
          onKeyDown={(e) => {
            addingNotesonEnter(e);
          }}
          onChange={(e) => {
            currentNoteHandler(e);
          }}
          style={{ background: theme.cardBackground, color: theme.boldText }}
          className="notesTextArea"
          placeholder="Take notes"
        />
        {loader ? (
          <MiniLoader />
        ) : (
          <img
            src={enter}
            className="notesSubmit"
            onClick={() => {
              addingNotesonClick();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default VideoNotes;
