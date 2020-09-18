import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsTTSeasonsReboundsFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";

class TTSeasonsRebounds extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            team_rebounds_history: this.props.team_rebounds_history,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            team_rebounds_history: nextProps.team_rebounds_history
        });
    }    
    
    render(){
        return(
            <div>
                {
                    (this.state.loaded) ? 
                            <BootstrapTable
                                keyField = "number_row"
                                columns = {columnsTTSeasonsReboundsFEB}
                                data = {this.state.team_rebounds_history}
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

module.exports.TTSeasonsRebounds = TTSeasonsRebounds;