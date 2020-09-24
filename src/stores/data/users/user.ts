import { computed, observable } from "mobx";
import { RootStore } from "../../rootStore";

let runningId: number = 1;
export class User {
  @observable
  name: string;

  @observable
  userId: number = runningId++;

  private rootStore: RootStore;

  constructor(name: string, rootStore: RootStore) {
    this.name = name;
    this.rootStore = rootStore;
  }

  @computed
  get userTodos() {
    return this.rootStore.dataStore.todoStore.list.filter(
      (todo) => todo.userId === this.userId
    );
  }
}
