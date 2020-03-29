import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import DefaultSite from "./Sitelayouts/default-site";
import LoginSite from "./Sitelayouts/login-site";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginSite />
        </Route>
        <Route path="/">
          <DefaultSite />
        </Route>
      </Switch>
      <Link id="goToLogin" className="d-none" to="/" />
    </Router>
  );
}
