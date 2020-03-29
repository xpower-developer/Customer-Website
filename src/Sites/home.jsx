import React from "react";
import Cookies from "universal-cookie";

export default function Home() {
  const cookies = new Cookies();
  return (
    <div className="row">
      <div className="col col-6 offset-2">
        <h1>Alle enheder</h1>
        <div className="card mt-2">
          <div className="card-body">
            <span style={{ fontSize: 24 }}>Kaffemaskine</span>

            <a
              onClick={showDetails.bind(this)}
              data-deviceid="1"
              className="btn btn-purple float-right"
            >
              Se statistik
            </a>
          </div>
        </div>
        <div className="card mt-2">
          <div className="card-body">
            <span style={{ fontSize: 24 }}>Væggeur</span>

            <a
              onClick={showDetails.bind(this)}
              data-deviceid="2"
              className="btn btn-purple float-right"
            >
              Se statistik
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  function showDetails(e) {
    cookies.set("currentDeviceID", e.currentTarget.dataset.deviceid, {
      path: "/"
    });
    window.location.href = "/details";
  }
}
