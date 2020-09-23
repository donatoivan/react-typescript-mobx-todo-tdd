import { RootStore } from "../rootStore";
import { DataStore } from "./dataStore";
import { TodoStore } from "./todos/todoStore";
import { UserStore } from "./users/userStore";

describe("Data Store", () => {
  let testRootStore: RootStore;

  test("Test Data Store properties", () => {
    const dataSore: DataStore = new DataStore(testRootStore);

    expect(dataSore.todoStore).toBeInstanceOf(TodoStore);
    expect(dataSore.userStore).toBeInstanceOf(UserStore);
  });
});
