import { RootStore } from "../rootStore";
import { GlobalView } from "./globalView";
import { Views } from "./globalView";

describe("Ui Store", () => {
  let testRootStore: RootStore;
  let globalView: GlobalView;

  beforeEach(() => {
    testRootStore = new RootStore();
    globalView = new GlobalView(testRootStore);
  });
  test("initialize globalView with default properties", () => {
    expect(globalView).toBeTruthy();
    expect(globalView.currentView).toEqual(Views.Todos);
  });

  test("set currentview to User view", () => {
    globalView.setView(Views.Users);

    expect(globalView.currentView).toEqual(Views.Users);
  });
});
