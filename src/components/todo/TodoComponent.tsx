import React, { useState } from "react";
import { Todo } from "../../stores/data/todos/todo";

interface Props {
  todo: Todo;
}

const TodoComponent: React.FunctionComponent<Props> = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");
  return (
    <div data-testid="todo" key={todo.id}>
      {editMode ? (
        <input
          data-testid="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div>{todo.title}</div>
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

export default TodoComponent;
