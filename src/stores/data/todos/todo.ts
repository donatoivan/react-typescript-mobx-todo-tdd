import { observable } from "mobx";

let id = 1;

export class Todo {
  @observable
  id: number = id++;
  @observable
  name: string;
  @observable
  isCompleted: boolean = false;
  constructor(name: string) {
    this.name = name;
  }
}
