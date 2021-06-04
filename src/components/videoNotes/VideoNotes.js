import React, { useState } from "react";
import "./videoNotes.css";
import enter from "../../utils/images/icons/enter.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const VideoNotes = () => {
  const [notes, notesSetter] = useState([]);
  const [currentNote, currentNoteSetter] = useState("");
  const { theme } = useTheme();
  function currentNoteHandler(e) {
    currentNoteSetter(e.target.value);
  }

  function addingNotesonEnter(e) {
    if (currentNote.length <= 0 || currentNote === "\n") {
      return;
    }

    if (e.keyCode === 13) {
      notesSetter((value) => [...value, currentNote]);
      currentNoteSetter("");
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
