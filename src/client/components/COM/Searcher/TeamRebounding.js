import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings } from "../../COM/Functions";

/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "reb_def_pp", order: "desc" }, { stat: "reb_of_pp", order: "desc" }, { stat: "total_rebs_pp", order: "desc" }];
let adv_stats = [{ stat: "p_reb_def", order: "desc"}, { stat: "p_reb_of", order: "desc"}];


/**
 * We receive these params:
 * 
 * id_club: ID of the club
 * team_std_stats: Standard stats from a team
 * list_teams_std_stats: List of the standard stats of all the teams
 * team_adv_stats: Advanced stats from a team
 * list_teams_adv_stats: List of the advanced stats of all the teams
 */   

class TeamRebounding extends Component{
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
                                <th>Estadísticas</th>
                                <th className = "text-center">Valor</th>
                                <th className = "text-center">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">Rebotes Defensivos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.reb_def_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Rebotes Ofensivos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.reb_of_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[1].color === "black" ? "black" : this.state.rankings_std_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Total Rebotes por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_std_stats.total_rebs_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[2].color === "black" ? "black" : this.state.rankings_std_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Rebotes Defensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.p_reb_def.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[0].color === "black" ? "black" : this.state.rankings_adv_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Rebotes Ofensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_adv_stats.p_reb_of.toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[1].color === "black" ? "black" : this.state.rankings_adv_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[1].position}
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

module.exports.TeamRebounding = TeamRebounding;