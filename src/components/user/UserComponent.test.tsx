import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { StoreContext } from "../../stores/helpers/storeContext";
import UserComponent from "./UserComponent";
import { User } from "../../stores/data/users/user";
import { RootStore } from "../../stores/rootStore";

const renderStore = (rootStore: RootStore, user: User) => {
  return render(
    <StoreContext.Provider value={rootStore}>
      <UserComponent user={user} key={1} />
    </StoreContext.Provider>
  );
};

describe("<UserComponent />", () => {
  let user: User;
  let rootStore: RootStore;
  beforeEach(() => {
    rootStore = new RootStore();
    rootStore.dataStore.userStore.addUser("Test User");
  });
  test("component renders User", () => {
    user = rootStore.dataStore.userStore.getUser(1);
    renderStore(rootStore, user);

    const todoEl: HTMLElement = screen.getByText("Test User");

    expect(todoEl);
  });

  test("component renders User todos", () => {
    user = rootStore.dataStore.userStore.getUser(2);
    rootStore.dataStore.todoStore.addTodo("Test Todo", user.userId);

    renderStore(rootStore, user);

    expect(screen.getByText("Test Todo")).toBeInTheDocument;
  });

  //   test("edit, remove and toggles buttons are rendered", () => {
  //     renderStore(rootStore, todo);

  //     const editButton: HTMLElement = screen.getByText("Edit");
  //     const removeButton: HTMLElement = screen.getByText("Remove");
  //     const toggleButton: HTMLElement = screen.getByText("Toggle Completed");

  //     expect(editButton.textContent).toEqual("Edit");
  //     expect(removeButton.textContent).toEqual("Remove");
  //     expect(toggleButton.textContent).toEqual("Toggle Completed");
  //   });

  //   test("todo completed attribute is rendered", () => {
  //     renderStore(rootStore, todo);

  //     expect(screen.getByTestId("completed")).toHaveTextContent(
  //       "Completed: false"
  //     );
  //   });

  //   test("todo completed attribute is toggled from false to true", () => {
  //     renderStore(rootStore, todo);

  //     fireEvent.click(screen.getByText("Toggle Completed"));

  //     expect(screen.getByTestId("completed")).toHaveTextContent(
  //       "Completed: true"
  //     );
  //   });

  //   test("input box and save button appear once edit button is clicked", () => {
  //     renderStore(rootStore, todo);
  //     fireEvent.click(screen.getByText("Edit"));

  //     expect(screen.getByText("Save")).toHaveTextContent("Save");
  //     expect(screen.getByTestId("edit-input")).toHaveTextContent("");
  //   });

  //   test("input box and save button disappear once save button is clicked", () => {
  //     renderStore(rootStore, todo);

  //     fireEvent.click(screen.getByText("Edit"));
  //     fireEvent.click(screen.getByText("Save"));

  //     const saveButton: HTMLElement | null = screen.queryByText("Save");
  //     expect(saveButton).not.toBeInTheDocument();
  //   });

  //   test("input is registered in input box when in edit mode", () => {
  //     renderStore(rootStore, todo);

  //     fireEvent.click(screen.getByText("Edit"));

  //     userEvent.type(screen.getByTestId("edit-input"), "User typed something");
  //     expect(screen.getByTestId("edit-input")).toHaveValue(
  //       "User typed something"
  //     );
  //   });

  //   test("Todo title is updated after save button is clicked", () => {
  //     renderStore(rootStore, todo);

  //     fireEvent.click(screen.getByText("Edit"));
  //     userEvent.type(screen.getByTestId("edit-input"), "User typed something");
  //     fireEvent.click(screen.getByText("Save"));

  //     expect(screen.getByTestId("todo-title")).toHaveTextContent(
  //       "User typed something"
  //     );
  //   });
});
