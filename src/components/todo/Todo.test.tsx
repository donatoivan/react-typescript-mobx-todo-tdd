import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Todo from "./Todo";

afterEach(cleanup);

describe("<Todo />", () => {
  test("component renders Todo", () => {
    const { getByTestId } = render(<Todo />);

    const todo = getByTestId("todo");

    expect(todo);
  });

  test("edit, remove and toggles buttons are rendered", () => {
    const { getByText } = render(<Todo />);

    const editButton = getByText("Edit");
    const removeButton = getByText("Remove");
    const toggleButton = getByText("Toggle");

    expect(editButton.textContent).toEqual("Edit");
    expect(removeButton.textContent).toEqual("Remove");
    expect(toggleButton.textContent).toEqual("Toggle");
  });

  test("input box and save button appear once edit button is clicked", () => {
    const { getByText, getByTestId } = render(<Todo />);

    fireEvent.click(getByText("Edit"));

    expect(getByText("Save")).toHaveTextContent("Save");
    expect(getByTestId("edit-input")).toHaveTextContent("");
  });

  test("input box and save button disappear once save button is clicked", () => {
    const { queryByText, getByText } = render(<Todo />);

    fireEvent.click(getByText("Edit"));
    fireEvent.click(getByText("Save"));

    const saveButton = queryByText("Save");
    expect(saveButton).not.toBeInTheDocument();
  });

  test("input is registered in input box when in edit mode", () => {
    const { getByTestId, getByText } = render(<Todo />);

    fireEvent.click(getByText("Edit"));

    userEvent.type(getByTestId("edit-input"), "User typed something");
    expect(getByTestId("edit-input")).toHaveValue("User typed something");
  });
});
