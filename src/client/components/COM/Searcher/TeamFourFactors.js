import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings } from "../../COM/Functions";


let adv_stats = [{ stat: "rival_p_etc", order: "asc"}, { stat: "rival_p_turnovers", order: "desc"}, { stat: "p_reb_def", order: "desc"}, 
                { stat: "rival_ratio_ft", order: "asc"}, { stat: "etc", order: "desc"}, { stat: "p_turnovers", order: "asc"}, 
                { stat: "p_reb_of", order: "desc"}, { stat: "ratio_ft", order: "desc"}];


class TeamFourFactors extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: true
        };
    }

    componentWillMount(){
        let rankings_adv_stats = getTeamRankings(this.props.list_teams_adv_stats, adv_stats, "id_club", this.props.id_club);
        this.setState({
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
        let rankings_adv_stats = getTeamRankings(this.props.list_teams_adv_stats, adv_stats, "id_club", this.props.id_club);
        this.setState({
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
                            <tr className = "font-weight-bold text-light bg-danger text-center" style = {{fontSize: 14 + "pt"}}>
                                <th colSpan = "3">4 FACTORES DEFENSIVOS</th>
                            </tr>
                            <tr className = "font-weight-bold text-light" style = {{fontSize: 14 + "pt", backgroundColor: "#354560"}}>
                                <th>Estadística</th>
                                <th className = "text-center">Valor</th>
                                <th className = "text-center">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">% Oponente eTC</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.rival_p_etc.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[0].color === "black" ? "black" : this.state.rankings_adv_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Oponente Pérdidas</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.rival_p_turnovers.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[1].color === "black" ? "black" : this.state.rankings_adv_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Rebotes Defensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.p_reb_def.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[2].color === "black" ? "black" : this.state.rankings_adv_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Oponente Tiros Libres ratio</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.rival_ratio_ft.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[3].color === "black" ? "black" : this.state.rankings_adv_stats[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[3].position}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table hover striped bordered style = {{marginTop: 10 + "px"}}>
                        <thead>
                            <tr className = "font-weight-bold text-light bg-success text-center" style = {{fontSize: 14 + "pt"}}>
                                <th colSpan = "3">4 FACTORES OFENSIVOS</th>
                            </tr>
                            <tr className = "font-weight-bold text-light" style = {{fontSize: 14 + "pt", backgroundColor: "#354560"}}>
                                <th>Estadística</th>
                                <th className = "text-center">Valor</th>
                                <th className = "text-center">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">% eTC</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.etc.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[4].color === "black" ? "black" : this.state.rankings_adv_stats[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Pérdidas</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.p_turnovers.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[5].color === "black" ? "black" : this.state.rankings_adv_stats[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[5].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Rebotes Ofensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.p_reb_of.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[6].color === "black" ? "black" : this.state.rankings_adv_stats[6].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[6].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros Libres ratio</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.ratio_ft.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[7].color === "black" ? "black" : this.state.rankings_adv_stats[7].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[7].position}
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

module.exports.TeamFourFactors = TeamFourFactors;