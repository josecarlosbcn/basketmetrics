import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings } from "../Functions";

/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "assists_pp", order: "desc" }, { stat: "turnovers_pp", order: "asc" }, { stat: "steals_pp", order: "desc" }, 
                {stat: "block_shots_pp", order: "desc"}, { stat: "fouls_cm_pp", order: "asc"}, { stat: "fouls_rv_pp", order: "desc"}];
let adv_stats = [{ stat: "assists_x_turnovers", order: "desc"}, { stat: "steals_x_turnovers", order: "desc"}];

/**
 * We receive these params:
 * 
 * id_club: ID of the club
 * team_std_stats: Standard stats from a team
 * list_teams_std_stats: List of the standard stats of all the teams
 * team_adv_stats: Advanced stats from a team
 * list_teams_adv_stats: List of the advanced stats of all the teams
 */ 

class TeamOther extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentWillMount(){
        let rankings_std_stats = getTeamRankings(this.props.list_teams_std_stats, std_stats, "id_club", this.props.id_club);
        let rankings_adv_stats = getTeamRankings(this.props.list_teams_adv_stats, adv_stats, "id_club", this.props.id_club);
        this.setState({
            rankings_std_stats: rankings_std_stats,
            rankings_adv_stats: rankings_adv_stats,
            loaded: true,
        });
    }    

    /**
     * This method is called when the component receive new props after being mounted. This is the way like father component transfer data to a son
     * component
     * 
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        let rankings_std_stats = getTeamRankings(this.props.list_teams_std_stats, std_stats, "id_club", this.props.id_club);
        let rankings_adv_stats = getTeamRankings(this.props.list_teams_adv_stats, adv_stats, "id_club", this.props.id_club);
        this.setState({
            rankings_std_stats: rankings_std_stats,
            rankings_adv_stats: rankings_adv_stats,
            loaded: true,
        });
    }  

    render(){
        return (
            (this.state.loaded) ?
                <div>
                    <Table hover striped bordered style = {{marginTop: 10 + "px"}}>
                        <thead>
                            <tr className = "font-weight-bold text-light" style = {{fontSize: 14 + "pt", backgroundColor: "#354560"}}>
                                <th>Estadísticas</th>
                                <th className = "text-center">Valor</th>
                                <th className = "text-center">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">Asistencias por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.assists_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Pérdidas por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.turnovers_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[1].color === "black" ? "black" : this.state.rankings_std_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Robos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.steals_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[2].color === "black" ? "black" : this.state.rankings_std_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Asistencias / Pérdida</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.assists_x_turnovers.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[0].color === "black" ? "black" : this.state.rankings_adv_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Robos / Pérdida</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.steals_x_turnovers.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[1].color === "black" ? "black" : this.state.rankings_adv_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tapones por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.block_shots_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[3].color === "black" ? "black" : this.state.rankings_std_stats[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Faltas cometidas por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.fouls_cm_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[4].color === "black" ? "black" : this.state.rankings_std_stats[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Faltas recibidas por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.fouls_rv_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[5].color === "black" ? "black" : this.state.rankings_std_stats[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[5].position}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
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
        );
    }
};

module.exports.TeamOther = TeamOther;