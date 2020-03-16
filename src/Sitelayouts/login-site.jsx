import React, { Component } from "react";
import "../Stylesheets/login-site.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Sites/login";
import SignUp from "../Sites/sign-up";

export default function LoginSite() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <Router>
            <div>
              <Switch>
                <Route path="/sign-up">
                  <SignUp />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}
