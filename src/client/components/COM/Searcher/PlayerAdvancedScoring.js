import React, {Component} from "react";
import {Table} from "react-bootstrap";
import { getRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of standard stats of the player
 */
let std_stats = [{stat: "ppa", order: "desc"}, {stat: "pointsbyposs", order: "desc"}, { stat : "p_tl_puntos", order : "desc"}, 
            { stat: "p_t2p_puntos", order: "desc"}, { stat: "p_t3p_puntos", order : "desc"}];
/**
 * We define this array to set rankings of advanced stats of the player
 */
let adv_stats = [{stat: "game_score", order: "desc"}, {stat: "dre", order: "desc"}, {stat: "ts", order : "desc"}, {stat: "etc", order : "desc"}, 
                {stat: "usg", order: "desc"}];

class PlayerAdvancedScoring extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false,
        };              
    }

    componentWillMount(){
        let ranking_std_stats = getRankings(this.props.listpss, std_stats, "id_player", this.props.id_player);
        let ranking_adv_stats = getRankings(this.props.listpas, adv_stats, "id_player", this.props.id_player);
        this.setState({
            ranking_std_stats: ranking_std_stats,
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
        let ranking_std_stats = getRankings(this.props.listpss, std_stats, "id_player", this.props.id_player);
        let ranking_adv_stats = getRankings(this.props.listpas, adv_stats, "id_player", this.props.id_player);
        this.setState({
            ranking_std_stats: ranking_std_stats,
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
                            <td className = "font-weight-bold">Game Score</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.game_score.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[0].color === "black" ? "black" : this.state.ranking_adv_stats[0].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[0].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">DRE</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.dre.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[1].color === "black" ? "black" : this.state.ranking_adv_stats[1].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[1].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">TS%</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.ts.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[2].color === "black" ? "black" : this.state.ranking_adv_stats[2].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[2].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">eTC%</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.etc.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[3].color === "black" ? "black" : this.state.ranking_adv_stats[3].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[3].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">USG%</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pas.usg.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_adv_stats[4].color === "black" ? "black" : this.state.ranking_adv_stats[4].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_adv_stats[4].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Puntos por intento</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.ppa.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_std_stats[0].color === "black" ? "black" : this.state.ranking_std_stats[0].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_std_stats[0].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Puntos por posesión</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.pointsbyposs.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_std_stats[1].color === "black" ? "black" : this.state.ranking_std_stats[1].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_std_stats[1].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">% de puntos desde lanzamientos de TL</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.p_tl_puntos.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_std_stats[2].color === "black" ? "black" : this.state.ranking_std_stats[2].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_std_stats[2].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">% de puntos desde lanzamientos de 2P</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.p_t2p_puntos.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_std_stats[3].color === "black" ? "black" : this.state.ranking_std_stats[3].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_std_stats[3].position}
                            </td>
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">% de puntos desde lanzamientos de 3P</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.p_t3p_puntos.toFixed(2)).replace(".", ",") + "%"}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.ranking_std_stats[4].color === "black" ? "black" : this.state.ranking_std_stats[4].color === "green" ? "green" : "red"}}>
                                {this.state.ranking_std_stats[4].position}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

module.exports.PlayerAdvancedScoring = PlayerAdvancedScoring;