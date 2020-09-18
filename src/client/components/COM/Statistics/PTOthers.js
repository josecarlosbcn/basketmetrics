import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPOthersFEB, sortedPOthersFEB } from "../../FEBCOM/column.tables";
import "../../../css/content.css";
import { Loading } from "../Loading";

class PTOthers extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            players_others: this.props.players_others,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            players_others: nextProps.players_others
        });
    }    
    
    render(){
        return(
            <div>
                <div className = "text-center text-light" 
                        style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                        {(this.props.language === "es") ? "OTRAS" : "OTHERS"}
                </div>
                {
                    (this.state.loaded) ? 
                            <BootstrapTable
                                keyField = "id_player_team"
                                columns = {columnsPOthersFEB}
                                data = {this.state.players_others}
                                defaultSorted = { sortedPOthersFEB }
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

module.exports.PTOthers = PTOthers;