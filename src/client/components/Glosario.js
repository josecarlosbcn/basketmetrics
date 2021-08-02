import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";

export default class Glosario extends Component {
    constructor(props){
        super();
        this.props = props;
    }

    render(){
        return(
            <div>
                <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em', marginTop: 15 + "px" }}>
                    GLOSARIO
                </h4>
                <div style = {{fontSize: 14 + "pt"}}>
                    <Row>
                        <Col md = {6}>
                            <ul>
                                <li><strong>AS:</strong> Asistencias.</li>
                                <li><strong>AS Ratio:</strong> De cada posesión cuales de ellas terminan con una asistencia.</li>
                                <li><strong>AS%:</strong> Porcentaje de asistencias.</li>
                                <li><strong>AS/P:</strong> Asistencias por partido.</li>
                                <li><strong>AS/BP:</strong> Número de asistencias dadas por balón perdido.</li>
                                <li><strong>BP:</strong> Balones Perdidos.</li>
                                <li><strong>BP%:</strong> De todas las posesiones jugadas, porcentaje de balones perdidos.</li>
                                <li><strong>BP/P:</strong> Balones perdidos por partido.</li>
                                <li><strong>BR:</strong> Balones recuperados.</li>
                                <li><strong>BR%:</strong> Porcentaje de balones recuperados.</li>
                                <li><strong>BR/BP:</strong> Número de balones recuperados por cada balón perdido.</li>
                                <li><strong>BR/P:</strong> Balones recuperados por partido.</li>
                                <li><strong>DRE:</strong> Daily RAPM (Regularized Adjusted Plus/Minus) Estimate. Equivalente al +/- pero mucho más restrictivo.</li>
                                <li><strong>DRTG:</strong> Defensive Rating o Ratio Defensivo o Índice defensivo. Número de puntos recibidos por un equipo o una jugadora en 100 posesiones.</li>
                                <li><strong>eTC%:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                <li><strong>FC:</strong> Faltas cometidas.</li>
                                <li><strong>FC/P:</strong> Faltas cometidas por partido T2PC: Tiros de dos puntos convertidos.</li>
                                <li><strong>FR:</strong> Faltas recibidas.</li>
                                <li><strong>FR/P:</strong> Faltas recibidas por partido T2P%: Porcentaje de tiros de dos puntos.</li>
                                <li><strong>GS:</strong> Game Score. Métrica equivalente y más exisgente que la valoración de una jugadora.</li>
                                <li><strong>NRTG:</strong> Diferencia entre ORTG y DRTG.</li>
                                <li><strong>ORTG:</strong> Offensive Rating o Ratio Ofensivo o Índice ofensivo. Número de puntos anotados por un equipo o una juadora en 100 posesiones.</li>
                                <li><strong>PACE:</strong> Ritmo de partido. Número de posesiones por minuto.</li>
                                <li><strong>PJ:</strong> Partidos jugados.</li>
                                <li><strong>POS:</strong> Posesiones.</li>
                                <li><strong>PPI:</strong> Puntos anotados por intento.</li>
                                <li><strong>PPP:</strong> Puntos anotados por posesión.</li>
                                <li><strong>PTOS:</strong> Puntos anotados.</li>
                            </ul>
                        </Col>
                        <Col md = {6}>
                            <ul>
                                <li><strong>Reb. Def. %:</strong> Porcentaje de rebotes defensivos.</li>
                                <li><strong>RD:</strong> Rebote defensivos.</li>
                                <li><strong>RD/P:</strong> Rebote defensivos por partido.</li>
                                <li><strong>Reb. Of. %:</strong> Porcentaje de rebotes ofensivos.</li>
                                <li><strong>Rival BP%:</strong> Porcentaje de balones perdidos por el rival.</li>
                                <li><strong>Rival eTC%:</strong> Porcentaje de efictividad de tiro del rival.</li>
                                <li><strong>Rival TL Ratio:</strong> De cada punto del equipo rival, cuánto proviene de los tiros libres.</li>
                                <li><strong>RO:</strong> Rebote ofensivos.</li>
                                <li><strong>RO/P:</strong> Rebote ofensivos por partido.</li>
                                <li><strong>RO/P:</strong> Rebote ofensivos por partido.</li>
                                <li><strong>T2PC:</strong> Tiros de dos puntos convertidos.</li>
                                <li><strong>T2PI:</strong> Tiros de dos puntos intentados.</li>
                                <li><strong>T2P%:</strong> Porcentaje de tiros de dos puntos.</li>
                                <li><strong>T3PC:</strong> Tiros de tres puntos convertidos.</li>
                                <li><strong>T3PI:</strong> Tiros de tres puntos intentados.</li>
                                <li><strong>T3P%:</strong> Porcentaje de tiros de tres puntos.</li>
                                <li><strong>TCC:</strong> Tiros de campo convertidos.</li>
                                <li><strong>TCI:</strong> Tiros de campo intentados.</li>
                                <li><strong>TC%:</strong> Porcentaje de tiros de campo.</li>
                                <li><strong>TLC:</strong> Tiros libres convertidos.</li>
                                <li><strong>TLI:</strong> Tiros libre intentados.</li>
                                <li><strong>TL%:</strong> Porcentaje de tiros libres.</li>
                                <li><strong>TL Ratio:</strong> De cada punto del equipo, cuánto proviene de los tiros libres.</li>
                                <li><strong>TP:</strong> Tapones.</li>
                                <li><strong>TP/P:</strong> Tapones por partido.</li>
                                <li><strong>TR:</strong> Total rebotes.</li>
                                <li><strong>TR%:</strong> Porcentaje del total de rebotes.</li>
                                <li><strong>TR/P:</strong> Total rebotes por partido.</li>
                                <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de una jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                <li><strong>USG%:</strong> Número de posesiones finalizadas por una jugadora. Uso de la jugadora en ataque.</li>
                                <li><strong>VAL:</strong> Valoración.</li>
                                <li><strong>VAL/P:</strong> Valoración por partido.</li>
                            </ul>
                        </Col>
                    </Row>
                </div>                
            </div>
        );
    }
}