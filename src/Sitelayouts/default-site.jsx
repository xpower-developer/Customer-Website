import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function LoginSite() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <h1>HEADER</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <h1>MENU</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <h1>CONTENT</h1>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <h1>FOOTER</h1>
        </div>
      </div>
    </div>
  );
}
