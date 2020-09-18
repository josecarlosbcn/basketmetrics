import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPTSeasonsOthersFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";

class PTSeasonsOthers extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            player_others_history: this.props.player_others_history,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            player_others_history: nextProps.player_others_history
        });
    }    
    
    render(){
        return(
            <div>
                {
                    (this.state.loaded) ? 
                            <BootstrapTable
                                keyField = "number_row"
                                columns = {columnsPTSeasonsOthersFEB}
                                data = {this.state.player_others_history}
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

module.exports.PTSeasonsOthers = PTSeasonsOthers;