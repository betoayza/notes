import React, { useState } from "react";
import { Note } from "./Note";

let arrColors = [
  "#ffa07a",
  "#ff6347",
  "#d0ff14",
  "#ffcff1",
  "#7df9ff",
  "#ffd700",
];

const randomColor = () => {
  let colorChosen = arrColors[Math.floor(Math.random() * 6)];
  return colorChosen;
};

export const Notes = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),      
      text: "",
      color: randomColor(),
      idDeleted: false,
    };
    setNotes([...notes, newNote]);
  };

  const handleCleanAll = () => {
    setNotes([]);
  };

  return (
    <div className={"container text-center"}>
      <h2>
        <span style={{ color: "red" }}>{notes.length}</span> notes
      </h2>

      <button type="button" className="btn btn-primary" onClick={handleAddNote}>
        Add
      </button>
      <button type="button" className="btn btn-danger" onClick={handleCleanAll}>
        Clean All
      </button>

      <div
        className={"row row-cols-auto mt-2"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {notes.length ? (
          notes.map(
            (note, index) => !note.isDeleted && <Note key={index} note={note} />
          )
        ) : (
          <div className={"text-center border w-100"}>
            <h2>No notes :(</h2>
          </div>
        )}
      </div>
    </div>
  );
};
