import React, {Component} from "react";
import {Row, Col } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getDataFromServer }  from "../COM/Functions";
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo';
import {Link} from "react-router-dom";
import Tooltip from "react-simple-tooltip";
import {EUROLEAGUE_NEXT_GAMES, SEASONS_FIBA, TEAMS_SEASON_STD_STATS_FIBA, 
        TEAMS_SEASON_ADV_STATS_FIBA, PLAYERS_STD_STATS_FIBA_3, PLAYERS_SEASON_ADV_STATS_FIBA_3 } from "../FIBACOM/Querys";
import { columnsNextGames, sortedNextGames } from "../FIBACOM/column.tables";
import { Loading } from "../COM/Loading";
import {TeamsTables} from "../COM/Tables/TeamsTables";
import {PlayersTables} from "../COM/Tables/PlayersTables";

export default class HomeEURContent extends Component{
    constructor(){
        super();
        this.state = {
            loaded: false,
            games: {},  //Games
            seasons: {}     //Seasons
        };
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let params = [{"###id_league###" : process.env.ID_LEAGUE_EUR}];
        let seasons = await getDataFromServer(process.env.URL_FIBA_API, SEASONS_FIBA, params);
        let games = await getDataFromServer(process.env.URL_FIBA_API, EUROLEAGUE_NEXT_GAMES);
        params = [{"###id_season###": process.env.CURRENT_SEASON_EUROLEAGUE}];
        let tss = await getDataFromServer(process.env.URL_FIBA_API, TEAMS_SEASON_STD_STATS_FIBA, params);
        let tas = await getDataFromServer(process.env.URL_FIBA_API, TEAMS_SEASON_ADV_STATS_FIBA, params);
        params = [{"###id_season###": process.env.CURRENT_SEASON_EUROLEAGUE}, {"###groups###": process.env.GROUPS_EUROLEAGUE}];
        let pss = await getDataFromServer(process.env.URL_FIBA_API, PLAYERS_STD_STATS_FIBA_3, params);
        let pas = await getDataFromServer(process.env.URL_FIBA_API, PLAYERS_SEASON_ADV_STATS_FIBA_3, params);
        this.setState({
            seasons: seasons,
            games: games,
            tss: tss.data.teams_stdstats_by_season,
            tas: tas.data.teams_advstats_by_season,
            pss: pss.data.players_std_stats,
            pas: pas.data.players_adv_stats,
            loaded: true
        });          
    }

    render(){
        var ng = this.state.loaded ? this.state.games.data.euroleague_nextgameday : [];
        var season = this.state.loaded ? "/ " + this.state.seasons.data.seasons[0].description : [];

        /**
         * Data
         */
        let games = ng.map(game => {
            let url = "women-euroleague/previa/" + game.home_url_name + "-" + game.away_url_name + "/" + game.id; 
            let competition = game.jornada !== null ? game.competition + " (" + game.jornada + ")" : game.competition;
            return {
                id: game.id, 
                fecha: game.date, 
                competicion: competition,
                partido: game.home_team + " - " + game.away_team,
                enlace: <Tooltip content = "Ver previa"><Link to = {url}><OnDemandVideoIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>
            }
        });

        const HeaderNextGames = () => <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em' }}>Próximos Partidos {season}</h4>
        const HeaderTeams = () => <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em' }}>Equipos</h4>
        const HeaderPlayers = () => <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em' }}>Jugadoras</h4>
  
        return(
            <div style = {{marginTop: 15 + 'px'}}>                          
                <Row style = {{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                    <Col md = {12}>
                        {                                
                            (this.state.loaded) ? 
                                <div>
                                    <HeaderNextGames />
                                    <BootstrapTable 
                                        keyField='id'                                         
                                        data={ games } 
                                        columns={ columnsNextGames }
                                        defaultSorted = { sortedNextGames }
                                        noDataIndication = "Ahora mismo, no hay datos disponibles"
                                        pagination={ paginationFactory() }
                                        striped
                                        hover
                                        condensed                      
                                    />
                                </div>
                            :
                                <Loading language = "es" />                                                         
                        }  
                    </Col>
                </Row>                             
                <Row>
                    <Col md = {12}>
                        {
                            (this.state.loaded) ?
                                <div>
                                    <HeaderTeams />
                                    <TeamsTables 
                                        tss = {this.state.tss}
                                        tas = {this.state.tas}
                                    />
                                </div>
                            :
                                <Loading language = "es" />
                        }
                    </Col>
                    <Col md = {12}>
                        {
                            (this.state.loaded) ?
                                <div>
                                    <HeaderPlayers />
                                    <PlayersTables
                                        pss = {this.state.pss}
                                        pas = {this.state.pas}
                                    />
                                </div>
                            :
                            <Loading language = "es" />
                        }
                    </Col>
                </Row>     
            </div>
        )
    }
}

//module.exports.HomeEURContent = HomeEURContent;