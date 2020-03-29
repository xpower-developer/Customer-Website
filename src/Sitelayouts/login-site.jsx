import React, { Component } from "react";
import Cookies from "universal-cookie";
import "../Stylesheets/login-site.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Sites/login";
import SignUp from "../Sites/sign-up";

export default function LoginSite() {
  const cookies = new Cookies();

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <Router>
            <Switch>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
