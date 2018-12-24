import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import svgPanZoom from "svg-pan-zoom";
class App extends Component {
  /*   componentDidMount() {
    const panZoomInstance = svgPanZoom("#svg-id", {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.1
    });

    panZoomInstance.zoom(0.2);

    // Zoom out
    // panZoomInstance.zoom(0.2);

    /*    // Expose to window namespase for testing purposes
    window.panZoomInstance = svgPanZoom("#svg-id", {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.1
    });
    // Zoom out
    panZoomInstance.zoom(0.2); */
  //  } */

  render() {
    return (
      <div className="App">
        Svg trials
        <svg width="4000" height="110">
          <rect
            x="10"
            y="10"
            height="50"
            width="50"
            rx="5"
            ry="5"
            style={{ stroke: "#006600", fill: "#00cc00" }}
          />
          <rect
            x="70"
            y="10"
            height="50"
            width="50"
            rx="10"
            ry="10"
            style={{ stroke: "#006600", fill: "#00cc00" }}
          />
          <rect
            x="130"
            y="10"
            height="50"
            width="50"
            rx="15"
            ry="15"
            style={{ stroke: "#006600", fill: "#00cc00" }}
          />
        </svg>
      </div>
    );
  }
}

export default App;

/* 

          <svg width="5000" height="110">
            <rect
              width="5000"
              height="100"
              style={{
                fill: "rgb(255,0,255)",
                strokeWidth: 3,
                stroke: "rgb(0,0,0)"
              }}
              // style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"
            />
          </svg>
*/
