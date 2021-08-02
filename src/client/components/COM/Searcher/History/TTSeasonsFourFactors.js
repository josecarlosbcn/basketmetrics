import React, {Component} from "react";
import { Loading } from "../../Loading";
import {Row, Col, Button} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import "../../../../css/content.css";
import { columnsTTSeasonsFourOffensiveFactorsFEB, columnsTTSeasonsFourDefensiveFactorsFEB } from "../../../FEBCOM/column.tables";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import {FourFactorsGlosary} from "../../Glosary/FourFactorsGlosary";


class TTSeasonsFourFactors extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            team_advstats_history: this.props.team_advstats_history,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            team_advstats_history: nextProps.team_advstats_history,
            showGlosary: false, //With this update we avoid to fire the modal window when this method would be fire by any other event of the father            
        });
    }       

    showGlosary(){
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
                            <div className = "text-right mb-3" style = {{width: 100 + "%"}}>
                                <Button id = "shoots" style = {{width: 16.9 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                                    <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                    <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                        Glosario
                                    </span>
                                </Button>                          
                            </div>                              
                            <Row>
                                <Col md = {12}>
                                    <div className = "text-center text-light font-weight-bold" style = {{backgroundColor: "#28A745", fontSize: 14 + "pt", paddingTop: 10 + "px", paddingBottom: 10 + "px"}}>
                                        {(this.props.language === "es") ? "4 Factores Ofensivos" : "4 Offensive Factors"}
                                    </div>
                                    <BootstrapTable
                                        keyField = "number_row"
                                        columns = {columnsTTSeasonsFourOffensiveFactorsFEB}
                                        data = {this.state.team_advstats_history}
                                        footerClasses = "footer-class"
                                        noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There are no data to show"} 
                                        striped
                                        hover
                                        condensed
                                    />                                     
                                    <div className = "text-center text-light font-weight-bold" style = {{backgroundColor: "#DC3545", fontSize: 14 + "pt", paddingTop: 10 + "px", paddingBottom: 10 + "px"}}>
                                        {(this.props.language === "es") ? "4 Factores Defensivos" : "4 Defensive Factors"}
                                    </div>
                                    <BootstrapTable
                                        keyField = "number_row"
                                        columns = {columnsTTSeasonsFourDefensiveFactorsFEB}
                                        data = {this.state.team_advstats_history}
                                        footerClasses = "footer-class"
                                        noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There are no data to show"} 
                                        striped
                                        hover
                                        condensed
                                    /> 
                                </Col>
                            </Row>    
                            <FourFactorsGlosary show = {this.state.showGlosary} />
                        </div>
                    :
                    <Loading language = {this.props.language} />
                } 
            </div>
        )
    }
}

module.exports.TTSeasonsFourFactors = TTSeasonsFourFactors;