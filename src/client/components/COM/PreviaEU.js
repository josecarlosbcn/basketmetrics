import React, {Component} from "react";
import {Row, Col, Button, Table} from "react-bootstrap";
import {PREVIA_NEXT_GAME_EUROLEAGUE, PREVIA_NEXT_GAME_EUROCUP, PREVIA_TEAM_EUR, PREVIA_TCSS, TEAM_PREVIA_ADV_STATS, 
        PREVIA_PLAYER, TEAM_PREVIA_STD_STATS} from "../FIBACOM/Querys";
import { getDataFromServer } from "./Functions";
import Tooltip from "react-simple-tooltip";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import "../../css/content.css";
import { Loading } from "./Loading";
import { MultipleBarChart } from "./Graphics/MultipleBarChart";
import { PreviaGlosary } from "./Glosary/PreviaGlosary";


/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */
/**
 * history object is inherited due to this module is called from Routes module who is exported with withRouter(Routes)
 */
export default class PreviaEU extends Component{
    constructor(){
        super();
        let expr_euroleague = /^(http|https):\/\/[A-Za-z0-9-.]*[:|[0-9]*]?\/women-euroleague\/\w*\/[A-Za-a-z-]*\/\d*$/;
        let expr_eurocup = /^(http|https):\/\/[A-Za-z0-9-.]*[:|[0-9]*]?\/women-eurocup\/\w*\/[A-Z-]*\/\d*$/;
        let isEuroleague = expr_euroleague.test(window.location.href);
        let isEurocup = expr_eurocup.test(window.location.href);
        let partes = window.location.href.split("/previa/");
        console.log("partes: " + partes);
        let id = partes[1].substring(partes[1].indexOf("/") + 1, partes[1].length); 
        console.log("id: " + id);
        this.state = {
            id: id,
            loaded: false,
            showGlosary: false,
            glosario: null,            
            isEuroleague: isEuroleague,
            isEurocup: isEurocup,
            game: {},
            local_team: {},
            away_team: {},
            local_tcss: {},
            away_tcss: {},
            local_previa_player: {},
            away_previa_player: {},
            lang: "es"
        };
    }

