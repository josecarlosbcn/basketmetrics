import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings } from "../Functions";

/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "total_puntos_pp", order: "desc"}];
let adv_stats = [{ stat: "ortg", order: "desc"}, { stat: "drtg", order: "asc"}, { stat: "nrtg", order: "desc"}, { stat: "pbg", order: "desc"},
                { stat: "possessions_x_minute", order: "desc"}];
let margin_stats = [{ stat: "opp_points_pg", order : "asc"}, { stat: "margin_pg", order: "desc"}];
let wins_stats = [{ stat: "wins", order : "desc"}, { stat: "defeats", order: "asc"}, { stat: "p_wins", order: "desc"}];


/**
 * We receive these params:
 * 
 * id_club: ID of the club
 * team_std_stats: Standard stats from a team
 * list_teams_std_stats: List of the standard stats of all the teams
 * team_adv_stats: Advanced stats from a team
 * list_teams_adv_stats: List of the advanced stats of all the teams
 * team_margins: Margins of victory and defeat of a team
 * list_teams_margins: Lists os margins of victory and defeat of all the teams
 * team_wins: Number of wins and defeats of a team
 * list_teams_wins: List of wins and defeats for each team   
 */                

class TeamSeason extends Component{
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
        let rankings_margins = getTeamRankings(this.props.list_teams_margins, margin_stats, "id_club", this.props.id_club);
        let rankings_wins = getTeamRankings(this.props.list_teams_wins, wins_stats, "id_club", this.props.id_club);
        this.setState({
            rankings_std_stats: rankings_std_stats,
            rankings_adv_stats: rankings_adv_stats,
            rankings_margins: rankings_margins,
            rankings_wins: rankings_wins,
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
        let rankings_margins = getTeamRankings(this.props.list_teams_margins, margin_stats, "id_club", this.props.id_club);
        let rankings_wins = getTeamRankings(this.props.list_teams_wins, wins_stats, "id_club", this.props.id_club);
        this.setState({
            rankings_std_stats: rankings_std_stats,
            rankings_adv_stats: rankings_adv_stats,
            rankings_margins: rankings_margins,
            rankings_wins: rankings_wins,
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
                                <td className = "font-weight-bold">Victorias</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_wins.wins}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_wins[0].color === "black" ? "black" : this.state.rankings_wins[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_wins[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Derrotas</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {this.props.team_wins.defeats}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_wins[1].color === "black" ? "black" : this.state.rankings_wins[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_wins[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Victorias</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_wins.p_wins.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_wins[2].color === "black" ? "black" : this.state.rankings_wins[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_wins[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Puntos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.team_std_stats.total_puntos_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Puntos oponente por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_margins.opp_points_pg.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_margins[0].color === "black" ? "black" : this.state.rankings_margins[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_margins[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Margen por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_margins.margin_pg.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_margins[1].color === "black" ? "black" : this.state.rankings_margins[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_margins[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">ORTG</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.ortg.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[0].color === "black" ? "black" : this.state.rankings_adv_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">DRTG</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.drtg.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[1].color === "black" ? "black" : this.state.rankings_adv_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">NRTG</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.nrtg.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[2].color === "black" ? "black" : this.state.rankings_adv_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Posesiones por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.pbg.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[3].color === "black" ? "black" : this.state.rankings_adv_stats[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Posesiones por minuto</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.possessions_x_minute.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[4].color === "black" ? "black" : this.state.rankings_adv_stats[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[4].position}
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

module.exports.TeamSeason = TeamSeason;