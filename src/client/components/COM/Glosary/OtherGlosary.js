import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class OtherGlosary extends Component{
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
                                <div style = {{display: (this.props.glosario === "teamOther") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>AS/BP:</strong> Número de asistencias dadas por balón perdido.</li>
                                        <li><strong>BR/BP:</strong> Número de balones recuperados por cada balón perdido.</li>
                                        <li><strong>Equipo:</strong> Equipo del que se van a mostrar las estadísticas.</li>
                                        <li><strong>POS/Min:</strong> Número de posesione por minuto.</li>
                                        <li><strong>POS/Part:</strong> Número de posesiones por partido.</li>
                                    </ul>
                                </div>
                                <div style = {{display: (this.props.glosario === "playerOther") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>As.Ratio:</strong> De cada posesión cuales de ellas terminan con una asistencia.</li>
                                        <li><strong>AS/BP:</strong> Número de asistencias dadas por balón perdido.</li>
                                        <li><strong>AS%:</strong> Porcentaje de asistencias.</li>
                                        <li><strong>BR%:</strong> Porcentaje de balones recuperados.</li>
                                        <li><strong>DRE:</strong> Daily RAPM (Regularized Adjusted Plus/Minus) Estimate. Equivalente al +/- pero mucho más restrictivo.</li>
                                        <li><strong>Game Score:</strong> Métrica equivalente y más exisgente que la valoración de una jugadora.</li>
                                        <li><strong>Jugadora:</strong> Jugadora de la que se van a mostrar las estadísticas.</li>
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

module.exports.OtherGlosary = OtherGlosary;