import React, { Component } from "react";

export default function InputField({ labelText, labelName }) {
  return (
    <div>
      <div className="row">
        <div className="col col-12">
          <span id={labelName} className="input-label">
            {labelText}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <input type="text" id={labelName} className="w-100"></input>
        </div>
      </div>
      <div className="m-4"></div>
    </div>
  );
}
