import React, {Component} from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import {Determinator, MultiLang} from "react-multi-language";
import { GSHeader } from "./GSHeader";
import { GSQuarters } from "./GSQuarters";
import { BoxScore } from "./BoxScore";
import { ScatterPlot }  from "./Graphics/ScatterPlot";
import { SingleBarChart } from "./Graphics/SingleBarChart";
import { HalfDonutChart } from "./Graphics/HalfDonutChart";
import { MultipleBarChart } from "./Graphics/MultipleBarChart";
import Tooltip from "react-simple-tooltip";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import "../../css/content.css";
import { GAME_DATA, QUARTERS, BOXSCORE } from "../FEBCOM/Querys";
import { GAME_DATA_FIBA, QUARTERS_FIBA, BOXSCORE_FIBA } from "../FIBACOM/Querys";
import { getDataFromServer, getLeague, getID, t3ppt2pp, player_ppoints, prdpro, formatDataHalfDonut, transformDataHalfDonut, getDataTSComparative,
        transformDataTSComparative } from "./Functions";


/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */        
export default class GameStandardStats extends Component{
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
        let quarters = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? QUARTERS : QUARTERS_FIBA, params);
        params = [{"###id_game###" : this.state.id}, {"###id_team_club###" : gameData.data.game_data[0].id_team_home}];
        let home_boxscore = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? BOXSCORE : BOXSCORE_FIBA, params);
        params = [{"###id_game###" : this.state.id}, {"###id_team_club###" : gameData.data.game_data[0].id_team_away}];
        let away_boxscore = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? BOXSCORE : BOXSCORE_FIBA, params);      
        let home_t3ppt2pp = t3ppt2pp(home_boxscore.data.boxscore);
        let away_t3ppt2pp = t3ppt2pp(away_boxscore.data.boxscore);  
        let home_player_ppoints = player_ppoints(home_boxscore.data.boxscore);
        let away_player_ppoints = player_ppoints(away_boxscore.data.boxscore);
        let home_prdpro = prdpro(home_boxscore.data.boxscore);
        let away_prdpro = prdpro(away_boxscore.data.boxscore);
        let data = formatDataHalfDonut(home_boxscore.data.boxscore);
        let home_data_half_donut = transformDataHalfDonut(data.values, data.total, this.state.lang ? "es" : "en");
        data = formatDataHalfDonut(away_boxscore.data.boxscore);
        let away_data_half_donut = transformDataHalfDonut(data.values, data.total, this.state.lang ? "es" : "en");
        let home_result = getDataTSComparative(home_boxscore.data.boxscore);
        let away_result =getDataTSComparative(away_boxscore.data.boxscore);
        let dataMultipleBarChart = transformDataTSComparative(home_result, away_result, gameData.data.game_data[0], "es");
        this.setState({ 
            gameData: gameData.data.game_data[0],
            quarters: quarters.data.quarters_by_game,
            home_boxscore: home_boxscore,
            away_boxscore: away_boxscore,
            home_t3ppt2pp: home_t3ppt2pp,
            away_t3ppt2pp: away_t3ppt2pp,
            home_player_ppoints: home_player_ppoints,
            away_player_ppoints: away_player_ppoints,
            home_prdpro: home_prdpro,
            away_prdpro: away_prdpro,
            home_data_half_donut: home_data_half_donut,
            away_data_half_donut: away_data_half_donut,
            keys: [gameData.data.game_data[0].abrev_home, gameData.data.game_data[0].abrev_away],
            dataMultipleBarChart: dataMultipleBarChart,
            loaded: true
        });      
    }

    getURLApi(){
        let url;
        url = (this.state.isLF1 || this.state.isLF2) ? process.env.URL_FEB_API : process.env.URL_FIBA_API;
        return url;
    }

    render(){
        return(
            <div style = {{marginTop: 15 + 'px'}}>     
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
                                <Col md = {10}>
                                    <GSQuarters
                                        lang = {this.state.lang}
                                        quarters = {this.state.quarters}
                                    />
                                </Col>
                                <Col md = {2}></Col>
                            </Row>
                            <Row>
                                <Col md = {12}>
                                    <div className = "bg-dark text-light text-center font-weight-bold header-group-stats" style = {{marginTop: 35 + "px"}}>
                                            {(this.state.lang == "es") ? "ESTADÍSTICAS" : "STATS"}
                                    </div>
                                    <BoxScore
                                        lang = {this.state.lang}
                                        gameData = {this.state.gameData}
                                        home_boxscore = {this.state.home_boxscore}
                                        away_boxscore = {this.state.away_boxscore}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md = {12}>
                                    <div className = "bg-dark text-light text-center font-weight-bold header-group-stats" style = {{marginTop: 50 + "px"}}>
                                            {(this.state.lang == "es") ? "GRÁFICOS ESTADÍSTICOS" : "STATISTICAL GRAPHICS"}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md = {12}>
                                </Col>
                            </Row>
                            <Row>                                
                                <Col md = {6}>
                                    <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px"}}>
                                        {this.state.gameData.home_team + " (" + this.state.gameData.abrev_home + ")"}
                                    </div>
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Distribución de lanzamientos de tiros de 2 puntos y de 3 puntos por jugadora"
                                            :
                                                "Distribution of 2 point and 3 point shots per player"
                                        }
                                    </div>                                       
                                    <ScatterPlot
                                        idContainer = "container-1"
                                        lang = {this.state.lang}
                                        data = {this.state.home_t3ppt2pp}
                                        x_label = {(this.state.lang == "es") ? "T2P%" :  "2P%"}
                                        y_label  = {(this.state.lang == "es") ? "T3P%" :  "3P%"}
                                    />
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>                                        
                                        {
                                            (this.state.lang == "es") ? 
                                                "Porcentaje de puntos anotados por jugadora"
                                            :
                                                "Percentage of points scored per player"
                                        }
                                    </div>                                       
                                    <SingleBarChart
                                        idContainer = "container-3"
                                        data = {this.state.home_player_ppoints}
                                        x_label = {(this.state.lang == "es") ? "Jugadoras" :  "Players"}
                                        y_label  = {(this.state.lang == "es") ? "%Puntos" :  "%Points"} 
                                        lang = {this.state.lang}                                 
                                     />
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Porcentajes de rebotes defensivos y rebotes ofensivos por jugadora"
                                            :
                                                "Defensive rebound and offensive rebound percentages per player"
                                        }                                    
                                    </div>                                       
                                    <ScatterPlot
                                        idContainer = "container-5"
                                        lang = {this.state.lang}
                                        data = {this.state.home_prdpro}
                                        x_label = {(this.state.lang == "es") ? "RD%" :  "DR%"}
                                        y_label  = {(this.state.lang == "es") ? "RO%" :  "OR%"}                                   
                                    />
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Distribución de las posesiones del equipo"
                                            :
                                                "Distribution of the possesions of the team"
                                        }                                    
                                    </div>                                       
                                    <HalfDonutChart
                                        idContainer = "container-7"
                                        data = {this.state.home_data_half_donut}
                                        lang = {this.state.lang}
                                        legend = {(this.state.lang == "es") ? "Distribución de posesiones" : "Distribution of possessions"}
                                    />
                                </Col>
                                <Col md = {6}>
                                    <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px"}}>
                                        {this.state.gameData.away_team + " (" + this.state.gameData.abrev_away + ")"}
                                    </div>
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Distribución de lanzamientos de tiros de 2 puntos y de 3 puntos por jugadora"
                                            :
                                                "Distribution of 2 point and 3 point shots per player"
                                        }
                                    </div>                                    
                                    <ScatterPlot
                                        idContainer = "container-2"
                                        lang = {this.state.lang}
                                        data = {this.state.away_t3ppt2pp}
                                        x_label = {(this.state.lang == "es") ? "T2P%" :  "2P%"}
                                        y_label  = {(this.state.lang == "es") ? "T3P%" :  "3P%"}
                                    />
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Porcentaje de puntos anotados por jugadora"
                                            :
                                                "Percentage of points scored per player"
                                        }
                                    </div>                                       
                                    <SingleBarChart
                                        idContainer = "container-4"
                                        data = {this.state.away_player_ppoints}
                                        x_label = {(this.state.lang == "es") ? "Jugadoras" :  "Players"}
                                        y_label  = {(this.state.lang == "es") ? "%Puntos" :  "%Points"}
                                        lang = {this.state.lang}
                                    />
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>                                        
                                        {
                                            (this.state.lang == "es") ? 
                                                "Porcentajes de rebotes defensivos y rebotes ofensivos por jugadora"
                                            :
                                                "Defensive rebound and offensive rebound percentages per player"
                                        }                                    
                                    </div>                                       
                                    <ScatterPlot
                                        idContainer = "container-6"
                                        lang = {this.state.lang}
                                        data = {this.state.away_prdpro}
                                        x_label = {(this.state.lang == "es") ? "RD%" :  "DR%"}
                                        y_label  = {(this.state.lang == "es") ? "RO%" :  "OR%"}                                   
                                    />
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Distribución de las posesiones del equipo"
                                            :
                                                "Distribution of the possesions of the team"
                                        }                                    
                                    </div>                                       
                                    <HalfDonutChart
                                        idContainer = "container-8"
                                        data = {this.state.away_data_half_donut}
                                        lang = {this.state.lang}
                                        legend = {(this.state.lang == "es") ? "Distribución de posesiones" : "Distribution of possessions"}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md = {2}></Col>
                                <Col md = {8}>
                                    <div className = "text-light font-weight-bold" style = {{marginTop: 10 + "px", marginBottom: 10 + "px", padding: 10 + "px", backgroundColor: "#091E36", borderRadius: .5 + "em", fontSize: 12 + "pt"}}>
                                        {
                                            (this.state.lang == "es") ? 
                                                "Comparativa de tiro entre equipos"
                                            :
                                                "Comparison of shooting between teams"
                                        }                                    
                                    </div>     
                                    <MultipleBarChart
                                        idContainer="container-9"
                                        data={this.state.dataMultipleBarChart}
                                        groupKey="shoot"
                                        keys={this.state.keys}
                                        y_label="Porcentaje"
                                        lang = {this.state.lang}
                                    />                                                                      
                                </Col>
                                <Col md = {2}></Col>
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
                <MultiLang lang = {this.state.lang} />
            </div>
        )
    }
}

//module.exports.GameStandardStats = GameStandardStats;