import React, {Component} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { TEAMS_BY_SEASON, PLAYERS_STDSTATS_BY_TEAM, PLAYERS_ADVSTATS_BY_TEAM, PLAYERS_STD_STATS, PLAYERS_SEASON_ADV_STATS} from "../../FEBCOM/Querys";
import { TEAMS_BY_SEASON_FIBA, PLAYERS_STDSTATS_BY_TEAM_FIBA, PLAYERS_ADVSTATS_BY_TEAM_FIBA, PLAYERS_STD_STATS_FIBA, PLAYERS_SEASON_ADV_STATS_FIBA} from "../../FIBACOM/Querys";
import { getDataFromServer, setSpanishFormat, reducePlayerStats } from "../Functions";
import { Loading } from "../Loading";
import "../../../css/content.css";
import { PTShooting } from "./PTShooting";
import { PTRebounds } from "./PTRebounds";
import { PTEfficience } from "./PTEfficience";
import { PTOthers } from "./PTOthers";
import { PSShooting } from "./PSShooting";
import { PSRebounds } from "./PSRebounds";
import { PSEfficience } from "./PSEfficience";
import { PSOthers } from "./PSOthers";

class PlayersStatistics extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false,
            players_std_stats: [],
            players_adv_stats: [],
            players_rebounds: [],
            players_efficience: [],
            players_others: []
        };
    }

    componentDidMount(){
        console.log("PlayersStatistics loaded");
        this.setState({
            seasons: this.props.seasons,
            loaded: true,
            itemSeasonSelected: 0,
            itemTeamSelected: 0,
            itemPlayers: 0, //0: Players by Team, 1: All players
            players_season_stdstats: [],
            players_season_advstats: [],
            players_season_rebounds: [],
            players_season_efficience: [],
            players_season_others: []
        });
    }

    /**
     * Return data for Others advanced stats for players 
     * 
     * @param {*} players_std_stats 
     * @param {*} players_adv_stats 
     */
    generateDataOthers(players_std_stats, players_adv_stats){
        let data = [];
        data = players_std_stats.map((item_std) => {
            let item = players_adv_stats.find((item_adv) => {
                if (typeof item_adv.id_player !== "undefined" && typeof item_std.id_player !== "undefined"){
                    return parseInt(item_adv.id_player) === parseInt(item_std.id_player);
                }else{
                    return parseInt(item_adv.id_player_team) === parseInt(item_std.id_player_team);                    
                }
            });
            return{
                id_player_team: (typeof item_std.id_player !== "undefined") ? item_std.id_player : item_std.id_player_team,
                name_player: item_std.name_player,
                dre: item.dre,
                game_score: item.game_score,
                p_assists: item.p_assists,
                assists_x_turnovers: item.assists_x_turnovers,
                assists_ratio: item.assists_ratio,
                p_steals: item.p_steals,
            };
        });
        return data;
    }

    /**
     * Return data from Efficience advanced stats for players
     * 
     * @param {*} players_std_stats 
     * @param {*} players_adv_stats 
     */
    generateDataEfficience(players_std_stats, players_adv_stats){
        let data = [];
        data = players_std_stats.map((item_std) => {
            let item = players_adv_stats.find((item_adv) => {
                if (typeof item_adv.id_player !== "undefined" && typeof item_std.id_player !== "undefined"){
                    return parseInt(item_adv.id_player) === parseInt(item_std.id_player);
                }else{
                    return parseInt(item_adv.id_player_team) === parseInt(item_std.id_player_team);                    
                }
            });
            return{
                id_player_team: (typeof item_std.id_player !== "undefined") ? item_std.id_player : item_std.id_player_team,
                name_player: item_std.name_player,
                pointsbyposs: item_std.pointsbyposs,
                ppa: item_std.ppa,
                usg: item.usg,
                etc: item.etc,
                ts: item.ts,
                ortg: item.ortg,
                drtg: item.drtg,
                nrtg: item.nrtg
            };
        });
        return data;
    }

    /**
     * Return data from rebounds stats for players. To avoid problems with id_player_team duplicated 
     * 
     * @param {*} players_std_stats 
     * @param {*} players_adv_stats 
     */
    generateDataRebounds(players_std_stats, players_adv_stats){
        let data = [];
        data = players_std_stats.map((item_std) => {
            let item = players_adv_stats.find((item_adv) => {
                if (typeof item_adv.id_player !== "undefined" && typeof item_std.id_player !== "undefined"){
                    return parseInt(item_adv.id_player) === parseInt(item_std.id_player);
                }else{
                    return parseInt(item_adv.id_player_team) === parseInt(item_std.id_player_team);                    
                }
            });
            return{
                id_player_team: (typeof item_std.id_player !== "undefined") ? item_std.id_player : item_std.id_player_team,
                name_player: item_std.name_player,
                rd: item_std.rd,
                reb_def_pp: item_std.reb_def_pp,
                ro: item_std.ro,
                reb_of_pp: item_std.reb_of_pp,
                tot_reb: item_std.tot_reb,
                total_rebs_pp: item_std.total_rebs_pp,
                p_reb_def: item.p_reb_def,
                p_reb_of: item.p_reb_of,
                p_tot_reb: item.p_tot_reb
            };
        });
        return data;
    }

    /**
     * Returns team options for combo
     */
    getTeamsOptions(){
        let items = this.state.teams.map((team, index) => {
            return(<option key = {team.id} value = {team.id}>{team.name}</option>);    
        });
        items.push(<option key = {0} value = {0}>{(this.props.language === "es") ? "Selecciona equipo ..." :  "Select team ..."}</option>)
        return items;               
    }

    /**
     * Returns seasons options for combo
     */
    getSeasonsOptions(){
        let items = [];
        items.push(<option key = {0} value = {0}>{(this.props.language === "es") ? "Selecciona temporada ..." :  "Select season ..."}</option>);
        let items2 = this.state.seasons.map((season, index) => {
            if (index != 0)
                return(<option key = {season.id} value = {season.id}>{season.description}</option>);
            else{
                return(<option key = {season.id} value = {season.id} defaultValue>{season.description}</option>);
            }
                
        });
        return items.concat(items2);               
    }      
    
    async handleChange(event){
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();

        let itemSeasonSelected = event.target.value;
        if (event.target.id === "seasons"){
            //Season selected
            let params = [{"###id_season###": event.target.value}];
            if (!this.props.isFEB)
                params.push({"###id_league###" : this.props.idLeague});
            let teams = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_BY_SEASON : TEAMS_BY_SEASON_FIBA, params);
            this.setState({
                itemSeasonSelected: parseInt(itemSeasonSelected),
                teams: teams.data.teams_by_season
            }, () => {
                //Update the select of teams
                let teams = this.getTeamsOptions();
                this.setState({
                    listTeams: teams,
                    itemTeamSelected: 0,
                    itemPlayers: 0,
                    players_season_stdstats: [],
                    players_season_advstats: []
                })
            })
        };
       
        if (event.target.id === "teams"){
            //Team selected
            let itemTeamSelected = event.target.value;
            let params = [{"###id_team_club###": itemTeamSelected}];
            let players_std_stats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? PLAYERS_STDSTATS_BY_TEAM : PLAYERS_STDSTATS_BY_TEAM_FIBA, params);
            players_std_stats = (this.props.language === "es") ? setSpanishFormat(players_std_stats.data.players_stdstats_by_team) : players_std_stats.data.players_stdstats_by_team;
            let players_adv_stats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? PLAYERS_ADVSTATS_BY_TEAM : PLAYERS_ADVSTATS_BY_TEAM_FIBA, params);
            players_adv_stats = (this.props.language === "es") ? setSpanishFormat(players_adv_stats.data.players_advstats_by_team) : players_adv_stats.data.players_advstats_by_team  
            let dataRebounds = this.generateDataRebounds(players_std_stats, players_adv_stats);
            let efficience = this.generateDataEfficience(players_std_stats, players_adv_stats);
            let others = this.generateDataOthers(players_std_stats, players_adv_stats);
            this.setState({
                itemTeamSelected: itemTeamSelected,
                players_std_stats: players_std_stats,
                players_adv_stats: players_adv_stats,
                players_rebounds: dataRebounds,
                players_efficience: efficience,
                players_others: others
            });
        }
    }

    async handleClick(event){
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();

        if ((event.currentTarget.id === "playersByTeam") || (event.currentTarget.id === "allPlayers")){
            //We modify the visibility and disability of the layers and buttons
            this.setState({
                itemPlayers: (event.currentTarget.id === "playersByTeam") ? 0 : 1,
            });
            //Now, we have to ask data for players for a whole season ONLY if there are no data about players
            if ((event.currentTarget.id === "allPlayers") && (this.state.players_season_stdstats.length === 0)) {
                let params = [{"###id_season###": this.state.itemSeasonSelected}];
                let players_season_stdstats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? PLAYERS_STD_STATS : PLAYERS_STD_STATS_FIBA, params);
                let players_season_advstats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? PLAYERS_SEASON_ADV_STATS : PLAYERS_SEASON_ADV_STATS_FIBA, params);
                //We can get more than one row for a player if she has been playing in different temas the same season
                //So, we have to reduce to only one row adding the values of all rows
                players_season_stdstats = reducePlayerStats(players_season_stdstats.data.players_std_stats);
                players_season_advstats = reducePlayerStats(players_season_advstats.data.players_adv_stats);
                players_season_stdstats = (this.props.language === "es") ? setSpanishFormat(players_season_stdstats) : players_season_stdstats
                players_season_advstats = (this.props.language === "es") ? setSpanishFormat(players_season_advstats) : players_season_advstats 
                let dataRebounds = this.generateDataRebounds(players_season_stdstats, players_season_advstats);
                let efficience = this.generateDataEfficience(players_season_stdstats, players_season_advstats);
                let others = this.generateDataOthers(players_season_stdstats, players_season_advstats);

                this.setState({
                    players_season_stdstats: players_season_stdstats,
                    players_season_advstats: players_season_advstats,
                    players_season_rebounds: dataRebounds,
                    players_season_efficience: efficience,
                    players_season_others: others,
                })
            }
        }
    }    

    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <Form.Control as="select" 
                                id = "seasons"
                                style = {{marginTop: 10 + "px", fontSize: 14 + "pt", fontWeight: "bold"}}
                                value = {this.state.itemSeasonSelected}
                                onChange = {event => this.handleChange(event)}>
                                    {this.getSeasonsOptions()}
                            </Form.Control> 
                            <div style = {{marginTop: 10 + "px", display: (this.state.itemSeasonSelected) ? "block" : "none"}}>
                                <Row>
                                    <Col md = {6}>
                                        <Button 
                                            id = "playersByTeam"
                                            onClick = {(event) => this.handleClick(event)}
                                            style = {{width: 100 + "%", backgroundColor: (this.state.itemPlayers === 0) ? "#007BFF" : "#6C757D"}}
                                            disabled = {(this.state.itemPlayers === 0 ) ? true : false}>
                                            <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>
                                                {(this.props.language === "es") ? "Por Equipos" : "By Teams"}
                                            </span>
                                        </Button>
                                    </Col>
                                    <Col md = {6}>
                                        <Button 
                                            id = "allPlayers"
                                            onClick = {(event) => this.handleClick(event)}
                                            style = {{width: 100 + "%", backgroundColor: (this.state.itemPlayers === 1) ? "#007BFF" : "#6C757D"}}
                                            disabled = {(this.state.itemPlayers === 1) ? true : false}>
                                            <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>
                                                {(this.props.language === "es") ? "Todas las jugadoras" : "All players"}
                                            </span>
                                        </Button>
                                    </Col>
                                </Row>
                                <div style = {{display: (this.state.itemPlayers === 0) ? "block" : "none"}}>
                                    <Form.Control as="select" 
                                    id = "teams"
                                    style = {{marginTop: 10 + "px", fontSize: 14 + "pt", fontWeight: "bold", display: (this.state.itemSeasonSelected !== 0) ? "block" : "none"}}
                                    value = {this.state.itemTeamSelected}
                                    onChange = {event => this.handleChange(event)}>
                                        {this.state.listTeams}
                                    </Form.Control> 
                                    <div style = {{marginTop: 10 + "px", display: (this.state.itemTeamSelected !== 0) ? "block" : "none"}}>
                                        <PTShooting
                                            language = {this.props.language}
                                            players_std_stats = {this.state.players_std_stats}
                                        />                             
                                        <PTRebounds
                                            language = {this.props.language}
                                            players_rebounds = {this.state.players_rebounds}
                                        />                          
                                        <PTEfficience
                                            language = {this.props.language}
                                            players_efficience = {this.state.players_efficience}
                                        />                          
                                        <PTOthers
                                            language = {this.props.language}
                                            players_others = {this.state.players_others}
                                        />                
                                    </div>
                                </div>
                                <div style = {{display: (this.state.itemPlayers === 1 && this.state.players_season_stdstats.length > 0) ? "block" : "none"}}>
                                    <PSShooting
                                        language = {this.props.language}
                                        players_std_stats = {this.state.players_season_stdstats}
                                    />                             
                                    <PSRebounds
                                        language = {this.props.language}
                                        players_rebounds = {this.state.players_season_rebounds}
                                    />                          
                                    <PSEfficience
                                        language = {this.props.language}
                                        players_efficience = {this.state.players_season_efficience}
                                    />                          
                                    <PSOthers
                                        language = {this.props.language}
                                        players_others = {this.state.players_season_others}
                                    />          
                                </div>
                            </div>
                        </div>
                        :
                        <Loading
                            language = {this.props.language}
                        />
                }
            </div>
        );
    }
}

module.exports.PlayersStatistics = PlayersStatistics;