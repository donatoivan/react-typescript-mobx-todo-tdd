import { RootStore } from "../rootStore";
import { GlobalView } from "./globalView";
export class UiStore {
  globalView: GlobalView;
  constructor(rootStore: RootStore) {
    this.globalView = new GlobalView(rootStore);
  }
}
