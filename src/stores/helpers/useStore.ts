import { useContext } from "react";
import { StoreContext } from "./storeContext";
import { RootStore } from "../rootStore";

const useStore = (): RootStore => {
  return useContext(StoreContext);
};

export { useStore };
