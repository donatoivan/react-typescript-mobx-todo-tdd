import React, { useState } from "react";
import { Todo } from "../../stores/data/todos/todo";
import { useObserver } from "mobx-react-lite";
import {
  ContentCard,
  ButtonGroup,
  TitleContainer,
  TodoButtonGroup,
  TitleTodo,
  CompletedParagraph,
  TodoButton,
  Input,
  InputContainer,
} from "../styles/index";

interface Props {
  todo: Todo;
  completed: boolean;
}

const TodoComponent: React.FunctionComponent<Props> = ({ todo, completed }) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState("");

  // const completedToggle = () => {
  //   /* eslint-disable no-console*/
  //   console.log("clicked");
  //   setCompleted("Test");
  //   /* eslint-disable no-console*/
  //   console.log(completed);

  //   // if (completed === "Incomplete") {
  //   //   setCompleted("Completed");
  //   //   console.log(completed);
  //   // } else {
  //   //   setCompleted("Incomplete");
  //   // }
  // };

  return useObserver(() => {
    return (
      <ContentCard data-testid="todo" key={todo.id}>
        {editMode
          ? (
            <InputContainer>
              <Input
                data-testid="edit-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </InputContainer>
          )
          : (
            <TitleContainer>
              <TitleTodo data-testid="todo-title">
                {todo.title}
              </TitleTodo>
            </TitleContainer>
          )}
        <TodoButtonGroup>
          <CompletedParagraph data-testid="completed">
            Completed: {todo.isCompleted.toString()}
          </CompletedParagraph>
          <ButtonGroup>
            {editMode
              ? (
                <TodoButton
                  type="button"
                  onClick={() => {
                    todo.updateTitle(text);
                    setEditMode(false);
                  }}
                >
                  Save
                </TodoButton>
              )
              : (
                <TodoButton type="button" onClick={() => setEditMode(true)}>
                  Edit
                </TodoButton>
              )}
            <TodoButton
              type="button"
              onClick={() => {
                todo.remove();
              }}
            >
              Remove
            </TodoButton>
            <TodoButton
              type="button"
              onClick={() => {
                todo.toggleIsCompleted();
              }}
            >
              {completed ? "Complete" : "Incomplete"}
            </TodoButton>
          </ButtonGroup>
        </TodoButtonGroup>
      </ContentCard>
    );
  });
};

export default TodoComponent;
