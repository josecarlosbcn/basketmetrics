import React, {Component} from "react";
import {getDataFromServer, getID, getLeague, extractStats, filterPlayersByTeam, formatDataForScatterPlot, formatDataPAS} from "./Functions";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import {Determinator, MultiLang} from "react-multi-language";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { GSHeader } from "./GSHeader";
import { GAME_DATA, GAME_ADV_STATS, PLAYER_ADVANCED_STATS } from "../FEBCOM/Querys";
import { GAME_DATA_FIBA, GAME_ADV_STATS_FIBA, PLAYER_ADVANCED_STATS_FIBA } from "../FIBACOM/Querys";
import "../../css/content.css";
import {FourFactors, OtherAdvStats} from "./Tables";
import {ScatterPlot} from "./Graphics/ScatterPlot";
import {columnsFEBPAS} from "../FEBCOM/column.tables";
import BootstrapTable from 'react-bootstrap-table-next';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { GameAdvStatsGlosary } from "./Glosary/GameAdvStatsGlosary";


/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */
export default class GameAdvancedStats extends Component{
    constructor(){
        super();
        let league = getLeague(window.location.href);
        let id = getID(window.location.href);
        console.log("lf1: " + league.isLF1 + " lf2: " + league.isLF2 + " euroleague: " + league.isEuroleague + " eurocup: " + league.isEurocup + " id: " + id);
        if (!isNaN(id)){
            this.state = {
                id: id,
                isLF1: league.isLF1,
                isLF2: league.isLF2,
                isEuroleague: league.isEuroleague,
                isEurocup: league.isEurocup,
                quarters: [],
                gameData: {},               
                loaded: false,
                showGlosary: false,
                lang: "es"
            };   
        }else{
            this.state = {
                id: null,
                loaded: false,
                lang: "es"
            };    
        }        
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        let params = [{"###id_game###" : this.state.id}];
        let gameData = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? GAME_DATA : GAME_DATA_FIBA, params);
        let gameAdvStats = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? GAME_ADV_STATS : GAME_ADV_STATS_FIBA, params);
        let home_team_adv_stats = extractStats(gameAdvStats.data.game_adv_stats, gameData.data.game_data[0].id_team_home);
        let away_team_adv_stats = extractStats(gameAdvStats.data.game_adv_stats, gameData.data.game_data[0].id_team_away);
        let player_adv_stats = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? PLAYER_ADVANCED_STATS : PLAYER_ADVANCED_STATS_FIBA, params);
        let home_players_adv_stats = filterPlayersByTeam(player_adv_stats.data.player_advanced_stats, gameData.data.game_data[0].id_team_home);
        let home_players_usg_tc = formatDataForScatterPlot(home_players_adv_stats);
        let away_players_adv_stats = filterPlayersByTeam(player_adv_stats.data.player_advanced_stats, gameData.data.game_data[0].id_team_away);
        let away_players_usg_tc = formatDataForScatterPlot(away_players_adv_stats);

        this.setState({
            loaded: true,
            gameData: gameData.data.game_data[0],
            gameAdvStats: gameAdvStats.data.game_adv_stats,
            home_team_adv_stats: home_team_adv_stats,
            away_team_adv_stats: away_team_adv_stats,
            home_players_usg_tc: home_players_usg_tc,
            away_players_usg_tc: away_players_usg_tc,
            home_players_adv_stats: home_players_adv_stats,
            away_players_adv_stats: away_players_adv_stats
        });
    }

    getURLApi(){
        let url;
        url = (this.state.isLF1 || this.state.isLF2) ? process.env.URL_FEB_API : process.env.URL_FIBA_API;
        return url;
    }

    showGlosary(event){
        console.log("event.currentTarget.id: " + event.currentTarget.id);
        this.setState({
            showGlosary: true,
            glosary: event.currentTarget.id
        });    
    }    

    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                    <div>
                        <Row style = {{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                            <Col md = {10}>
                                <GSHeader
                                    lang = {this.state.lang}
                                    gameData = {this.state.gameData}
                                />
                            </Col>
                            <Col md = {2} style = {{textAlign: "right"}}>
                                <Button                                                
                                    onClick = {() => history.back()}
                                    size = "lg" 
                                    block
                                >
                                    <NavigateBeforeIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                    <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                        {
                                            (this.state.lang == "es") ?
                                            "Volver"
                                            :
                                            "Back"
                                        }
                                    </span>
                                </Button>        
                            </Col>
                        </Row>
                        <Row>
                            <Col md = {12}>
                                <div className = "bg-dark text-light text-center font-weight-bold header-group-stats" style = {{marginTop: 35 + "px"}}>
                                            {(this.state.lang == "es") ? "ESTADÍSTICAS AVANZADAS" : "ADVANCED STATS"}
                                </div>
                                <div className = "text-right mt-3">
                                    <Button id = "4factors" style = {{width: 15 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                                        <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                        <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                            Glosario
                                        </span>
                                    </Button>                                
                                </div>
                                <FourFactors 
                                    sStats = {this.state.gameData} 
                                    has = {this.state.home_team_adv_stats} 
                                    aas = {this.state.away_team_adv_stats} 
                                    lang = {this.state.lang} />
                                <OtherAdvStats 
                                    sStats = {this.state.gameData} 
                                    has = {this.state.home_team_adv_stats} 
                                    aas = {this.state.away_team_adv_stats} 
                                    lang = {this.state.lang} />
                                <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                                    <div style = {{gridColumn: 1, paddingTop: 10 + "px"}}>{this.state.gameData.home_team}</div>
                                    <div className = "text-right" style = {{gridColum: 2}}>
                                        <Button id = "advstats" style = {{width: 30 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                                            <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                            <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                                Glosario
                                            </span>
                                        </Button>                                
                                    </div>                                     
                                </div>
                                <BootstrapTable
                                    keyField = "id_player_team"
                                    columns = {columnsFEBPAS}
                                    data = {formatDataPAS(this.state.home_players_adv_stats, this.state.lang)}
                                    noDataIndication = {(this.state.home_players_adv_stats.length == 0) ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                    striped
                                    hover
                                    condensed
                                />    
                                <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                                    <div style = {{gridColumn: 1, paddingTop: 10 + "px"}}>{this.state.gameData.away_team}</div>
                                    <div className = "text-right" style = {{gridColum: 2}}>
                                        <Button id = "advstats" style = {{width: 30 + "%"}} onClick = {(event) => this.showGlosary(event)}>
                                            <ViewHeadlineIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                            <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                                Glosario
                                            </span>
                                        </Button>                                
                                    </div>                                     
                                </div>
                                <BootstrapTable
                                    keyField = "id_player_team"
                                    columns = {columnsFEBPAS}
                                    data = {formatDataPAS(this.state.away_players_adv_stats, this.state.lang)}
                                    noDataIndication = {(this.state.away_players_adv_stats.length == 0) ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                    striped
                                    hover
                                    condensed
                                />                                    
                            </Col>
                        </Row>
                        <Row>
                            <Col md = {12}>
                                <div className = "bg-dark text-light text-center font-weight-bold header-group-stats" style = {{marginTop: 35 + "px"}}>
                                    {(this.state.lang == "es") ? "GRÁFICOS ESTADÍSTICOS" : "STATISTICAL GRAPHICS"}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md = {6}>
                                <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px"}}>
                                    {this.state.gameData.home_team}
                                </div>
                                <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                    {
                                        (this.state.lang == "es") ? 
                                            "Relación entre presencia en ataque (USG%) y efectividad real en tiros (TS%) por jugadora"
                                        :
                                            "Relationship between presence in attack (USG%) and actual shot effectiveness (TS%) per player"
                                    }
                                </div>                                    
                                <ScatterPlot 
                                    idContainer = "container-1"
                                    lang = {this.state.lang}
                                    data = {this.state.home_players_usg_tc}
                                    x_label = {(this.state.lang == "es") ? "TS%" :  "TS%"}
                                    y_label  = {(this.state.lang == "es") ? "USG%" :  "USG%"}                                                                   
                                />
                            </Col>
                            <Col md = {6}>
                                <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px"}}>
                                    {this.state.gameData.away_team}
                                </div>
                                <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                    {
                                        (this.state.lang == "es") ? 
                                            "Relación entre presencia en ataque (USG%) y efectividad real en tiros (TS%) por jugadora"
                                        :
                                            "Relationship between presence in attack (USG%) and actual shot effectiveness (TS%) per player"
                                    }
                                </div>                                    
                                <ScatterPlot 
                                    idContainer = "container-2"
                                    lang = {this.state.lang}
                                    data = {this.state.away_players_usg_tc}
                                    x_label = {(this.state.lang == "es") ? "TS%" :  "TS%"}
                                    y_label  = {(this.state.lang == "es") ? "USG%" :  "USG%"}                                                                   
                                />
                            </Col>
                        </Row>
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
                                <Determinator>
                                    {{
                                        es: "Cargando datos ...",
                                        en: "Loading data ..."
                                    }}
                                </Determinator>
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
                                <Determinator>
                                    {{
                                        es: "Cargando datos ...",
                                        en: "Loading data ..."
                                    }}
                                </Determinator>
                        </Button>                    
                    </div>                    
        }                 
                <GameAdvStatsGlosary show = {this.state.showGlosary} glosario = {this.state.glosary} />
                <MultiLang lang = {this.state.lang} />
            </div>
        )
    }
}

//module.exports.GameAdvancedStats = GameAdvancedStats;