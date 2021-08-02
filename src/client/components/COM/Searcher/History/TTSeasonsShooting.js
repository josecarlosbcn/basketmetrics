import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Form, Row, Col, Button} from "react-bootstrap";
import { columnsTTSeasonsShootingFEB, sortedTTSeasonsShootingFEB } from "../../../FEBCOM/column.tables";
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Loading } from "../../Loading";
import "../../../../css/content.css";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { ShootsGlosary } from "../../Glosary/ShootsGlosary";

/**
 * This constat let me have a row with buttons who show or hide columns 
 * 
 * @param {*} param0 
 */
const CustomToggleList = ({ columns, onColumnToggle, toggles }) => (
    <div
        className="text-center"
        style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
        }}
    >
        {columns
        .map(column => ({
            ...column,
            toggle: toggles[column.dataField]
        }))
        .map((column, index) => (
            (index > 0) ?
            <Form.Check
                type="switch"
                key={column.dataField}
                inline
                label={column.text}
                id={column.dataField}
                checked={column.toggle}
                aria-checked={column.toggle ? "true" : "false"}
                onChange={() => onColumnToggle(column.dataField)}
            />
            : null            
        ))}
    </div>
);



/**
 * Team Table shooting for Statistics
 */
class TTSeasonsShooting extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false,
            show: false,
            showGlosary: false,
        };
    }

    componentDidMount(){
        this.setState({
            team_stdstats_history: this.props.team_stdstats_history,
            loaded: (this.props.team_stdstats_history.length > 0) ? true : false,
        }, () => {
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            team_stdstats_history: nextProps.team_stdstats_history,
            showGlosary: false, //With this update we avoid to fire the modal window when this method would be fire by any other event of the father
        });
    }       

    handleclick = event => {
        this.setState(state => ({
          show: !state.show
        }));
    };  

    showGlosary(event){
        this.setState({
            showGlosary: true,
        });    
    }     

    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <ToolkitProvider
                                keyField="number_row"
                                data={ this.state.team_stdstats_history }
                                columns={ columnsTTSeasonsShootingFEB }
                                columnToggle
                                >
                                {
                                    props => (
                                    <div>
                                        <Row>
                                            <Col md = {10} className = "text-right">
                                                <Button
                                                    id="showHideCollums"
                                                    className="btn btn-primary"
                                                    style = {{height: 50 + "px"}}
                                                    variant = "success"
                                                    onClick={event => this.handleclick(event)}
                                                    >
                                                    Añadir / Eliminar columnas a la tabla
                                                </Button>
                                            </Col>
                                            <Col md = {2} className = "text-right" style = {{paddingRight: 15, paddingLeft: 0}}>
                                                <Button id = "shoots" style = {{width: 100 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                                                    <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                                    <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                                        Glosario
                                                    </span>
                                                </Button> 
                                            </Col>
                                        </Row>
                                        <div
                                            className="card card-body"
                                            style={{
                                            padding: 10 + "px",
                                            display: this.state.show ? "block" : "none",
                                            marginTop: 15 + "px",
                                            fontSize: 12 + "pt"
                                            }}
                                        >
                                            <CustomToggleList {...props.columnToggleProps} />
                                        </div>
                                        <hr />                                         
                                        <BootstrapTable
                                            { ...props.baseProps }
                                            footerClasses = "footer-class"
                                            noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                            striped
                                            hover
                                            condensed
                                        />
                                    </div>
                                    )
                                }
                            </ToolkitProvider>
                            <ShootsGlosary show = {this.state.showGlosary} />
                        </div>
                    :
                        <Loading language = {this.props.language} />
                }
            </div>
        )
    }
}

module.exports.TTSeasonsShooting = TTSeasonsShooting;