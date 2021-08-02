import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class GameAdvStatsGlosary extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            //show: false
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            show: false,
            loaded: true
        });
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("prevState: " + prevState.show + " prevProps: " + prevProps.show + " state: " + this.state.show + " props: " + this.props.show);
        //console.log("props.show:" + this.props.show + " props.glosario: " + this.props.glosario);
        if (prevState.show !== this.props.show) {
            this.setState({
                show: this.props.show
            });
        }
    }

    handleClose(){
        this.setState({
            show: false
        });
    }

    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <Modal show={this.state.show} onHide = {() => this.handleClose()} size = "lg">
                            <Modal.Header closeButton>
                                <Modal.Title>Glosario</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div style = {{height: 300 + "px", overflowY: "scroll", display: (this.props.glosario == "4factors") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>Asist/Partido:</strong> Número de asistencias dadas por balón perdido.</li>
                                        <li><strong>DRE:</strong> Daily RAPM (Regularized Adjusted Plus/Minus) Estimate. Equivalente al +/- pero mucho más restrictivo.</li>
                                        <li><strong>DRTG:</strong> Defensive Rating o Ratio Defensivo o Índice defensivo. Número de puntos recibidos por un equipo o una jugadora en 100 posesiones.</li>
                                        <li><strong>eTC%:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                        <li><strong>GS:</strong> Game Score. Métrica equivalente y más exisgente que la valoración de una jugadora.</li>
                                        <li><strong>NRTG:</strong> Diferencia entre ORTG y DRTG.</li>
                                        <li><strong>ORTG:</strong> Offensive Rating o Ratio Ofensivo o Índice ofensivo. Número de puntos anotados por un equipo o una juadora en 100 posesiones.</li>
                                        <li><strong>Ratio AS:</strong> De cada posesión cuales de ellas terminan con una asistencia</li>
                                        <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de una jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                        <li><strong>USG%:</strong> Número de posesiones finalizadas por una jugadora. Uso de la jugadora en ataque.</li>
                                        <li><strong>%AS:</strong> Porcentaje de asistencias.</li>
                                        <li><strong>%BR</strong> Porcentaje de balones recuperados.</li>
                                        <li><strong>%RD</strong> Porcentaje de rebotes defensivos.</li>
                                        <li><strong>%RO</strong> Porcentaje de rebotes ofensivos.</li>
                                        <li><strong>%TR</strong> Porcentaje del total de rebotes.</li>
                                    </ul>
                                </div>
                                <div style = {{height: 300 + "px", overflowY: "scroll", display: (this.props.glosario == "advstats") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>As./Per.:</strong> Número de asistencias dadas por balón perdido.</li>
                                        <li><strong>DRTG:</strong> Defensive Rating o Ratio Defensivo o Índice defensivo. Número de puntos recibidos por un equipo o una jugadora en 100 posesiones.</li>
                                        <li><strong>NRTG:</strong> Diferencia entre ORTG y DRTG.</li>
                                        <li><strong>ORTG:</strong> Offensive Rating o Ratio Ofensivo o Índice ofensivo. Número de puntos anotados por un equipo o una juadora en 100 posesiones.</li>
                                        <li><strong>Pos.:</strong> Posesiones</li>
                                        <li><strong>Pos./Min.:</strong> Número de posesiones por minuto.</li>
                                        <li><strong>Ratio TL:</strong> De cada punto del equipo, cuánto proviene de los tiros libres.</li>
                                        <li><strong>Rival Ratio TL</strong> De cada punto del equipo rival, cuánto proviene de los tiros libres.</li>
                                        <li><strong>Rival % Pérd.:</strong> Porcentaje de balones perdidos por el rival.</li>
                                        <li><strong>Rival % eTC:</strong> Porcentaje de efictividad de tiro del rival.</li>
                                        <li><strong>Robo/Pér.:</strong> Número de balones recuperados por cada balón perdido.</li>
                                        <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de una jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                        <li><strong>%eTC:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                        <li><strong>%Pérd:</strong> De todas las posesiones jugadas, porcentaje de balones perdidos.</li>
                                        <li><strong>%Reb. Def.:</strong> Porcentaje de rebotes defensivos.</li>
                                        <li><strong>%Reb. Of.:</strong> Porcentaje de rebotes ofensivos</li>
                                    </ul>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant = "danger" onClick = {() => this.handleClose()}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    :
                        null
                }
            </div>
        )
    }
}

module.exports.GameAdvStatsGlosary = GameAdvStatsGlosary;