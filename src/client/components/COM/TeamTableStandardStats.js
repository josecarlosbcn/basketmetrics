import React, {Component} from "react";
import {Row, Col, Button, Table, Spinner} from "react-bootstrap";
import {Determinator, MultiLang} from "react-multi-language";
import { getDataFromServer, possessions40, winloose } from "./Functions";
import { TablesCompetition, TableGames } from "./Tables";
import {GAME_STATS_BY_TEAM, TEAM_COMPETITION_STATS, RATIOS_N_POSSESSIONS} from "../FEBCOM/Querys";
import {GAME_STATS_BY_TEAM_FIBA, TEAM_COMPETITION_STATS_FIBA, RATIOS_N_POSSESSIONS_FIBA} from "../FIBACOM/Querys";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';



class TeamTableStandardStats extends Component {
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
        console.log("TeamTableStandardStats::getData");
        let params = [
            {"###id_team_club###": this.props.id_team},
            {"###id_competition###": this.props.id_competition}
        ];
        let team_games_stats = {};
        let team_comp_stats = {};
        let team_ratios_poss = {};
        let pos40;
        let other_stats;
        if (this.props.isFEB){
            team_games_stats = await getDataFromServer(process.env.URL_FEB_API, GAME_STATS_BY_TEAM, params);
            team_comp_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_COMPETITION_STATS, params);
            team_ratios_poss = await getDataFromServer(process.env.URL_FEB_API, RATIOS_N_POSSESSIONS, params);    
            pos40 = possessions40(team_ratios_poss.data.team_adv_stats_by_comp[0].possessions_x_minute);
            other_stats = winloose(team_games_stats, team_comp_stats);
        }else{
            team_games_stats = await getDataFromServer(process.env.URL_FIBA_API, GAME_STATS_BY_TEAM_FIBA, params);
            team_comp_stats = await getDataFromServer(process.env.URL_FIBA_API, TEAM_COMPETITION_STATS_FIBA, params);
            team_ratios_poss = await getDataFromServer(process.env.URL_FIBA_API, RATIOS_N_POSSESSIONS_FIBA, params);
            pos40 = possessions40(team_ratios_poss.data.team_adv_stats_by_comp[0].possessions_x_minute);
            other_stats = winloose(team_games_stats, team_comp_stats);
        }
        console.log("getData() => Before setState");
        this.setState({
            loaded: true,
            team_games_stats: team_games_stats.data.game_stats_by_team,
            team_comp_stats: team_comp_stats.data.team_comp_stats,
            other_stats: {
                "wins"          : other_stats.wins,
                "loosses"       : other_stats.loose,
                "p_wins"     : other_stats.p_wins,
                "margin_points" : other_stats.margin,
                "p_reb_def"     : team_ratios_poss.data.team_adv_stats_by_comp[0].p_reb_def.toFixed(2),
                "p_reb_of"      : team_ratios_poss.data.team_adv_stats_by_comp[0].p_reb_of.toFixed(2),
                "assists_x_turnovers"   : team_ratios_poss.data.team_adv_stats_by_comp[0].assists_x_turnovers.toFixed(2),
                "steals_x_turnovers"    : team_ratios_poss.data.team_adv_stats_by_comp[0].steals_x_turnovers.toFixed(2),
                "ortg"          : (team_ratios_poss.data.team_adv_stats_by_comp[0].ortg).toFixed(2),
                "drtg"          : (team_ratios_poss.data.team_adv_stats_by_comp[0].drtg).toFixed(2),
                "pos40"         : pos40
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
                            (this.state.team_comp_stats[0].games > 1) ?
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
                                        <TablesCompetition 
                                            tcs = {this.state.team_comp_stats[0]}
                                            os = {this.state.other_stats}
                                            isFEB = {true}
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
                            <TableGames 
                                dataGame = {this.state.team_games_stats}
                                isFEB = {this.props.isFEB}
                            />
                        </div>
                    </div>
                    :
                    <h5>
                        <Determinator>
                            {{
                                es: "Cargando datos ...",
                                en: "Loading data ..."
                            }}
                        </Determinator>
                    </h5>                     
                }
                <MultiLang lang = {this.state.lang} />
            </div>
        )
    }
}

module.exports.TeamTableStandardStats = TeamTableStandardStats;