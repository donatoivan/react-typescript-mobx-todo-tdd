import { Todo } from "./todo";

describe("Todo", () => {
  test("Todo is created with supplied name and default properties", () => {
    const todo = new Todo("Test todo");

    expect(todo.title).toEqual("Test todo");
    expect(todo.isCompleted).toEqual(false);
    expect(todo.id).toEqual(1);
  });

  test("Todo is updated with new name", () => {
    const todo = new Todo("Test todo");

    todo.updateTitle("Updated Todo");
    expect(todo.title).toEqual("Updated Todo");
  });
});
