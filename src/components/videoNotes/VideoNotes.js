import React, { useState, useEffect } from "react";
import "./videoNotes.css";
import enter from "../../utils/images/icons/enter.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import axios from "axios";
const VideoNotes = ({ videoNotes, videoId }) => {

  const [notes, notesSetter] = useState([]);
  const [currentNote, currentNoteSetter] = useState("");
  const { theme } = useTheme();
  const { login } = useAuth();


  const { userKey } = login;

  useEffect(() => {
    notesSetter(videoNotes);
  }, [videoNotes]);

  async function addingNotes() {
    try {
      let { status, data } = await axios.post(
        `https://dropout.piyushsingh6.repl.co/notes/${videoId}`,
        {
          userKey,
          note: currentNote,
        }
      );

      if (status === 200) {
        notesSetter(data.notes);
        currentNoteSetter("");
      }
    } catch (error) {
      console.error(error);
    }
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

    notesSetter((value) => [...value, currentNote]);
    currentNoteSetter("");
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

        <img
          src={enter}
          className="notesSubmit"
          onClick={() => {
            addingNotesonClick();
          }}
        />
      </div>
    </div>
  );
};

export default VideoNotes;
