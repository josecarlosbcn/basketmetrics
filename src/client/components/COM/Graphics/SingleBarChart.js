import React, { Component } from "react";
import * as d3 from "d3";
import "../../../css/content.css";

const HEIGHT = 450;
let WIDTH = 0;

const OFFSET_TOP = 30;
const OFFSET_BOTTOM = 200;
const OFFSET_LEFT = 80;
const OFFSET_RIGHT = 20;

const MAX_LONG_NAME = 25;

/**
 * We need to pass this params to build the Single Bar Chart
 * idContainer: identifier of the container. Must be unique.
 * data: json object with the data to build the Single Bar Chart
 * x_label: label of x axis
 * y_label: label of y axis
 * language: language needed to format float numbers in Spanish and English
 * visible: This option is available for this pages that are not showed by default and needs to be enabled to view it's content.
 * If the variable is not defined then we will show the graphic. if it's defined we will show the graphic if it's true, otherwise,
 * we won't show the graphic
 */
class SingleBarChart extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      loaded: false,
      drawed: false
    };
  }

  componentDidMount() {
    if (typeof this.props.data !== "undefined"){
        this.setState({
            loaded: true
          },
          () => {
            console.log("SingleBarChart: componentDidMount: Vamos a crear Gráficos");
            this.drawGraphic();
          });
    }
  }

  componentDidUpdate(prevProps){
    //WIDTH = document.querySelector("#" + this.props.idContainer).getBoundingClientRect().width;
    if ((typeof this.props.visible === "undefined" || this.props.visible) && (typeof this.props.data !== "undefined")){
        console.log("SingleBarChart: VISIBLE: Mostramos gráfico");
        //We remove all the graphic to draw a new one
        //document.querySelector("#" + this.props.idContainer).innerHTML = "";
        this.drawGraphic();
    }else{
        console.log("SingleBarChart: NO VISIBLE: No hacemos nada");
    }
  }

  /**
   * We call all the methods needed to draw the graphic from scratch
   */  
  drawGraphic(){
    let sn = this.shortNames(this.props.data);
    let canvas = this.setCanvas();
    let scales = this.setScales(sn);
    let axis = this.setAxis(scales);
    this.setAxisToCanvas(canvas, axis);
    this.drawBars(canvas, sn, scales);
    this.setLabelBars(canvas, sn, scales, this.props.language, this.props.percentage_y);
    this.setGridLines(canvas, axis, scales);    
  }

  drawBars(canvas, data, scales) {
    canvas
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "single-bar")
      .attr("x", d => OFFSET_LEFT + scales.xScale(d.name))
      .attr("width", scales.xScale.bandwidth())
      .attr("y", d => OFFSET_TOP + scales.yScale(parseFloat(d.value_y)))
      .attr(
        "height",
        d => HEIGHT - OFFSET_BOTTOM - OFFSET_TOP - scales.yScale(parseFloat(d.value_y))
      );
  }

  setAxis(scales) {
    let xAxis = d3.axisBottom().scale(scales.xScale);
    let yAxis = d3.axisLeft().scale(scales.yScale);

    return { xAxis: xAxis, yAxis: yAxis };
  }

  setAxisToCanvas(canvas, axis) {
    // x Axis
    canvas
      .append("g")
      .attr(
        "transform",
        "translate(" + OFFSET_LEFT + ", " + (HEIGHT - OFFSET_BOTTOM) + ")"
      )
      .call(axis.xAxis)
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 10)
      .attr("dy", "0.35em")
      .attr("transform", "rotate(90)")
      .style("text-anchor", "start");

    //x label
    canvas
      .append("text")
      .attr(
        "transform",
        "translate(" + WIDTH / 2 + " ," + (HEIGHT - OFFSET_TOP + 20) + ")"
      )
      .attr("fill", "white")
      .style("font-size", "10pt")
      .style("text-anchor", "middle")
      .text(this.props.x_label)
      .style("font-weight", "bold");

    // y Axis
    canvas
      .append("g")
      .attr("transform", "translate(" + OFFSET_LEFT + "," + OFFSET_TOP + ")")
      .call(axis.yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -OFFSET_LEFT - 20)
      .attr("y", -OFFSET_TOP - 15)
      .style("font-size", "10pt")
      .attr("fill", "white")
      .text(this.props.y_label)
      .style("font-weight", "bold");
  }

  setCanvas() {
    document.querySelector("#" + this.props.idContainer).innerHTML = "";
    WIDTH = parseFloat(d3.select("#" + this.props.idContainer).style("width"));
    let svg = d3
      .select("#" + this.props.idContainer)
      .append("svg")
      .style("background-color", "#354560")
      .style("color", "#FFFFFF") //With this we've got the color of the axis too
      .attr("height", HEIGHT)
      .attr("width", WIDTH);

    return svg;
  }

  /**
   * Method which draws the y grilines
   * @param {*} canvas
   * @param {*} axis
   * @param {*} scales
   */
  setGridLines(canvas, axis, scales) {
    let yGridline = axis.yAxis
      .scale(scales.yScale)
      .tickSize(-(WIDTH - OFFSET_LEFT - OFFSET_RIGHT))
      .tickFormat("");

    canvas
      .append("g")
      //.classed("gridLine", true)
      .attr("transform", "translate(" + OFFSET_LEFT + ", " + OFFSET_TOP + ")")
      .attr("class", "gridLine")
      .call(yGridline)
      .call(g => g.selectAll(".domain").remove());  //Remove top and left border of the grid
  }

  /**
   * Method which helps me to put the value of the bar at the top of the bar
   *
   * @param {*} canvas
   * @param {*} data
   * @param {*} scales
   */
  setLabelBars(canvas, data, scales, language, percentage_y) {
    canvas
      .selectAll(".text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr(
        "x",
        d => OFFSET_LEFT + scales.xScale(d.name) + scales.xScale.bandwidth() / 2
      )
      .attr("y", d => scales.yScale(parseFloat(d.value_y)))
      .attr("dy", OFFSET_TOP - 2)
      .text(d => {
        let value  = (language == "es") ? String(parseFloat(d.value_y).toFixed(2)).replace(".", ",") : parseFloat(d.value_y).toFixed(2);
        let percentage = (percentage_y) ? "%" : "";

        return value + percentage; 
      });
  }

  setScales(data) {
    let xRange = [0, WIDTH - OFFSET_LEFT - OFFSET_RIGHT];
    let yRange = [HEIGHT - OFFSET_TOP - OFFSET_BOTTOM, 0]; // flip order because y-axis origin is upper LEFT

    let xScale = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range(xRange)
      .padding(0.2);

    let yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.map(d => parseFloat(d.value_y)))])
      .range(yRange);

    return { xScale: xScale, yScale: yScale, xRange: xRange, yRange: yRange };
  }

  shortNames(data) {
    let p = data.map(item => {
      item.name =
        item.name.length <= MAX_LONG_NAME
          ? item.name
          : item.name.slice(0, MAX_LONG_NAME) + ".";

      return item;
    });

    return p;
  }

  xValue = d => { return d.name};
  yValue = d => {return parseFloat(d.value_y)}

  render() {
    return (
      <div>
        <div id={this.props.idContainer} />
      </div>
    );
  }
}

module.exports.SingleBarChart = SingleBarChart;
