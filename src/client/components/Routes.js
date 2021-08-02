import React, {Component, lazy, Suspense} from "react";
import {Row, Col, Tab} from "react-bootstrap";
import {Route, withRouter} from "react-router-dom";
import {Loading} from "../components/COM/Loading";

const HomeAPP = lazy(() => import ("./HOMEAPP/HomeApp"));
const HomeLF1Content = lazy(() => import("./LF1/HomeLF1Content"));
const TeamsLF1Content = lazy(() => import("./LF1/TeamsLF1Content"));
const ResultsLF1Content = lazy(async () => import("./LF1/ResultsLF1Content"));
const StatsLF1Content = lazy(() => import("./LF1/StatsLF1Content"));
const SearchLF1Content = lazy(() => import("./LF1/SearchLF1Content"));
const Previa = lazy(() => import("./COM/Previa"));
const TeamStandardStats = lazy(() => import("./COM/TeamStandardStats"));
const TeamAdvancedStats = lazy(() => import("./COM/TeamAdvancedStats"));
const GameStandardStats = lazy(() => import("./COM/GameStandardStats"));
const GameAdvancedStats = lazy(() => import("./COM/GameAdvancedStats"));
const HomeLF2Content = lazy(() => import("./LF2/HomeLF2Content"));
const TeamsLF2Content = lazy(() => import("./LF2/TeamsLF2Content"));
const ResultsLF2Content = lazy(() => import("./LF2/ResultsLF2Content"));
const StatsLF2Content = lazy(() => import("./LF2/StatsLF2Content"));
const SearchLF2Content = lazy(() => import("./LF2/SearchLF2Content"));
const HomeEURContent = lazy(() => import("./EUROLEAGUE/HomeEURContent"));
const TeamsEURContent = lazy(() => import("./EUROLEAGUE/TeamsEURContent"));
const ResultsEURContent = lazy(() => import("./EUROLEAGUE/ResultsEURContent"));
const StatsEURContent = lazy(() => import("./EUROLEAGUE/StatsEURContent"));
const SearchEURContent = lazy(() => import("./EUROLEAGUE/SearchEURContent"));
const PreviaEU = lazy(() => import("./COM/PreviaEU"));
const HomeECUContent = lazy(() => import("./EUROCUP/HomeECUContent"));
const TeamsECUContent = lazy(() => import("./EUROCUP/TeamsECUContent"));
const ResultsECUContent = lazy(() => import("./EUROCUP/ResultsECUContent"));
const StatsECUContent = lazy(() => import("./EUROCUP/StatsECUContent"));
const SearchECUContent = lazy(() => import("./EUROCUP/SearchECUContent"));
const Aviso = lazy(() => import("./FOOTER/Aviso"));
const Contacto = lazy(() => import("./FOOTER/Contacto"));
const Glosario = lazy(() => import("./Glosario"));

class Routes extends Component{
    constructor(props){
        super();
        this.props = props;
    }

    render(){
        const {history} = this.props.history;
        return(
            <Row>
                <Col md = {12}>
                    <Tab.Content>
                        <Suspense fallback = { <Loading language = "es" /> }>
                            <Route exact path = "/" component = {HomeAPP} />
                            <Route exact path = "/liga-femenina-1" component = {HomeLF1Content} />
                            <Route path = "/liga-femenina-1/equipos" component = {TeamsLF1Content} /> 
                            <Route path = "/liga-femenina-1/resultados" component = {ResultsLF1Content} />                                
                            <Route path = "/liga-femenina-1/estadisticas" component = {StatsLF1Content} />                                
                            <Route path = "/liga-femenina-1/buscador" component = {SearchLF1Content} />
                            <Route path = "/liga-femenina-1/previa" component = {Previa} /> 
                            <Route path = "/liga-femenina-1/equipo/estadisticas-estandard" component = {TeamStandardStats} />
                            <Route path = "/liga-femenina-1/equipo/estadisticas-avanzadas" component = {TeamAdvancedStats} />
                            <Route path = "/liga-femenina-1/partido/estadisticas-estandard" component = {GameStandardStats} />
                            <Route path = "/liga-femenina-1/partido/estadisticas-avanzadas" component = {GameAdvancedStats} />
                            <Route exact path = "/liga-femenina-2" component = {HomeLF2Content} />               
                            <Route path = "/liga-femenina-2/equipos" component = {TeamsLF2Content} />                                
                            <Route path = "/liga-femenina-2/resultados" component = {ResultsLF2Content} />                                
                            <Route path = "/liga-femenina-2/estadisticas" component = {StatsLF2Content} />                                
                            <Route path = "/liga-femenina-2/buscador" component = {SearchLF2Content} />
                            <Route path = "/liga-femenina-2/previa" component = {Previa} />
                            <Route path = "/liga-femenina-2/equipo/estadisticas-estandard" component = {TeamStandardStats} />
                            <Route path = "/liga-femenina-2/equipo/estadisticas-avanzadas" component = {TeamAdvancedStats} />
                            <Route path = "/liga-femenina-2/partido/estadisticas-estandard" component = {GameStandardStats} />
                            <Route path = "/liga-femenina-2/partido/estadisticas-avanzadas" component = {GameAdvancedStats} /> 
                            <Route exact path = "/women-euroleague" component = {HomeEURContent} />               
                            <Route path = "/women-euroleague/teams" component = {TeamsEURContent} />                                
                            <Route path = "/women-euroleague/results" component = {ResultsEURContent} />                                
                            <Route path = "/women-euroleague/stats" component = {StatsEURContent} />                                
                            <Route path = "/women-euroleague/search" component = {SearchEURContent} />
                            <Route path = "/women-euroleague/previa" component = {PreviaEU} />
                            <Route path = "/women-euroleague/equipo/estadisticas-estandard" component = {TeamStandardStats} />
                            <Route path = "/women-euroleague/equipo/estadisticas-avanzadas" component = {TeamAdvancedStats} />
                            <Route path = "/women-euroleague/game/standard-stats" component = {GameStandardStats} />
                            <Route path = "/women-euroleague/game/advanced-stats" component = {GameAdvancedStats} />
                            <Route exact path = "/women-eurocup" component = {HomeECUContent} />               
                            <Route path = "/women-eurocup/teams" component = {TeamsECUContent} />                                
                            <Route path = "/women-eurocup/results" component = {ResultsECUContent} />                                
                            <Route path = "/women-eurocup/stats" component = {StatsECUContent} />                                
                            <Route path = "/women-eurocup/search" component = {SearchECUContent} />
                            <Route path = "/women-eurocup/previa" component = {PreviaEU} />
                            <Route path = "/women-eurocup/equipo/estadisticas-estandard" component = {TeamStandardStats} />
                            <Route path = "/women-eurocup/equipo/estadisticas-avanzadas" component = {TeamAdvancedStats} />
                            <Route path = "/women-eurocup/game/standard-stats" component = {GameStandardStats} />
                            <Route path = "/women-eurocup/game/advanced-stats" component = {GameAdvancedStats} />
                            <Route path = "/aviso" component = {Aviso} />
                            <Route path = "/contacto" component = {Contacto} />
                            <Route path = "/glosario" component = {Glosario} />
                        </Suspense>
                    </Tab.Content>            
                </Col>
            </Row>  
        )
    }
}

module.exports.Routes = withRouter(Routes);