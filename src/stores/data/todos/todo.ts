import { observable, action } from "mobx";
import { TodoStore } from "./todoStore";

let id = 1;

export class Todo {
  @observable
  id: number = id++;
  @observable
  title: string;
  @observable
  isCompleted: boolean = false;
  @observable
  userId: number;

  private todoStore: TodoStore;

  constructor(title: string, userId: number, todoStore: TodoStore) {
    this.title = title;
    this.userId = userId;
    this.todoStore = todoStore;
  }

  @action
  updateTitle(title: string): void {
    this.title = title;
  }

  @action
  toggleIsCompleted(): void {
    this.isCompleted = !this.isCompleted;
  }

  @action
  remove() {
    this.todoStore.removeTodo(this.title);
  }
}
