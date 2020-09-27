import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { StoreContext } from "../stores/helpers/storeContext";
import { RootStore } from "../stores/rootStore";

afterEach(cleanup);

describe("<App />", () => {
  let rootStore: RootStore;
  beforeEach(() => {
    rootStore = new RootStore();
  });
  test("component renders incomplete Todo list", () => {
    const { getByText } = render(
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    );

    expect(getByText("Incomplete Todos (0)")).toBeInTheDocument();
  });

  test("component renders Users", () => {
    const { getByText } = render(
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    );

    fireEvent.click(getByText("Users List"));

    expect(getByText("Users")).toBeInTheDocument();
  });
});
