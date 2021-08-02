import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { columnsEfficienceFEB, sortedEfficienceFEB } from "../../FEBCOM/column.tables";
import "../../../css/content.css";
import { Loading } from "../Loading";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import {EfficienceGlosary} from "../Glosary/EfficienceGlosary";
import {Button} from "react-bootstrap";

class TTEfficience extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            teams_adv_stats: this.props.teams_adv_stats,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            teams_adv_stats: nextProps.teams_adv_stats,
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
                <div className = "text-center text-light" 
                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                    {(this.props.language === "es") ? "EFICIENCIA" : "EFFICIENCE"}
                </div>
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
                                <BootstrapTable
                                    keyField = "id_team_club"
                                    columns = {columnsEfficienceFEB}
                                    data = {this.state.teams_adv_stats}
                                    defaultSorted = { sortedEfficienceFEB }
                                    pagination={ paginationFactory() }
                                    footerClasses = "footer-class"
                                    noDataIndication = "En estos momentos no hay datos que ofrecer" 
                                    striped
                                    hover
                                    condensed
                                /> 
                                <EfficienceGlosary show = {this.state.showGlosary} glosario = "teamEfficience" />
                            </div>
                        :
                            <Loading language = {this.props.language} />
                }
            </div>
        );
    }

}

module.exports.TTEfficience = TTEfficience;