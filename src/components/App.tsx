import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { MainContainer } from "./styles/index";
import { ButtonToggle } from "./styles/index";
import { ButtonGroup } from "./styles/index";
import TodoList from "./todoList/TodoList";
import UserList from "./userList/UserList";

const App: React.FunctionComponent = () => {
  const getViews = (): JSX.Element | undefined => {
    if (active === "Todos List") {
      return <TodoList />;
    } else if (active === "Users List") {
      return <UserList />;
    }
    return;
  };

  const types = ["Todos List", "Users List"];
  const [active, setActive] = useState(types[0]);

  return (
    <MainContainer>
      <ButtonGroup>
        {types.map((type) => (
          <ButtonToggle
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </ButtonToggle>
        ))}
      </ButtonGroup>
      {getViews()}
    </MainContainer>
  );
};

export default observer(App);
