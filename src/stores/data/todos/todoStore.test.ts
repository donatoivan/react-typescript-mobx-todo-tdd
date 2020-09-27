import { RootStore } from "../../rootStore";
import { TodoStore } from "./todoStore";
import { Todo } from "./todo";

describe("TodoStore", () => {
  let testTodoStore: TodoStore;
  let testRootStore: RootStore;

  beforeEach(() => {
    testTodoStore = new TodoStore(testRootStore);
    testTodoStore.addTodo("Test", 1);
  });

  test("add a todo to TodoStore list", () => {
    expect(testTodoStore.list.length).toEqual(1);
  });

  test("get a todo from TodoStore list", () => {
    let gotTodo: Todo = testTodoStore.getTodo(2);

    expect(gotTodo.title).toEqual("Test");
  });

  test("remove a todo from TodoStore list", () => {
    testTodoStore.removeTodo(3);

    expect(testTodoStore.list.length).toEqual(0);
  });

  test("get list of incomplete todos from TodoStore list", () => {
    expect(testTodoStore.incompleteTodos.length).toEqual(1);
  });

  test("get list of complete todos from TodoStore list", () => {
    let todo: Todo = testTodoStore.getTodo(5);

    todo.toggleIsCompleted();

    expect(testTodoStore.completedTodos.length).toEqual(1);
  });
});
