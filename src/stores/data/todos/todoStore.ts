import { RootStore } from "../../rootStore";
import { Todo } from "./todo";
import { action, computed } from "mobx";

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

  @action
  removeTodo(title: string): void {
    let todoToDelete: Todo = this.getTodo(title);

    if (todoToDelete) {
      let index: number = this.list.indexOf(todoToDelete);

      this.list.splice(index, 1);
    }
  }

  @computed
  get incompleteTodos(): Todo[] {
    return this.list.filter((todo) => todo.isCompleted === false);
  }

  @computed
  get completedTodos(): Todo[] {
    return this.list.filter((todo) => todo.isCompleted === true);
  }
}
