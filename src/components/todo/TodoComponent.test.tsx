import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StoreContext } from "../../stores/helpers/storeContext";
import TodoComponent from "./TodoComponent";
import { Todo } from "../../stores/data/todos/todo";
import { TodoStore } from "../../stores/data/todos/todoStore";
import { RootStore } from "../../stores/rootStore";

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
    renderStore(rootStore, todo);

    const todoEl: HTMLElement = screen.getByText("Test");

    expect(todoEl);
  });

  test("edit, remove and toggles buttons are rendered", () => {
    renderStore(rootStore, todo);

    const editButton: HTMLElement = screen.getByText("Edit");
    const removeButton: HTMLElement = screen.getByText("Remove");
    const toggleButton: HTMLElement = screen.getByText("Toggle Completed");

    expect(editButton.textContent).toEqual("Edit");
    expect(removeButton.textContent).toEqual("Remove");
    expect(toggleButton.textContent).toEqual("Toggle Completed");
  });

  test("todo completed attribute is rendered", () => {
    renderStore(rootStore, todo);

    expect(screen.getByTestId("completed")).toHaveTextContent(
      "Completed: false"
    );
  });

  test("todo completed attribute is toggled from false to true", () => {
    renderStore(rootStore, todo);

    fireEvent.click(screen.getByText("Toggle Completed"));

    expect(screen.getByTestId("completed")).toHaveTextContent(
      "Completed: true"
    );
  });

  test("input box and save button appear once edit button is clicked", () => {
    renderStore(rootStore, todo);
    fireEvent.click(screen.getByText("Edit"));

    expect(screen.getByText("Save")).toHaveTextContent("Save");
    expect(screen.getByTestId("edit-input")).toHaveTextContent("");
  });

  test("input box and save button disappear once save button is clicked", () => {
    renderStore(rootStore, todo);

    fireEvent.click(screen.getByText("Edit"));
    fireEvent.click(screen.getByText("Save"));

    const saveButton: HTMLElement | null = screen.queryByText("Save");
    expect(saveButton).not.toBeInTheDocument();
  });

  test("input is registered in input box when in edit mode", () => {
    renderStore(rootStore, todo);

    fireEvent.click(screen.getByText("Edit"));

    userEvent.type(screen.getByTestId("edit-input"), "User typed something");
    expect(screen.getByTestId("edit-input")).toHaveValue(
      "User typed something"
    );
  });

  test("Todo title is updated after save button is clicked", () => {
    renderStore(rootStore, todo);

    fireEvent.click(screen.getByText("Edit"));
    userEvent.type(screen.getByTestId("edit-input"), "User typed something");
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByTestId("todo-title")).toHaveTextContent(
      "User typed something"
    );
  });
});
