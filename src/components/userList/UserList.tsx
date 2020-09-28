import React, { useState } from "react";
import { useStore } from "../../stores/helpers/useStore";
import UserComponent from "../user/UserComponent";
import { useObserver } from "mobx-react-lite";

const UserList = (): JSX.Element => {
  const {
    dataStore: { todoStore, userStore },
  } = useStore();

  const [text, setText] = useState("");
  const [currentUser, setCurrentUser] = useState(userStore.list[0]);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    todoStore.addTodo(text, currentUser.userId);
  };

  return useObserver(() => {
    return (
      <div>
        {userStore.list.map((user) => {
          return (
            <div onClick={() => setCurrentUser(user)} key={user.userId}>
              <UserComponent user={user} />
            </div>
          );
        })}
        <div>
          <label htmlFor="add-todo">Todo Title: </label>
          <input
            data-testid="add-input"
            type="text"
            name="add-todo"
            id="add-todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Add Todo
          </button>
        </div>
      </div>
    );
  });
};

export default UserList;
