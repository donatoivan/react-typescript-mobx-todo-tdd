import { RootStore } from "../rootStore";
import { action } from "mobx";

export enum Views {
  Todos,
  Users,
}

export class GlobalView {
  currentView: Views = Views.Todos;
  constructor(rootStore: RootStore) {}

  @action
  setView(view: Views): void {
    this.currentView = view;
  }
}
