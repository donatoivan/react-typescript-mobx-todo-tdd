import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

import { StoreProvider } from "./stores/helpers/storeContext";
import { createStore } from "./stores/helpers/createStores";

const store = createStore();

store.dataStore.todoStore.addTodo("hey", 1);
store.dataStore.todoStore.addTodo("ho", 1);
store.dataStore.todoStore.addTodo("hee", 1);
ReactDOM.render(
  <StoreProvider value={store}>
    <App />
  </StoreProvider>,

  document.getElementById("app")
);

/* eslint @typescript-eslint/no-unsafe-member-access: "off",
          @typescript-eslint/no-unsafe-call: "off",
          @typescript-eslint/no-unsafe-assignment: "off",
          @typescript-eslint/no-var-requires: "off"
*/
// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NewApp = require("./components/App").default;

    ReactDOM.render(<NewApp />, document.getElementById("app"));
  });
}
