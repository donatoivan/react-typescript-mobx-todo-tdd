import { computed, observable } from "mobx";
import { RootStore } from "../../rootStore";
import { Todo } from "../todos/todo";

let runningId = 1;
export class User {
  @observable
  name: string;

  @observable
  userId = runningId++;

  private rootStore: RootStore;

  constructor(name: string, rootStore: RootStore) {
    this.name = name;
    this.rootStore = rootStore;
  }

  @computed
  get userTodos(): Todo[] {
    return this.rootStore.dataStore.todoStore.list.filter(
      (todo) => todo.userId === this.userId,
    );
  }

  @computed
  get incompleteTodos(): Todo[] {
    return this.userTodos.filter((todo) => todo.isCompleted === false);
  }

  @computed
  get completedTodos(): Todo[] {
    return this.userTodos.filter((todo) => todo.isCompleted === true);
  }
}
