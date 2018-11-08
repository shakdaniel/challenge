import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "../store";

import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Users from "../components/Users";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Toolbar />
          <Users />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
