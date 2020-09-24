import { UserStore } from "./userStore";
import { RootStore } from "../../rootStore";

describe("UserStore", () => {
  let testUserStore: UserStore;
  let rootStore: RootStore;

  beforeEach(() => {
    testUserStore = new UserStore(rootStore);
  });
  test("add a User", () => {
    testUserStore.addUser("User");

    expect(testUserStore.list.length).toEqual(1);
  });
});
