import { RootStore } from "../rootStore";
import { TodoStore } from "./todos/todoStore";
import { UserStore } from "./users/userStore";
export class DataStore {
  todoStore: TodoStore;
  userStore: UserStore;
  constructor(rootStore: RootStore) {
    this.todoStore = new TodoStore(rootStore);
    this.userStore = new UserStore(rootStore);
  }
}
