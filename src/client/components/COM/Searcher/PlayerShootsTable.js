import React, {Component} from "react";
import {Table, Button, Spinner} from "react-bootstrap";
import { getRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of the player
 */
let stats = [{ stat: "tc_percentage", order: "desc"}, { stat: "tl_percentage", order : "desc"}, { stat : "t2p_percentage", order : "desc"}, 
{stat : "t3p_percentage", order : "desc"}, {stat : "tc_conv", order : "desc"}, { stat: "tc_int", order : "desc"}, { stat : "tl_conv", order : "desc"}, 
{stat : "tl_int", order : "desc"}, {stat : "t2p_conv", order : "desc"}, { stat : "t2p_int", order: "desc"}, {stat : "t3p_conv", order: "desc"}, 
{ stat: "t3p_int", order: "desc"}];


class PlayerShootsTable extends Component{
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
                                <td className = "font-weight-bold">% Tiros de Campo</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.tc_percentage.toFixed(2)).replace(".", ",") + "%"}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[0].color === "black" ? "black" : this.state.rankings[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Tiros Libres</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.tl_percentage.toFixed(2)).replace(".", ",") + "%"}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[1].color === "black" ? "black" : this.state.rankings[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Tiros de 2 puntos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.t2p_percentage.toFixed(2)).replace(".", ",") + "%"}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[2].color === "black" ? "black" : this.state.rankings[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Tiros de 3 Ppuntos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{String(this.props.pss.t3p_percentage.toFixed(2)).replace(".", ",") + "%"}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[3].color === "black" ? "black" : this.state.rankings[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de Campo anotados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.tc_conv}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[4].color === "black" ? "black" : this.state.rankings[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de Campo lanzados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.tc_int}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[5].color === "black" ? "black" : this.state.rankings[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[5].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros Libres anotados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.tl_conv}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[6].color === "black" ? "black" : this.state.rankings[6].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[6].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros Libres lanzados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.tl_int}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[7].color === "black" ? "black" : this.state.rankings[7].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[7].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 2 puntos anotados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.t2p_conv}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[8].color === "black" ? "black" : this.state.rankings[8].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[8].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 2 puntos lanzados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.t2p_int}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[9].color === "black" ? "black" : this.state.rankings[9].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[9].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 3 puntos anotados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.t3p_conv}</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                        color: this.state.rankings[10].color === "black" ? "black" : this.state.rankings[10].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings[10].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 3 puntos lanzados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>{this.props.pss.t3p_int}</td>
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
        );
    }
}

module.exports.PlayerShootsTable = PlayerShootsTable;