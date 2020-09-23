import { RootStore } from "../../rootStore";

export class TodoStore {
  // @ts-ignore
  private rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
