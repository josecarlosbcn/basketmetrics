import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsTTSeasonsReboundsFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";
import {Button} from "react-bootstrap";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { ReboundsGlosary } from "../../Glosary/ReboundsGlosary";

class TTSeasonsRebounds extends Component{
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
            team_rebounds_history: this.props.team_rebounds_history,
            loaded: true
        });
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.setState({
            team_rebounds_history: nextProps.team_rebounds_history,
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
                                    columns = {columnsTTSeasonsReboundsFEB}
                                    data = {this.state.team_rebounds_history}
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

module.exports.TTSeasonsRebounds = TTSeasonsRebounds;