import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <App />,

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
    ReactDOM.render(<div>Hey</div>, document.getElementById("app"));
  });
}
