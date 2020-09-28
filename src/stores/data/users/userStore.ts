import { RootStore } from "../../rootStore";
import { User } from "./user";
import { action, observable } from "mobx";

export class UserStore {
  @observable
  list: User[] = [];
  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  addUser(name: string): void {
    this.list.push(new User(name, this.rootStore));
  }

  @action
  getUser(id: number): User {
    return this.list.find((user) => user.userId === id) as User;
  }

  @action
  removeUser(id: number): void {
    const user = this.getUser(id);

    if (user) {
      user.userTodos.forEach((todo) => todo.remove());

      const index: number = this.list.indexOf(user);

      this.list.splice(index, 1);
    }
  }
}
