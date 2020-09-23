import { RootStore } from "../rootStore";
import { UiStore } from "./uiStore";
import { GlobalView } from "./globalView";

describe("Ui Store", () => {
  let testRootStore: RootStore;

  beforeEach(() => {
    testRootStore = new RootStore();
  });
  test("test Ui Store properties", () => {
    const uiStore: UiStore = new UiStore(testRootStore);

    expect(uiStore.globalView).toBeInstanceOf(GlobalView);
  });
});
