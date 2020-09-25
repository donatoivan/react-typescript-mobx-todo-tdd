import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

describe("<App />", () => {
  test("component renders Todo", () => {
    const { queryByText } = render(<App />);

    expect(queryByText("Todo")).toBeInTheDocument();
  });
});
