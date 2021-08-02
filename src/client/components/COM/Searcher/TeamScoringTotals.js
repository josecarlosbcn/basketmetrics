import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "total_puntos", order: "desc" }, { stat: "tc_conv", order: "desc" }, { stat: "tc_int", order: "desc" }, 
                { stat: "t2p_conv", order: "desc" }, { stat: "t2p_int", order: "desc" }, { stat: "t3p_conv", order: "desc" }, 
                { stat: "t3p_int", order: "desc" }, { stat: "tl_conv", order: "desc" }, { stat: "tl_int", order: "desc" }];

/**
 * We receive these params:
 * 
 * id_club: ID of the club
 * team_std_stats: Standard stats from a team
 * list_teams_std_stats: List of the standard stats of all the teams
 */ 


 class TeamScoringTotals extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false
        };
    }


    componentWillMount(){
        let rankings_std_stats = getTeamRankings(this.props.list_teams_std_stats, std_stats, "id_club", this.props.id_club);
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
        let rankings_std_stats = getTeamRankings(this.props.list_teams_std_stats, std_stats, "id_club", this.props.id_club);
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
                                <td className = "font-weight-bold">Puntos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.total_puntos).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de campo convertidos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.tc_conv).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[1].color === "black" ? "black" : this.state.rankings_std_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de campo intentados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.tc_int).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[2].color === "black" ? "black" : this.state.rankings_std_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 2 puntos convertidos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.t2p_conv).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[3].color === "black" ? "black" : this.state.rankings_std_stats[3].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[3].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 2 puntos intentados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.t2p_int).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[4].color === "black" ? "black" : this.state.rankings_std_stats[4].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[4].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 3 puntos convertidos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.t3p_conv).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[5].color === "black" ? "black" : this.state.rankings_std_stats[5].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[5].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros de 3 puntos intentados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.t3p_int).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[6].color === "black" ? "black" : this.state.rankings_std_stats[6].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[6].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros libres convertidos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.tl_conv).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[7].color === "black" ? "black" : this.state.rankings_std_stats[7].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[7].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Tiros libres intentados</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.tl_int).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[8].color === "black" ? "black" : this.state.rankings_std_stats[8].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[8].position}
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

module.exports.TeamScoringTotals = TeamScoringTotals;