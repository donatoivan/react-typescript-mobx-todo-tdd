import { UserStore } from "./userStore";
import { RootStore } from "../../rootStore";
import { User } from "./user";

describe("UserStore", () => {
  let testUserStore: UserStore;
  let testRootStore: RootStore;

  beforeEach(() => {
    testRootStore = new RootStore();
    testUserStore = new UserStore(testRootStore);
  });

  test("add a User", () => {
    testUserStore.addUser("User");

    expect(testUserStore.list.length).toEqual(1);
  });

  test("get a User", () => {
    testUserStore.addUser("User");

    let user: User = testUserStore.getUser("User");

    expect(user.name).toEqual("User");
  });

  test("remove a User", () => {
    testUserStore.addUser("User");
    let user: User = testUserStore.getUser("User");

    if (user) {
      testRootStore.dataStore.todoStore.addTodo("Test", user.userId);
      testUserStore.removeUser("User");

      expect(testUserStore.list.length).toEqual(0);
    }
  });
});
