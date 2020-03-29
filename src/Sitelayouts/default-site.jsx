import React from "react";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Sites/home";
import Details from "../Sites/details";
import Logo from "../img/logo-removebg-preview.png";

export default function LoginSite() {
  const cookies = new Cookies();

  fetch("http://185.50.193.81:5001/api/session/verify", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + cookies.get("sessionKey"),
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.text();
    })
    .then(response => {
      if (response.includes("the given key is still valid for another")) {
      } else {
        window.location.href = "/login";
      }
    });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="side-bar">
          <div className="row">
            <div className="col col-12">
              <a onClick={redirect.bind(this)} data-url="/">
                <img src={Logo} style={{ marginLeft: 27 }}></img>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 menu">
              <ul>
                <li>
                  <a
                    className={isActive("/")}
                    onClick={redirect.bind(this)}
                    data-url="/"
                  >
                    Alle enheder
                  </a>
                </li>
                <li>
                  <a onClick={signout}>Log Ud</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col pt-5">
          <Router>
            <Switch>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );

  function signout() {
    cookies.remove("sessionKey");
    cookies.remove("expirationDate");
    window.location.href = "/login";
  }

  function redirect(e) {
    window.location.href = e.currentTarget.dataset.url;
  }

  function isActive(value) {
    if (value === window.location.pathname) {
      return "active";
    }
    return "";
  }
}
