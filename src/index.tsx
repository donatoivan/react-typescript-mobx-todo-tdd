import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./stores/helpers/storeContext";
import { createStore } from "./stores/helpers/createStores";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/index";
import { myTheme } from "./styles/index";

const store = createStore();

store.dataStore.todoStore.addTodo("Buy milk", 1);
store.dataStore.todoStore.addTodo("Study for my test", 1);
store.dataStore.todoStore.addTodo("Drop off kids", 1);
store.dataStore.todoStore.addTodo("Cook for tonight", 2);
store.dataStore.todoStore.addTodo("Pay Bills", 2);
store.dataStore.todoStore.addTodo("Don't forget to smile", 2);
store.dataStore.userStore.addUser("User 1");
store.dataStore.userStore.addUser("User 2");

ReactDOM.render(
  <StoreProvider value={store}>
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
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
