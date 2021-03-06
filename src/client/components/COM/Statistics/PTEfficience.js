import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPEfficienceFEB, sortedPEfficienceFEB } from "../../FEBCOM/column.tables";
import "../../../css/content.css";
import { Loading } from "../Loading";

class PTEfficience extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            players_efficience: this.props.players_efficience,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            players_efficience: nextProps.players_efficience
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
                            <BootstrapTable
                                keyField = "id_player_team"
                                columns = {columnsPEfficienceFEB}
                                data = {this.state.players_efficience}
                                defaultSorted = { sortedPEfficienceFEB }
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

module.exports.PTEfficience = PTEfficience;