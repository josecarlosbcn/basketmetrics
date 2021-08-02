import React, {Component} from "react";
import * as d3 from "d3";
import { Row, Col, Button, Form } from "react-bootstrap";
import "../../../css/content.css";
import { getDataFromServer, setSpanishFormat, formatDataScatterPlot2, formatDataSingleBarChart } from "../Functions";
import { TEAMS_SEASON_STD_STATS, TEAMS_SEASON_ADV_STATS, TEAMS_PTOTREBTS_SEASON, GROUPS, TEAMS_BY_GROUP } from "../../FEBCOM/Querys";
import { TEAMS_SEASON_STD_STATS_FIBA, TEAMS_SEASON_ADV_STATS_FIBA, TEAMS_PTOTREBTS_SEASON_FIBA, GROUPS_FIBA, TEAMS_BY_GROUP_FIBA } from "../../FIBACOM/Querys";
import { TTShooting } from "./TTShooting";
import { TTRebounds } from "./TTRebounds";
import { TTFourFactors } from "./TTFourFactors";
import { TTEfficience } from "./TTEfficience";
import { TTOthers } from "./TTOthers";
import { Loading } from "../Loading";
import { ScatterPlot2 } from "../Graphics/ScatterPlot2";
import { ScatterPlot3 } from "../Graphics/ScatterPlot3";
import { SingleBarChart } from "../Graphics/SingleBarChart";
import { MultipleScatterPlot } from "../Graphics/MultipleScatterPlot";
import { thresholdScott } from "d3";


