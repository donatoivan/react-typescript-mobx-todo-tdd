import React from "react";
import { useStore } from "../../stores/helpers/useStore";

import UserComponent from "./UserComponent";

const UserList = (): JSX.Element => {
  const {
    dataStore: { userStore },
  } = useStore();
  return (
    <div>
      {userStore.list.map((user) => {
        return <UserComponent user={user} key={user.userId} />;
      })}
      <form>
        <label htmlFor="add-todo">Todo Title: </label>
        <input type="text" name="add-todo" id="add-todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default UserList;
