import React, {Component} from "react";
import {Row, Col, Form, Button} from "react-bootstrap";
import { PLAYER_COMPETITIONS_FIBA, PLAYER_STD_STATS_FIBA, LEAGUE_STATS_FIBA, PLAYERS_STD_STATS_FIBA_2, 
        PLAYER_SEASON_ADV_STATS_FIBA, PLAYERS_SEASON_ADV_STATS_FIBA_2, GAME_LOG_FIBA, PLAYER_STDSTATS_HISTORY_FIBA, 
        PLAYER_ADVSTATS_HISTORY_FIBA } from "../../../FIBACOM/Querys";
import { getDataFromServer, addAccessToStats, setSpanishFormat, addNumberRow, filterCompetitions, getCompetitions } from "../../Functions";
import { PlayerStatsTable } from "../PlayerStatsTable";
import { PlayerShootsTable } from "../PlayerShootsTable";
import { PlayerShootsByGameTable } from "../PlayerShootsByGameTable";
import { PlayerTotalsTable } from "../PlayerTotalsTable";
import { PlayerAdvancedScoring } from "../PlayerAdvancedScoring";
import { PlayerAdvancedOther } from "../PlayerAdvancedOther";
import { PlayerGameLog } from "../PlayerGameLog";
import { PTSeasonsShooting } from "../History/PTSeasonsShooting";
import { PTSeasonsRebounds } from "../History/PTSeasonsRebounds";
import { PTSeasonsEfficience } from "../History/PTSeasonsEfficience";
import { PTSeasonsOthers } from "../History/PTSeasonsOthers";
import { SpiderChart } from "../../Graphics/SpiderChart/SpiderChart";
import { Loading } from "../../Loading";
import "../../../../css/content.css";


