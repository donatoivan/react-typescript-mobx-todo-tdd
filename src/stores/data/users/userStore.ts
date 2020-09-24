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
}
