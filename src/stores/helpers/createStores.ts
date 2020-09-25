import { RootStore } from "../rootStore";

const createStore = (): RootStore => {
  return new RootStore();
};

export { createStore };
