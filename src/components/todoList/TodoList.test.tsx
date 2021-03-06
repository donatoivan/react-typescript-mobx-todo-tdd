import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RootStore } from "../../stores/rootStore";
import { StoreContext } from "../../stores/helpers/storeContext";
import TodoList from "./TodoList";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/theme";

const renderStore = (rootStore: RootStore) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={myTheme}>
        <TodoList />
      </ThemeProvider>
    </StoreContext.Provider>,
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

  test("component renders an incomplete todo List", () => {
    rootStore.dataStore.todoStore.addTodo("Test", 1);
    const { queryByText } = renderStore(rootStore);

    expect(queryByText("Incomplete Todos (1)")).toBeInTheDocument();
  });

  test("component renders a complete todo List", () => {
    rootStore.dataStore.todoStore.addTodo("Test", 1);
    rootStore.dataStore.todoStore.getTodo(3).toggleIsCompleted();
    const { queryByText } = renderStore(rootStore);

    expect(queryByText("Complete Todos (1)")).toBeInTheDocument();
  });

  test("Todo is deleted after remove button is clicked", async () => {
    rootStore.dataStore.todoStore.addTodo("Test", 1);
    const { queryByText, getByText } = renderStore(rootStore);

    fireEvent.click(getByText("Remove"));

    expect(queryByText("Test")).not.toBeInTheDocument();
  });
});
