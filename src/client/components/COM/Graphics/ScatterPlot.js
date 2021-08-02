import React, {Component} from "react";
import {Determinator, MultiLang} from "react-multi-language";
import { Button, Spinner} from "react-bootstrap";
import * as d3 from "d3";
import "../../../css/content.css";

const HEIGHT = 360;
let WIDTH = 0;

const OFFSET_TOP = 20;
const OFFSET_BOTTOM = 50;
const OFFSET_LEFT = 50;
const OFFSET_RIGHT = 20;


class ScatterPlot extends Component{
 /**
  * Some of the props received are mandatory and others not. Between mandatory properties we've got:
  * idContainer: Name of the id container. This number must be unique for the web page where we draw the graphic
  * lang: language of presentation of text
  * data: Array of json objects with the information needed to build the graphic
  * x_label: String with the name of the X Axis
  * y_label: String with the name of the Y Axis
  * 
  * @param {*} props 
  */
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: true,
        };
    }

    componentDidMount(){
        let canvas = this.setCanvas();
        let scales = this.setScales(this.props.data);
        this.setState({
            canvas: canvas,
            scales: scales,
            loaded: true
        }, () => {
            this.setGrid(canvas, scales);
            this.setAxesToCanvas(canvas, scales);
            this.setPointsToCanvas(canvas, this.props.data, scales, this.props.x_label, this.props.y_label, this.props.lang);    
        });
    }

    /**
     * Method wich create the gridlines of the graphic
     * 
     * @param {*} canvas 
     * @param {*} scales 
     */
    setGrid(canvas, scales){
        //Y Axis grid
        canvas.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(" + OFFSET_LEFT + ", 0)")
        .call(d3.axisLeft(scales.yScale).tickSize(-(WIDTH - OFFSET_LEFT - OFFSET_RIGHT)).tickFormat(""));

        //X Axis grid
        canvas.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0, " + OFFSET_TOP + ")")
        .call(d3.axisBottom(scales.xScale).tickSize((HEIGHT - OFFSET_BOTTOM - OFFSET_TOP)).tickFormat(""));
    }

    /**
     * Method which serves us to define the scale and range of the graphics
     * @param {*} data 
     */
    setScales(data){ 
        let xRange = [OFFSET_LEFT, WIDTH - OFFSET_RIGHT];
        let yRange = [OFFSET_TOP, HEIGHT - OFFSET_BOTTOM]; // flip order because y-axis origin is upper LEFT  

        let xScale = d3.scaleLinear()
        .domain([ 0.00, d3.max(data, d => parseFloat(d.value_x))])
        .range(xRange);

        let yScale = d3.scaleLinear()
        //domain([ d3.max(data, d => parseFloat(d.value_y)), d3.min(data, d => parseFloat(d.value_y))])
        .domain([ d3.max(data, d => parseFloat(d.value_y)), 0])
        .range(yRange);       

        return {"xScale" : xScale, "yScale" : yScale, "xRange" : xRange, "yRange" : yRange};
    }

    /**
     * Method to put the X axis and Y axis on the graphic
     * 
     * @param {*} canvas 
     * @param {*} scales 
     */
    setAxesToCanvas(canvas, scales){
        let y2 = 0;
        let y1 = HEIGHT - OFFSET_BOTTOM;

        //Add scale to X axis
        let xAxis = d3.axisBottom()
        .scale(scales.xScale);

        //Add scale to Y axis
        let yAxis = d3.axisLeft()
        .scale(scales.yScale);

        //Add x-axis to the canvas
        canvas.append("g")
        .attr("transform", "translate(0, " + y1 + ")")
        .call(xAxis)
        .append("text")             
        .attr("transform",
              "translate(" + ((WIDTH + OFFSET_LEFT)/2) + ", " + (OFFSET_BOTTOM/2 + 5) + ")")
        .style("text-anchor", "middle")
        .text(this.props.x_label)
        .style("font-weight", "bold");

        //Add y-axis to the canvas
        canvas.append("g")
        .attr("transform", "translate(" + OFFSET_LEFT + "," + y2 + ")")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -(OFFSET_LEFT/2 + 15))
        .attr("x", -(HEIGHT / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(this.props.y_label)
        .style("font-weight", "bold");
    }

    setCanvas(){
        WIDTH = parseFloat(d3.select("#" + this.props.idContainer).style("width"));
        // Add the visualization svg canvas to the container <div>
        let svg = d3.select("#" + this.props.idContainer)
        .append("svg")
        .style("background-color", "#354560")
        .style("color", "#FFFFFF")  //With this we've got the color of the axis too
        .attr("height", HEIGHT)
        .attr("width", WIDTH);
        
        return svg;  
    }

    setPointsToCanvas(canvas, data, scales, x_label, y_label, lang){

        canvas.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 5)     //Radius size, could map to another dimension
        .attr("cx", function(d) { return scales.xScale(parseFloat(d.value_x)); })  //x position
        .attr("cy", function(d) { return scales.yScale(parseFloat(d.value_y)); })  //y position        
        .style("fill", "#FFC107")      
        .on("mouseover", tipMouseOver)
        .on("mouseout", tipMouseOut);

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
        function tipMouseOver(d, iter){
            let players = data.filter((p) => {
              if ((p.value_x === d.value_x) && (p.value_y === d.value_y)){
                return p;
              }
            });
            let html = "";
            for (let i = 0; i < players.length; i++){
                let text_x = (lang === "es") ? String(parseFloat(players[i].value_x).toFixed(2)).replace(".", ",") : parseFloat(players[i].value_x).toFixed(2);
                let text_y = (lang === "es") ? String(parseFloat(players[i].value_y).toFixed(2)).replace(".", ",") : parseFloat(players[i].value_y).toFixed(2);  
                if (i > 0) html += "<hr>";
                html += players[i].name + "<br><b>" + x_label + ": </b>" + text_x + "%<br/>" + "<b>" + y_label + ": </b>" + text_y + "%";
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
              .attr("r", 10)
              .style("cursor", "pointer");       
        }
    
        /**
         * We create this function inside of setPointsToCanvas to get access to tooltip
         */
        function tipMouseOut(){
            tooltip
            .transition()
            .duration(500) // ms
            .style("opacity", 0); // don't care about position!
          d3.select(this)
            .attr("r", 5);
        }        

    }



    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div id={this.props.idContainer} />
                    :
                        <div style = {{marginTop: 10 + "px"}}>
                            <Button variant="dark" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">
                                    <Determinator>
                                        {{
                                            es: "Cargando datos ...",
                                            en: "Loading data ..."
                                        }}
                                    </Determinator>
                                </span>
                            </Button>{' '}
                            <Button variant="dark" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                                    <Determinator>
                                        {{
                                            es: "Cargando datos ...",
                                            en: "Loading data ..."
                                        }}
                                    </Determinator>
                            </Button>                    
                        </div>                     
                }
                <MultiLang lang = {this.props.lang} />
            </div>
        );
    };
};

module.exports.ScatterPlot = ScatterPlot;