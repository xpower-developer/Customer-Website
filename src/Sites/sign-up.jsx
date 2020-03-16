import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../img/logo-removebg-preview.png";
import { Button } from "react-bootstrap";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [zipcode, setZipcode] = useState("");
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
    let value = event.target.value;
    setZipcode(value);
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

    fetch("https://postman-echo.com/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        zipcode: zipcode,
        streetName: streetName,
        streetNumber: streetNumber
      })
    })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON);
      });

    /*
    alert(
      "Email " +
        email +
        "kodeord " +
        password +
        "bekræft " +
        confPassword +
        "forn " +
        firstname +
        "eftern " +
        lastname +
        "postnr " +
        zipcode +
        "vejnavn " +
        streetName +
        "vnr " +
        streetNumber
    );
    */
  }

  return (
    <div className="center-div">
      <div className="row">
        <div className="col col-12">
          <img src={Logo}></img>
        </div>
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
            type="text"
            id="password"
            className="w-100"
            onChange={passwordChangeHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="confPassword" className="input-label">
            BEKRÆFT KODEORD
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input
            type="text"
            id="confPassword"
            className="w-100"
            onChange={confPasswordChangeHandler}
          ></input>
        </div>
      </div>
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="firstname" className="input-label">
            Fornavn
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
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="lastname" className="input-label">
            Efternavn
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
      <div className="m-4"></div>

      <div className="row">
        <div className="col col-12">
          <span id="zipCode" className="input-label">
            Postnummer
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
          <span id="streetName" className="input-label">
            Vejnavn
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
          <span id="streetNumber" className="input-label">
            Vejnummer
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
            Har du allerede en konto? <Link to="/">Log ind</Link>
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
