import { Todo } from "./todo";
import { TodoStore } from "./todoStore";
import { RootStore } from "../../rootStore";

describe("Todo", () => {
  let testTodoStore: TodoStore;
  let testRootStore: RootStore;

  beforeEach(() => {
    testRootStore = new RootStore();
    testTodoStore = new TodoStore(testRootStore);
  });

  test("Todo is created with supplied name and default properties", () => {
    const todo = new Todo("Test todo", 1, testTodoStore);

    expect(todo.title).toEqual("Test todo");
    expect(todo.isCompleted).toEqual(false);
    expect(todo.id).toEqual(1);
  });

  test("Todo is updated with new name", () => {
    const todo = new Todo("Test todo", 1, testTodoStore);

    todo.updateTitle("Updated Todo");
    expect(todo.title).toEqual("Updated Todo");
  });

  test("Todo isCompleted attribute is toggled", () => {
    const todo = new Todo("Test todo", 1, testTodoStore);

    todo.toggleIsCompleted();
    expect(todo.isCompleted).toEqual(true);
  });

  test("Todo isCompleted attribute is toggled twice to be true again", () => {
    const todo = new Todo("Test todo", 1, testTodoStore);

    todo.toggleIsCompleted();
    todo.toggleIsCompleted();

    expect(todo.isCompleted).toEqual(false);
  });

  test("Todo is removed", () => {
    const todo = new Todo("Test todo", 1, testTodoStore);

    todo.remove();

    expect(testTodoStore.list.length).toEqual(0);
  });
});
