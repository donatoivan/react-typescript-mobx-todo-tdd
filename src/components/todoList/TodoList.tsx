import React from "react";
import { useStore } from "../../stores/helpers/useStore";
import { useObserver } from "mobx-react-lite";
import TodoComponent from "../todo/TodoComponent";
import { Title, TodoListContainer } from "../styles/index";

const TodoList: React.FunctionComponent = () => {
  const {
    dataStore: { todoStore },
  } = useStore();

  return useObserver(() => {
    return (
      <TodoListContainer data-testid="todo-list">
        <div>
          <Title>Incomplete Todos ({todoStore.incompleteTodos.length})</Title>
          {todoStore.incompleteTodos.map((todo) => {
            return <TodoComponent todo={todo} key={todo.id} completed={true} />;
          })}
        </div>
        <div>
          <Title>
            Complete Todos ({todoStore.completedTodos.length})
          </Title>
          {todoStore.completedTodos.map((todo) => {
            return <TodoComponent
              todo={todo}
              key={todo.id}
              completed={false}
            />;
          })}
        </div>
      </TodoListContainer>
    );
  });
};

export default TodoList;
