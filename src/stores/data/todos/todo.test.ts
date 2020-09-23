import { Todo } from "./todo";

describe("Test Todo", () => {
  test("Todo is created with default properties", () => {
    const todo = new Todo("Amber");

    expect(todo.name).toEqual("Amber");
    expect(todo.isCompleted).toEqual(false);
    expect(todo.id).toEqual(1);
  });
});
