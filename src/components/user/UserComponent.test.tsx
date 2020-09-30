import React from "react";
import { render, screen } from "@testing-library/react";
import { StoreContext } from "../../stores/helpers/storeContext";
import UserComponent from "./UserComponent";
import { User } from "../../stores/data/users/user";
import { RootStore } from "../../stores/rootStore";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";

const renderStore = (rootStore: RootStore, user: User) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={myTheme}>
        <UserComponent user={user} key={1} />
      </ThemeProvider>
    </StoreContext.Provider>,
  );
};

describe("<UserComponent />", () => {
  let user: User;
  let rootStore: RootStore;
  beforeEach(() => {
    rootStore = new RootStore();
    rootStore.dataStore.userStore.addUser("Test User");
  });
  test("component renders User", () => {
    user = rootStore.dataStore.userStore.getUser(1);
    renderStore(rootStore, user);

    const todoEl: HTMLElement = screen.getByText("Test User");

    expect(todoEl);
  });

  test("component renders User todos", () => {
    user = rootStore.dataStore.userStore.getUser(2);
    rootStore.dataStore.todoStore.addTodo("Test Todo", user.userId);

    renderStore(rootStore, user);

    expect(screen.getByText("Test Todo")).toBeInTheDocument;
  });
});
