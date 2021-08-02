import React, { Component } from "react";
import { Row, Col} from "react-bootstrap";
import * as d3 from "d3";
import "../../../css/content.css";

const HEIGHT = 360;
let WIDTH = 0;

const OFFSET_TOP = 30;
const OFFSET_BOTTOM = 30;
const OFFSET_LEFT = 80;
const OFFSET_RIGHT = 50;

/**
 * To build this graphic we need to pass some values in these props:
 *      - idContainer: id of the div container. This must be unique
 *      - data: data to build the graphic. This is an array of json objects where each json object has the next structure:
 *              {
 *                  shoot: String with the name of shoot, 
 *                  abrev_home_team: % of shoot for that team, 
 *                  abrev_away_team: % of shoot for that team
 *              }
 *      - groupKey: Name of the key which are goingto use to group the bars
 *      - keys: Array with the strings of all the keys which we are going to group around the groupKey
 *      - y_label: String with the name of Y Axis
 *      - lang: language to use to show the float numbers
 */


class MultipleBarChart extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
      console.log("componentDidMount MultipleBarChart");
    if (typeof this.props.data !== "undefined" && typeof this.props.keys !== "undefined"){
        let canvas = this.setCanvas(document.querySelector("#" + this.props.idContainer).getBoundingClientRect().width - 10);
        let colors = this.setColors();
        let scales = this.setScales(this.props.data, this.props.keys, this.props.groupKey);
        this.setAxis(canvas, scales);
        this.setLegend(canvas, colors, this.props.keys);
        this.setBars(canvas, this.props.data, scales, this.props.keys, colors, this.props.lang, this.props.groupKey);  
    }
  }

  componentDidUpdate(prevProps, prevState){
    let width = document.querySelector("#" + this.props.idContainer).getBoundingClientRect().width - 10;
    console.log("prevProps: " + prevProps + " prevState: " + prevState);
    if (typeof this.props.data !== "undefined" && typeof this.props.keys !== "undefined" && prevState !== null){
      let canvas = this.setCanvas(width);
      let colors = this.setColors();
      let scales = this.setScales(this.props.data, this.props.keys, this.props.groupKey);
      this.setAxis(canvas, scales);
      this.setLegend(canvas, colors, this.props.keys);
      this.setBars(canvas, this.props.data, scales, this.props.keys, colors, this.props.lang, this.props.groupKey);
    }
  }

  setAxis(canvas, scales) {
    //x axis
    canvas
      .append("g")
      .attr("class", "axis")
      .attr(
        "transform",
        "translate(" + 0 + ", " + (HEIGHT - OFFSET_TOP - OFFSET_BOTTOM) + ")"
      )
      .call(d3.axisBottom(scales.x0Scale))
      .selectAll("text")
      .style("text-anchor", "middle")
      .style("font-weight", "bold")
      .attr("font-size", "10pt")
      .attr("dx", "-.1em");

    //y axis
    canvas
      .append("g")
      .attr("class", "axis")
      //.call(d3.axisLeft(scales.yScale).ticks(null, ".00%"))
      .call(d3.axisLeft(scales.yScale).tickFormat(d3.format(".2f")))
      //.selectAll("text")
      .style("font-size", "8pt")
      .style("font-weight", "bold")
      .attr("transform", "translate(" + OFFSET_LEFT + ", 0)")
      .append("text")
      .attr("x", OFFSET_LEFT / 2 + 12)
      .attr("y", OFFSET_TOP)
      .attr("dx", "-3em")
      .attr("dy", "-1em")
      .attr("fill", "#FFFFFF")
      .style("font-weight", "bold")
      .style("font-size", "8pt")
      .attr("text-anchor", "end")
      .text(this.props.y_label);

    //return { xAxis: xAxis, yAxis: yAxis };
  }

  setBars(canvas, data, scales, keys, colors, lang, groupKey) {
    let height = HEIGHT - OFFSET_TOP - OFFSET_BOTTOM;
    //var formatPercent = d3.format(".0%");

    let bar = canvas
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d) {
        //return "translate(" + scales.x0Scale(d.shoot) + ",0)";
        return "translate(" + scales.x0Scale(d[groupKey]) + ",0)";
      });

    //Here, you append rects to the groups:
    bar
      .selectAll("rect")
      .data(function(d) {
        return keys.map(function(key) {
          return {
            key: key,
            value: d[key]
          };
        });
      })
      .enter()
      .append("rect")
      .attr("class", "rect")
      .attr("x", function(d) {
        return scales.x1Scale(d.key);
      })
      .attr("y", function(d) {
        return scales.yScale(d.value);
      })
      .attr("width", scales.x1Scale.bandwidth())
      .attr("height", function(d) {
        return height - scales.yScale(d.value);
      })
      .attr("fill", function(d) {
        return colors(d.key);
      });

    //Finally, here, you append texts to the groups:
    bar
      .selectAll("text")
      .data(function(d) {
        return keys.map(function(key) {
          return {
            key: key,
            value: d[key]
          };
        });
      })
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("class", "label-multiple-bar")
      .attr("x", function(d, i) {
        return scales.x1Scale.bandwidth() * (i + 0.5);
      })
      .attr("y", function(d, i) {
        return scales.yScale(d.value) - 5;
      })
      .text(function(d) {
        console.log("lang: " + lang);
        return (lang === "es") ? String(parseFloat(d.value).toFixed(2)).replace(".", ",") + "%" : parseFloat(d.value).toFixed(2) + "%";
      });
  }

  setCanvas(width) {
      WIDTH = width;
/*     WIDTH = parseFloat(
      d3.select("#" + this.props.idContainer).style("width")
    ).toFixed(2);
 */    
      let svg = d3
      .select("#" + this.props.idContainer)
      .append("svg")
      .style("background-color", "#354560")
      .style("color", "#FFFFFF") //With this we've got the color of the axis too
      .attr("height", HEIGHT)
      .attr("width", WIDTH);

    return svg;
  }

  setColors() {
    return d3
      .scaleOrdinal()
      .range(["#DC3545", "#FFC107", "#007BFF", "#28A745", "#17A2B8", "#cf0eed"]);
  }

  /**
   * Set a legend to the graphic at the top right of it
   *
   * @param {*} canvas
   * @param {*} colors
   * @param {*} keys
   */
  setLegend(canvas, colors, keys) {
    let legend = canvas
      .append("g")
      .selectAll("g")
      .data(keys.slice())
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        return "translate(0," + i * 20 + ")";
      });

    legend
      .append("rect")
      .attr("x", WIDTH - OFFSET_RIGHT - OFFSET_LEFT + 30)
      .attr("y", 12)
      .attr("width", 25)
      .attr("height", 10)
      .attr("fill", colors);

    legend
      .append("text")
      .attr("x", WIDTH - OFFSET_RIGHT - OFFSET_LEFT + 110)
      .attr("y", 18)
      .attr("dy", "0.32em")
      .text(function(d) {
        return d;
      })
      .attr("fill", "#FFFFFF")
      .attr("font-family", "Roboto")
      .style("font-size", "10pt")
      .style("font-weight", "bold")
      .attr("text-anchor", "end");
  }

  setScales(data, keys, groupKey) {
    let xRange = [OFFSET_LEFT + 0.05, WIDTH - OFFSET_RIGHT];
    let yRange = [HEIGHT - OFFSET_TOP - OFFSET_BOTTOM, OFFSET_TOP];

    let x0 = d3
      .scaleBand()
      .domain(
        data.map(function(d) {
          return d[groupKey];
        })
      )
      .rangeRound(xRange)
      .paddingInner(0.2);

    let x1 = d3
      .scaleBand()
      .domain(keys)
      .rangeRound([0, x0.bandwidth()])
      .padding(0);

    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function(d) {
          return d3.max(keys, function(key) {
            return parseFloat(d[key]);
          });
        })
      ])
      .nice()
      .rangeRound(yRange);

    return {
      x0Scale: x0,
      x1Scale: x1,
      yScale: y,
      xRange: xRange,
      yRange: yRange
    };
  }

  render() {
    return (
      <div>
          <Row>
            <Col md = {12} id = "container">
              <div id={this.props.idContainer} style = {{margin: 0, padding: 0}}/>
            </Col>
          </Row>
      </div>
    );
  }
}

module.exports.MultipleBarChart = MultipleBarChart;