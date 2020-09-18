import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import ritmo from "../../img/ritmo-aro-200x196.png";

class HomeApp extends Component{
    render(){
        return(
            <div>
                <Row style = {{marginTop: "15" + "px"}}>
                    <Col md = {12}>                        
                        <p>
                            Desde aquí queremos agradecer la inestimable ayuda dada por nuestros colaborados en sus distintas formas. 
                            Como se suele decir, no están todos los que son, pero son todos los que están. A todos ellos,
                            gracias infinitas por su apoyo, ayuda y colaboración en este proyecto.
                        </p>
                        <p>
                            Si estás interesado en el mantenimiento de este proyecto y quieres tener más información sobre cómo hacerlo, puedes visitar este <a href = "https://bit.ly/3h1udeo" target = "_blank">tweet</a> o en su defecto escribirnos a basketmetrics@gmail.com
                        </p>
                        <p>A continuación, tenéis un listado de colaboradores ordenados por orden alfabético. </p>
                    </Col>
                </Row>
{/*                 <Row style = {{marginTop: "15" + "px"}}>
                    <Col md = {12}>                        
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Equipos de Liga Femenina Endesa
                        </div>                    
                        <Row style = {{marginTop: "15" + "pt"}}>
                            <Col md = {3}>Equipo 1</Col>
                            <Col md = {3}>Equipo 2</Col>
                            <Col md = {3}>Equipo 3</Col>
                            <Col md = {3}>Equipo 4</Col>
                        </Row>
                    </Col>
                </Row>
                <Row style = {{marginTop: "15" + "px"}}>
                    <Col md = {12}>                        
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Equipos de Liga Femenina 2
                        </div>                    
                        <Row style = {{marginTop: "15" + "pt"}}>
                            <Col md = {3}>Equipo 1</Col>
                            <Col md = {3}>Equipo 2</Col>
                            <Col md = {3}>Equipo 3</Col>
                            <Col md = {3}>Equipo 4</Col>
                        </Row>
                    </Col>
                </Row> */}
                <Row style = {{marginTop: "15" + "px"}}>
                    <Col md = {2}>
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Prensa
                        </div> 
                        <div className = "text-left">
                            <a href = "http://www.alritmodelaro.com" target = "_blank"><img src = {ritmo} alt = "Al ritmo del aro" /></a>
                        </div>
                        
                    </Col>
                    <Col md = {10}>                        
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Aficionados / Jugadoras / Entrenadores
                        </div> 
                        <div style = {{marginTop: 15 + "px", fontSize: 12 + "pt"}}>
                            Carbajal Masso, Jacinto &#8226; Pérez Alonso, Andrea 
                        </div>                   
                    </Col>
                </Row>
            </div>               
        )
    }
}

module.exports.HomeApp = HomeApp;