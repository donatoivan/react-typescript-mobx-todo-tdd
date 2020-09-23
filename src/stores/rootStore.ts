import { DataStore } from "./data/dataStore";
import { UiStore } from "./ui/uiStore";

export class RootStore {
  dataStore: DataStore;
  uiStore: UiStore;

  constructor() {
    this.dataStore = new DataStore(this);
    this.uiStore = new UiStore(this);
  }
}
