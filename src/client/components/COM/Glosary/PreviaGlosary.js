import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class PreviaGlosary extends Component{
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
                                <div style = {{height: 300 + "px", overflowY: "scroll", display: (this.props.glosario == "glosario1") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>Asist/Partido:</strong> Número de asistencias por partido</li>
                                        <li><strong>eTC%:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                        <li><strong>Pérdidas %:</strong> Porcentaje de balones perdidos por el equipo.</li>
                                        <li><strong>Pérd/Partido:</strong> Número de balones perdidos por partido.</li>
                                        <li><strong>Ptos/Partido:</strong> Número de puntos por partido.</li>
                                        <li><strong>Ptos.Rec./Partido:</strong> Número de puntos recibidos por partido</li>
                                        <li><strong>Ratio Rival TL:</strong> Por parte del equipo rival. De cada punto anotado, cuánto corresponde a los tiros libres.</li>
                                        <li><strong>Ratio TL:</strong> Por parte del equipo, de cada punto anotado, cuánto corresponde a los tiros libres.</li>
                                        <li><strong>Reb.Def.%:</strong> Del total de rebotes, porcentaje de rebotes que son capturados en defensa</li>
                                        <li><strong>Reb.Of.%:</strong> Del total de rebotes, porcentaje de rebotes que son capturados en ataque.</li>
                                        <li><strong>Rebs/Partido:</strong> Rebotes por partido.</li>
                                        <li><strong>Rival eTC%</strong> Porcentaje de efictividad de tiro del rival.</li>
                                        <li><strong>Rival Perd.%</strong>Porcentaje de balones perdidos por el rival.</li>
                                        <li><strong>Robos/Partido</strong> Total de robos por partido.</li>
                                        <li><strong>TL%</strong> Porcentaje de TL anotados.</li>
                                        <li><strong>Tot.Reb.%</strong>Porcentajes de rebotes capturados del total de rebotes que se producen.</li>
                                        <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de una jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                        <li><strong>T2P%:</strong> Porcentaje de tiros de dos puntos anotados.</li>
                                        <li><strong>T3P%:</strong> Porcentaje de tiros de tres puntos anotados.</li>
                                        <li><strong>% TL Puntos</strong> Del total de puntos anotados, porcentaje de puntos conseguidos desde el lanzamiento de tiros libres.</li>
                                        <li><strong>% T2P Puntos:</strong> Del total de puntos anotados, porcentaje de puntos conseguidos desde el lanzamiento de tiros de dos puntos.</li>
                                        <li><strong>% T3P Puntos:</strong> Del total de puntos anotados, porcentaje de puntos conseguidos desde el lanzamiento de tiros de tres puntos.</li>
                                    </ul>
                                </div>
                                <div style = {{height: 300 + "px", display: (this.props.glosario == "glosario2") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>Asist/Partido:</strong> Número de asistencias por partido</li>
                                        <li><strong>Game Score:</strong> Métrica equivalente y más exisgente que la valoración de una jugadora.</li>
                                        <li><strong>Pérdidas/Partido:</strong> Número de balones perdidos por partido.</li>
                                        <li><strong>Puntos/Partido:</strong> Número de puntos por partido.</li>
                                        <li><strong>Reb.Def./Partido:</strong> Rebotes defensivos por partido</li>
                                        <li><strong>Reb.Of./Partido:</strong> Rebotes ofensivos por partido</li>
                                        <li><strong>Robos/Partido:</strong> Robos por partido</li>
                                        <li><strong>TL%</strong> Porcentaje de TL anotados.</li>
                                        <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de una jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                        <li><strong>T2P%:</strong> Porcentaje de tiros de dos puntos anotados.</li>
                                        <li><strong>T3P%:</strong> Porcentaje de tiros de tres puntos anotados.</li>
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

module.exports.PreviaGlosary = PreviaGlosary;