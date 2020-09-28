import React from "react";
import { render, screen } from "@testing-library/react";
import { RootStore } from "../../stores/rootStore";

import { StoreContext } from "../../stores/helpers/storeContext";

import "@testing-library/jest-dom/extend-expect";

import UserList from "./UserList";

const renderStore = (rootStore: RootStore) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <UserList />
    </StoreContext.Provider>
  );
};

describe("<Todolist />", () => {
  let rootStore: RootStore;

  beforeEach(() => {
    rootStore = new RootStore();
  });

  test("it renders without error", () => {
    expect(renderStore(rootStore)).toBeTruthy();
  });

  test("renders list of users", () => {
    rootStore.dataStore.userStore.addUser("Test User");
    renderStore(rootStore);

    expect(screen.queryByTestId("user-name")).toBeInTheDocument();
  });

  test("Add todo input is rendered", async () => {
    renderStore(rootStore);

    expect(screen.queryByText("Todo Title:")).toBeInTheDocument();
  });
});
