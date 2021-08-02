import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsPTSeasonsOthersFEB } from "../../../FEBCOM/column.tables";
import "../../../../css/content.css";
import { Loading } from "../../Loading";
import { Button } from "react-bootstrap";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { OtherGlosary } from "../../Glosary/OtherGlosary";


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
            player_others_history: nextProps.player_others_history,
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
                                    columns = {columnsPTSeasonsOthersFEB}
                                    data = {this.state.player_others_history}
                                    footerClasses = "footer-class"
                                    noDataIndication = "En estos momentos no hay datos que ofrecer" 
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

module.exports.PTSeasonsOthers = PTSeasonsOthers;