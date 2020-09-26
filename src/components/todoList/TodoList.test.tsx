import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { RootStore } from "../../stores/rootStore";

import { StoreContext } from "../../stores/helpers/storeContext";

import "@testing-library/jest-dom/extend-expect";

import TodoList from "./TodoList";

afterEach(cleanup);

const renderStore = (rootStore: RootStore) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <TodoList />
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

  test("component renders Todo", () => {
    rootStore.dataStore.todoStore.addTodo("Test", 1);
    const { queryByTestId } = renderStore(rootStore);

    expect(queryByTestId("todo-title")).toBeInTheDocument();
  });

  test("Todo is deleted after remove button is clicked", async () => {
    rootStore.dataStore.todoStore.addTodo("Test", 1);
    const { queryByText, getByText } = renderStore(rootStore);

    fireEvent.click(getByText("Remove"));

    expect(queryByText("Test")).not.toBeInTheDocument();
  });
});
