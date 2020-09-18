import React, {Component} from "react";
import {Determinator, MultiLang} from "react-multi-language";
import { getDataFromServer, ranking } from "./Functions";
import { TCAdvStats, TGAdvStats } from "./Tables";
import {GAME_STATS_BY_TEAM, TEAM_COMPETITION_ADVANCED_STATS, 
        TEAMS_ADVANCED_STATS_BY_COMPETITION, TEAM_GAME_ADVANCED_STATS} from "../FEBCOM/Querys";
import {GAME_STATS_BY_TEAM_FIBA, TEAM_COMPETITION_ADVANCED_STATS_FIBA, 
        TEAMS_ADVANCED_STATS_BY_COMPETITION_FIBA, TEAM_GAME_ADVANCED_STATS_FIBA} from "../FIBACOM/Querys";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Button, Spinner} from "react-bootstrap";


class TeamTableAdvancedStats extends Component {
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false,
            lang: "es",
            showGames: false,
            showCompStats: false
        };
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        console.log("TeamTableAdvancedStats::getData");
        let params = [
            {"###id_team_club###": this.props.id_team},
            {"###id_competition###": this.props.id_competition}
        ];
        let team_games_stats = {};
        let tc_advanced_stats = {};
        let tg_advanced_stats = {};
        let tasc  = {};
        let tgadvs = {};
        if (this.props.isFEB){
            team_games_stats = await getDataFromServer(process.env.URL_FEB_API, GAME_STATS_BY_TEAM, params);
            tc_advanced_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_COMPETITION_ADVANCED_STATS, params);
            tasc = await getDataFromServer(process.env.URL_FEB_API, TEAMS_ADVANCED_STATS_BY_COMPETITION, params);
            tgadvs = await getDataFromServer(process.env.URL_FEB_API, TEAM_GAME_ADVANCED_STATS, params); 
        }else{
            team_games_stats = await getDataFromServer(process.env.URL_FIBA_API, GAME_STATS_BY_TEAM_FIBA, params);
            tc_advanced_stats = await getDataFromServer(process.env.URL_FIBA_API, TEAM_COMPETITION_ADVANCED_STATS_FIBA, params);
            tasc = await getDataFromServer(process.env.URL_FIBA_API, TEAMS_ADVANCED_STATS_BY_COMPETITION_FIBA, params);
            tgadvs = await getDataFromServer(process.env.URL_FIBA_API, TEAM_GAME_ADVANCED_STATS_FIBA, params);
        }
        console.log("getData() => Before setState");
        this.setState({
            loaded: true,
            team_games_stats: team_games_stats.data.game_stats_by_team,
            tc_advanced_stats: tc_advanced_stats.data.team_adv_stats_by_comp,
            tgadvs: tgadvs.data.tg_adv_stats,
            rankings: {
                ppg: ranking(tasc.data.tas_by_comp, "id_team_club", "possessions", this.props.id_team, false),
                ppm: ranking(tasc.data.tas_by_comp, "id_team_club", "possessions_x_minute", this.props.id_team, false),
                ast: ranking(tasc.data.tas_by_comp, "id_team_club", "assists_x_turnovers", this.props.id_team, false),
                stt: ranking(tasc.data.tas_by_comp, "id_team_club", "steals_x_turnovers", this.props.id_team, false),
                ts:  ranking(tasc.data.tas_by_comp, "id_team_club", "ts", this.props.id_team, false),
                ortg: ranking(tasc.data.tas_by_comp, "id_team_club", "ortg", this.props.id_team, false),
                drtg: ranking(tasc.data.tas_by_comp, "id_team_club", "drtg", this.props.id_team, true),
                nrtg: ranking(tasc.data.tas_by_comp, "id_team_club", "nrtg", this.props.id_team, false)
            }                    
        }, () => {
            //console.log("loaded!!!");
        });
    }

    changeDisplay(){
        this.setState((prevState) => {
            return{
                showGames: !prevState.showGames
            };
        });
    }

    changeDisplayCompStats(){
        this.setState((prevState) => {
            return{
                showCompStats: !prevState.showCompStats
            };
        });
    }

    render(){
        return(
            <div>
                {
                (this.state.loaded) ?
                    <div>
                        {
                            (this.state.tc_advanced_stats[0].games > 1) ?
                                <div>
                                    <h5 className = "title-header-2">
                                        <Determinator>
                                            {{
                                                es: "Agregado",
                                                en: "Accumulated"
                                            }}
                                        </Determinator>&nbsp;&nbsp;&nbsp;
                                        <AddCircleOutlineIcon style = {{cursor: "pointer", display: this.state.showCompStats && "none"}} onClick = {() => this.changeDisplayCompStats()} />
                                        <RemoveCircleIcon style = {{cursor: "pointer", display: !this.state.showCompStats && "none"}} onClick = {() => this.changeDisplayCompStats()} />
                                    </h5>
                                    <div style = {{display: this.state.showCompStats ? "block" : "none"}}>
                                        <TCAdvStats 
                                            tas = {this.state.tc_advanced_stats[0]}
                                            rankings = {this.state.rankings}
                                            isFEB = {this.props.isFEB}
                                        />
                                    </div>
                                </div>
                                :
                                <div></div>
                        }
                        <h5 className = "title-header-2" style = {{marginTop: 10 + "px"}}>

                            <Determinator>
                                {{
                                    es: "Partidos",
                                    en: "Games"
                                }}
                            </Determinator>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <AddCircleOutlineIcon style = {{cursor: "pointer", display: this.state.showGames && "none"}} onClick = {() => this.changeDisplay()} />
                            <RemoveCircleIcon style = {{cursor: "pointer", display: !this.state.showGames && "none"}} onClick = {() => this.changeDisplay()} />
                        </h5>
                        <div style = {{display: this.state.showGames ? "block" : "none"}}>
                            <TGAdvStats 
                                dataGame = {this.state.team_games_stats}
                                gamesAdvStats = {this.state.tgadvs}
                                isFEB = {this.props.isFEB}
                            />
                        </div>
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
                                    <Determinator>
                                        {{
                                            es: "Cargando datos ...",
                                            en: "Loading data ..."
                                        }}
                                    </Determinator>
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
                                    <Determinator>
                                        {{
                                            es: "Cargando datos ...",
                                            en: "Loading data ..."
                                        }}
                                    </Determinator>
                            </Button>                    
                        </div>                                         
                }
                <MultiLang lang = {this.state.lang} />
            </div>
        )
    }
}

module.exports.TeamTableAdvancedStats = TeamTableAdvancedStats;