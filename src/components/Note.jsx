import React, { useState } from "react";

export const Note = ({ note }) => {
  const [text, setText] = useState(note.text);

  console.log(note.color);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={"container m-2 p-1"} style={{}}>
      <div className="form-floating">
        <textarea
          className="form-control border border-dark border-2"
          placeholder="Write..."
          id="floatingTextarea2"
          style={{ height: "100px", backgroundColor: note.color }}
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
