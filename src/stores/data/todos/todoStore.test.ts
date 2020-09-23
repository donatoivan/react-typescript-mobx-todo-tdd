import { RootStore } from "../../rootStore";
import { TodoStore } from "./todoStore";

describe("TodoStore", () => {
  let testTodoStore: TodoStore;
  let testRootStore: RootStore;

  beforeEach(() => {
    testTodoStore = new TodoStore(testRootStore);
  });

  test("add a todo to Todo list", () => {
    testTodoStore.addTodo("Test");

    expect(testTodoStore.list.length).toEqual(1);
  });
});
