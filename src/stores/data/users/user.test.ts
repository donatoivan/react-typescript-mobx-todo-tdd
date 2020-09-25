import { User } from "./user";
import { RootStore } from "../../rootStore";

describe("User", () => {
  let testRootStore: RootStore;
  let user: User;
  beforeEach(() => {
    testRootStore = new RootStore();
    user = new User("User", testRootStore);
  });

  test("User is created with default properties", () => {
    expect(user.name).toEqual("User");
    expect(user.userId).toEqual(1);
  });

  test("get user todos", () => {
    testRootStore.dataStore.todoStore.addTodo("Test", user.userId);
    if (user.userTodos) {
      expect(user.userTodos.length).toEqual(1);
    }
  });
});
