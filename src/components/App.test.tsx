import React from "react";
import { render, cleanup } from "@testing-library/react";
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
  test("component renders Todo", () => {
    const { getByText } = render(
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    );

    expect(getByText("Todos")).toBeInTheDocument();
  });
});
