import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Details() {
  const cookies = new Cookies();
  const [dataArray, setdataArray] = useState([
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]);

  useEffect(() => {
    // Update the document title using the browser API
    fetch(
      "http://185.50.193.81:5001/api/devices/" +
        cookies.get("currentDeviceID") +
        "/statistics/summarized",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + cookies.get("sessionKey"),
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        return response.text();
      })
      .then(response => {
        var jsonData = JSON.parse(response);
        console.log(jsonData);
        console.log(jsonData.statistics.items);
        const tempArray = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ];

        var i;
        for (i = 0; i < jsonData.statistics.items.length; i++) {
          tempArray[
            parseInt(
              jsonData.statistics.items[i].created.split("T")[1].split(":")[0]
            )
          ] = parseInt(jsonData.statistics.items[i].value);
        }

        setdataArray(tempArray);
        console.log(dataArray);
        //fetchRan = true;
      });
  }, []);

  // Chart options
  const options = {
    chart: {
      type: "areaspline",
      backgroundColor: "#0000"
    },
    title: {
      text: "Strømforbrug for i dag",
      style: {
        color: "#00f7fc"
      }
    },
    xAxis: {
      categories: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ],
      plotBands: [
        {
          // visualize the primetime
          from: 14.5,
          to: 19.5,
          color: "rgba(217,19,7, .2)"
        }
      ]
    },
    yAxis: {
      title: {
        text: "Watt",
        style: {
          color: "#ccc"
        }
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      shared: true,
      valueSuffix: " watt"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Watt",
        data: dataArray
      }
    ]
  };

  return (
    <div className="row">
      <div className="col col-12 col-xl-6 offset-xl-2">
        <h1>Statistik</h1>
        <div className="card">
          <div className="card-body">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}
