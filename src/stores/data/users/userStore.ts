import { RootStore } from "../../rootStore";
import { User } from "./user";
import { action } from "mobx";

export class UserStore {
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
  getUser(name: string): User {
    return this.list.find((user) => user.name === name) as User;
  }

  @action
  removeUser(name: string): void {
    const user = this.getUser(name);

    if (user) {
      user.userTodos.forEach((todo) => todo.remove());

      const index: number = this.list.indexOf(user);

      this.list.splice(index, 1);
    }
  }
}