class TeamsStatistics extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false,
            showTeams: false,
            itemTeamsSelected: 10000,
            counter: 0
        };
    }

    componentDidMount(){
        console.log("TeamsStatistics loaded");
        this.setState({
            seasons: this.props.seasons,
            itemSelected: this.props.seasons[0].id,
            statSelected: 0, //0: Tables, 1: Graphics
        }, () => {
            this.getData();
        });
    }

    async getData(){
        let params = [{"###id_season###" : this.state.itemSelected}];
        let teams_std_stats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_SEASON_STD_STATS : TEAMS_SEASON_STD_STATS_FIBA, params);
        let teams_adv_stats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_SEASON_ADV_STATS : TEAMS_SEASON_ADV_STATS_FIBA, params);
        let params2 = [{"###id_season###" : this.state.itemSelected}, {"###id_league###" : this.props.idLeague}];
        let groups = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? GROUPS : GROUPS_FIBA, params2);
        teams_std_stats = (this.props.language === "es") ? setSpanishFormat(teams_std_stats.data.teams_stdstats_by_season) : teams_std_stats.data.teams_stdstats_by_season; 
        teams_adv_stats = (this.props.language === "es") ? setSpanishFormat(teams_adv_stats.data.teams_advstats_by_season) : teams_adv_stats.data.teams_advstats_by_season;
        this.setState({
            teams_std_stats: teams_std_stats,
            teams_adv_stats: teams_adv_stats,
            groups: groups.data.groups,
            g_ortg_drtg: []
        }, () => {
            let dataRebounds = this.generateDataRebounds();
            this.setState({
                teams_rebounds: dataRebounds,
                loaded: true
            });
        });
    }

    generateDataRebounds(){
        let data = [];
        data = this.state.teams_std_stats.map((item_std) => {
            let item = this.state.teams_adv_stats.find((item_adv) => {
                return parseInt(item_adv.id_team_club) === parseInt(item_std.id_team_club);
            });
            return{
                id_club: item_std.id_club,
                id_team_club: item_std.id_team_club,
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

    getTeamsOptions(){
        let items = this.state.groups.map((group, index) => {
            if (index != 0)
                return(<option key = {group.id} value = {group.id}>{group.group_name}</option>);
            else{
                return(<option key = {group.id} value = {group.id} defaultValue>{group.group_name}</option>);
            }
                
        });
        return items;               
    }
    
    /**
     * MEthod called from season select
     * 
     * @param {*} event 
     */
    async handleChange(event){
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();

        let season = this.state.seasons.find((item) => {
            return parseInt(item.id) === parseInt(event.target.value)
        });        

        let params = [{"###id_season###" : season.id}];
        let teams_std_stats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_SEASON_STD_STATS : TEAMS_SEASON_STD_STATS_FIBA, params);
        let teams_adv_stats = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_SEASON_ADV_STATS : TEAMS_SEASON_ADV_STATS_FIBA, params);
        teams_std_stats = (this.props.language === "es") ? setSpanishFormat(teams_std_stats.data.teams_stdstats_by_season) : teams_std_stats.data.teams_stdstats_by_season; 
        teams_adv_stats = (this.props.language === "es") ? setSpanishFormat(teams_adv_stats.data.teams_advstats_by_season) : teams_adv_stats.data.teams_advstats_by_season;
        let params2 = [{"###id_season###" : season.id}, {"###id_league###" : this.props.idLeague}];
        let groups = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? GROUPS : GROUPS_FIBA, params2);        
        this.setState({
            teams_std_stats: teams_std_stats,
            teams_adv_stats: teams_adv_stats,
            itemSelected: season.id,
            itemTeamsSelected: 10000,
            groups: groups.data.groups,
        }, () => {
            let dataRebounds = this.generateDataRebounds();
            this.setState({
                teams_rebounds:  dataRebounds,
                loaded: true,
                showTeams: false,
            }, () => {
                this.updateData(event);
            });
        });
    }

    /**
     * Method called from teams selects
     * 
     * @param {*} event 
     */
    handleChangeTeams(event){
        this.setState({
            itemTeamsSelected: event.target.value
        })

        if (event.target.value.length > 0 && parseInt(event.target.value) !== 9999){
            this.updateData(event);
            this.setState({
                showTeams: false
            })
        }else{
            if (event.target.value.length > 0 && parseInt(event.target.value) === 9999){
                this.setState({
                    showTeams: true
                })    
            }
        }
            
    }

    /**
     * Method called when we push "Graphics" button
     * @param {*} event 
     */
    async handleClick(event){
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();
        this.setState({
            statSelected: (event.target.id === "tablesButton") ? 0 : 1,
        });                      
        this.updateData(event);
    }

    async updateData(event){
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();
        /**
         * We need to copy by value the array this.state.teams_adv_stat like this way, because with array.slice(0), the json objects are copy by
         * reference and when we modified the values to transform to english format float values then we've got a problem sorting the tables 
         * because their functions seek float values with "," and they don't found so I've got an error, because the values are modificated because
         * the copy is by reference and not by value. So, doing a copy like this, I've got an array with all the elements copies by value and not
         * by reference
         */

        //Here we update all the source datas which are useful to send data to the graphics
        let g_adv_stats = this.state.teams_adv_stats.map((item)=> {
            return {
                ...item
            }
        });
        let g_std_stats = this.state.teams_std_stats.map((item)=> {
            return {
                ...item
            }
        });
        let params = [{"###id_season###" : this.state.itemSelected}];
        let teams_total_rebounds, g1_ortg_drtg, g2_ts_tr, g3_u3p_3pp, g4_ppg_ppp, g5_as_to, g6_comp;
        console.log("event id: " + event.target.id);
        teams_total_rebounds = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_PTOTREBTS_SEASON : TEAMS_PTOTREBTS_SEASON_FIBA, params);
        if ((event.target.id === "graphicsButton") || (event.target.id === "season") ||
            (event.target.value.length > 0 && parseInt(event.target.value) === 10000)){
            //We show all the teams after make push on Graphics button
            g1_ortg_drtg = formatDataScatterPlot2(g_adv_stats, ["name", "drtg", "ortg"]);
            g2_ts_tr = formatDataScatterPlot2(teams_total_rebounds.data.teams_p_total_reb_by_season, ["name", "ts", "p_total_rebs"])
            g3_u3p_3pp = formatDataScatterPlot2(g_std_stats, ["name", "t3p_percentage", "p_t3p_puntos"]);
            g4_ppg_ppp = formatDataScatterPlot2(g_std_stats, ["name", "pointsbyposs", "ppa"]);
            g5_as_to = formatDataSingleBarChart(g_adv_stats, ["name", "assists_x_turnovers"]);
            g6_comp = this.getDataForMultipleScatterPlot(this.state.teams_std_stats, this.state.teams_adv_stats);            
        }

        if (event.target.value.length > 0 && parseInt(event.target.value) === 10000){ 
            //We show all the teams
            teams_total_rebounds = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_PTOTREBTS_SEASON : TEAMS_PTOTREBTS_SEASON_FIBA, params);
            g1_ortg_drtg = formatDataScatterPlot2(g_adv_stats, ["name", "drtg", "ortg"]);
            g2_ts_tr = formatDataScatterPlot2(teams_total_rebounds.data.teams_p_total_reb_by_season, ["name", "ts", "p_total_rebs"])
            g3_u3p_3pp = formatDataScatterPlot2(g_std_stats, ["name", "t3p_percentage", "p_t3p_puntos"]);
            g4_ppg_ppp = formatDataScatterPlot2(g_std_stats, ["name", "pointsbyposs", "ppa"]);
            g5_as_to = formatDataSingleBarChart(g_adv_stats, ["name", "assists_x_turnovers"]);
            g6_comp = this.getDataForMultipleScatterPlot(this.state.teams_std_stats, this.state.teams_adv_stats);            
        }

        if (event.target.value.length > 0 && parseInt(event.target.value) !== 9999 && parseInt(event.target.value) !== 10000 && event.target.id !== "season"){
            //We show all the teams from a group
            let params2 = [{"###id_group###" : parseInt(event.target.value)}]
            console.log("id_group: " + event.target.value);
            let teams_total_rebounds = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_PTOTREBTS_SEASON : TEAMS_PTOTREBTS_SEASON_FIBA, params);
            let teams_group = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_BY_GROUP : TEAMS_BY_GROUP_FIBA, params2);
            //let teams_filtered = this.filterTeams(teams_group.data.teams_by_group, this.state.teams_adv_stats);
