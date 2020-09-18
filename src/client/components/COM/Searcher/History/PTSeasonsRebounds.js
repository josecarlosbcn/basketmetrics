import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPTSeasonsReboundsFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";

class PTSeasonsRebounds extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            player_rebounds_history: this.props.player_rebounds_history,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            player_rebounds_history: nextProps.player_rebounds_history
        });
    }    
    
    render(){
        return(
            <div>
                {
                    (this.state.loaded) ? 
                            <BootstrapTable
                                keyField = "number_row"
                                columns = {columnsPTSeasonsReboundsFEB}
                                data = {this.state.player_rebounds_history}
                                footerClasses = "footer-class"
                                noDataIndication = {(this.props.language === "es") ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
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

module.exports.PTSeasonsRebounds = PTSeasonsRebounds;