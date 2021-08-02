import React, { Component } from "react";
import { Button, Spinner } from "react-bootstrap";
import * as d3 from "d3";
import "../../../css/content.css";

/**
 * We don't update this variable inside the state because when we use the component in a hidden layer the method called in this case is
 * ComponentDidUpdate and not ComponentDidMount because this has been called before. The problem with ComponentDidUpdate is that the app
 * call it several times so we cannot update the state of the component because we've got an error about it.
 */
let WIDTH = 0;

class ScatterPlot2 extends Component {
  /**
   * Some of the props received are mandatory and others not. Between mandatory properties we've got:
   * idContainer: Name of the id container. This number must be unique for the web page where we draw the graphic
   * lang: language of presentation of text
   * data: Array of json objects with the information needed to build the graphic
   * percentage_x: It's a boolean which indicates if the x value is a percentage value or not.
   * percentage_y: It's a boolean which indicates if the y value is a percentage value or not.
   * Each json has this properties:
   * name: String with the groupeKey
   * x_label: String with the name of the X Axis
   * y_label: String with the name of the Y Axis
   * visible: This option is available for this pages that are not showed by default and needs to be enabled to view it's content.
   * If the variable is not defined then we will show the graphic if it's defined we will show the graphic if it's true, otherwise,
   * we won't show the graphic
   * 
   * @param {*} props
   */
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      loaded: true,
      OFFSET_LEFT: 80,
      OFFSET_RIGHT: 20,
      OFFSET_TOP: 20,
      OFFSET_BOTTOM: 75,
      HEIGHT: 400,
    };
  }

  componentDidMount() {
    if (typeof this.props.data !== "undefined"){
        console.log("ScatterPlot2: componentDidMount(): DENTRO!!!");
        WIDTH = document.querySelector("#" + this.props.idContainer).getBoundingClientRect().width;
        this.setState(
          {
            loaded: true
          },
          () => {
            this.drawGraphic();
          }
        );      
    }else{
        console.log("ScatterPlot2: componentDidMount: NO hay datos");
    }
  }

  componentDidUpdate(prevProps){
    WIDTH = document.querySelector("#" + this.props.idContainer).getBoundingClientRect().width;
    if ((typeof this.props.visible === "undefined" || this.props.visible) && (typeof this.props.data !== "undefined")){
        console.log("ScatterPlot2: componentDidUpdate(): VISIBLE: Mostramos gráfico");
        //We remove all the graphic to draw a new one
        document.querySelector("#" + this.props.idContainer).innerHTML = "";
        this.drawGraphic();
    }else{
        console.log("ScatterPlot2: NO VISIBLE: No hacemos nada");
    }
  }

  /**
   * We call all the methods needed to draw the graphic from scratch
   */
  drawGraphic(){
    let canvas = this.setCanvas();
    let scales = this.setScales(this.props.data);
    this.setGrid(canvas, scales);
    this.setAxesToCanvas(canvas, scales);
    this.setPointsToCanvas(
      canvas,
      this.props.data,
      scales,
      this.props.x_label,
      this.props.y_label,
      this.props.language,
      this.props.percentage_x,
      this.props.percentage_y
    ); 
  }

  /**
   * Method wich create the gridlines of the graphic
   *
   * @param {*} canvas
   * @param {*} scales
   */
  setGrid(canvas, scales, percentage_x, percentage_y) {
    //Y Axis grid
    canvas
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(" + this.state.OFFSET_LEFT + ", 0)")
      .call(
        d3
          .axisLeft(scales.yScale)
          .tickSize(
            -(
              WIDTH -
              this.state.OFFSET_LEFT -
              this.state.OFFSET_RIGHT
            )
          )
          .tickFormat("")
      );

    //X Axis grid
    canvas
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0, " + this.state.OFFSET_TOP + ")")
      .call(
        d3
          .axisBottom(scales.xScale)
          .tickSize(
            this.state.HEIGHT - this.state.OFFSET_BOTTOM - this.state.OFFSET_TOP
          )
          .tickFormat("")
      );
  }

  /**
   * Method which serves us to define the scale and range of the graphics
   * @param {*} data
   */
  setScales(data) {
    let xRange = [
      this.state.OFFSET_LEFT,
      WIDTH - this.state.OFFSET_RIGHT
    ];
    let yRange = [
      this.state.OFFSET_TOP,
      this.state.HEIGHT - this.state.OFFSET_BOTTOM
    ]; // flip order because y-axis origin is upper LEFT

    /*     let xScale = d3
      .scaleLinear()
      .domain([0.0, d3.max(data, d => parseFloat(d.value_x))])
      .range(xRange);

    let yScale = d3
      .scaleLinear()
      //domain([ d3.max(data, d => parseFloat(d.value_y)), d3.min(data, d => parseFloat(d.value_y))])
      .domain([d3.max(data, d => parseFloat(d.value_y)), 0])
      .range(yRange); */

    let xScale = d3
                .scaleLinear()
                .domain([
                  d3.min(data, d => parseFloat(d.value_x) - 5),
                  d3.max(data, d => parseFloat(d.value_x) + 5)
                ])
                .range(xRange);

    let yScale = d3
                .scaleLinear()
                .domain([
                  d3.max(data, d => parseFloat(d.value_y) + 5),
                  d3.min(data, d => parseFloat(d.value_y) - 5)
                ])
                .range(yRange);

    return { xScale: xScale, yScale: yScale, xRange: xRange, yRange: yRange };
  }

  /**
   * Method to put the X axis and Y axis on the graphic
   *
   * @param {*} canvas
   * @param {*} scales
   */
  setAxesToCanvas(canvas, scales) {
    let y2 = 0;
    let y1 = this.state.HEIGHT - this.state.OFFSET_BOTTOM;

    //Add scale to X axis
    let xAxis = d3.axisBottom().scale(scales.xScale);

    //Add scale to Y axis
    let yAxis = d3.axisLeft().scale(scales.yScale);

    //Add x-axis to the canvas
    canvas
      .append("g")
      .attr("transform", "translate(0, " + y1 + ")")
      .call(xAxis)
      .append("text")
      .attr(
        "transform",
        "translate(" +
          (WIDTH + this.state.OFFSET_LEFT) / 2 +
          ", " +
          (this.state.OFFSET_BOTTOM / 2 + 5) +
          ")"
      )
      .style("text-anchor", "middle")
      .attr("class", "text-legend")
      .text(this.props.x_label)
      .style("font-weight", "bold");

    //Add y-axis to the canvas
    canvas
      .append("g")
      .attr("transform", "translate(" + this.state.OFFSET_LEFT + "," + y2 + ")")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -(this.state.OFFSET_LEFT / 2 + 15))
      .attr("x", -(this.state.HEIGHT / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .attr("class", "text-legend")
      .text(this.props.y_label)
      .style("font-weight", "bold");
  }

  setCanvas() {
    // Add the visualization svg canvas to the container <div>
    let svg = d3
      .select("#" + this.props.idContainer)
      .append("svg")
      .style("background-color", "#354560")
      .style("color", "#FFFFFF") //With this we've got the color of the axis too
      .attr("height", this.state.HEIGHT)
      .attr("width", WIDTH);

    return svg;
  }

  setPointsToCanvas(canvas, data, scales, x_label, y_label, lang, percentage_x, percentage_y) {
    canvas
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("r", 20) //Radius size, could map to another dimension
      .attr("cx", function(d) {
        return scales.xScale(parseFloat(d.value_x));
      }) //x position
      .attr("cy", function(d) {
        return scales.yScale(parseFloat(d.value_y));
      }) //y position
      .style("fill", "#FFC107")
      .on("mouseover", tipMouseOver)
      .on("mouseout", tipMouseOut);

    //Ad label for each circle
    canvas
      .selectAll("textCircle")
      .data(data)
      .enter()
      .append("text")
      .attr("x", function(d) {
        return scales.xScale(parseFloat(d.value_x));
      })
      .attr("y", function(d) {
        return scales.yScale(parseFloat(d.value_y));
      })
      .text(function(d) {
        return d.name.substring(0, 3);
      })
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("font-size", "10pt")
      .style("fill", "#344761");

    let tooltip = d3
      //.select("#" + this.props.idContainer)
      .select("body")
      .append("div")
      .attr("class", "tooltip-player")
      .style("opacity", 0);

    /**
     * We define this function inside of setPointsToCanvas to get access to canvas, data, scales and tooltip
     * @param {*} d
     * @param {*} iter
     */
    function tipMouseOver(d, iter) {
      let players = data.filter(p => {
        if (p.value_x === d.value_x && p.value_y === d.value_y) {
          return p;
        }
      });
      let html = "";
      for (let i = 0; i < players.length; i++) {
        let text_x =
          lang === "es"
            ? String(parseFloat(players[i].value_x).toFixed(2)).replace(
                ".",
                ","
              )
            : parseFloat(players[i].value_x).toFixed(2);
        let text_y =
          lang === "es"
            ? String(parseFloat(players[i].value_y).toFixed(2)).replace(
                ".",
                ","
              )
            : parseFloat(players[i].value_y).toFixed(2);
        let x_percentage = percentage_x ? "%" : "";
        let y_percentage = percentage_y ? "%" : "";
        if (i > 0) html += "<hr>";
        html +=
          players[i].name +
          "<br><b>" +
          x_label +
          ": </b>" +
          text_x + x_percentage +
          "<br/>" +
          "<b>" +
          y_label +
          ": </b>" +
          text_y + y_percentage;
      }
      tooltip
        .html(html)
        .style("left", d3.event.pageX + 15 + "px")
        .style("top", d3.event.pageY - 28 + "px")
        .transition()
        .duration(200) // ms
        .style("opacity", 0.9); // started as 0!

      // Use D3 to select element, change color and size
      d3.select(this)
        //.attr("r", 10)
        .style("cursor", "pointer");
    }

    /**
     * We create this function inside of setPointsToCanvas to get access to tooltip
     */
    function tipMouseOut() {
      tooltip
        .transition()
        .duration(500) // ms
        .style("opacity", 0); // don't care about position!
      //d3.select(this).attr("r", 5);
    }
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div id={this.props.idContainer} />
        ) : (
          <div style={{ marginTop: 10 + "px" }}>
            <Button variant="dark" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Cargando datos ...
            </Button>{" "}
            <Button variant="dark" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Cargando datos ...
            </Button>
          </div>
        )}
      </div>
    );
  }
}

module.exports.ScatterPlot2 = ScatterPlot2;
