import React from "react";
import { User } from "../../stores/data/users/user";

interface Props {
  user: User;
}

const UserComponent: React.FunctionComponent<Props> = ({ user }) => {
  return (
    <div data-testid="user" key={user.userId}>
      <h1 data-testid="user-name">{user.name}</h1>
    </div>
  );
};

export default UserComponent;
