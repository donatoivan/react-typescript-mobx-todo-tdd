import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoList from "./TodoList";

afterEach(cleanup);

describe("<Todolist />", () => {
  test("component renders Todo", () => {
    const { queryByTestId } = render(<TodoList />);

    expect(queryByTestId("todo")).toBeInTheDocument();
  });
});
