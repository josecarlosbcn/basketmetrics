import React, {Component} from "react";
import {Row, Col, Form, Button, Spinner} from "react-bootstrap";
import { getDataFromServer, addAccessToStats, setSpanishFormat, addNumberRow } from "../../Functions";
import { CLUB_SEASON, TEAM_SEASON_STD_STATS, TEAMS_SEASON_STD_STATS, TEAM_SEASON_ADV_STATS, TEAMS_SEASON_ADV_STATS, 
        TEAM_SEASON_MARGINS, TEAMS_SEASON_MARGINS, TEAM_SEASON_WINS, TEAMS_SEASON_WINS, TEAM_OPP_STDSTATS_BY_SEASON,
        TEAM_OPP_ADVSTATS_BY_SEASON, TEAM_GAME_LOG, TEAM_STDSTATS_HISTORY, TEAM_ADVSTATS_HISTORY } from "../../../FEBCOM/Querys";
import { TeamSeason } from "../TeamSeason";
import { TeamFourFactors } from "../TeamFourFactors";
import { TeamShooting } from "../TeamShooting";
import { TeamOppShooting } from "../TeamOppShooting";
import { TeamRebounding } from "../TeamRebounding";
import { TeamOppRebounding } from "../TeamOppRebounding";
import { TeamOther } from "../TeamOther";
import { TeamOppOther } from "../TeamOppOther";
import { TeamScoringTotals }  from "../TeamScoringTotals";
import { TeamOppScoringTotals } from "../TeamOppScoringTotals";
import { TeamOtherTotals } from "../TeamOtherTotals";
import { TeamOppOtherTotals } from "../TeamOppOtherTotals";
import { TeamGameLog } from "../TeamGameLog";
import { TTSeasonsShooting } from "../History/TTSeasonsShooting";
import { TTSeasonsRebounds } from "../History/TTSeasonsRebounds";
import { TTSeasonsFourFactors } from "../History/TTSeasonsFourFactors";
import { TTSeasonsEfficience } from "../History/TTSeasonsEfficience";
import { TTSeasonsOthers } from "../History/TTSeasonsOthers";
import "../../../../css/content.css";

