import React, { Component } from "react";
import * as d3 from "d3";
import { RadarChart } from "./RadarChart";

class SpiderChart extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      loaded: false,
      HEIGHT: 500,
      maxValue: 0.6,
      levels: 6,
      colorscale: d3.scaleOrdinal(d3.schemeCategory10)
    };
  }

  componentDidMount() {
    this.setState(
      {
        loaded: true
      },
      () => {
        this.setState(
          {
            WIDTH: document
              .querySelector("#" + this.props.idContainer)
              .getBoundingClientRect().width
          },
          () => {
            let canvas = this.setCanvas();
            RadarChart.draw("#" + this.props.idContainer, this.props.data);
            this.setLegend(
              this.props.title,
              this.props.legendOptions,
              this.state.colorscale
            );
          }
        );
      }
    );
  }

  componentDidUpdate(prevProps){
    if ((typeof prevProps !== "undefined") && (prevProps !== this.props)) {
        console.log("Han cambiado las propiedades!!!");
        RadarChart.draw("#" + this.props.idContainer, this.props.data);
      }
  }

  setCanvas(canvas) {
    // Add the visualization svg canvas to the container <div>
    let svg = d3
      .select("#" + this.props.idContainer)
      .append("svg")
      .style("background-color", "#354560")
      .style("color", "#FFFFFF") //With this we've got the color of the axis too
      .attr("height", this.state.HEIGHT)
      .attr("width", this.state.WIDTH);

    return svg;
  }

  setLegend(title, legendOptions, colorscale) {
    console.log("width: " + this.state.WIDTH);
    let canvas = d3
      .select("#" + this.props.idLegend)
      .append("svg")
      //.style("background-color", "#354560")
      .attr("width", this.state.WIDTH)
      .attr("height", 100);

    //Create the title for the legend
    canvas
      .append("text")
      .style("background-color", "red")
      .attr("class", "title")
      .attr("transform", "translate("+ (this.state.WIDTH/2) + ",10)")
      .attr("x", 10)
      .attr("y", 22)
      .style("font-size", "14pt")
      .style("fill", "#000000")
      .text(title)
      .style("text-anchor", "middle")
      .style("font-family", "roboto")
      .style("font-weight", "bold");

    //Initiate Legend
    let legend = canvas
      .append("g")
      .attr("class", "legend")
      .attr("height", 100)
      .attr("width", 200)
      .attr("transform", "translate(" + (this.state.WIDTH - 100) + ",35)");

    //Create colour squares
    legend
      .selectAll("rect")
      .data(legendOptions)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", function(d, i) {
        return i * 20 + 20;
      })
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function(d, i) {
        return colorscale(i);
      });
    //Create text next to squares
    legend
      .selectAll("text")
      .data(legendOptions)
      .enter()
      .append("text")
      .attr("x", 90)
      .attr("y", function(d, i) {
        return i * 20 + 30;
      })
      .style("font-size", "10pt")
      .style("fill", "#000000")
      .text(function(d) {
        return d;
      })
      .style("font-family", "roboto");
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div>
            <div id={this.props.idLegend} />
            <div id={this.props.idContainer} />
          </div>
        ) : (
          <div>Cargando datos ...</div>
        )}
      </div>
    );
  }
}

module.exports.SpiderChart = SpiderChart;
