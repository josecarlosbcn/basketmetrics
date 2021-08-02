import React, {Component} from "react";
import {Table} from "react-bootstrap";
import { getRankings } from "../../COM/Functions";
import { Button, Spinner} from "react-bootstrap";

/**
 * We define this array to set rankings of the player
 */
let stats = [{ stat: "games", order: "desc"}, { stat: "mpp", order : "desc"}, { stat : "total_puntos_pp", order : "desc"}, {stat : "total_rebs_pp", order : "desc"}, 
{stat : "reb_def_pp", order : "desc"}, { stat: "reb_of_pp", order : "desc"}, { stat : "assists_pp", order : "desc"}, {stat : "turnovers_pp", order : "asc"}, 
{stat : "steals_pp", order : "desc"}, { stat : "block_shots_pp", order: "desc"}, {stat : "fouls_cm_pp", order: "asc"}, { stat: "efficience_pp", order: "desc"}];


/**
 * We receive two properties:
 * id_player: ID of the Player (not id_player_team)
 * pss: JSON with the Player standard stats of a determinated season
 * listpss: An Array with the standard stats of all players who has played at least one game in a season
 */
class PlayerStatsTable extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false,
        };
    }

    componentWillMount(){
        let rankings = getRankings(this.props.listpss, stats, "id_player", this.props.id_player);
        this.setState({
            rankings: rankings,
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
        let rankings = getRankings(this.props.listpss, stats, "id_player", this.props.id_player);
        this.setState({
            rankings: rankings,
            loaded: true,
        });
    }    

    render(){
        return(
            (this.state.loaded) ?
                <div>
                    <Table hover striped bordered style = {{marginTop: 10 + "px"}}>
                        <thead>
                            <tr className = "font-weight-bold text-light" style = {{fontSize: 14 + "pt", backgroundColor: "#354560"}}>
                                <th>Estadísticas</th>
                                <th>Valor</th>
                                <th>Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">Partidos jugados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.games}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[0].color === "black" ? "black" : this.state.rankings[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Minutos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.mpp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[1].color === "black" ? "black" : this.state.rankings[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Puntos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.total_puntos_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[2].color === "black" ? "black" : this.state.rankings[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Total rebotes por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.total_rebs_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[3].color === "black" ? "black" : this.state.rankings[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Rebotes defensivos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.reb_def_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[4].color === "black" ? "black" : this.state.rankings[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Rebotes ofensivos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.reb_of_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[5].color === "black" ? "black" : this.state.rankings[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[5].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Asistencias por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.assists_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[6].color === "black" ? "black" : this.state.rankings[6].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[6].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Pérdidas por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.turnovers_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[7].color === "black" ? "black" : this.state.rankings[7].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[7].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Robos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.steals_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[8].color === "black" ? "black" : this.state.rankings[8].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[8].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tapones por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.block_shots_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[9].color === "black" ? "black" : this.state.rankings[9].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[9].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Faltas por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.fouls_cm_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[10].color === "black" ? "black" : this.state.rankings[10].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[10].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Valoración por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.efficience_pp.toFixed(2)).replace(".", ",")}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[11].color === "black" ? "black" : this.state.rankings[11].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[11].position}
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
        )
    }
}

module.exports.PlayerStatsTable = PlayerStatsTable;