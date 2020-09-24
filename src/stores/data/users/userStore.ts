import { RootStore } from "../../rootStore";
import { User } from "./user";
import { action } from "mobx";

export class UserStore {
  list: User[] = [];
  // @ts-ignore
  private readonly rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  addUser(name: string) {
    this.list.push(new User(name, this.rootStore));
  }

  @action
  getUser(name: string) {
    return this.list.find((user) => user.name === name) as User;
  }

  @action
  removeUser(name: string) {
    let user = this.getUser(name);

    if (user) {
      user.userTodos.forEach((todo) => todo.remove());

      let index: number = this.list.indexOf(user);

      this.list.splice(index, 1);
    }
  }
}
