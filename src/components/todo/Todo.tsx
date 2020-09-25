import React, { useState } from "react";

const Todo: React.FunctionComponent = () => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");
  return (
    <div data-testid="todo">
      <div>Todo</div>
      {editMode ? (
        <input
          data-testid="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div></div>
      )}
      {editMode ? (
        <button type="button" onClick={() => setEditMode(false)}>
          Save
        </button>
      ) : (
        <button type="button" onClick={() => setEditMode(true)}>
          Edit
        </button>
      )}
      <button type="button">Remove</button>
      <button type="button">Toggle</button>
    </div>
  );
};

export default Todo;
