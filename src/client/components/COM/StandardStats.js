import React, {Component} from "react";
import {Row, Col, Button, Table, Spinner} from "react-bootstrap";
import { getDataFromServer } from "./Functions";
import {COMPETITIONS_BY_TEAM} from "../FEBCOM/Querys";
import {COMPETITIONS_BY_TEAM_FIBA} from "../FIBACOM/Querys";
import "../../css/content.css";
import {TeamTableStandardStats} from "./TeamTableStandardStats";


class StandardStats extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            competitions: {},
            lang: (props.id_league == process.env.ID_LEAGUE_LF1 || props.id_league == process.env.ID_LEAGUE_LF2) ? "es" : "en",
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
                        <TeamTableStandardStats
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
                        <div style = {{marginTop: 10 + "px"}}>
                            <Button variant="dark" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">
                                    Cargando datos
                                </span>
                            </Button>{' '}
                            <Button variant="dark" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                                    Cargando datos
                            </Button>                    
                        </div>                    
                }
            </div>
        )
    }
}

module.exports.StandardStats = StandardStats;