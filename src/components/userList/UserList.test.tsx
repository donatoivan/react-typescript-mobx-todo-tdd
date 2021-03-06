import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RootStore } from "../../stores/rootStore";
import { StoreContext } from "../../stores/helpers/storeContext";
import UserList from "./UserList";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";

const renderStore = (rootStore: RootStore) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={myTheme}>
        <UserList />
      </ThemeProvider>
    </StoreContext.Provider>,
  );
};

describe("<UserList />", () => {
  let rootStore: RootStore;

  beforeEach(() => {
    rootStore = new RootStore();
  });

  test("it renders without error", () => {
    rootStore.dataStore.userStore.addUser("Test User");

    expect(renderStore(rootStore)).toBeTruthy();
  });

  test("renders list of users", () => {
    rootStore.dataStore.userStore.addUser("Test User");
    renderStore(rootStore);

    expect(screen.queryByText("Test User")).toBeInTheDocument();
  });

  test("Add todo button is rendered", async () => {
    rootStore.dataStore.userStore.addUser("Test User");

    renderStore(rootStore);

    expect(screen.queryByText("Add Todo")).toBeInTheDocument();
  });

  test("new todo entered into input is rendered", async () => {
    rootStore.dataStore.userStore.addUser("Test User");
    renderStore(rootStore);

    userEvent.type(screen.getByTestId("add-input"), "User typed something");

    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.getByText("User typed something")).toBeInTheDocument;
  });
});
