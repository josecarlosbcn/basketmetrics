import React, {Component} from "react";
import {Table} from "react-bootstrap";
import { getRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of the player
 */
let stats = [{ stat: "tc_conv_pp", order: "desc"}, { stat: "tc_int_pp", order : "desc"}, { stat : "tl_conv_pp", order : "desc"}, 
{stat : "tl_int_pp", order : "desc"}, {stat : "t2p_conv_pp", order : "desc"}, { stat: "t2p_int_pp", order : "desc"}, 
{ stat : "t3p_conv_pp", order : "desc"}, {stat : "t3p_int_pp", order : "desc"}];

class PlayerShootsByGameTable extends Component{
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
                            <td className = "font-weight-bold">Tiros de campo anotados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.tc_conv_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[0].color === "black" ? "black" : this.state.rankings[0].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[0].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros de campo lanzados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.tc_int_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[1].color === "black" ? "black" : this.state.rankings[1].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[1].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros libres anotados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.tl_conv_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[2].color === "black" ? "black" : this.state.rankings[2].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[2].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros libres lanzados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.tl_int_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[3].color === "black" ? "black" : this.state.rankings[3].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[3].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros de 2 puntos anotados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.t2p_conv_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[4].color === "black" ? "black" : this.state.rankings[4].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[4].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros de 2 puntos lanzados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.t2p_int_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[5].color === "black" ? "black" : this.state.rankings[5].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[5].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros de 3 puntos anotados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.t3p_conv_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[6].color === "black" ? "black" : this.state.rankings[6].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[6].position}
                            </td>                        
                        </tr>
                        <tr>
                            <td className = "font-weight-bold">Tiros de 3 puntos lanzados por partido</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.t3p_int_pp.toFixed(2)).replace(".", ",")}</td>
                            <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings[7].color === "black" ? "black" : this.state.rankings[7].color === "green" ? "green" : "red"}}>
                                {this.state.rankings[7].position}
                            </td>                        
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
};

module.exports.PlayerShootsByGameTable = PlayerShootsByGameTable;