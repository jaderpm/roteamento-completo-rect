import React from "react";
import ReactDOM from "react-dom";
import AppBarLayout from "./component/AppBarLayout";
import Lista from "./component/Lista";
import App from "./component/App";
import Home from "./component/Home";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

import "./styles.css";

function Init() {
  return (
    <Router history={browserHistory}>
      <App>
        <Switch>
          <Route exact path="/" component={Lista} />
          <Route path="/lista/:quantidade" component={Lista} />
          <Route path="/lista" component={Lista} />
          <Route path="/comilao" component={AppBarLayout} />
        </Switch>
      </App>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Init />, rootElement);
