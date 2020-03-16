import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../img/logo-removebg-preview.png";
import InputField from "../Components/input-field";

export default function Login() {
  return (
    <div className="center-div">
      <div className="row">
        <div className="col col-12">
          <img src={Logo}></img>
        </div>
      </div>
      <InputField labelText="USERNAME" labelName="Email" />
      <InputField labelText="PASSWORD" labelName="Password" />
      <div className="row">
        <div className="col col-8">
          <span style={{ fontSize: 13 }}>
            Dont have an account? <Link to="/sign-up">Sign Up</Link>
          </span>
        </div>
        <div className="col col-4">
          <Link className="btn btn-purple float-right" to="/home">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
