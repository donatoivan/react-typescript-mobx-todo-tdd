import { User } from "./user";
import { RootStore } from "../../rootStore";

describe("User", () => {
  let testRootStore: RootStore;
  beforeEach(() => {
    testRootStore = new RootStore();
  });
  test("User is created with default properties", () => {
    let user = new User("User1", testRootStore);

    expect(user.name).toEqual("User1");
    expect(user.userId).toEqual(1);
  });

  test("get user todos", () => {
    let user = new User("User1", testRootStore);

    testRootStore.dataStore.todoStore.addTodo("Test", user.userId);
    if (user.userTodos) {
      expect(user.userTodos.length).toEqual(1);
    }
  });
});
