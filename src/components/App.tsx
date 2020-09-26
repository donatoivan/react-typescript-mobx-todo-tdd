import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/helpers/useStore";
import { Views } from "../stores/ui/globalView";

import TodoList from "./todoList/TodoList";
import UserList from "./user/UserList";

const App: React.FunctionComponent = () => {
  const {
    uiStore: { globalView },
  } = useStore();

  const getViews = (): JSX.Element | undefined => {
    if (globalView.currentView === Views.Todos) {
      return <TodoList />;
    } else if (globalView.currentView === Views.Users) {
      return <UserList />;
    }
    return;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          globalView.setView(Views.Todos);
        }}
      >
        Todos List
      </button>
      <button
        type="button"
        onClick={() => {
          globalView.setView(Views.Users);
        }}
      >
        Users List
      </button>
      <div>{getViews()}</div>
    </>
  );
};

export default observer(App);
