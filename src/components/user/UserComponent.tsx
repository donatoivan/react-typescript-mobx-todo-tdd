import React from "react";
import { User } from "../../stores/data/users/user";
import TodoComponent from "../todo/TodoComponent";
import { useStore } from "../../stores/helpers/useStore";
import { useObserver } from "mobx-react-lite";

interface Props {
  user: User;
}

const UserComponent: React.FunctionComponent<Props> = ({ user }) => {
  const {
    dataStore: { userStore },
  } = useStore();

  return useObserver(() => {
    return (
      <div data-testid="user" key={user.userId}>
        <h1 data-testid="user-name">{user.name}</h1>
        <div data-testid="user-todos">
          {userStore.getUser(user.userId).userTodos.map((todo) => {
            return <TodoComponent
              todo={todo}
              key={todo.id}
              completed={false}
            />;
          })}
        </div>
      </div>
    );
  });
};

export default UserComponent;
