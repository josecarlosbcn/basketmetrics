import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "tc_percentage", order: "desc"}, { stat: "tl_percentage", order: "desc" }, { stat: "t2p_percentage", order: "desc" }, 
                { stat: "t3p_percentage", order: "desc" }, { stat: "ppa", order: "desc"} , { stat: "p_tl_puntos", order: "desc"}, 
                { stat: "p_t2p_puntos", order: "desc"}, { stat: "p_t3p_puntos", order: "desc"}];
let adv_stats = [{ stat: "etc", order: "desc"}, { stat: "ts", order: "desc"}, { stat: "puntos_x_possession", order: "desc"}];

/**
 * We receive these params:
 * 
 * id_club: ID of the club
 * team_std_stats: Standard stats from a team
 * list_teams_std_stats: List of the standard stats of all the teams
 * team_adv_stats: Advanced stats from a team
 * list_teams_adv_stats: List of the advanced stats of all the teams
 */           


class TeamShooting extends Component{
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
                                <th>Estad??sticas</th>
                                <th className = "text-center">Valor</th>
                                <th className = "text-center">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">TC%</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.tc_percentage.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros Libres %</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.tl_percentage.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[1].color === "black" ? "black" : this.state.rankings_std_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros 2 puntos %</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.t2p_percentage.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[2].color === "black" ? "black" : this.state.rankings_std_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros 3 puntos %</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.t3p_percentage.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[3].color === "black" ? "black" : this.state.rankings_std_stats[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Efectividad Tiros de Campo (eTC%)</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.etc.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[0].color === "black" ? "black" : this.state.rankings_adv_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiro Verdadero (TS%)</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.ts.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[1].color === "black" ? "black" : this.state.rankings_adv_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Puntos por intento de anotaci??n</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.ppa.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[4].color === "black" ? "black" : this.state.rankings_std_stats[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Puntos por posesi??n</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.puntos_x_possession.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[2].color === "black" ? "black" : this.state.rankings_adv_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% de puntos desde TL</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.p_tl_puntos.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[5].color === "black" ? "black" : this.state.rankings_std_stats[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[5].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% de puntos desde T2P</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.p_t2p_puntos.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[6].color === "black" ? "black" : this.state.rankings_std_stats[6].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[6].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% de puntos desde T3P</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.p_t3p_puntos.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[7].color === "black" ? "black" : this.state.rankings_std_stats[7].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[7].position}
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

module.exports.TeamShooting = TeamShooting;