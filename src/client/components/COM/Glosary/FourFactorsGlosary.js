import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class FourFactorsGlosary extends Component{
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
                                <div>
                                    <ul>
                                        <li><strong>Equipo:</strong> Equipo del que se van a mostrar las estadísticas.</li>
                                        <li><strong>BP%:</strong> De todas las posesiones jugadas, porcentaje de balones perdidos.</li>
                                        <li><strong>eTC%:</strong> Eficiencia en tiros de campos (Effective Field Goal Percentage). Esta estadística recoge el acierto en el tiro dándole una mayor importancia a los triples respecto a los tiros de dos puntos.</li>
                                        <li><strong>Opp. BP%:</strong> Porcentaje de balones perdidos por el rival.</li>
                                        <li><strong>Opp. eTC%:</strong> Porcentaje de efictividad de tiro del rival.</li>
                                        <li><strong>Opp. Ratio TL:</strong> De cada punto del equipo rival, cuánto proviene de los tiros libres.</li>
                                        <li><strong>Ratio TL:</strong> De cada punto del equipo, cuánto proviene de los tiros libres.</li>
                                        <li><strong>RD%:</strong> Porcentaje de rebotes defensivos.</li>
                                        <li><strong>RO%:</strong> Porcentaje de rebotes ofensivos.</li>
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

module.exports.FourFactorsGlosary = FourFactorsGlosary;