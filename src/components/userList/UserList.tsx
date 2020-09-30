import React, { useState } from "react";
import { useStore } from "../../stores/helpers/useStore";
import TodoComponent from "../todo/TodoComponent";
import {
  ButtonGroup,
  ButtonToggle,
  Input,
  InputContainer,
  AddTodoContainer,
  TodoListContainer,
  Title,
  TodoButton,
} from "../styles/index";
import { useObserver } from "mobx-react-lite";

const UserList = (): JSX.Element => {
  const {
    dataStore: { todoStore, userStore },
  } = useStore();

  const [text, setText] = useState("");
  const [active, setActive] = useState(userStore.list[0]);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    todoStore.addTodo(text, active.userId);
  };

  return useObserver(() => {
    return (
      <div>
        <ButtonGroup>
          {userStore.list.map((user) => (
            <ButtonToggle
              size="16px"
              key={user.userId}
              active={active === user}
              onClick={() => {
                setActive(user);
              }}
            >
              {user.name}
            </ButtonToggle>
          ))}
        </ButtonGroup>
        <TodoListContainer data-testid="todo-list">
          <div>
            <Title>Incomplete Todos ({active.incompleteTodos.length})</Title>
            {active.incompleteTodos.map((todo) => {
              return <TodoComponent
                todo={todo}
                key={todo.id}
                completed={true}
              />;
            })}
          </div>
          <div>
            <Title>
              Complete Todos ({active.completedTodos.length})
            </Title>
            {active.completedTodos.map((todo) => {
              return <TodoComponent
                todo={todo}
                key={todo.id}
                completed={false}
              />;
            })}
          </div>
        </TodoListContainer>
        <AddTodoContainer>
          <InputContainer>
            <Input
              data-testid="add-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputContainer>
          <TodoButton type="button" onClick={(e) => handleSubmit(e)}>
            Add Todo
          </TodoButton>
        </AddTodoContainer>
      </div>
    );
  });
};

export default UserList;