class TeamSearcher extends Component {
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false,
            statSelected: 0, //0: season, 1: allSeasons
        };
    }

    /**
     * We need to implement this method when we come from a previous search of a player
     */
    componentDidMount(){
        console.log("We come from the search of a player");
        this.getData();
    }

    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        this.getData();
    }

    generateDataRebounds(){
        let data = [];
        data = this.state.team_stdstats_history.map((item_std) => {
            let item = this.state.team_advstats_history.find((item_adv) => {
                return parseInt(item_adv.id_team_club) === parseInt(item_std.id_team_club);
            });
            return{
                number_row: item_std.number_row,
                season_name: item_std.season_name,
                name: item_std.name,
                reb_def: item_std.reb_def,
                reb_def_pp: item_std.reb_def_pp,
                reb_of: item_std.reb_of,
                reb_of_pp: item_std.reb_of_pp,
                total_rebs: item_std.total_rebs,
                total_rebs_pp: item_std.total_rebs_pp,
                p_reb_def: item.p_reb_def,
                p_reb_of: item.p_reb_of
            };
        });
        return data;
    }    

    async getData(){
        let params = [{"###id_club###": this.props.item.id}];
        let seasons = await getDataFromServer(process.env.URL_FEB_API, CLUB_SEASON, params);
        let params2 = [{"###id_club###" : this.props.item.id}, {"###id_season###" : seasons.data.club_season[0].id}];
        let team_std_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_STD_STATS, params2);
        let params1 = [{"###id_season###" : seasons.data.club_season[0].id}];
        let teams_std_stats = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_STD_STATS, params1);
        let team_adv_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_ADV_STATS, params2);
        let teams_adv_stats = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_ADV_STATS, params1);
        let team_margins = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_MARGINS , params2);
        let teams_margins = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_MARGINS, params1);
        let team_wins = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_WINS, params2);
        let teams_wins = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_WINS, params1);
        let team_opp_std_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_OPP_STDSTATS_BY_SEASON, params2);
        let team_opp_adv_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_OPP_ADVSTATS_BY_SEASON, params2);
        let team_game_log = await getDataFromServer(process.env.URL_FEB_API, TEAM_GAME_LOG, params2);
        let team_stdstats_history = await getDataFromServer(process.env.URL_FEB_API, TEAM_STDSTATS_HISTORY, params);
        team_stdstats_history = addNumberRow((this.props.language === "es") ? setSpanishFormat(team_stdstats_history.data.team_stdstats_history) : team_stdstats_history.data.team_stdstats_history);
        let team_advstats_history = await getDataFromServer(process.env.URL_FEB_API, TEAM_ADVSTATS_HISTORY, params);
        team_advstats_history = addNumberRow((this.props.language === "es") ? setSpanishFormat(team_advstats_history.data.team_advstats_history) : team_advstats_history.data.team_advstats_history);
        team_game_log = addAccessToStats(team_game_log.data.team_game_log, this.props.isFEB);
        this.setState({
            seasons: seasons.data.club_season,
            itemSelected: seasons.data.club_season[0].id,
            seasonDescription: seasons.data.club_season[0].description,
            teamName: seasons.data.club_season[0].name,
            leagueName: seasons.data.club_season[0].leagueName,
            team_std_stats: team_std_stats.data.team_stdstats_by_season[0],
            list_teams_std_stats: (this.props.isFEB) ? teams_std_stats.data.teams_stdstats_by_season : teams_std_stats.data.teams_stdstats_by_season_2,
            team_adv_stats: team_adv_stats.data.team_advstats_by_season[0],
            list_teams_adv_stats: (this.props.isFEB) ? teams_adv_stats.data.teams_advstats_by_season : teams_adv_stats.data.teams_advstats_by_season_2,
            team_margins: team_margins.data.team_margins[0],
            list_teams_margins: teams_margins.data.teams_margins,
            team_wins: team_wins.data.team_wins[0],
            list_teams_wins: teams_wins.data.teams_wins,
            team_opp_std_stats: team_opp_std_stats.data.team_opp_stdstats_by_season[0],
            team_opp_adv_stats: team_opp_adv_stats.data.team_opp_advstats_by_season[0],
            team_game_log: team_game_log,
            team_stdstats_history: team_stdstats_history,
            team_advstats_history: team_advstats_history,
        }, () => {
            let dataRebounds = this.generateDataRebounds();
            this.setState({
                team_rebounds_history:  dataRebounds,
                loaded: true
            });        
        });
    }

    getSeasonsOptions(){
        let items = this.state.seasons.map((season, index) => {
            if (index != 0)
                return(<option key = {season.id} value = {season.id}>{season.description}</option>);
            else{
                return(<option key = {season.id} value = {season.id} defaultValue>{season.description}</option>);
            }
                
        });
        return items;               
    }    

    async handleChange (event) {
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();

        let season = this.state.seasons.find((item) => {
            return parseInt(item.id) === parseInt(event.target.value)
        });
        let params1 = [{"###id_season###" : season.id}];
        let params2 = [{"###id_club###" : this.props.item.id}, {"###id_season###" : season.id}];
        let team_std_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_STD_STATS, params2);        
        let teams_std_stats = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_STD_STATS, params1);    
        let team_adv_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_ADV_STATS, params2);
        let teams_adv_stats = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_ADV_STATS, params1);
        let team_margins = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_MARGINS, params2);
        let teams_margins = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_MARGINS, params1);
        let team_wins = await getDataFromServer(process.env.URL_FEB_API, TEAM_SEASON_WINS, params2);
        let teams_wins = await getDataFromServer(process.env.URL_FEB_API, TEAMS_SEASON_WINS, params1);
        let team_opp_std_stats = await getDataFromServer(process.env.URL_FEB_API,  TEAM_OPP_STDSTATS_BY_SEASON, params2); 
        let team_opp_adv_stats = await getDataFromServer(process.env.URL_FEB_API, TEAM_OPP_ADVSTATS_BY_SEASON, params2);
        let team_game_log = await getDataFromServer(process.env.URL_FEB_API, TEAM_GAME_LOG, params2);
        team_game_log = addAccessToStats(team_game_log.data.team_game_log, this.props.isFEB);

        this.setState({
            itemSelected: season.id,
            seasonDescription: season.description,
            teamName: season.name,
            leagueName: season.leagueName,
            team_std_stats: team_std_stats.data.team_stdstats_by_season[0],
            list_teams_std_stats: (this.props.isFEB) ? teams_std_stats.data.teams_stdstats_by_season : teams_std_stats.data.teams_stdstats_by_season_2,
            team_adv_stats: team_adv_stats.data.team_advstats_by_season[0],
            list_teams_adv_stats: (this.props.isFEB) ? teams_adv_stats.data.teams_advstats_by_season : teams_adv_stats.data.teams_advstats_by_season_2,
            team_margins: team_margins.data.team_margins[0],
            list_teams_margins: teams_margins.data.teams_margins,
            team_wins: team_wins.data.team_wins[0],
            list_teams_wins: teams_wins.data.teams_wins,
            team_opp_std_stats: team_opp_std_stats.data.team_opp_stdstats_by_season[0],
            team_opp_adv_stats: team_opp_adv_stats.data.team_opp_advstats_by_season[0],
            team_game_log: team_game_log,
            loaded: true
        });   
    }         

    handleClick(event){
        this.setState({
            statSelected: (event.currentTarget.id === "seasonButton") ? 0 : 1
        });
    }

    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <Row>
                                <Col md = {6}>
                                    <Button 
                                        id = "seasonButton"
                                        onClick = {(event) => this.handleClick(event)}
                                        style = {{width: 100 + "%", backgroundColor: (this.state.statSelected === 0) ? "#007BFF" : "#6C757D"}}
                                        disabled = {(this.state.statSelected === 0 ) ? true : false}>
                                        <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>
                                            {(this.props.language === "es") ? "Temporada" : "Season"}
                                        </span>
                                   </Button>
                                </Col>
                                <Col md = {6}>
                                    <Button
                                        id = "allSeasonsButton" 
                                        onClick = {(event) => this.handleClick(event)}
                                        style = {{width: 100 + "%", backgroundColor: (this.state.statSelected === 1) ? "#007BFF" : "#6C757D"}}
                                        disabled = {(this.state.statSelected === 1 ) ? true : false}>
                                        <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>
                                            {(this.props.language === "es") ? "Toda las temporadas" : "All Seasons"}
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                            <div style = {{display: (this.state.statSelected === 0) ? "block" : "none"}}>
                                <div className = "font-weight-bold text-center"
                                    style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", 
                                            border: "3px solid #091E36", padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    {this.state.seasonDescription} :: {this.state.leagueName} :: {this.state.teamName}
                                </div>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Datos temporada" : "Season data"}
                                        </div>
                                        <Form.Control as="select" 
                                            id = "season-1"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>      
                                        <TeamSeason
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                            team_adv_stats = {this.state.team_adv_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                            team_margins = {this.state.team_margins}
                                            list_teams_margins = {this.state.list_teams_margins}
                                            team_wins = {this.state.team_wins}
                                            list_teams_wins = {this.state.list_teams_wins}
                                        />             
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "4 Factores" : "4 Factors"}
                                        </div> 
                                        <Form.Control as="select" 
                                            id = "season-2"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>    
                                        <TeamFourFactors
                                            id_club = {this.props.item.id}
                                            team_adv_stats = {this.state.team_adv_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Tiros del equipo" : "Team shooting"}
                                        </div>
                                        <Form.Control as="select" 
                                            id = "season-3"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamShooting
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                            team_adv_stats = {this.state.team_adv_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                        />
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Tiros del oponente" : "Opponent shooting"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-4"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamOppShooting
                                            id_club = {this.props.item.id}
                                            team_opp_std_stats = {this.state.team_opp_std_stats}
                                            team_opp_adv_stats = {this.state.team_opp_adv_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                            team_opp_adv_stats = {this.state.team_opp_adv_stats}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Rebotes del equipo" : "Team rebounding"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-5"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamRebounding
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}   
                                            team_adv_stats = {this.state.team_adv_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                        />
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Rebotes del oponente" : "Opponent rebounding"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-6"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamOppRebounding
                                            id_club = {this.props.item.id}
                                            team_adv_stats = {this.state.team_adv_stats}
                                            team_opp_std_stats = {this.state.team_opp_std_stats}
                                            team_opp_adv_stats = {this.state.team_opp_adv_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                            team_opp_adv_stats = {this.state.team_opp_adv_stats}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Otras del equipo" : "Team other"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-7"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamOther
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                            team_adv_stats = {this.state.team_adv_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                        />
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Otras del oponente" : "Opponent other stats"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-8"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamOppOther
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            team_opp_std_stats = {this.state.team_opp_std_stats}
                                            team_opp_adv_stats = {this.state.team_opp_adv_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                            list_teams_adv_stats = {this.state.list_teams_adv_stats}
                                            team_opp_adv_stats = {this.state.team_opp_adv_stats}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Estadísticas de anotación totales" : "Total scoring totals"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-9"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamScoringTotals
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                        />
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Estadísticas de anotación del oponente totales" : "Opponent scoring totals"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-10"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control> 
                                        <TeamOppScoringTotals
                                            id_club = {this.props.item.id}
                                            team_opp_std_stats = {this.state.team_opp_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Otras estadísticas" : "Other stats"}
                                        </div>             
                                        <Form.Control as="select" 
                                            id = "season-11"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamOtherTotals
                                            id_club = {this.props.item.id}
                                            team_std_stats = {this.state.team_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                        />
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Otras estadísticas del oponente" : "Opponent other stats"}
                                        </div>             
                                        <Form.Control as="select" 
                                            id = "season-12"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamOppOtherTotals
                                            id_club = {this.props.item.id}
                                            team_opp_std_stats = {this.state.team_opp_std_stats}
                                            list_teams_std_stats = {this.state.list_teams_std_stats}
                                        />   
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {12}>
                                        <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Partidos" : "Games Log"}
                                        </div>             
                                        <Form.Control as="select" 
                                            id = "season-13"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <TeamGameLog
                                            data = {this.state.team_game_log}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style = {{display: (this.state.statSelected === 1) ? "block" : "none"}}>
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "TIROS" : "SHOOTING"}
                                </div>
                                <TTSeasonsShooting
                                    language = {this.props.language}
                                    team_stdstats_history = {this.state.team_stdstats_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "REBOTES" : "REBOUNDING"}
                                </div>
                                <TTSeasonsRebounds
                                    language = {this.props.language}
                                    team_rebounds_history = {this.state.team_rebounds_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "4 FACTORES" : "4 FACTORS"}
                                </div>
                                <TTSeasonsFourFactors
                                    language = {this.props.language}
                                    team_advstats_history = {this.state.team_advstats_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "EFICIENCIA" : "EFFICIENCE"}
                                </div>
                                <TTSeasonsEfficience
                                    language = {this.props.language}
                                    team_advstats_history = {this.state.team_advstats_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "OTRAS" : "OTHERS"}
                                </div>
                                <TTSeasonsOthers
                                    language = {this.props.language}
                                    team_advstats_history = {this.state.team_advstats_history}
                                />
                            </div>
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
                }
            </div>
        )
    }
}

module.exports.TeamSearcher = TeamSearcher;