import React, {Component} from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPTShootingFEB, sortedPTShootingFEB } from "../../FEBCOM/column.tables";
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Loading } from "../Loading";
import "../../../css/content.css";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { ShootsGlosary } from "../Glosary/ShootsGlosary";

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
                type="checkbox"
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
 * Player Table Shooting for Statistics
 */
class PTShooting extends Component{
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
            loaded: true,
            players_std_stats: this.props.players_std_stats
        });
        this.handleclick = this.handleclick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            players_std_stats: nextProps.players_std_stats,
            showGlosary: false, //With this update we avoid to fire the modal window when this method would be fire by any other event of the father

        });
    }

    handleclick = event => {
        this.setState(state => ({
          show: !state.show,
          showGlosary: false
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
                <div className = "text-center text-light" 
                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                    {(this.props.language === "es") ? "TIROS" : "SHOOTS"}
                </div>
                {
                    (this.state.loaded) ?
                        <div>
                            {
                                (this.props.language === "es") ?
                                    <div>                                     
                                        <ToolkitProvider
                                            keyField="id_player_team"
                                            data={ this.state.players_std_stats }
                                            columns={ columnsPTShootingFEB }
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
                                                        <Col md = {2} className = "text-right" style = {{paddingLeft: 0, paddingRight: 15 + "px"}}>
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
                                                        <CustomToggleList { ...props.columnToggleProps } />                                                
                                                    </div>                                                    
                                                    <hr />
                                                    <BootstrapTable
                                                        { ...props.baseProps }
                                                        footerClasses = "footer-class"
                                                        defaultSorted = { sortedPTShootingFEB }
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
                                    <h2>Pendiente de desarrollo</h2>                                
                            }
                        </div>
                    :
                        <Loading language = {this.props.language} />
                }
            </div>
        )
    }
}

module.exports.PTShooting = PTShooting;