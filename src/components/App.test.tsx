import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { StoreContext } from "../stores/helpers/storeContext";
import { RootStore } from "../stores/rootStore";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../styles/theme";

const renderStore = (rootStore: RootStore) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>,
  );
};

describe("<App />", () => {
  let rootStore: RootStore;
  beforeEach(() => {
    rootStore = new RootStore();
  });
  test("component renders incomplete Todo list", () => {
    renderStore(rootStore);
    expect(screen.getByText("Incomplete Todos (0)")).toBeInTheDocument();
  });

  test("component renders Users", () => {
    rootStore.dataStore.userStore.addUser("Test User");
    renderStore(rootStore);

    fireEvent.click(screen.getByText("Users List"));

    expect(screen.getByText("Test User")).toBeInTheDocument();
  });
});
