import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import { getTeamRankings, removeItem } from "../../COM/Functions";

/**
 * To build the ranking of opponent stats we've got a list of standard stats and advanced stats of all teams. So, we remove the row who belongs
 * to the team and we switch with the standard stats or advanced stats in the list. Then, we are going to build the ranking between what make
 * the opponents teams agains the team and what make the rest of the teams.
 */


 /**
  * To not show "incorrect" data due to the previous round of numbers. We calculate p_reb_def and p_reb_of of the opponent teams from 
  * p_reb_def of the team and p_reb_of of the team.
  * opp_p_reb_def = 100 - p_reb_of
  * opp_p_reb_of = 100 - p_reb_def
  */

/**
 * We receive these params
 * id_club: ID of the club
 * team_adv_stats: Advanced stats of the team
 * team_opp_std_stats: Standard stats of the opponent teams
 * team_opp_adv_stats: Advanced stats of th opponent teams
 * list_teams_std_stats: List of the standard stats of all the teams
 * list_teams_adv_stats: List of the advanced stats of all the teams
 * team_opp_adv_stats: Advanced stats of the opponent teams
 */

/**
 * We define this array to set rankings of the player
 */
let std_stats = [{ stat: "reb_def_pp", order: "desc"}, { stat: "reb_of_pp", order: "desc"}, { stat: "total_rebs_pp", order: "desc"}];
let adv_stats = [{ stat: "p_reb_def", order: "desc"}, { stat: "p_reb_of", order: "desc"}];


class TeamOppRebounding extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentWillMount(){
        let list = removeItem(this.props.list_teams_std_stats, "id_club", this.props.id_club);
        list.push(this.props.team_opp_std_stats);
        let rankings_std_stats = getTeamRankings(list, std_stats, "id_club", this.props.id_club);
        list = removeItem(this.props.list_teams_adv_stats, "id_club", this.props.id_club);
        list.push(this.props.team_opp_adv_stats);
        let rankings_adv_stats = getTeamRankings(list, adv_stats, "id_club", this.props.id_club);
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
        let list = removeItem(this.props.list_teams_std_stats, "id_club", this.props.id_club);
        list.push(this.props.team_opp_std_stats);
        let rankings_std_stats = getTeamRankings(list, std_stats, "id_club", this.props.id_club);
        list = removeItem(this.props.list_teams_adv_stats, "id_club", this.props.id_club);
        list.push(this.props.team_opp_adv_stats);
        let rankings_adv_stats = getTeamRankings(list, adv_stats, "id_club", this.props.id_club);
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
                                    {String(this.props.team_opp_std_stats.reb_def_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[0].color === "black" ? "black" : this.state.rankings_std_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Rebotes Ofensivos por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_opp_std_stats.reb_of_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[1].color === "black" ? "black" : this.state.rankings_std_stats[1].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[1].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">Total Rebotes por partido</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String(this.props.team_opp_std_stats.total_rebs_pp.toFixed(2)).replace(".", ",")}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_std_stats[2].color === "black" ? "black" : this.state.rankings_std_stats[2].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_std_stats[2].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Rebotes Defensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String((100 - this.props.team_adv_stats.p_reb_of).toFixed(2)).replace(".", ",") + "%"}
                                </td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt", 
                                    color: this.state.rankings_adv_stats[0].color === "black" ? "black" : this.state.rankings_adv_stats[0].color === "green" ? "green" : "red"}}>
                                    {this.state.rankings_adv_stats[0].position}
                                </td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">% Rebotes Ofensivos</td>
                                <td className = "text-right" style = {{fontSize: 12 + "pt"}}>
                                    {String((100 - this.props.team_adv_stats.p_reb_def).toFixed(2)).replace(".", ",") + "%"}
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

module.exports.TeamOppRebounding = TeamOppRebounding;