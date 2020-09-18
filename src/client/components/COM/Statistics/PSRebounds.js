import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPTReboundsFEB, sortedPTReboundsFEB } from "../../FEBCOM/column.tables";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "../../../css/content.css";
import { Loading } from "../Loading";

class PSRebounds extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            players_rebounds: this.props.players_rebounds,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            players_rebounds: nextProps.players_rebounds
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
                                keyField = "id_player_team"
                                columns = {columnsPTReboundsFEB}
                                data = {this.state.players_rebounds}
                                defaultSorted = { sortedPTReboundsFEB }
                                footerClasses = "footer-class"
                                noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                pagination={ paginationFactory() }
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

module.exports.PSRebounds = PSRebounds;