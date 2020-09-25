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
        <h1>Todos</h1>
        {todoStore.list.map((todo) => {
          return <TodoComponent todo={todo} key={todo.id} />;
        })}
      </div>
    );
  });
};

export default TodoList;
