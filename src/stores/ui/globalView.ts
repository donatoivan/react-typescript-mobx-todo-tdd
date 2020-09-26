import { RootStore } from "../rootStore";
import { action, observable } from "mobx";

export enum Views {
  Todos,
  Users,
}

export class GlobalView {
  @observable
  currentView: Views = Views.Todos;
  constructor(rootStore: RootStore) {}

  @action
  setView(view: Views): void {
    this.currentView = view;
  }
}
