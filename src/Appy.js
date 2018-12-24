import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import svgPanZoom from "svg-pan-zoom";
class App extends Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <div className="App">
        Svg trials
        <svg
          id="svg-id"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "inline",
            width: "inherit",
            minWidth: "inherit",
            maxWidth: "inherit",
            height: "inherit",
            minHeight: "inherit",
            maxHeight: "inherit"
          }}
          version="1.1"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgb(56,121,217)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(138, 192, 7)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <g fill="none">
            <g stroke="red" fill="#FFF">
              <rect
                x="5"
                y="5"
                width="500"
                height="500"
                fill="url(#linear-gradient)"
              />
              <path d="M 5 5  L 245 245 Z" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
