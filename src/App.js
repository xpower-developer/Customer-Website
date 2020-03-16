import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginSite from "./Sitelayouts/login-site";
import DefaultSite from "./Sitelayouts/default-site";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <DefaultSite />
          </Route>
          <Route path="/">
            <LoginSite />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
