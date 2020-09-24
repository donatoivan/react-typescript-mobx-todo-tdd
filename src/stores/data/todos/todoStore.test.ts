import { RootStore } from "../../rootStore";
import { TodoStore } from "./todoStore";
import { Todo } from "./todo";

describe("TodoStore", () => {
  let testTodoStore: TodoStore;
  let testRootStore: RootStore;

  beforeEach(() => {
    testTodoStore = new TodoStore(testRootStore);
  });

  test("add a todo to TodoStore list", () => {
    testTodoStore.addTodo("Test");

    expect(testTodoStore.list.length).toEqual(1);
  });

  test("get a todo from TodoStore list", () => {
    testTodoStore.addTodo("Test");

    let gotTodo: Todo = testTodoStore.getTodo("Test");

    expect(gotTodo.title).toEqual("Test");
  });

  test("remove a todo from TodoStore list", () => {
    testTodoStore.addTodo("Test");

    testTodoStore.removeTodo("Test");

    expect(testTodoStore.list.length).toEqual(0);
  });

  test("get list of incomplete todos from TodoStore list", () => {
    testTodoStore.addTodo("Test");

    expect(testTodoStore.incompleteTodos.length).toEqual(1);
  });

  test("get list of complete todos from TodoStore list", () => {
    testTodoStore.addTodo("Test");
    let todo: Todo = testTodoStore.getTodo("Test");

    todo.toggleIsCompleted();

    expect(testTodoStore.completedTodos.length).toEqual(1);
  });
});