class PlayerSearcher extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false,
            seasonDescription: "",
            statSelected: 0, //0: season, 1: allSeasons
        };
    }

    /**
     * This method is called when the component is rendered
     */
    componentDidMount(){
        this.getData(this.props);
        //This makes to scroll up the page when we come from standard stats of advanced stats from a game played by the team
        window.scrollTo(0, 0);        
    }

    /**
     * This method is called when the component receive new props after being mounted. This is the way like father component transfer data to a son
     * component
     * 
     * @param {*} prevProps
     * @param {*} prevState 
     */
    //componentWillReceiveProps(nextProps){
    componentDidUpdate(prevProps){
        //this.props = nextProps;
        if (typeof prevProps !== "undefined" && prevProps !== this.props){
            this.getData();
            this.setState({
                id_player: this.props.item.id
            });    
        }
        //This makes to scroll up the page when we come from standard stats of advanced stats from a game played by the team
        window.scrollTo(0, 0);        
    }

    /**
     * Return data from Efficience advanced stats for players
     * 
     */
    generateDataEfficience(){
        let data = [];
        data = this.state.player_stdstats_history.map((item_std) => {
            let item = this.state.player_advstats_history.find((item_adv) => {
                return parseInt(item_adv.id_player_team) === parseInt(item_std.id_player_team);
            });
            return{
                number_row: item_std.number_row,
                season_name: item_std.season_name,
                pointsbyposs: item_std.pointsbyposs,
                ppa: item_std.ppa,
                usg: item.usg,
                etc: item.etc,
                ts: item.ts,
                ortg: item.ortg,
                drtg: item.drtg,
                nrtg: item.nrtg
            };
        });
        return data;
    }    

    /**
     * Return data for Others advanced stats for players 
     * 
     */
    generateDataOthers(){
        let data = [];
        data = this.state.player_stdstats_history.map((item_std) => {
            let item = this.state.player_advstats_history.find((item_adv) => {
                return parseInt(item_adv.id_player_team) === parseInt(item_std.id_player_team);
            });
            return{
                number_row: item_std.number_row,
                season_name: item_std.season_name,
                dre: item.dre,
                game_score: item.game_score,
                p_assists: item.p_assists,
                assists_x_turnovers: item.assists_x_turnovers,
                assists_ratio: item.assists_ratio,
                p_steals: item.p_steals,
            };
        });
        return data;
    }    

    generateDataRebounds(){
        let data = [];
        data = this.state.player_stdstats_history.map((item_std) => {
            let item = this.state.player_advstats_history.find((item_adv) => {
                return parseInt(item_adv.id_player_team) === parseInt(item_std.id_player_team);
            });
            return{
                number_row: item_std.number_row,
                season_name: item_std.season_name,
                name: item_std.name,
                rd: item_std.rd,
                reb_def_pp: item_std.reb_def_pp,
                ro: item_std.ro,
                reb_of_pp: item_std.reb_of_pp,
                tot_reb: item_std.tot_reb,
                total_rebs_pp: item_std.total_rebs_pp,
                p_reb_def: item.p_reb_def,
                p_reb_of: item.p_reb_of,
                p_tot_reb: item.p_tot_reb
            };
        });
        return data;
    }    

    async getData(){
        let params = [{"###id_player###": this.props.item.id}];
        let pcomps = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_COMPETITIONS_FIBA, params);
        let data = filterCompetitions(pcomps.data.player_competitions);
        let item_selected = data.data_filtered[data.data_filtered.length - 1];
        let comps = getCompetitions(data.comps, item_selected.id_select);
        params = [{"###id_player###": this.props.item.id}, {"###id_comps###": comps}];
        let pss = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_STD_STATS_FIBA, params);
        params = [{"###id_season###": item_selected.id_season}];
        let leagueSeasonStats = await getDataFromServer(process.env.URL_FIBA_API, LEAGUE_STATS_FIBA, params);
        let listPlayerSS = await getDataFromServer(process.env.URL_FIBA_API, PLAYERS_STD_STATS_FIBA_2, params);
        params = [{"###id_player###": this.props.item.id}, {"###id_comps###": comps}];
        let pas = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_SEASON_ADV_STATS_FIBA, params);
        params = [{"###id_season###": item_selected.id_season}];
        let listPlayerAS = await getDataFromServer(process.env.URL_FIBA_API, PLAYERS_SEASON_ADV_STATS_FIBA_2, params);
        params = [{"###id_player###": this.props.item.id}, {"###id_comps###": comps}];
        let game_log = await getDataFromServer(process.env.URL_FIBA_API, GAME_LOG_FIBA, params);
        game_log = addAccessToStats(game_log.data.game_log, this.props.isFEB);
        params = [{"###id_player###": this.props.item.id}];
        let player_stdstats_history = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_STDSTATS_HISTORY_FIBA, params);
        player_stdstats_history = addNumberRow((this.props.language === "es") ? setSpanishFormat(player_stdstats_history.data.player_stdstats_history) : player_stdstats_history.data.player_stdstats_history);
        let player_advstats_history = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_ADVSTATS_HISTORY_FIBA, params);
        player_advstats_history = addNumberRow((this.props.language === "es") ? setSpanishFormat(player_advstats_history.data.player_advstats_history) : player_advstats_history.data.player_advstats_history);
        
        this.setState({
            comps: data.comps,
            select: data.data_filtered,
            itemSelected: item_selected,
            pss: pss.data.player_std_stats[0],            
            league_stats: leagueSeasonStats.data.league_stats[0],
            listpss: listPlayerSS.data.players_std_stats_2,
            pas: pas.data.player_adv_stats[0],
            listpas: listPlayerAS.data.players_adv_stats_2,
            game_log: game_log,
            player_stdstats_history: player_stdstats_history,
            player_advstats_history: player_advstats_history,

            spider1_data: [
                [
                    { axis: (this.props.language === "es") ? "Minutos por partido" : "Minutes by game", value: pss.data.player_std_stats[0].mpp},
                    { axis: (this.props.language === "es") ? "Puntos por partido" : "Points by game", value: pss.data.player_std_stats[0].total_puntos_pp},
                    { axis: (this.props.language === "es") ? "TS%" : "TS%", value: pas.data.player_adv_stats[0].ts },
                    { axis: (this.props.language === "es") ? "eTC%" : "eFG%", value: pas.data.player_adv_stats[0].etc },
                    { axis: (this.props.language === "es") ? "TL%" : "FT%", value: pss.data.player_std_stats[0].tl_percentage},
                    { axis: (this.props.language === "es") ? "T2P%" : "2P%", value: pss.data.player_std_stats[0].t2p_percentage},
                    { axis: (this.props.language === "es") ? "T3P%" : "3P%", value: pss.data.player_std_stats[0].t3p_percentage},
                ],
                [
                    { axis: (this.props.language === "es") ? "Minutos por partido" : "Minutes by game", value: leagueSeasonStats.data.league_stats[0].mbp },
                    { axis: (this.props.language === "es") ? "Puntos por partido" : "Points by game", value: leagueSeasonStats.data.league_stats[0].pbp },
                    { axis: (this.props.language === "es") ? "TS%" : "TS%", value: leagueSeasonStats.data.league_stats[0].ts },
                    { axis: (this.props.language === "es") ? "eTC%" : "eFG%", value: leagueSeasonStats.data.league_stats[0].etc },
                    { axis: (this.props.language === "es") ? "TL%" : "FT%", value: leagueSeasonStats.data.league_stats[0].tl_percentage },
                    { axis: (this.props.language === "es") ? "T2P%" : "2P%", value: leagueSeasonStats.data.league_stats[0].t2p_percentage },
                    { axis: (this.props.language === "es") ? "T3P%" : "3P%", value: leagueSeasonStats.data.league_stats[0].t3p_percentage },
                ]
            ],
            spider2_data: [
                [
                    { axis: (this.props.language === "es") ? "Reb. Def. %" : "Def. Reb. %", value: pas.data.player_adv_stats[0].p_reb_def },
                    { axis: (this.props.language === "es") ? "Reb. Of. %" : "Off. Reb. %", value: pas.data.player_adv_stats[0].p_reb_of },
                    { axis: (this.props.language === "es") ? "Total Rebs. %" : "Total. Reb. %", value: pas.data.player_adv_stats[0].p_tot_reb },
                    { axis: (this.props.language === "es") ? "Asistencias %" : "Assists %", value: pas.data.player_adv_stats[0].p_assists },
                    { axis: (this.props.language === "es") ? "Ratio Asist. %" : "Ass. Ratio %", value: pas.data.player_adv_stats[0].assists_ratio },
                    { axis: (this.props.language === "es") ? "Robos %" : "Steals %", value: pas.data.player_adv_stats[0].p_steals },
                ],
                [
                    { axis: (this.props.language === "es") ? "Reb. Def. %" : "Def. Reb. %", value: leagueSeasonStats.data.league_stats[0].p_reb_def },
                    { axis: (this.props.language === "es") ? "Reb. Of. %" : "Off. Reb. %", value: leagueSeasonStats.data.league_stats[0].p_reb_of },
                    { axis: (this.props.language === "es") ? "Total Rebs. %" : "Total. Reb. %", value: leagueSeasonStats.data.league_stats[0].p_tot_reb },
                    { axis: (this.props.language === "es") ? "Asistencias %" : "Assists %", value: leagueSeasonStats.data.league_stats[0].p_assists },
                    { axis: (this.props.language === "es") ? "Ratio Asist. %" : "Ass. Ratio %", value: leagueSeasonStats.data.league_stats[0].assists_ratio },
                    { axis: (this.props.language === "es") ? "Robos %" : "Steals %", value: leagueSeasonStats.data.league_stats[0].p_steals },
                ]
            ]
        }, () => {
            let dataRebounds = this.generateDataRebounds();
            let efficience = this.generateDataEfficience();
            let others = this.generateDataOthers();
            this.setState({
                player_rebounds_history:  dataRebounds,
                player_efficience_history: efficience,
                player_others_history: others,
                loaded: true
            });           
        });        
    }

    getSeasonsOptions(){
        let items = this.state.select.map((item) => {
            return(<option key = {item.id_select} value = {item.id_select}>{item.name + " / " + item.description}</option>);
        });
        return items;               
    }

    async handleChange (event) {
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();

        let comp = this.state.select.find((item) => {
            return parseInt(item.id_select) === parseInt(event.target.value)
        });
        console.log("id_select: " + comp.id_select);
        console.log("description:" + comp.name + " / " + comp.description);
        let comps = getCompetitions(this.state.comps, comp.id_select);
        console.log(comps);
        let params = [{"###id_player###": this.props.item.id}, {"###id_comps###": comps}];
        let pss = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_STD_STATS_FIBA, params);        
        params = [{"###id_season###": comp.id_season}];
        let leagueSeasonStats = await getDataFromServer(process.env.URL_FIBA_API, LEAGUE_STATS_FIBA, params);
        let listPlayerSS = await getDataFromServer(process.env.URL_FIBA_API, PLAYERS_STD_STATS_FIBA_2, params);
        params = [{"###id_player###": this.props.item.id}, {"###id_comps###": comps}];
        let pas = await getDataFromServer(process.env.URL_FIBA_API, PLAYER_SEASON_ADV_STATS_FIBA, params);
        params = [{"###id_season###": comp.id_season}];
        let listPlayerAS = await getDataFromServer(process.env.URL_FIBA_API, PLAYERS_SEASON_ADV_STATS_FIBA_2, params); 
        params = [{"###id_player###": this.props.item.id}, {"###id_comps###": comps}];
        let game_log = await getDataFromServer(process.env.URL_FIBA_API, GAME_LOG_FIBA, params);
        game_log = addAccessToStats(game_log.data.game_log, this.props.isFEB);

        this.setState({
            pss: pss.data.player_std_stats[0],
            pas: pas.data.player_adv_stats[0],
            listpas: listPlayerAS.data.players_adv_stats_2,
            itemSelected: comp,
            league_stats: leagueSeasonStats.data.league_stats[0],
            listpss: listPlayerSS.data.players_std_stats_2,
            game_log: game_log,

            spider1_data: [
                [
                    { axis: (this.props.language === "es") ? "Minutos por partido" : "Minutes by game", value: pss.data.player_std_stats[0].mpp},
                    { axis: (this.props.language === "es") ? "Puntos por partido" : "Points by game", value: pss.data.player_std_stats[0].total_puntos_pp},
                    { axis: (this.props.language === "es") ? "TS%" : "TS%", value: pas.data.player_adv_stats[0].ts },
                    { axis: (this.props.language === "es") ? "eTC%" : "eFG%", value: pas.data.player_adv_stats[0].etc },
                    { axis: (this.props.language === "es") ? "TL%" : "FT%", value: pss.data.player_std_stats[0].tl_percentage},
                    { axis: (this.props.language === "es") ? "T2P%" : "2P%", value: pss.data.player_std_stats[0].t2p_percentage},
                    { axis: (this.props.language === "es") ? "T3P%" : "3P%", value: pss.data.player_std_stats[0].t3p_percentage},
                ],
                [
                    { axis: (this.props.language === "es") ? "Minutos por partido" : "Minutes by game", value: leagueSeasonStats.data.league_stats[0].mbp },
                    { axis: (this.props.language === "es") ? "Puntos por partido" : "Points by game", value: leagueSeasonStats.data.league_stats[0].pbp },
                    { axis: (this.props.language === "es") ? "TS%" : "TS%", value: leagueSeasonStats.data.league_stats[0].ts },
                    { axis: (this.props.language === "es") ? "eTC%" : "eFG%", value: leagueSeasonStats.data.league_stats[0].etc },
                    { axis: (this.props.language === "es") ? "TL%" : "FT%", value: leagueSeasonStats.data.league_stats[0].tl_percentage },
                    { axis: (this.props.language === "es") ? "T2P%" : "2P%", value: leagueSeasonStats.data.league_stats[0].t2p_percentage },
                    { axis: (this.props.language === "es") ? "T3P%" : "3P%", value: leagueSeasonStats.data.league_stats[0].t3p_percentage },
                ]
            ],         
            spider2_data: [
                [
                    { axis: (this.props.language === "es") ? "Reb. Def. %" : "Def. Reb. %", value: pas.data.player_adv_stats[0].p_reb_def },
                    { axis: (this.props.language === "es") ? "Reb. Of. %" : "Off. Reb. %", value: pas.data.player_adv_stats[0].p_reb_of },
                    { axis: (this.props.language === "es") ? "Total Rebs. %" : "Total. Reb. %", value: pas.data.player_adv_stats[0].p_tot_reb },
                    { axis: (this.props.language === "es") ? "Asistencias %" : "Assists %", value: pas.data.player_adv_stats[0].p_assists },
                    { axis: (this.props.language === "es") ? "Ratio Asist. %" : "Ass. Ratio %", value: pas.data.player_adv_stats[0].assists_ratio },
                    { axis: (this.props.language === "es") ? "Robos %" : "Steals %", value: pas.data.player_adv_stats[0].p_steals },
                ],
                [
                    { axis: (this.props.language === "es") ? "Reb. Def. %" : "Def. Reb. %", value: leagueSeasonStats.data.league_stats[0].p_reb_def },
                    { axis: (this.props.language === "es") ? "Reb. Of. %" : "Off. Reb. %", value: leagueSeasonStats.data.league_stats[0].p_reb_of },
                    { axis: (this.props.language === "es") ? "Total Rebs. %" : "Total. Reb. %", value: leagueSeasonStats.data.league_stats[0].p_tot_reb },
                    { axis: (this.props.language === "es") ? "Asistencias %" : "Assists %", value: leagueSeasonStats.data.league_stats[0].p_assists },
                    { axis: (this.props.language === "es") ? "Ratio Asist. %" : "Ass. Ratio %", value: leagueSeasonStats.data.league_stats[0].assists_ratio },
                    { axis: (this.props.language === "es") ? "Robos %" : "Steals %", value: leagueSeasonStats.data.league_stats[0].p_steals },
                ]
            ],      
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
                                            {(this.props.language === "es") ? "Por temporada" : "Season"}
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
                                            {(this.props.language === "es") ? "Todas las temporadas" : "All Seasons"}
                                        </span>
                                    </Button>
                                </Col>
                            </Row>                           
                            <div style = {{display: (this.state.statSelected === 0) ? "block" : "none"}}>
                                <div className = "font-weight-bold text-center"
                                    style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                            padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                            {this.state.itemSelected.name + " / " + this.state.itemSelected.description}
                                </div>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Estadísticas por partido" : "Per game stats"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-1"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>                   
                                        <PlayerStatsTable
                                            id_player = {this.props.item.id}
                                            pss = {this.state.pss}
                                            listpss = {this.state.listpss}
                                        />                          
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Tiros" : "Shooting"}
                                        </div>                     
                                        <Form.Control as="select" 
                                            id = "season-2"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>                       
                                        <PlayerShootsTable 
                                            id_player = {this.props.item.id}
                                            pss = {this.state.pss}
                                            listpss = {this.state.listpss}                                  
                                        />                   
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Tiros por partido" : "Shooting per game"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-3"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>        
                                        <PlayerShootsByGameTable 
                                            id_player = {this.props.item.id}
                                            pss = {this.state.pss}
                                            listpss = {this.state.listpss}        
                                        />
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Totales" : "Totals"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-4"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <PlayerTotalsTable 
                                            id_player = {this.props.item.id}
                                            pss = {this.state.pss}
                                            listpss = {this.state.listpss}        
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Estadísticas avanzadas" : "Advanced stats"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-5"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>
                                        <PlayerAdvancedScoring 
                                            id_player = {this.props.item.id}
                                            pss = {this.state.pss}
                                            pas = {this.state.pas}
                                            listpss = {this.state.listpss}
                                            listpas = {this.state.listpas}        
                                        />                                            
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Otras estadísticas avanzadas" : "Other advanced stats"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-6"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>             
                                        <PlayerAdvancedOther 
                                            id_player = {this.props.item.id}
                                            pas = {this.state.pas}
                                            listpas = {this.state.listpas}        
                                        />                        
                                    </Col>
                                </Row>
                                <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Comparativa jugadora - Resto de la liga" : "Player comparison - rest of the league"}
                                </div> 
                                <Row>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Comparativa de tiro entre la jugadora y el resto de la liga" : "Comparison shooting between player and the rest of the league"}
                                        </div> 
                                        <Form.Control as="select" 
                                            id = "season-7"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>                                            
                                        <SpiderChart
                                            idContainer="container-1"
                                            idLegend = "legend-1"
                                            language={this.props.language}
                                            data={this.state.spider1_data}
                                            title= {(this.props.language === "es") ? "COMPARATIVA DE TIRO" : "SHOOTING COMPARISON"}
                                            legendOptions={["Jugadora", "Liga"]}
                                        />                                       
                                    </Col>
                                    <Col md = {6}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Otros ratios comparativos entre jugadora y resto de la liga" : "Another comparison ratios between player and the rest of the league"}
                                        </div> 
                                        <Form.Control as="select" 
                                            id = "season-8"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>                                            
                                        <SpiderChart
                                            idContainer="container-2"
                                            idLegend = "legend-2"
                                            language={this.props.language}
                                            data={this.state.spider2_data}
                                            title={(this.props.language === "es") ? "COMPARATIVA OTROS DATOS" : "OTHER DATA COMPARISON"}
                                            legendOptions={["Jugadora", "Liga"]}
                                        />                                            
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {12}>
                                        <div className = "text-light font-weight-bold header-title-stats" style = {{fontSize: 14 + "pt"}}>
                                            {(this.props.language === "es") ? "Partidos jugados" : "Game log"}
                                        </div>            
                                        <Form.Control as="select" 
                                            id = "season-7"
                                            style = {{marginTop: 10 + "px", fontWeight: "bold"}}
                                            value = {this.state.itemSelected.id_select}
                                            onChange = {event => this.handleChange(event)}>
                                                {this.getSeasonsOptions()}
                                        </Form.Control>       
                                        <PlayerGameLog 
                                            data = {this.state.game_log}
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
                                <PTSeasonsShooting 
                                    language = {this.props.language}
                                    player_stdstats_history = {this.state.player_stdstats_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "REBOTES" : "REBOUNDING"}
                                </div>
                                <PTSeasonsRebounds
                                    language = {this.props.language}
                                    player_rebounds_history = {this.state.player_rebounds_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "EFICIENCIA" : "EFFICIENCE"}
                                </div>
                                <PTSeasonsEfficience
                                    language = {this.props.language}
                                    player_efficience_history = {this.state.player_efficience_history}
                                />
                                <div className = "text-center text-light" 
                                    style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                            marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                        {(this.props.language === "es") ? "OTRAS" : "OTHERS"}
                                </div>
                                <PTSeasonsOthers
                                    language = {this.props.language}
                                    player_others_history = {this.state.player_others_history}
                                />
                            </div>
                        </div>
                        :
                        <Loading language = "es" />
                }
            </div>
        )
    }
}

module.exports.PlayerSearcher = PlayerSearcher;