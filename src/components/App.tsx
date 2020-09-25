import React from "react";
import TodoList from "./todoList/TodoList";
import { observer } from "mobx-react-lite";

const App: React.FunctionComponent = () => {
  return <TodoList />;
};

export default observer(App);
