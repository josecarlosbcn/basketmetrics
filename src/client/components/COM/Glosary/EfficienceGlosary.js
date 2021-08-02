import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class EfficienceGlosary extends Component{
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
                                <div style = {{display: (this.props.glosario === "teamEfficience") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>BP%:</strong> De todas las posesiones jugadas, porcentaje de balones perdidos.</li>
                                        <li><strong>DRTG:</strong> Defensive Rating o Ratio Defensivo o Índice defensivo. Número de puntos recibidos por un equipo o una jugadora en 100 posesiones.</li>
                                        <li><strong>Equipo:</strong> Equipo del que se van a mostrar las estadísticas.</li>
                                        <li><strong>eTC%:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                        <li><strong>NRTG:</strong> Diferencia entre ORTG y DRTG.</li>
                                        <li><strong>ORTG:</strong> Offensive Rating o Ratio Ofensivo o Índice ofensivo. Número de puntos anotados por un equipo o una jugadora en 100 posesiones.</li>
                                        <li><strong>PTOS x POS:</strong> Puntos conseguidos por posesión.</li>
                                        <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de un equipo o jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                    </ul>
                                </div>
                                <div style = {{display: (this.props.glosario === "playerEfficience") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>DRTG:</strong> Defensive Rating o Ratio Defensivo o Índice defensivo. Número de puntos recibidos por un equipo o una jugadora en 100 posesiones.</li>
                                        <li><strong>eTC%:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                        <li><strong>Jugadora:</strong> Jugadora de la que se van a mostrar las estadísticas.</li>
                                        <li><strong>NRTG:</strong> Diferencia entre ORTG y DRTG.</li>
                                        <li><strong>ORTG:</strong> Offensive Rating o Ratio Ofensivo o Índice ofensivo. Número de puntos anotados por un equipo o una jugadora en 100 posesiones.</li>
                                        <li><strong>PTOS x INT:</strong> Puntos conseguidos por intento.</li>
                                        <li><strong>PTOS x POS:</strong> Puntos conseguidos por posesión.</li>
                                        <li><strong>TS%:</strong> True shooting. Se mide la eficiencia de tiro de un equipo o jugadora, teniendo en cuenta los tiros de dos, de tres y tiros libres.</li>
                                        <li><strong>USG%:</strong> Número de posesiones finalizadas por una jugadora. Uso de la jugadora en ataque.</li>
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

module.exports.EfficienceGlosary = EfficienceGlosary;