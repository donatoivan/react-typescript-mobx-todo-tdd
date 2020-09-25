import React from "react";
import { render, cleanup } from "@testing-library/react";
import { RootStore } from "../../stores/rootStore";

import { StoreContext } from "../../stores/helpers/storeContext";

import "@testing-library/jest-dom/extend-expect";

import TodoList from "./TodoList";

afterEach(cleanup);

describe("<Todolist />", () => {
  // test("component renders Todo", () => {
  //   const { queryByTestId } = render(<TodoList />);

  //   expect(queryByTestId("todo")).toBeInTheDocument();
  // });

  it("it renders without error", () => {
    expect(
      render(
        <StoreContext.Provider value={new RootStore()}>
          <TodoList />
        </StoreContext.Provider>
      )
    ).toBeTruthy();
  });

  //   it("it renders initial counter value different from 0", () => {
  //     const store = stubRootStore();
  //     store.dataStore.todoStore.addTodo("Test", 1);
  //     useStore.mockReturnValue(store);

  //     const { queryByText } = render(<TodoList />);

  //     expect(queryByText("Test")).toBeTruthy();
  //   });
});
