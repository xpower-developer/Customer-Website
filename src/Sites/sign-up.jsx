import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import Logo from "../img/logo-removebg-preview.png";
import ReactDOM from "react-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [zipcode, setZipcode] = useState();
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");

  function emailChangeHandler(event) {
    let value = event.target.value;
    setEmail(value);
  }
  function passwordChangeHandler(event) {
    let value = event.target.value;
    setPassword(value);
  }
  function confPasswordChangeHandler(event) {
    let value = event.target.value;
    setConfPassword(value);
  }
  function firstnameChangeHandler(event) {
    let value = event.target.value;
    setFirstname(value);
  }
  function lastnameChangeHandler(event) {
    let value = event.target.value;
    setLastname(value);
  }
  function zipCodeChangeHandler(event) {
    let value = parseInt(event.target.value);
    setZipcode(parseInt(value));
  }
  function streetNameChangeHandler(event) {
    let value = event.target.value;
    setStreetName(value);
  }
  function streetNumberChangeHandler(event) {
    let value = event.target.value;
    setStreetNumber(value);
  }

  function signUpSubmitHandler(event) {
    event.preventDefault();

    document.getElementById("email").classList.remove("fault");
    document.getElementById("password").classList.remove("fault");
    document.getElementById("confPassword").classList.remove("fault");
    document.getElementById("zipCode").classList.remove("fault");

    if (password !== confPassword) {
      ReactDOM.render(
        <div className="alert alert-danger" role="alert">
          Kodeordene er ikke ens!
        </div>,
        document.getElementById("error-alert")
      );
      document.getElementById("password").classList.add("fault");
      document.getElementById("confPassword").classList.add("fault");
    } else {
      fetch("http://185.50.193.81:5001/api/customer/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Email: email,
          FirstName: firstname,
          LastName: lastname,
          Password: password,
          CityId: parseInt(zipcode),
          Street: streetName,
          StreetNumber: streetNumber
        })
      })
        .then(response => {
          if (response.ok === true) {
            window.location.href = "/login";
          }
          return response.text();
        })
        .then(data => {
          ReactDOM.render(
            <div className="alert alert-danger" role="alert">
              {data}
            </div>,
            document.getElementById("error-alert")
          );
        });
    }
  }

  return (
    <div className="center-div center-div-wide">
      <div className="row">
        <div className="col col-12">
          <img src={Logo} style={{ "margin-left": 75 }}></img>
        </div>
      </div>

      <div className="row">
        <div className="col col-12" id="error-alert"></div>
      </div>

      <div className="row">
        <div className="col col-12">
          <span id="emailLabel" className="input-label">
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
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-6">
          <div className="row">
            <div className="col col-12">
              <span id="passwordLabel" className="input-label">
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
              ></input>
            </div>
          </div>
        </div>
        <div className="col col-6">
          <div className="row">
            <div className="col col-12">
              <span id="confPasswordLabel" className="input-label">
                BEKRÆFT KODEORD
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col col-12">
              <input
                type="password"
                id="confPassword"
                className="w-100"
                onChange={confPasswordChangeHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-6">
          <div className="row">
            <div className="col col-12">
              <span id="firstnameLabel" className="input-label">
                FORNAVN
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col col-12">
              <input
                type="text"
                id="firstname"
                className="w-100"
                onChange={firstnameChangeHandler}
              ></input>
            </div>
          </div>
        </div>
        <div className="col col-6">
          <div className="row">
            <div className="col col-12">
              <span id="lastnameLabel" className="input-label">
                EFTERNAVN
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col col-12">
              <input
                type="text"
                id="lastname"
                className="w-100"
                onChange={lastnameChangeHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="zipCodeLabel" className="input-label">
            POSTNUMMER
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input
            type="text"
            id="zipCode"
            className="w-100"
            onChange={zipCodeChangeHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="streetNameLabel" className="input-label">
            VEJNAVN
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input
            type="text"
            id="streetName"
            className="w-100"
            onChange={streetNameChangeHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="streetNumberLabel" className="input-label">
            VEJNUMMER
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input
            type="text"
            id="streetNumber"
            className="w-100"
            onChange={streetNumberChangeHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-8">
          <span style={{ fontSize: 13 }}>
            Har du allerede en konto? <Link to="/login">Log ind</Link>
          </span>
        </div>
        <div className="col col-4">
          <a onClick={signUpSubmitHandler} className="btn btn-purple">
            OPRET
          </a>
        </div>
      </div>
    </div>
  );
}
