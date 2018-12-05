// Dependencies
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "./index.css";

import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Participants from "./components/Participants/Participants";

import store from "./store";
import * as serviceWorker from "./serviceWorker";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Header />
      <Toolbar />
      <Participants />
    </Fragment>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
