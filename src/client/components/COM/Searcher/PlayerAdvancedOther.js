import React, {Component} from "react";
import {Table} from "react-bootstrap";
import { getRankings } from "../Functions";

/**
 * We define this array to set rankings of advanced stats of the player
 */
let adv_stats = [{stat: "p_reb_def", order: "desc"}, {stat: "p_reb_of", order: "desc"}, {stat: "p_tot_reb", order : "desc"}, 
                {stat: "p_assists", order : "desc"}, {stat: "assists_x_turnovers", order: "desc"}, {stat: "assists_ratio", order: "desc"},
                {stat: "p_steals", order: "desc"}, {stat: "ortg", order: "desc"}, {stat: "drtg", order: "asc"}, {stat: "nrtg", order: "desc"}];


class PlayerAdvancedOther extends Component{
    constructor(props){
        super();
        this.props = props;
    }

    componentWillMount(){
        let ranking_adv_stats = getRankings(this.props.listpas, adv_stats, "id_player", this.props.id_player);
        this.setState({
            ranking_adv_stats: ranking_adv_stats,
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
        let ranking_adv_stats = getRankings(this.props.listpas, adv_stats, "id_player", this.props.id_player);
        this.setState({
            ranking_adv_stats: ranking_adv_stats,
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
                            <td className = "font-weight-bold">Porcentaje Rebotes Defensivos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.p_reb_def.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[0].color === "black" ? "black" : this.state.ranking_adv_stats[0].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[0].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Porcentaje Rebotes Ofensivos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.p_reb_of.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[1].color === "black" ? "black" : this.state.ranking_adv_stats[1].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[1].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Porcentaje Total Rebotes</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.p_tot_reb.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[2].color === "black" ? "black" : this.state.ranking_adv_stats[2].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[2].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Porcentaje asistencias</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.p_assists.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[3].color === "black" ? "black" : this.state.ranking_adv_stats[3].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[3].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Ratio asistencias</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.assists_ratio.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[4].color === "black" ? "black" : this.state.ranking_adv_stats[4].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[4].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Asistencias / Pérdida</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.assists_x_turnovers.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[5].color === "black" ? "black" : this.state.ranking_adv_stats[5].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[5].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Porcentaje robos</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.p_steals.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[6].color === "black" ? "black" : this.state.ranking_adv_stats[6].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[6].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">ORTG</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.ortg.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[7].color === "black" ? "black" : this.state.ranking_adv_stats[7].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[7].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">DRTG</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.drtg.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[8].color === "black" ? "black" : this.state.ranking_adv_stats[8].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[8].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">NRTG</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.nrtg.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[9].color === "black" ? "black" : this.state.ranking_adv_stats[9].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[9].position}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

module.exports.PlayerAdvancedOther = PlayerAdvancedOther;