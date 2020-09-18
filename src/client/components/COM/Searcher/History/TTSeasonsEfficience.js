import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsTTSeasonsEfficienceFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";

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
            team_advstats_history: nextProps.team_advstats_history
        });
    }    
    
    render(){
        return(
            <div>
                {
                    (this.state.loaded) ? 
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
                        :
                            <Loading language = {this.props.language} />
                }
            </div>
        );
    }

}

module.exports.TTSeasonsEfficience = TTSeasonsEfficience;