/*             console.log("teams_filtered.length: " + teams_filtered.length);
            teams_filtered.forEach(item => {
                console.log("teams_filtered.id_team_club: " + item.id_team_club);
            }) */
            g1_ortg_drtg = formatDataScatterPlot2(this.filterTeams(teams_group.data.teams_by_group, g_adv_stats), ["name", "drtg", "ortg"]);
            g2_ts_tr = formatDataScatterPlot2(this.filterTeams(teams_group.data.teams_by_group, teams_total_rebounds.data.teams_p_total_reb_by_season), ["name", "ts", "p_total_rebs"])
            g3_u3p_3pp = formatDataScatterPlot2(this.filterTeams(teams_group.data.teams_by_group, g_std_stats), ["name", "t3p_percentage", "p_t3p_puntos"]);
            g4_ppg_ppp = formatDataScatterPlot2(this.filterTeams(teams_group.data.teams_by_group, g_std_stats), ["name", "pointsbyposs", "ppa"]);
            g5_as_to = formatDataSingleBarChart(this.filterTeams(teams_group.data.teams_by_group, g_adv_stats), ["name", "assists_x_turnovers"]);
            g6_comp = this.getDataForMultipleScatterPlot(this.filterTeams(teams_group.data.teams_by_group, this.state.teams_std_stats), this.filterTeams(teams_group.data.teams_by_group, this.state.teams_adv_stats));               
        }

        //Clean switch
        let checks = document.querySelectorAll("input[type='checkbox']");
        checks.forEach(item => {
            item.checked = false;
        })
        let teams_selected = [];
        this.setState({
            //statSelected: (event.target.id === "tablesButton") ? 0 : 1,
            teams_selected,
            g1_data: g1_ortg_drtg,
            g2_data: g2_ts_tr,
            g3_data: g3_u3p_3pp,
            g4_data: g4_ppg_ppp,
            g5_data: g5_as_to,
            g6_data: g6_comp
        });         
    }

    /**
     * Filter teams returning a new array with teams that are found in teams_group. All the teams that are no fonund in teams_group are not returned 
     * in the array
     * 
     * @param {*} teams_group 
     * @param {*} teams 
     */
    filterTeams(teams_group, teams){
        let result = [];
        teams_group.forEach(tg => {
            let item = teams.find(t => {
                return parseInt(tg.id) === parseInt(t.id_team_club)
            });
            (typeof item !== "undefined") ? result.push(item) : null;
        });
        return result;
    }

    /**
     * Return an array with a json in each position. This information is for MultipleScatterPlot graphic
     * The json contains this data: {pace: pace, eFG: eFG, t3pp: t3pp, ortg: ortg, drtg: drtg}
     * 
     * @param {*} tss Teams standard stats
     * @param {*} tas Teams advanced stats
     */
    getDataForMultipleScatterPlot(tss, tas){
        let team_std_stats = tss;
        let team_adv_stats = tas;        
        let pace = [], eFG = [], t3pp = [], ortg = [], drtg = [];
        team_adv_stats.forEach(item => {
            let std_data = team_std_stats.find(element => {
                return parseInt(element.id_team_club) === parseInt(item.id_team_club)
            });
            pace.push({
                name: item.name,
                value_x: item.name.substring(0, 3),
                value_y: parseFloat((item.possessions.replace(",", ".")/parseFloat(std_data.games))).toFixed(2)
            });
            eFG.push({
                name: item.name,
                value_x: item.name.substring(0, 3),
                value_y: parseFloat(item.etc.replace(",", ".")).toFixed(2)
            });
            t3pp.push({
                name: item.name,
                value_x: item.name.substring(0, 3),
                value_y: parseFloat(std_data.t3p_percentage.replace(",", ".")).toFixed(2)
            })
            ortg.push({
                name: item.name,
                value_x: item.name.substring(0, 3),
                value_y: parseFloat(item.ortg.replace(",", ".")).toFixed(2)
            });
            drtg.push({
                name: item.name,
                value_x: item.name.substring(0, 3),
                value_y: parseFloat(item.drtg.replace(",", ".")).toFixed(2)
            });
        });
        return {
            pace: pace,
            eFG: eFG,
            t3pp: t3pp,
            ortg: ortg,
            drtg: drtg
        }
    }

    /**
     * Method which let us to select teams to see its stats in the graphics
     * 
     * @param {*} event 
     */
    async onChangeTeam(event){
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();

        //Here we update all the source datas which are useful to send data to the graphics
        let g_adv_stats = this.state.teams_adv_stats.map((item)=> {
            return {
                ...item
            }
        });
        let g_std_stats = this.state.teams_std_stats.map((item)=> {
            return {
                ...item
            }
        });
        let params = [{"###id_season###" : this.state.itemSelected}];
        let teams_total_rebounds, g1_ortg_drtg, g2_ts_tr, g3_u3p_3pp, g4_ppg_ppp, g5_as_to, g6_comp;
        teams_total_rebounds = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? TEAMS_PTOTREBTS_SEASON : TEAMS_PTOTREBTS_SEASON_FIBA, params);

        this.setState(state => {
            let teams_selected;
            
            if (document.querySelector("[id='" + event.target.id  + "']").checked)
                teams_selected = state.teams_selected.concat({"id" : parseInt(event.target.id)});
            else{
                teams_selected = this.removeElement(event.target.id, state.teams_selected);
            }
            return{
                teams_selected
            }
        }, () => {
/*                 let teams_filtered = this.filterTeams(this.state.teams_selected, this.state.teams_adv_stats);
            console.log("teams_filtered.length: " + teams_filtered.length);
            teams_filtered.forEach(item => {
                console.log("teams_filtered.id_team_club: " + item.id_team_club);
            }) */
            g1_ortg_drtg = formatDataScatterPlot2(this.filterTeams(this.state.teams_selected, g_adv_stats), ["name", "drtg", "ortg"]);
            g2_ts_tr = formatDataScatterPlot2(this.filterTeams(this.state.teams_selected, teams_total_rebounds.data.teams_p_total_reb_by_season), ["name", "ts", "p_total_rebs"])
            g3_u3p_3pp = formatDataScatterPlot2(this.filterTeams(this.state.teams_selected, g_std_stats), ["name", "t3p_percentage", "p_t3p_puntos"]);
            g4_ppg_ppp = formatDataScatterPlot2(this.filterTeams(this.state.teams_selected, g_std_stats), ["name", "pointsbyposs", "ppa"]);
            g5_as_to = formatDataSingleBarChart(this.filterTeams(this.state.teams_selected, g_adv_stats), ["name", "assists_x_turnovers"]);
            g6_comp = this.getDataForMultipleScatterPlot(this.filterTeams(this.state.teams_selected, this.state.teams_std_stats), this.filterTeams(this.state.teams_selected, this.state.teams_adv_stats));
            this.setState({
                //statSelected: (event.target.id === "tablesButton") ? 0 : 1,
                g1_data: g1_ortg_drtg,
                g2_data: g2_ts_tr,
                g3_data: g3_u3p_3pp,
                g4_data: g4_ppg_ppp,
                g5_data: g5_as_to,
                g6_data: g6_comp
            });    
        });    
    }

    /**
     * Remove one element from array ts which id is equal to id passed like parameter
     * @param {*} id 
     * @param {*} ts 
     */
    removeElement(id, ts){
        return ts.filter(item => {
            return parseInt(item.id) !== parseInt(id)
        })
    }

    /**
     * Sort data alfabetically
     * 
     * @param {*} data 
     */
    sortData(data){
        return data.sort((a ,b) => {
            return a.name.localeCompare(b.name)
        });
    }

    render(){
        let scas = [
            {
                stats: "Pace",
                percentage: false,
                color: "fffa82",
                symbol: d3.symbolCross
            },
            {
                stats: (this.props.language === "es") ? "eTC%" : "eFG%",
                percentage: true,
                color: "#96f202",
                symbol: d3.symbolDiamond
            },
            {
                stats: (this.props.language === "es") ? "T3P%" : "3P%",
                percentage: true,
                color: "#00d7ef",
                symbol: d3.symbolStar
            },
            {
                stats: "ORTG",
                percentage: false,
                color: "#F8F9FA",
                symbol: d3.symbolWye
            },
            {
                stats: "DRTG",
                percentage: false,
                color: "#ff21ff",
                symbol: d3.symbolCircle
            }
        ];
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <Form.Control as="select" 
                                id = "season"
                                style = {{marginTop: 10 + "px", fontSize: 14 + "pt", fontWeight: "bold"}}
                                value = {this.state.itemSelected}
                                onChange = {event => this.handleChange(event)}>
                                    {this.getSeasonsOptions()}
                            </Form.Control> 
                            <Row style = {{marginTop: 10 + "px"}}>
                                <Col md = {6}>
                                    <Button 
                                        id = "tablesButton"
                                        onClick = {(event) => this.handleClick(event)}
                                        style = {{width: 100 + "%", backgroundColor: (this.state.statSelected === 0) ? "#007BFF" : "#6C757D"}}
                                        disabled = {(this.state.statSelected === 0 ) ? true : false}>
                                        <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>
                                            {(this.props.language === "es") ? "Tablas" : "Tables"}
                                        </span>
                                   </Button>
                                </Col>
                                <Col md = {6}>
                                    <Button
                                        id = "graphicsButton" 
                                        onClick = {(event) => this.handleClick(event)}
                                        style = {{width: 100 + "%", backgroundColor: (this.state.statSelected === 1) ? "#007BFF" : "#6C757D"}}
                                        disabled = {(this.state.statSelected === 1 ) ? true : false}>
                                        <span style = {{fontSize: 16 + "pt", fontWeight: "bold"}}>
                                            {(this.props.language === "es") ? "Gráficos" : "Graphics"}
                                        </span>
                                    </Button>
                                </Col>
                            </Row>
                            <div id = "tablesContent" style = {{display: (this.state.statSelected === 0) ? "block" : "none"}}>
                                <TTShooting
                                    language = {this.props.language}
                                    teams_std_stats = {this.state.teams_std_stats}
                                />
                                <TTRebounds
                                    language = {this.props.language}
                                    teams_rebounds = {this.state.teams_rebounds}
                                />
                                <TTFourFactors
                                    language = {this.props.language}
                                    teams_adv_stats = {this.state.teams_adv_stats}
                                />
                                <TTEfficience
                                    language = {this.props.language}
                                    teams_adv_stats = {this.state.teams_adv_stats}
                                />
                                <TTOthers
                                    language = {this.props.language}
                                    teams_adv_stats = {this.state.teams_adv_stats}
                                />
                            </div>
                            <div id = "graphicsContent" style = {{marginTop: 10 + "px", display: (this.state.statSelected === 1) ? "block" : "none"}}>
                                <Row>
                                    <Col md = {12}>
                                        {
                                            (this.props.idLeague !== process.env.ID_LEAGUE_LF1 || !this.props.isFEB) ?
                                                <Form.Control as="select" 
                                                    id = "teams_selected-1"
                                                    style = {{marginTop: 10 + "px", fontSize: 14 + "pt", fontWeight: "bold", marginBottom: 10 + "px"}}
                                                    value = {this.state.itemTeamsSelected}
                                                    onChange = {event => this.handleChangeTeams(event)}>
                                                        <option key = {10000} value = {10000}>{"Todos los equipos"}</option>
                                                        <option key = {9999} value = {9999}>{"Selecciona equipos"}</option>
                                                        {this.getTeamsOptions()}
                                                </Form.Control> 
                                            :
                                                null
                                        }            
                                        <div
                                            className="text-left"
                                            style={{
                                            fontSize: 0.8 + "rem",
                                            padding: 3 + "px",
                                            backgroundColor: "#FFFFFF",
                                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                                            display: (this.state.showTeams) ? "grid" : "none"
                                            }}
                                        >
                                            {this.sortData(this.state.teams_std_stats)
                                            .map((column, index) => (
                                                <Form.Check
                                                    type="switch"
                                                    key={parseInt(column.id_team_club)}
                                                    inline
                                                    label={column.name}
                                                    id={parseInt(column.id_team_club)}
                                                    aria-checked={column.toggle ? "true" : "false"}
                                                    onChange={(event) => this.onChangeTeam(event)}
                                                />
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = {12}>
                                        <div className = "text-center text-light" 
                                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                            {(this.props.language === "es") ? "ORTG / DRTG" : "ORTG / DRTG"}
                                        </div>
                                        <ScatterPlot2 
                                            idContainer = "container-1"
                                            language = {this.props.language}
                                            data = {this.state.g1_data}
                                            x_label = {(this.props.language === "es") ? "DRTG" :  "DRTG"}
                                            y_label  = {(this.props.language === "es") ? "ORTG" :  "ORTG"}   
                                            percentage_x = {false}
                                            percentage_y = {false}
                                            visible = {this.state.statSelected === 1}                                                                                                          
                                        />                                        
                                        <div className = "text-center text-light" 
                                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                            {(this.props.language === "es") ? "TS% / RT%" : "TS% / RT%"}
                                        </div>
                                        <ScatterPlot2 
                                            idContainer = "container-2"
                                            language = {this.props.language}
                                            data = {this.state.g2_data}
                                            x_label = {(this.props.language === "es") ? "TS%" :  "TS%"}
                                            y_label  = {(this.props.language === "es") ? "RT%" :  "TR%"}   
                                            percentage_x = {true}
                                            percentage_y = {true}                    
                                            visible = {this.state.statSelected === 1}                                            
                                        />                                        
                                        <div className = "text-center text-light" 
                                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                            {(this.props.language === "es") ? "% USO T3P / T3P%" : "USG% 3P / 3P%"}
                                        </div>
                                        <ScatterPlot2 
                                            idContainer = "container-3"
                                            language = {this.props.language}
                                            data = {this.state.g3_data}
                                            x_label = {(this.props.language === "es") ? "T3P%" :  "3P%"}
                                            y_label  = {(this.props.language === "es") ? "%USO T3P" :  "USG% 3P"}   
                                            percentage_x = {true}
                                            percentage_y = {true}
                                            visible = {this.state.statSelected === 1}                                            
                                        />                                        
                                        <div className = "text-center text-light" 
                                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                            {(this.props.language === "es") ? "PUNTOS POR POSESIÓN / PUNTOS POR INTENTO" : "POINTS PER POSSESSION / POINTS PER ATTEMPT"}
                                        </div>
                                        <ScatterPlot3 
                                            idContainer = "container-4"
                                            language = {this.props.language}
                                            data = {this.state.g4_data}
                                            x_label = {(this.props.language === "es") ? "Puntos por posesión" :  "Points per possession"}
                                            y_label  = {(this.props.language === "es") ? "Puntos por intento" :  "Points per attempt"}
                                            visible = {this.state.statSelected === 1}
                                        />                       
                                        <div className = "text-center text-light" 
                                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                            {(this.props.language === "es") ? "ASISTENCIAS POR PÉRDIDA" : "ASSISTS PER TURNOVERS"}
                                        </div>
                                        <SingleBarChart 
                                            idContainer = "container-5"
                                            language = {this.props.language}
                                            data = {this.state.g5_data}
                                            x_label = {(this.props.language === "es") ? "Equipos" :  "Teams"}
                                            y_label  = {(this.props.language === "es") ? "Asistencias por pérdida" :  "Assists per turnovers"} 
                                            percentage_y = {false}
                                            visible = {this.state.statSelected === 1}
                                        />
                                        <div className = "text-center text-light" 
                                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 14 + "pt", fontWeight: "bold", 
                                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                                            {(this.props.language === "es") ? "COMPARATIVA ENTRE EQUIPOS" : "TEAM COMPARISON"}
                                        </div>
                                        <MultipleScatterPlot
                                            idContainer = "container-6"
                                            language = {this.props.language}
                                            data = {this.state.g6_data}
                                            scas = {scas}
                                            y_label = ""
                                            x_label = "Equipos"
                                            visible = {this.state.statSelected === 1}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        :
                        <Loading
                            language = {this.props.language}
                        />
                }
            </div>
        );
    }
}

module.exports.TeamsStatistics = TeamsStatistics;