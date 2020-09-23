import { observable, action } from "mobx";

let id = 1;

export class Todo {
  @observable
  id: number = id++;
  @observable
  title: string;
  @observable
  isCompleted: boolean = false;
  constructor(title: string) {
    this.title = title;
  }

  @action
  updateTitle(title: string): void {
    this.title = title;
  }

  @action
  toggleIsCompleted(): void {
    this.isCompleted = !this.isCompleted;
  }
}
