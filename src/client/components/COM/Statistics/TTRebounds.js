import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { columnsTTReboundsFEB, sortedTTReboundsFEB } from "../../FEBCOM/column.tables";
import "../../../css/content.css";
import { Loading } from "../Loading";

class TTRebounds extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
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
            teams_rebounds: nextProps.teams_rebounds
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
                        :
                            <Loading language = {this.props.language} />
                }
            </div>
        );
    }

}

module.exports.TTRebounds = TTRebounds;