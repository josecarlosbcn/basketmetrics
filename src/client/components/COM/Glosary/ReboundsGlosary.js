import React, {Component} from "react";
import {Modal, Button} from "react-bootstrap";


class ReboundsGlosary extends Component{
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
                                <div style = {{display: (this.props.glosario === "teamRebounds") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>Equipo:</strong> Equipo del que se van a mostrar las estadísticas.</li>
                                        <li><strong>RD:</strong> Rebotes defensivos.</li>
                                        <li><strong>RD/P:</strong> Rebotes defensivos por partido.</li>
                                        <li><strong>RO:</strong> Rebotes ofensivos.</li>
                                        <li><strong>RO/P:</strong> Rebotes ofensivos por partido.</li>
                                        <li><strong>TR:</strong> Total rebotes.</li>
                                        <li><strong>TR/P:</strong> Total rebotes por partido.</li>
                                        <li><strong>RD%:</strong> Porcentaje de rebotes defensivos.</li>
                                        <li><strong>RO%:</strong> Porcentaje de rebotes ofensivos.</li>
                                    </ul>
                                </div>
                                <div style = {{display: (this.props.glosario === "playerRebounds") ? "block" : "none"}}>
                                    <ul>
                                        <li><strong>Jugadora:</strong> Jugadora de la que se van a mostrar las estadísticas.</li>
                                        <li><strong>RD:</strong> Rebotes defensivos.</li>
                                        <li><strong>RD/P:</strong> Rebotes defensivos por partido.</li>
                                        <li><strong>RO:</strong> Rebotes ofensivos.</li>
                                        <li><strong>RO/P:</strong> Rebotes ofensivos por partido.</li>
                                        <li><strong>TR:</strong> Total rebotes.</li>
                                        <li><strong>TR/P:</strong> Total rebotes por partido.</li>
                                        <li><strong>RD%:</strong> Porcentaje de rebotes defensivos cuando ella está en pista.</li>
                                        <li><strong>RO%:</strong> Porcentaje de rebotes ofensivos cuando ella está en pista.</li>
                                        <li><strong>TR%:</strong> Porcentaje de rebotes totales cuando ella está en pista.</li>
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

module.exports.ReboundsGlosary = ReboundsGlosary;