import React, { useState } from "react";
import { Todo } from "../../stores/data/todos/todo";
import { useObserver } from "mobx-react-lite";

interface Props {
  todo: Todo;
}

const TodoComponent: React.FunctionComponent<Props> = ({ todo }) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");

  return useObserver(() => {
    return (
      <div data-testid="todo" key={todo.id}>
        {editMode ? (
          <input
            data-testid="edit-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <div>
            <h1 data-testid="todo-title">{todo.title}</h1>
            <p data-testid="completed">
              Completed: {todo.isCompleted.toString()}
            </p>
          </div>
        )}
        {editMode ? (
          <button
            type="button"
            onClick={() => {
              todo.updateTitle(text);
              setEditMode(false);
            }}
          >
            Save
          </button>
        ) : (
          <button type="button" onClick={() => setEditMode(true)}>
            Edit
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            todo.remove();
          }}
        >
          Remove
        </button>
        <button type="button" onClick={() => todo.toggleIsCompleted()}>
          Toggle Completed
        </button>
      </div>
    );
  });
};

export default TodoComponent;
