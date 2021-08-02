import React, {Component} from "react";
import * as d3 from "d3";
import { Loading } from "../../COM/Loading";


let WIDTH = 0;

class MultipleScatterPlot extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: true,
            OFFSET_LEFT: 50 + this.props.y_label.length * 8,
            OFFSET_RIGHT: 120,
            OFFSET_TOP: 20, 
            OFFSET_BOTTOM: 50,
            HEIGHT: 400
        };
    }

    componentDidMount(){
        if (typeof this.props.data !== "undefined"){
            console.log("MultipleScatterPlot: componentDidMount(): Procesamos datos y mostramos gráfico");
            //document.querySelector("#" + this.props.idContainer).innerHTML = "";
            this.drawGraphic();
        }else{
            console.log("MultipleScatterPlot: componentDidMount loaded: NO PROCESAMOS datos y NO MOSTRAMOS gráfico");
        }
    }

    componentDidUpdate(prevProps){
        if ((typeof this.props.visible === "undefined" || this.props.visible) && (typeof this.props.data !== "undefined")){
            console.log("MultipleScatterPlot: componentDidUpdate(): VISIBLE: Mostramos gráfico");
            console.log("id: " + "#" + this.props.idContainer);
            console.log("idContainer: " + this.props.idContainer + " querySelctor: " + document.querySelector("#" + this.props.idContainer));
            //We remove all the graphic to draw a new one
            document.querySelector("#" + this.props.idContainer).innerHTML = "";
            this.drawGraphic();
        }else{
            console.log("MultipleScatterPlot: NO VISIBLE: No hacemos nada");
        }
    }

    /**
     * We call all the methods needed to draw the graphic from scratch
     */
     drawGraphic(){
        WIDTH = document.querySelector("#" + this.props.idContainer).getBoundingClientRect().width;
        let x_labels = this.props.data.pace.map(item => {
            return item.value_x;
            });                    
        let canvas = this.setCanvas();
        let scales = this.setScales(x_labels);
        this.setGrid(canvas, scales);
        this.setAxesToCanvas(canvas, scales);
        let keys = Object.keys(this.props.data);
        keys.forEach((k, i) => {
            let data = this.props.data[k];
            let color = this.props.scas[i].color;
            let symbol = this.props.scas[i].symbol;
            this.setPointsToCanvas(
            canvas,
            data,
            scales,
            this.props.lang,
            symbol,
            color,
            this.props.scas[i]
            );
        });
        this.setLegend(
            canvas,
            this.props.scas,
            WIDTH,
            this.state.OFFSET_RIGHT,
            this.state.OFFSET_LEFT,
            this.state.HEIGHT
        );
    }

    setAxesToCanvas(canvas, scales){
        let y2 = 0;
        let y1 = this.state.HEIGHT - this.state.OFFSET_BOTTOM;
        console.log("y1: " + y1 + " y2: " + y2);
    
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
          //.text(this.props.x_label)
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

    setGrid(canvas, scales){
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
     * Set right legend and X Axis legend
     * 
     * @param {*} canvas 
     * @param {*} symbols 
     * @param {*} width 
     * @param {*} offset_right 
     * @param {*} offset_left 
     * @param {*} height 
     */
    setLegend(canvas, symbols, width, offset_right, offset_left, height){
        const groups = canvas
            .selectAll("legends")
            .data(symbols)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                let x = width - offset_right + 35;
                let y = height / 2 - 75 + i * 24;
                return "translate( " + x + "," + y + ")";
            });

        //We set the symbols
        groups
            .append("path")
            .attr(
                "d",
                d3
                .symbol()
                .type(function(d) {
                    return d.symbol;
                })
                .size("75")
            )
            .attr("fill", function(d) {
                return d.color;
            });

        //We set the label for each symbol
        groups
            .append("text")
            .attr("x", 60)
            .attr("y", 5)
            .style("text-anchor", "left")
            .text(d => {
                return d.stats;
            })
            .attr("fill", function(d) {
                return d.color;
            })
            .style("font-size", "10pt")
            .style("font-weight", "bold");

        //We set the x Axis label
        canvas
            .append("g")
            .attr("transform", function(d, i) {
                let x = (width - offset_right + offset_left) / 2;
                let y = height - 12;
                return "translate( " + x + "," + y + ")";
            })
            .append("text")
            .text(this.props.x_label)
            .style("text-anchor", "middle")
            .attr("fill", "#FFFFFF")
            .style("font-size", "10pt")
            .style("font-weight", "bold");        
    }

    setPointsToCanvas(canvas, data, scales, lang, mark, colorMark, scas){
        canvas
            .selectAll("marks")
            .data(data)
            .enter()
            .append("path")
            .attr("transform", d => "translate(" + scales.xScale(d.value_x) + "," + scales.yScale(parseFloat(d.value_y)) + ")")
            .attr("d", d3.symbol().type(mark).size("75"))
            .attr("fill", colorMark)
            .on("mouseover", tipMouseOver)
            .on("mouseout", tipMouseOut);
  
        let tooltip = d3
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
            let teams = data.filter(p => {
            if (p.value_x === d.value_x && p.value_y === d.value_y) {
                return p;
            }
            });
            let html = "";
            for (let i = 0; i < teams.length; i++) {
            let text_y =
                lang === "es"
                ? String(parseFloat(teams[i].value_y).toFixed(2)).replace(".", ",")
                : parseFloat(teams[i].value_y).toFixed(2);
            if (i > 0) html += "<hr>";
            html +=
                teams[i].name +
                "<br><b>" +
                scas.stats +
                ": </b>" +
                text_y +
                (scas.percentage ? "%" : "");
            }
            tooltip
            .html(html)
            .style("left", d3.event.pageX + 15 + "px")
            .style("top", d3.event.pageY - 28 + "px")
            .transition()
            .duration(200) // ms
            .style("opacity", 0.9) // started as 0!
            .style("font-family", "roboto");
  
            // Use D3 to select element, change color and size
            d3.select(this)
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
        } 
    }

    /**
     * Method which serves us to define the scale and range of the graphics
     *
     * @param {*} xLabels Array with the labels for all the points in x Axis
     */
    setScales(xLabels) {
        let xRange = [
            this.state.OFFSET_LEFT,
            WIDTH - this.state.OFFSET_RIGHT
        ];
        let yRange = [
            this.state.OFFSET_TOP,
            this.state.HEIGHT - this.state.OFFSET_BOTTOM
        ]; // flip order because y-axis origin is upper LEFT

        let xScale = d3
            .scaleBand()
            .domain(
                xLabels.map(label => {
                return label;
                })
            )
            .range(xRange)
            .padding(1);

        let yScale = d3
            .scaleLinear()
            .domain([120, 0])
            .range(yRange);

        return {
            xScale: xScale,
            yScale: yScale,
            xRange: xRange,
            yRange: yRange
        };
    }    

    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div id={this.props.idContainer} />
                    :
                        <Loading language = {this.props.language} />
                }
            </div>
        );
    }
}

module.exports.MultipleScatterPlot = MultipleScatterPlot;