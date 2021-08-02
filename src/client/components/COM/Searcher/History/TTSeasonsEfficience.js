import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsTTSeasonsEfficienceFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import {EfficienceGlosary} from "../../Glosary/EfficienceGlosary";
import {Button} from "react-bootstrap";

class TTSeasonsEfficience extends Component{
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
                                <BootstrapTable
                                    keyField = "number_row"
                                    columns = {columnsTTSeasonsEfficienceFEB}
                                    data = {this.state.team_advstats_history}
                                    footerClasses = "footer-class"
                                    noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There are no data to show"} 
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

module.exports.TTSeasonsEfficience = TTSeasonsEfficience;