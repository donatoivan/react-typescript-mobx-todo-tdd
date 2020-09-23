import { RootStore } from "./rootStore";
import { DataStore } from "./data/dataStore";
import { UiStore } from "./ui/uiStore";

describe("Root Store", () => {
  let testRootStore: RootStore;

  beforeEach(() => {
    testRootStore = new RootStore();
  });

  test("Test Root Store properties", () => {
    expect(testRootStore.dataStore).toBeInstanceOf(DataStore);
    expect(testRootStore.uiStore).toBeInstanceOf(UiStore);
  });
});
