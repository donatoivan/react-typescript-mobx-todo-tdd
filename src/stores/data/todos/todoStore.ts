import { RootStore } from "../../rootStore";
import { Todo } from "./todo";
import { action } from "mobx";

export class TodoStore {
  list: Todo[] = [];
  // @ts-ignore
  private rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  addTodo(title: string) {
    this.list.push(new Todo(title));
  }

  @action
  getTodo(title: string): Todo {
    return this.list.find((todo) => todo.title === title) as Todo;
  }
}
