import React from "react";
import { User } from "../../stores/data/users/user";
import TodoComponent from "../todo/TodoComponent";
import { useStore } from "../../stores/helpers/useStore";

interface Props {
  user: User;
}

const UserComponent: React.FunctionComponent<Props> = ({ user }) => {
  const {
    dataStore: { userStore },
  } = useStore();
  return (
    <div data-testid="user-list" key={user.userId}>
      <h1 data-testid="user-name">{user.name}</h1>
      <div data-testid="user-todos">
        {userStore.getUser(user.userId).userTodos.map((todo) => {
          return <TodoComponent todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default UserComponent;
