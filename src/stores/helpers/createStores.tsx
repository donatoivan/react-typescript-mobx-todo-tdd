import React from "react";
import { RootStore } from "../rootStore";

export const stores = Object.freeze({
  rootStore: new RootStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
