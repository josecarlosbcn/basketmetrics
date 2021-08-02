import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPOthersFEB, sortedPOthersFEB } from "../../FEBCOM/column.tables";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "../../../css/content.css";
import { Loading } from "../Loading";
import { Button } from "react-bootstrap";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { OtherGlosary } from "../Glosary/OtherGlosary";


class PSOthers extends Component{
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
            players_others: nextProps.players_others,
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
                        {(this.props.language === "es") ? "OTRAS" : "OTHERS"}
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
                                    keyField = "id_player_team"
                                    columns = {columnsPOthersFEB}
                                    data = {this.state.players_others}
                                    defaultSorted = { sortedPOthersFEB }
                                    footerClasses = "footer-class"
                                    noDataIndication = "En estos momentos no hay datos que ofrecer"
                                    pagination={ paginationFactory() } 
                                    striped
                                    hover
                                    condensed
                                /> 
                                <OtherGlosary show = {this.state.showGlosary} glosario = "playerOther" />
                            </div>
                        :
                            <Loading language = {this.props.language} />
                }
            </div>
        );
    }

}

module.exports.PSOthers = PSOthers;