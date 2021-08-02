import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings, removeItem } from "../../COM/Functions";

/**
 * To build the ranking of opponent stats we've got a list of standard stats and advanced stats of all teams. So, we remove the row who belongs
 * to the team and we switch with the standard stats or advanced stats in the list. Then, we are going to build the ranking between what make
 * the opponents teams agains the team and what make the rest of the teams.
 */


/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "minutes", order: "desc"}, { stat: "reb_def", order: "desc"}, { stat: "reb_of", order: "desc"},
                { stat: "total_rebs", order: "desc"}, { stat: "assists", order: "desc"}, { stat: "turnovers", order: "asc"}, 
                { stat: "steals", order: "desc"}, { stat: "block_shots", order: "desc"}, { stat: "fouls_cm", order: "asc"},
                { stat: "fouls_rv", order: "desc"}];

/**
 * We receive these params
 * id_club: ID of the club
 * team_opp_std_stats: Standard stats of the opponent teams
 * list_teams_std_stats: List of the standard stats of all the teams
 */                


class TeamOppOtherTotals extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentWillMount(){
        let list = removeItem(this.props.list_teams_std_stats, "id_club", this.props.id_club);
        list.push(this.props.team_opp_std_stats);
        let rankings_std_stats = getTeamRankings(list, std_stats, "id_club", this.props.id_club);
        this.setState({
            rankings_std_stats: rankings_std_stats,
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
        let list = removeItem(this.props.list_teams_std_stats, "id_club", this.props.id_club);
        list.push(this.props.team_opp_std_stats);
        let rankings_std_stats = getTeamRankings(list, std_stats, "id_club", this.props.id_club);
        this.setState({
            rankings_std_stats: rankings_std_stats,
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
                                <td className = "font-weight-bold">Minutos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.minutes}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Rebotes Defensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.reb_def}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[1].color === "black" ? "black" : this.state.rankings_std_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Rebotes Ofensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.reb_of}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[2].color === "black" ? "black" : this.state.rankings_std_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Total rebotes</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.total_rebs}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[3].color === "black" ? "black" : this.state.rankings_std_stats[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Asistencias</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.assists}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[4].color === "black" ? "black" : this.state.rankings_std_stats[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Pérdidas</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.turnovers}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[5].color === "black" ? "black" : this.state.rankings_std_stats[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[5].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Robos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.steals}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[6].color === "black" ? "black" : this.state.rankings_std_stats[6].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[6].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tapones</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.block_shots}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[7].color === "black" ? "black" : this.state.rankings_std_stats[7].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[7].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Faltas Cometidas</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.fouls_cm}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[8].color === "black" ? "black" : this.state.rankings_std_stats[8].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[8].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Faltas Recibidas</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_opp_std_stats.fouls_rv}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[9].color === "black" ? "black" : this.state.rankings_std_stats[9].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[9].position}
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

module.exports.TeamOppOtherTotals = TeamOppOtherTotals;