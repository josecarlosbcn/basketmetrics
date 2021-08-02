import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class BoxScoreGlosary extends Component{
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
                                        <li><strong>AS:</strong> Asistencias</li>
                                        <li><strong>BP:</strong> Balones perdidos.</li>
                                        <li><strong>BR:</strong> Balones recuperados.</li>
                                        <li><strong>FC:</strong> Faltas cometidas.</li>
                                        <li><strong>FR:</strong> Faltas recibidas.</li>
                                        <li><strong>MIN:</strong> Minutos disputados.</li>
                                        <li><strong>PTOS:</strong> Puntos anotados.</li>
                                        <li><strong>RD:</strong> Rebotes defensivos.</li>
                                        <li><strong>RO:</strong> Rebotes ofensivos.</li>
                                        <li><strong>RT:</strong> Total rebotes.</li>
                                        <li><strong>TC:</strong> Tiros de campo.</li>
                                        <li><strong>TL:</strong> Tiros libres.</li>
                                        <li><strong>TP: </strong> Tapones.</li>
                                        <li><strong>T2P: </strong> Tiros de dos puntos.</li>
                                        <li><strong>T3P:</strong> Tiros de tres puntos.</li>
                                        <li><strong>VA:</strong> Valoración.</li>
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

module.exports.BoxScoreGlosary = BoxScoreGlosary;