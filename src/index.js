// Dependencies
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Participants from "./components/Participants";
import "./index.css";
import store from "./store";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Toolbar />
          <Participants />
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
