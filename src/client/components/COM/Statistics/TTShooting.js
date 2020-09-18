import React, {Component} from "react";
import {Form, Row, Col} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { columnsTTShootingFEB, sortedTTShootingFEB } from "../../FEBCOM/column.tables";
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Loading } from "../Loading";
import "../../../css/content.css";

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
class TTShooting extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false,
            show: false
        };
        this.handleclick = this.handleclick.bind(this);
    }

    componentDidMount(){
        this.setState({
            teams_std_stats: this.props.teams_std_stats,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            teams_std_stats: nextProps.teams_std_stats
        });
    }

    handleclick = event => {
        this.setState(state => ({
          show: !state.show
        }));
    };    

    render(){
        return(
            <div>
                <div className = "text-center text-light" 
                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                    {(this.props.language === "es") ? "TIROS" : "SHOOTS"}
                </div>
                {
                    (this.state.loaded) ?
                        <div>                                     
                            <ToolkitProvider
                                keyField="id_team_club"
                                data={ this.state.teams_std_stats }
                                columns={ columnsTTShootingFEB }
                                columnToggle
                                >
                                {
                                    props => (
                                    <div>
                                        <Row>
                                            <Col md = {12} className = "text-right">
                                                <button
                                                    id="showHideCollums"
                                                    className="btn btn-primary"
                                                    onClick={event => this.handleclick(event)}
                                                    >
                                                    Añadir / Eliminar columnas a la tabla
                                                </button>
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
                                            defaultSorted = { sortedTTShootingFEB }
                                            pagination={ paginationFactory() }
                                            noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                            striped
                                            hover
                                            condensed
                                        />
                                    </div>
                                    )
                                }
                            </ToolkitProvider>
                        </div>
                    :
                        <Loading language = {this.props.language} />
                }
            </div>
        )
    }
}

module.exports.TTShooting = TTShooting;