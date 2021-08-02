import React, {Component} from "react";
import {Row, Col, Button, Table, Spinner} from "react-bootstrap";
import { getDataFromServer } from "./Functions";
import {COMPETITIONS_BY_TEAM} from "../FEBCOM/Querys";
import {COMPETITIONS_BY_TEAM_FIBA} from "../FIBACOM/Querys";
import "../../css/content.css";
import {TeamTableAdvancedStats} from "./TeamTableAdvancedStats";
import { Loading } from "./Loading";


class AdvancedStats extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            competitions: {},
            lang: "es",
            loaded: false,
        };
    }

    componentDidMount(){
        this.getData();
    }

    /**
     * This method is called by the father component.
     */
    doReload(){
        this.getData();
        this.forceUpdate(); //We force the rerender of the component    
    }

    async getData(){
        let params = [{"###id_team###": this.props.id_team}];
        let comps  = {};
        if (this.props.isFEB)
            comps = await getDataFromServer(process.env.URL_FEB_API, COMPETITIONS_BY_TEAM, params);
        else
            comps = await getDataFromServer(process.env.URL_FIBA_API, COMPETITIONS_BY_TEAM_FIBA, params);    

        this.setState({
            competitions: comps.data.competitions_by_team,
            loaded: true, 
        });                
    }

    render(){
        const CompetitionsData = () => {
            return this.state.competitions.map((comp) => {
                //We add key parameter to avoid a warning in javascript console. In a list of elements have been a parameter called key which can be an
                //index of the list
                return (
                    <div key = {comp.id}>
                        <h4 className = "title-header">{comp.name}</h4>                        
                        <TeamTableAdvancedStats
                            id_team = {this.props.id_team}
                            id_competition = {comp.id}
                            isFEB = {this.props.isFEB}
                        />
                    </div>
                )
            })
        };        

        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <CompetitionsData />                    
                        </div>
                    :
                        <Loading language = "es" />
                }
            </div>
        )
    }
}

module.exports.AdvancedStats = AdvancedStats;