import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class ShootsGlosary extends Component{
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
                                <div style = {{height: 300 + "px", overflowY: "scroll"}}>
                                    <ul>
                                        <li><strong>Equipo:</strong> Equipo del que se van a mostrar las estadísticas.</li>
                                        <li><strong>Jugadora:</strong> Jugadoa de la que se van a mostrar las estadísticas.</li>
                                        <li><strong>Ptos:</strong> Puntos anotados.</li>
                                        <li><strong>Ptos/P:</strong> Puntos anotados por partido.</li>
                                        <li><strong>TCC:</strong> Tiros de campo convertidos.</li>
                                        <li><strong>TCI:</strong> Tiros de campo intentados.</li>
                                        <li><strong>TLC:</strong> Tiros libres convertidos.</li>
                                        <li><strong>TLI:</strong> Tiros libres intentados.</li>
                                        <li><strong>TC%:</strong> Porcentaje de tiros de campo.</li>
                                        <li><strong>TL%:</strong> Porcentaje de tiros libres.</li>
                                        <li><strong>T2PC:</strong> Tiros de dos puntos convertidos.</li>
                                        <li><strong>T3PC:</strong> Tiros de tres puntos convertidos.</li>
                                        <li><strong>T2PI:</strong> Tiros de dos puntos intentados.</li>
                                        <li><strong>T3PI: </strong> Tiros de tres puntos intentados.</li>
                                        <li><strong>T2P%: </strong> Porcentaje de tiro de dos puntos.</li>
                                        <li><strong>T3P%:</strong> Porcentaje de tiro de tres puntos.</li>
                                        <li><strong>TCC/P:</strong> Tiros de campo convertidos por partido.</li>
                                        <li><strong>TCI/P:</strong> Tiros de campo intentados por partido.</li>
                                        <li><strong>TLC/P:</strong> Tiros libres convertidos por partido.</li>
                                        <li><strong>TLI/P:</strong> Tiros libres intentados por partido.</li>
                                        <li><strong>T2PC/P:</strong> Tiros de dos puntos convertidos por partido.</li>
                                        <li><strong>T2PI/C:</strong> Tiros de dos puntos intentados por partido.</li>
                                        <li><strong>T3PC/P:</strong> Tiros de tres puntos convertidos por partido.</li>
                                        <li><strong>T3PI/P:</strong> Tiros de tres puntos intentados por partido.</li>
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

module.exports.ShootsGlosary = ShootsGlosary;