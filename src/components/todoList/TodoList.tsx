import React from "react";
import { useStore } from "../../stores/helpers/useStore";
import { useObserver } from "mobx-react-lite";
import TodoComponent from "../todo/TodoComponent";

const TodoList: React.FunctionComponent = () => {
  const {
    dataStore: { todoStore },
  } = useStore();

  return useObserver(() => {
    return (
      <div>
        <div>
          <h1>Incomplete Todos ({todoStore.incompleteTodos.length})</h1>
          {todoStore.incompleteTodos.map((todo) => {
            return <TodoComponent todo={todo} key={todo.id} />;
          })}
        </div>
        <div>
          <h1>Complete Todos ({todoStore.completedTodos.length})</h1>
          {todoStore.completedTodos.map((todo) => {
            return <TodoComponent todo={todo} key={todo.id} />;
          })}
        </div>
      </div>
    );
  });
};

export default TodoList;
