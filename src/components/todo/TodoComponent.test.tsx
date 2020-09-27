import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { StoreContext } from "../../stores/helpers/storeContext";
import TodoComponent from "./TodoComponent";
import { Todo } from "../../stores/data/todos/todo";
import { TodoStore } from "../../stores/data/todos/todoStore";
import { RootStore } from "../../stores/rootStore";

afterEach(cleanup);

const renderStore = (rootStore: RootStore, todo: Todo) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <TodoComponent todo={todo} key={1} />
    </StoreContext.Provider>
  );
};

describe("<Todo />", () => {
  let todo: Todo;
  let todoStore: TodoStore;
  let rootStore: RootStore;
  beforeEach(() => {
    rootStore = new RootStore();
    todoStore = new TodoStore(rootStore);
    todo = new Todo("Test", 1, todoStore);
  });
  test("component renders Todo", () => {
    const { getByText } = renderStore(rootStore, todo);

    const todoEl: HTMLElement = getByText("Test");

    expect(todoEl);
  });

  test("edit, remove and toggles buttons are rendered", () => {
    const { getByText } = renderStore(rootStore, todo);

    const editButton: HTMLElement = getByText("Edit");
    const removeButton: HTMLElement = getByText("Remove");
    const toggleButton: HTMLElement = getByText("Toggle Completed");

    expect(editButton.textContent).toEqual("Edit");
    expect(removeButton.textContent).toEqual("Remove");
    expect(toggleButton.textContent).toEqual("Toggle Completed");
  });

  test("todo completed attribute is rendered", () => {
    const { getByTestId } = renderStore(rootStore, todo);

    expect(getByTestId("completed")).toHaveTextContent("Completed: false");
  });

  test("todo completed attribute is toggled from false to true", () => {
    const { getByTestId, getByText } = renderStore(rootStore, todo);

    fireEvent.click(getByText("Toggle Completed"));

    expect(getByTestId("completed")).toHaveTextContent("Completed: true");
  });

  test("input box and save button appear once edit button is clicked", () => {
    const { getByText, getByTestId } = renderStore(rootStore, todo);
    fireEvent.click(getByText("Edit"));

    expect(getByText("Save")).toHaveTextContent("Save");
    expect(getByTestId("edit-input")).toHaveTextContent("");
  });

  test("input box and save button disappear once save button is clicked", () => {
    const { queryByText, getByText } = renderStore(rootStore, todo);

    fireEvent.click(getByText("Edit"));
    fireEvent.click(getByText("Save"));

    const saveButton: HTMLElement | null = queryByText("Save");
    expect(saveButton).not.toBeInTheDocument();
  });

  test("input is registered in input box when in edit mode", () => {
    const { getByTestId, getByText } = renderStore(rootStore, todo);

    fireEvent.click(getByText("Edit"));

    userEvent.type(getByTestId("edit-input"), "User typed something");
    expect(getByTestId("edit-input")).toHaveValue("User typed something");
  });

  test("Todo title is updated after save button is clicked", () => {
    const { getByTestId, getByText } = renderStore(rootStore, todo);

    fireEvent.click(getByText("Edit"));
    userEvent.type(getByTestId("edit-input"), "User typed something");
    fireEvent.click(getByText("Save"));

    expect(getByTestId("todo-title")).toHaveTextContent("User typed something");
  });
});
