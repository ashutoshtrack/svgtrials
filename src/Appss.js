import React, { Component } from "react";
import * as d3 from "d3";

export default class App extends Component {
  componentDidMount() {
    var width = 300;
    var height = 300;
    var svg = d3
      .select("#svgcontainers")
      .append("svg")

      .attr("width", width)
      .attr("height", height);
    var path = d3.geo.path().projection(svg);
    var group = svg
      .append("g")
      .attr("d", path)

      .attr("transform", "translate(60, 60) rotate(30)");

    var rect = group
      .append("rect")
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 60)
      .attr("height", 30)
      .attr("fill", "green");

    var circle = group
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 30)
      .attr("fill", "red");
  }
  render() {
    return <div id="svgcontainers" />;
  }
}