    async getData(){
        let params = [{"###param1###" : this.state.id}];
        let game = await getDataFromServer(process.env.URL_FIBA_API, (this.state.isEuroleague) ? PREVIA_NEXT_GAME_EUROLEAGUE : PREVIA_NEXT_GAME_EUROCUP, params);
        if (this.state.isEuroleague)
            params = [{"###param1###" : game.data.euroleague_nextgameday[0].id_home_team}];
        else
            params = [{"###param1###" : game.data.eurocup_nextgameday[0].id_home_team}];

        let local = await getDataFromServer(process.env.URL_FIBA_API, PREVIA_TEAM_EUR, params);

        if (this.state.isEuroleague)
            params = [{"###param1###" : game.data.euroleague_nextgameday[0].id_away_team}];
        else
            params = [{"###param1###" : game.data.eurocup_nextgameday[0].id_away_team}];
        
        let away = await getDataFromServer(process.env.URL_FIBA_API, PREVIA_TEAM_EUR, params);

        let params_local = [{"###id_team_club###" : local.data.teamclub[0].id}];
        let params_away = [{"###id_team_club###" : away.data.teamclub[0].id}];

        let local_tcss = await getDataFromServer(process.env.URL_FIBA_API, PREVIA_TCSS, params_local);
        let local_team_std_stats = await getDataFromServer(process.env.URL_FIBA_API, TEAM_PREVIA_STD_STATS, params_local);
        let away_tcss = await getDataFromServer(process.env.URL_FIBA_API, PREVIA_TCSS, params_away);
        let away_team_std_stats = await getDataFromServer(process.env.URL_FIBA_API, TEAM_PREVIA_STD_STATS, params_away);
        let local_tcas = await getDataFromServer(process.env.URL_FIBA_API, TEAM_PREVIA_ADV_STATS, params_local);
        let away_tcas = await getDataFromServer(process.env.URL_FIBA_API, TEAM_PREVIA_ADV_STATS, params_away);
        let local_previa_player = await getDataFromServer(process.env.URL_FIBA_API, PREVIA_PLAYER, params_local);
        let away_previa_player = await getDataFromServer(process.env.URL_FIBA_API, PREVIA_PLAYER, params_away);
        //console.log("local_tcss games: " + Object.keys(local_tcss));
        let g1_data = [], g2_data = [], g3_data = [];
        g1_data = [
            {
                name: (this.state.lang === "es") ? "Rival eTC %" : "Opp. eFG %",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].rival_p_etc,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].rival_p_etc
            },
            {
                name: (this.state.lang === "es") ? "Reb. Def. %" : "Def. Reb. %",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].p_reb_def,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].p_reb_def
            },
            {
                name: (this.state.lang === "es") ? "Rival Pérd. %" : "Opp. TO %",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].rival_p_turnovers,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].rival_p_turnovers
            },
            {
                name: (this.state.lang === "es") ? "Ratio Rival TL" : "Opp. Ratio FT",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].rival_ratio_ft,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].rival_ratio_ft
            },
        ];
        g2_data = [
            {
                name: (this.state.lang === "es") ? "eTC%" : "eFG%",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].etc,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].etc
            },
            {
                name: (this.state.lang === "es") ? "Pérdidas %" : "Turnovers %",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].p_turnovers,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].p_turnovers
            },
            {
                name: (this.state.lang === "es") ? "Reb. Of. %" : "Off. Reb. %",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].p_reb_of,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].p_reb_of
            },
            {
                name: (this.state.lang === "es") ? "Ratio TL" : "Ratio FT",
                [local.data.teamclub[0].abrev]   :   local_tcas.data.team_tcas[0].ratio_ft,
                [away.data.teamclub[0].abrev]    :   away_tcas.data.team_tcas[0].ratio_ft
            },
        ];
        g3_data = [
            {
                name: (this.state.lang === "es") ? "% T2P Puntos" : "% 2P Points",
                [local.data.teamclub[0].abrev]   :   local_team_std_stats.data.team_season_std_stats[0].p_t2p_puntos,
                [away.data.teamclub[0].abrev]    :   away_team_std_stats.data.team_season_std_stats[0].p_t2p_puntos
            },
            {
                name: (this.state.lang === "es") ? "% T3P Puntos" : "% 3P Points",
                [local.data.teamclub[0].abrev]   :   local_team_std_stats.data.team_season_std_stats[0].p_t3p_puntos,
                [away.data.teamclub[0].abrev]    :   away_team_std_stats.data.team_season_std_stats[0].p_t3p_puntos,
            },
            {
                name: (this.state.lang === "es") ? "% TL Puntos" : "% FT Points",
                [local.data.teamclub[0].abrev]   :   local_team_std_stats.data.team_season_std_stats[0].p_tl_puntos,
                [away.data.teamclub[0].abrev]    :   away_team_std_stats.data.team_season_std_stats[0].p_tl_puntos
            },
        ];
        this.setState({            
            game: game,
            local_team: local.data.teamclub[0],
            away_team: away.data.teamclub[0],
            local_tcss: local_tcss.data.team_tcss[0],
            away_tcss: away_tcss.data.team_tcss[0],
            local_tcas: local_tcas.data.team_tcas[0],
            away_tcas: away_tcas.data.team_tcas[0],
            local_previa_player: local_previa_player.data.player_previa[0],
            away_previa_player: away_previa_player.data.player_previa[0],
            keys: [local.data.teamclub[0].abrev, away.data.teamclub[0].abrev],
            g1_data: g1_data,
            g2_data: g2_data,
            g3_data: g3_data,
            loaded: true,            
        });
    }

    componentDidMount(){
        this.getData();
    }

    showGlosary(event){
        //console.log("id: " + event.currentTarget.id);
        this.setState({
            showGlosary: true,
            glosario: event.currentTarget.id
        });    
    }


    render(){
        const game = this.state.loaded ? 
            this.state.local_team.name + " (" +  this.state.local_team.abrev + ")" + 
            " - " + 
            this.state.away_team.name + " (" +  this.state.away_team.abrev + ")"
            :
            "";
        const HeaderNextGame = () => 
            <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em'}}>
                {(this.state.lang === "es") ? "PREVIA" : "PREVIOUS MATCH"}
                <br />
                <div style = {{ height: 1 + "px", marginTop: 10 + "px", marginBottom: 10 + "px" , backgroundColor: "#FFFFFF" }}></div>
                {game}
            </h4>

        return(
            <div style = {{marginTop: 15 + 'px'}}>                          
                <Row style = {{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                    <Col md = {12}>
                        {                                
                            (this.state.loaded) ? 
                                <div>
                                    <HeaderNextGame />
                                </div>
                            :

                                <Loading language = {this.state.lang} />
                        }  
                    </Col>
                </Row>    
                <Row>
                    <Col md = {8}>
                        <div className = "text-center text-light" 
                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 18 + "pt", fontWeight: "bold", 
                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                            {(this.state.lang === "es") ? "COMPARATIVA ENTRE EQUIPOS" : "TEAM COMPARISON"}
                        </div>                        
                    </Col>
                    <Col md = {2} style = {{textAlign: "right", marginTop: 15 + "px"}}>
                        <Button id = "glosario1" style = {{width: 100 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                            <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                            <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                {(this.state.lang === "es") ? "Glosario" : "Glosary"}
                            </span>
                        </Button>
                    </Col>                    
                    <Col md = {2} style = {{textAlign: "right", marginTop: 15 + "px"}}>
                        <Button
                            style = {{width: 100 + "%"}}
                            onClick = {() => history.back()}
                            variant = "danger"
                        >
                            <NavigateBeforeIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                            <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                {(this.state.lang === "es") ? "Volver" : "Back"}
                            </span>
                        </Button>
                    </Col>
                </Row>  
                <Row>
                    <Col md = {8}>
                        {
                            (this.state.loaded) ?
                                <div style = {{textAlign: "center", marginTop: 10 + "px"}}>
                                    <div style = {{width: 100 + "%", backgroundColor: "#091E36", borderRadius: '0.25em', 
                                                    textAlign: 'center', color: "#FFFFFF", padding: 5 + "px", fontSize: 18 + "pt", fontWeight: "bold", marginBottom: 10 + "px"}}>
                                        {(this.state.lang === "es") ? "4 Factores Defensivos" : "4 Defensive Factors"}
                                    </div>
                                    <MultipleBarChart
                                        idContainer="container-1"
                                        data={this.state.g1_data}
                                        groupKey="name"
                                        keys={this.state.keys}
                                        y_label=""
                                        lang= {this.state.lang}
                                    />
                                    <div style = {{width: 100 + "%", backgroundColor: "#091E36", borderRadius: '0.25em', marginTop: 10 + "px",
                                                    textAlign: 'center', color: "#FFFFFF", padding: 5 + "px", fontSize: 18 + "pt", fontWeight: "bold", marginBottom: 10 + "px"}}>
                                        {(this.state.lang === "es") ? "4 Factores Ofensivos" : "4 Offensive Factors"}
                                    </div>
                                    <MultipleBarChart
                                        idContainer="container-2"
                                        data={this.state.g2_data}
                                        groupKey="name"
                                        keys={this.state.keys}
                                        y_label=""
                                        lang= {this.state.lang}
                                    />
                                    <div style = {{width: 100 + "%", backgroundColor: "#091E36", borderRadius: '0.25em', marginTop: 10 + "px",
                                                    textAlign: 'center', color: "#FFFFFF", padding: 5 + "px", fontSize: 18 + "pt", fontWeight: "bold", marginBottom: 10 + "px"}}>
                                        {(this.state.lang === "es") ? "Distribución de puntos" : "Distribution of points"}
                                    </div>
                                    <MultipleBarChart
                                        idContainer="container-3"
                                        data={this.state.g3_data}
                                        groupKey="name"
                                        keys={this.state.keys}
                                        y_label=""
                                        lang= {this.state.lang}
                                    />
                                </div>
                            :
                                <Loading language = {this.state.lang} />
                        }
                    </Col>
                    <Col md = {4}>
                        {                                
                            (this.state.loaded) ? 
                                <div>
                                    <Table striped bordered hover style = {{marginTop: 10 + "px"}}>
                                        <thead className = "table-header">
                                            <tr>
                                                <th style = {{widht: 40 + "%"}}>{this.state.local_team.abrev}</th>
                                                <th style = {{width: 20 + "%"}}>{(this.state.lang === "es") ? "Estadística" : "Statistics"}</th>
                                                <th style = {{widht: 40 + "%"}}>{this.state.away_team.abrev}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>{this.state.local_tcss.games}</td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Partidos" : "Games"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>{this.state.away_tcss.games}</td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>{this.state.local_tcss.victories}</td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Victorias" : "Wins"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>{this.state.away_tcss.victories}</td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {                               
                                                        (this.state.lang === "es") ?                     
                                                            String(((this.state.local_tcss.t2p_conv*2 + 
                                                            this.state.local_tcss.t3p_conv*3 +
                                                            this.state.local_tcss.tl_conv)/
                                                            this.state.local_tcss.games).toFixed(2)).replace(".", ",")
                                                            :
                                                            ((this.state.local_tcss.t2p_conv*2 + 
                                                                this.state.local_tcss.t3p_conv*3 +
                                                                this.state.local_tcss.tl_conv)/
                                                                this.state.local_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Ptos/Partido" : "Points/Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {                                                
                                                        (this.state.lang === "es") ?    
                                                            String(((this.state.away_tcss.t2p_conv*2 + 
                                                            this.state.away_tcss.t3p_conv*3 +
                                                            this.state.away_tcss.tl_conv)/
                                                            this.state.away_tcss.games).toFixed(2)).replace(".", ",")
                                                            :
                                                            ((this.state.away_tcss.t2p_conv*2 + 
                                                                this.state.away_tcss.t3p_conv*3 +
                                                                this.state.away_tcss.tl_conv)/
                                                                this.state.away_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {                               
                                                        (this.state.lang === "es") ?                     
                                                            String(this.state.local_tcss.against_total_points_pp.toFixed(2)).replace(".", ",")
                                                            :
                                                            String(this.state.local_tcss.against_total_points_pp.toFixed(2)).replace(".", ",")                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Ptos.Rec./Partido" : "Points Against/Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {                                                
                                                        (this.state.lang === "es") ?    
                                                            String(this.state.away_tcss.against_total_points_pp.toFixed(2)).replace(".", ",")
                                                        :
                                                            String(this.state.away_tcss.against_total_points_pp.toFixed(2)).replace(".", ",")                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {                                                    
                                                        (this.state.lang === "es") ?
                                                            String(((this.state.local_tcss.reb_def + 
                                                            this.state.local_tcss.reb_of)/
                                                            this.state.local_tcss.games).toFixed(2)).replace(".", ",")
                                                            :
                                                            ((this.state.local_tcss.reb_def + 
                                                                this.state.local_tcss.reb_of)/
                                                                this.state.local_tcss.games).toFixed(2)
    
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Rebs/Partido" : "Rebounds/Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                            String(((this.state.away_tcss.reb_def + 
                                                                this.state.away_tcss.reb_of)/
                                                                this.state.away_tcss.games).toFixed(2)).replace(".", ",")        
                                                            :                                                                                                           
                                                            ((this.state.away_tcss.reb_def + 
                                                            this.state.away_tcss.reb_of)/
                                                            this.state.away_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {                                                    
                                                        (this.state.lang === "es") ?
                                                            String((this.state.local_tcss.assists/
                                                                this.state.local_tcss.games).toFixed(2)).replace(".", ",")
                                                            :
                                                            (this.state.local_tcss.assists/
                                                            this.state.local_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Asist./Partido" : "Assists/Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String((this.state.away_tcss.assists/
                                                            this.state.away_tcss.games).toFixed(2)).replace(".", ",")
                                                        :                                                    
                                                        (this.state.away_tcss.assists/
                                                        this.state.away_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String((this.state.local_tcss.steals/
                                                            this.state.local_tcss.games).toFixed(2)).replace(".", ",")
                                                        :                                                    
                                                        (this.state.local_tcss.steals/
                                                        this.state.local_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Robos/Partido" : "Steals/Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String((this.state.away_tcss.steals/
                                                            this.state.away_tcss.games).toFixed(2)).replace(".", ",")
                                                        :                                                    
                                                        (this.state.away_tcss.steals/
                                                        this.state.away_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String((this.state.local_tcss.turnovers/
                                                            this.state.local_tcss.games).toFixed(2)).replace(".", ",")
                                                        :                                                    
                                                        (this.state.local_tcss.turnovers/
                                                        this.state.local_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Perd./Partido" : "TO's/Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {                                                    
                                                        (this.state.lang === "es") ?
                                                        String((this.state.away_tcss.turnovers/
                                                            this.state.away_tcss.games).toFixed(2)).replace(".", ",")
                                                        :
                                                        (this.state.away_tcss.turnovers/
                                                        this.state.away_tcss.games).toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Table striped bordered hover>
                                        <thead className = "table-header">
                                            <tr>
                                                <th style = {{widht: 40 + "%"}}>{this.state.local_team.abrev}</th>
                                                <th style = {{width: 20 + "%"}}>{(this.state.lang === "es") ? "Estadística" : "Statistics"}</th>
                                                <th style = {{widht: 40 + "%"}}>{this.state.away_team.abrev}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_tcas.ts.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_tcas.ts.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    TS%
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_tcas.ts.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_tcas.ts.toFixed(2) + "%"
                                                    }

                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.local_tcss.t3p_conv/
                                                            this.state.local_tcss.t3p_int)*100).toFixed(2)).replace(".", ",") + "%"
                                                        :                                                            
                                                        ((this.state.local_tcss.t3p_conv/
                                                        this.state.local_tcss.t3p_int)*100).toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "T3P%" : "3P%"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.away_tcss.t3p_conv/
                                                            this.state.away_tcss.t3p_int)*100).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.away_tcss.t3p_conv/
                                                        this.state.away_tcss.t3p_int)*100).toFixed(2) + "%"
                                                    }

                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.local_tcss.t2p_conv/
                                                            this.state.local_tcss.t2p_int)*100).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.local_tcss.t2p_conv/
                                                        this.state.local_tcss.t2p_int)*100).toFixed(2) + "%"
                                                    }

                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "T2P%" : "2P%"}

                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.away_tcss.t2p_conv/
                                                            this.state.away_tcss.t2p_int)*100).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.away_tcss.t2p_conv/
                                                        this.state.away_tcss.t2p_int)*100).toFixed(2) + "%"
                                                    }

                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.local_tcss.tl_conv/
                                                            this.state.local_tcss.tl_int)*100).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.local_tcss.tl_conv/
                                                        this.state.local_tcss.tl_int)*100).toFixed(2) + "%"
                                                    }

                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "TL%" : "FT%"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.away_tcss.tl_conv/
                                                            this.state.away_tcss.tl_int)*100).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.away_tcss.tl_conv/
                                                        this.state.away_tcss.tl_int)*100).toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Table striped bordered hover>
                                        <thead className = "table-header">
                                            <tr>
                                                <th style = {{widht: 40 + "%"}}>{this.state.local_team.abrev}</th>
                                                <th style = {{width: 20 + "%"}}>{(this.state.lang === "es") ? "Estadística" : "Statistics"}</th>
                                                <th style = {{widht: 40 + "%"}}>{this.state.away_team.abrev}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.local_tcas.p_reb_def +
                                                            this.state.local_tcas.p_reb_of)/2).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.local_tcas.p_reb_def +
                                                        this.state.local_tcas.p_reb_of)/2).toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Tot. Reb. %" : "Tot. Reb. %"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(((this.state.away_tcas.p_reb_def +
                                                            this.state.away_tcas.p_reb_of)/2).toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        ((this.state.away_tcas.p_reb_def +
                                                        this.state.away_tcas.p_reb_of)/2).toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_tcas.p_reb_def.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_tcas.p_reb_def.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Reb. Def. %" : "Def. Reb. %"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_tcas.p_reb_def.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_tcas.p_reb_def.toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_tcas.p_reb_of.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_tcas.p_reb_of.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Reb. Of. %" : "Off. Reb. %"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_tcas.p_reb_of.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_tcas.p_reb_of.toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            :
                                <Loading language = {this.state.lang} />
                        }  
                    </Col>
                </Row>
                <Row>
                    <Col md = {8}>
                        <div className = "text-center text-light" 
                            style = {{borderRadius: .5 + "em", backgroundColor: "#091E36", fontSize: 18 + "pt", fontWeight: "bold", 
                                    marginTop: 15 + "px", marginBottom: 15 + "px", paddingTop: 8 + "px", paddingBottom: 8 + "px"}}>
                            {(this.state.lang === "es") ? "JUGADORAS DESTACADAS" : "BEST PLAYERS"}
                        </div>                        
                    </Col>
                    <Col md = {2} style = {{textAlign: "right", marginTop: 15 + "px"}}>
                        <Button id = "glosario2" style = {{width: 100 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                            <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                            <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                {(this.state.lang === "es") ? "Glosario" : "Glosary"}
                            </span>
                        </Button>
                    </Col>                    
                    <Col md = {2} style = {{textAlign: "right", marginTop: 15 + "px"}}>
                        <Button
                            style = {{width: 100 + "%"}}
                            onClick = {() => history.back()}
                            variant = "danger"
                        >
                            <NavigateBeforeIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                            <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                {(this.state.lang === "es") ? "Volver" : "Back"}
                            </span>
                        </Button>
                    </Col>
                </Row>
                <Row style = {{marginTop: 10 + "px"}}>
                    <Col md = {12}>
                        {
                            (this.state.loaded) ?
                                <div>
                                    <Table striped bordered hover>
                                        <thead className = "table-header">
                                            <tr>
                                                <th style = {{widht: 40 + "%"}}>
                                                    {this.state.local_previa_player["name"] + " (" + this.state.local_previa_player["abrev"] + ")"}
                                                </th>
                                                <th style = {{width: 20 + "%"}}>{(this.state.lang === "es") ? "Estadística" : "Statistics"}</th>
                                                <th style = {{widht: 40 + "%"}}>
                                                    {this.state.away_previa_player["name"] + " (" + this.state.away_previa_player["abrev"] + ")"}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.game_score.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.game_score.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Game Score" : "Game Score"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.game_score.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.game_score.toFixed(2)                                                    
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.points.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.points.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Puntos / Partido" : "Points / Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.points.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.points.toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.ts.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_previa_player.ts.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    TS%
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.ts.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_previa_player.ts.toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.t2p.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_previa_player.t2p.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "T2P%" : "2P%"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.t2p.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_previa_player.t2p.toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.t3p.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_previa_player.t3p.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "T3P%" : "3P%"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.t3p.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_previa_player.t3p.toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.tlp.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.local_previa_player.tlp.toFixed(2) + "%"
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "TL%" : "FT%"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.tlp.toFixed(2)).replace(".", ",") + "%"
                                                        :
                                                        this.state.away_previa_player.tlp.toFixed(2) + "%"
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.reb_def.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.reb_def.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Reb. Def. / Partido" : "Def. Reb. / Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.reb_def.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.reb_def.toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.reb_of.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.reb_of.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Reb.Of. / Partido" : "Off. Reb. / Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.reb_of.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.reb_of.toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.assists.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.assists.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Asist. / Partido" : "Assists / Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.assists.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.assists.toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.steals.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.steals.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Robos / Partido" : "Steals / Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.steals.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.steals.toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.local_previa_player.turnovers.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.local_previa_player.turnovers.toFixed(2)
                                                    }
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {(this.state.lang === "es") ? "Pérdidas / Partido" : "Turnovers / Game"}
                                                </td>
                                                <td style = {{textAlign: "center"}}>
                                                    {
                                                        (this.state.lang === "es") ?
                                                        String(this.state.away_previa_player.turnovers.toFixed(2)).replace(".", ",")
                                                        :
                                                        this.state.away_previa_player.turnovers.toFixed(2)
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            :
                                <Loading language = {this.state.lang} />
                        }
                    </Col>
                </Row>
                <PreviaGlosary show = {this.state.showGlosary} glosario = {this.state.glosario} />
            </div>            
        )
    }
}

//module.exports.Previa = Previa;