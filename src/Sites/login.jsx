import React, { Component, useState } from "react";
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../img/logo-removebg-preview.png";
import ReactDOM from "react-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  function emailChangeHandler(event) {
    let value = event.target.value;
    setEmail(value);
  }
  function passwordChangeHandler(event) {
    let value = event.target.value;
    setPassword(value);
  }

  function signInSubmitHandler(event) {
    event.preventDefault();

    fetch("http://185.50.193.81:5001/api/customer/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        if (data[0] === "{") {
          console.log(data);
          var jsonData = JSON.parse(data);
          cookies.set("sessionKey", jsonData.key, { path: "/" });
          cookies.set("expirationDate", jsonData.expirationDate, {
            path: "/"
          });
          window.location.href = "/";
        } else {
          ReactDOM.render(
            <div className="alert alert-danger" role="alert">
              {data}
            </div>,
            document.getElementById("error-alert")
          );
        }
      });
  }

  function keyDownHandler(e) {
    if (e.key === "Enter") {
      alert("Damn!");
      //signInSubmitHandler();
    }
  }

  return (
    <div className="center-div">
      <div className="row">
        <div className="col col-12">
          <img src={Logo}></img>
        </div>
      </div>

      <div className="row">
        <div className="col col-12" id="error-alert"></div>
      </div>

      <div className="row">
        <div className="col col-12">
          <span id="email" className="input-label">
            EMAIL
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input
            type="text"
            id="email"
            className="w-100"
            onChange={emailChangeHandler}
            onKeyDown={keyDownHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="password" className="input-label">
            KODEORD
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input
            type="password"
            id="password"
            className="w-100"
            onChange={passwordChangeHandler}
            onKeyDown={keyDownHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>
      <div className="row">
        <div className="col col-8">
          <span style={{ fontSize: 13 }}>
            Har du ikke en konto? <Link to="/sign-up">Opret</Link>
          </span>
        </div>
        <div className="col col-4">
          <a onClick={signInSubmitHandler} className="btn btn-purple">
            LOG IND
          </a>
        </div>
      </div>
    </div>
  );
}
