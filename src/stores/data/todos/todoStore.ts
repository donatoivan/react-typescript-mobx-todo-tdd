import { RootStore } from "../../rootStore";
import { Todo } from "./todo";
import { action, computed, observable } from "mobx";

export class TodoStore {
  @observable
  list: Todo[] = [];
  /* eslint-disable @typescript-eslint/ban-ts-comment*/
  // @ts-ignore
  private rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  addTodo(title: string, userId: number): void {
    this.list.push(new Todo(title, userId, this));
  }

  getTodo(title: string): Todo {
    return this.list.find((todo) => todo.title === title) as Todo;
  }

  @action
  removeTodo(title: string): void {
    const todoToDelete: Todo = this.getTodo(title);

    if (todoToDelete) {
      const index: number = this.list.indexOf(todoToDelete);

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
