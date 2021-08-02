import React, {Component} from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import { getDataFromServer } from "../COM/Functions";
import { SEASONS } from "../FEBCOM/Querys";
import { TeamsStatistics } from "../COM/Statistics/TeamsStatistics";
import { PlayersStatistics} from "../COM/Statistics/PlayersStatistics";
import { Loading } from "../COM/Loading";


/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */
export default class StatsLF1Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            optionSelected: 0   //0: Teams, 1: Players
        };
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let params = [{"###id_league###" : process.env.ID_LEAGUE_LF1}];
        let seasons = await getDataFromServer(process.env.URL_FEB_API, SEASONS, params);
        this.setState({
            seasons: seasons.data.seasons,
            loaded: true
        });
    }

    handleClick(event){
        this.setState({
            optionSelected: (event.currentTarget.id === "teamsButton") ? 0 : 1
        });
    }
  

    render(){      
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div style = {{marginTop: 15 + 'px'}}>
                            <h2 elevation = {3} style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em',
                                        fontSize: 16 + "pt", fontWeight: "bold" }}>
                                ESTADÍSTICAS
                            </h2>    
                            <Row>
                                <Col md = {6}>
                                    <Button 
                                        id = "teamsButton"
                                        onClick = {(event) => this.handleClick(event)}
                                        style = {{width: 100 + "%", backgroundColor: (this.state.optionSelected === 0) ? "#007BFF" : "#6C757D"}}
                                        disabled = {(this.state.optionSelected === 0 ) ? true : false}>
                                        <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>Equipos</span>
                                    </Button>
                                </Col>
                                <Col md = {6}>
                                    <Button
                                        id = "playersButtton" 
                                        onClick = {(event) => this.handleClick(event)}
                                        style = {{width: 100 + "%", backgroundColor: (this.state.optionSelected === 1) ? "#007BFF" : "#6C757D"}}
                                        disabled = {(this.state.optionSelected === 1 ) ? true : false}>
                                        <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>Jugadoras</span>
                                    </Button>
                                </Col>
                            </Row>
                            <div id = "teamsContent" style = {{marginTop: 10 + "px", display: (this.state.optionSelected === 0) ? "block" : "none"}}>
                                <TeamsStatistics
                                    seasons = {this.state.seasons}
                                    language = "es"
                                    isFEB = {true}
                                    idLeague = {process.env.ID_LEAGUE_LF1}
                                />
                            </div>
                            <div id = "playersContent" style = {{marginTop: 10 + "px", display: (this.state.optionSelected === 1) ? "block" : "none"}}>
                                <PlayersStatistics
                                    seasons = {this.state.seasons}
                                    language = "es"
                                    isFEB = {true}
                                />
                            </div>
                        </div>            
                    :
                        <Loading language = "es" />
                }
            </div>
        )
    }
}

//module.exports.StatsLF1Content = StatsLF1Content;