import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { Form, Row, Col } from "react-bootstrap";
import { columnsPTSeasonsShootingFEB } from "../../../FEBCOM/column.tables";
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import { Loading } from "../../Loading";
import "../../../../css/content.css";

/**
 * This constat let me have a row with buttons who show or hide columns 
 * 
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
 * Player Table Shooting for Statistics
 */
class PTSeasonsShooting extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false,
            show: false
        };
    }

    componentDidMount(){
        this.setState({
            loaded: true,
            player_stdstats_history: this.props.player_stdstats_history
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            player_stdstats_history: nextProps.player_stdstats_history
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
                {
                    (this.state.loaded) ?
                        <div>
                                  
                            <ToolkitProvider
                                keyField="number_row"
                                data={ this.state.player_stdstats_history }
                                columns={ columnsPTSeasonsShootingFEB }
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
                                            <CustomToggleList { ...props.columnToggleProps } />                                                
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
                        </div>
                    :
                        <Loading language = {this.props.language} />
                }
            </div>
        )
    }
}

module.exports.PTSeasonsShooting = PTSeasonsShooting;