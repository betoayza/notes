import React from "react";
import { Note } from "./Note";

let arrColors = [
    "#ffa07a",
    "#ff6347",
    "#d0ff14",
    "#ffcff1",
    "#7df9ff ",
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
  }

  return (
    <div className={"container"}>
      <button type="button" className="btn btn-primary" onClick={handleAddNote}>
        Add
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleCleanAll}
      >
        Clean All
      </button>

      <h2 style={{ color: "red" }}>
        <span>{notes.length}</span> notes
      </h2>

      <div className={"row row-cols-auto"}>
        {notes.length ? (
          notes.map((note) => !note.isDeleted && <Note note={note} />)
        ) : (
          <h2>No hay notas :(</h2>
        )}
      </div>
    </div>
  );
};
