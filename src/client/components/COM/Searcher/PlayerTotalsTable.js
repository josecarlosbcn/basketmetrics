import React, {Component} from "react";
import {Table} from "react-bootstrap";
import { getRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of the player
 */
let stats = [{ stat: "games", order: "desc"}, { stat: "minutes", order : "desc"}, { stat : "total_puntos", order : "desc"}, {stat : "tot_reb", order : "desc"}, 
{stat : "rd", order : "desc"}, { stat: "ro", order : "desc"}, { stat : "assists", order : "desc"}, {stat : "tov", order : "asc"}, 
{stat : "steals", order : "desc"}, { stat : "block_shots", order: "desc"}, {stat : "fouls_cm", order: "asc"}];


class PlayerTotalsTable extends Component{
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
                            <td className = "font-weight-bold">Total partidos jugados</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.games}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[0].color === "black" ? "black" : this.state.rankings[0].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[0].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total minutos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.minutes}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[1].color === "black" ? "black" : this.state.rankings[1].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[1].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total puntos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.total_puntos}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[2].color === "black" ? "black" : this.state.rankings[2].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[2].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total rebotes</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.tot_reb}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[3].color === "black" ? "black" : this.state.rankings[3].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[3].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total rebotes defensivos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.rd}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[4].color === "black" ? "black" : this.state.rankings[4].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[4].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total rebotes ofensivos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.ro}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[5].color === "black" ? "black" : this.state.rankings[5].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[5].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total asistencias</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.assists}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[6].color === "black" ? "black" : this.state.rankings[6].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[6].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total pérdidas</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.tov}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[7].color === "black" ? "black" : this.state.rankings[7].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[7].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total robos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.steals}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[8].color === "black" ? "black" : this.state.rankings[8].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[8].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total tapones</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.block_shots}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[9].color === "black" ? "black" : this.state.rankings[9].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[9].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Total faltas</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.fouls_cm}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[10].color === "black" ? "black" : this.state.rankings[10].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[10].position}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

module.exports.PlayerTotalsTable = PlayerTotalsTable;