import React, {Component} from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { columnsTTReboundsFEB, sortedTTReboundsFEB } from "../../FEBCOM/column.tables";
import "../../../css/content.css";
import { Loading } from "../Loading";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { ReboundsGlosary } from "../Glosary/ReboundsGlosary";

class TTRebounds extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false,
            showGlosary: false,
        };
    }

    componentDidMount(){
        this.setState({
            teams_rebounds: this.props.teams_rebounds,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            teams_rebounds: nextProps.teams_rebounds,
            showGlosary: false, //With this update we avoid to fire the modal window when this method would be fire by any other event of the father
        });
    }    
    
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
                    {(this.props.language === "es") ? "REBOTES" : "REBOUNDS"}
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
                                    columns = {columnsTTReboundsFEB}
                                    data = {this.state.teams_rebounds}
                                    defaultSorted = { sortedTTReboundsFEB }
                                    pagination={ paginationFactory() }
                                    footerClasses = "footer-class"
                                    noDataIndication = "En estos momentos no hay datos que ofrecer" 
                                    striped
                                    hover
                                    condensed
                                />
                                <ReboundsGlosary show = {this.state.showGlosary} glosario = "teamRebounds" />
                            </div>
                        :
                            <Loading language = {this.props.language} />
                }
            </div>
        );
    }

}

module.exports.TTRebounds = TTRebounds;