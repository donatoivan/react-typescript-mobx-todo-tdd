let runningId: number = 1;
export class User {
  name: string;
  id: number = runningId++;

  constructor(name: string) {
    this.name = name;
  }
}
