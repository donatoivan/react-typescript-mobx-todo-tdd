import { RootStore } from "../rootStore";
import { GlobalView } from "./globalView";
export class UiStore {
  // @ts-ignore
  globalView: GlobalView;
  constructor(rootStore: RootStore) {
    this.globalView = new GlobalView(rootStore);
  }
}
