import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import leganes from "../../img/cbleganes-200x200.png";
import barakaldo from "../../img/logo-ausarta-barakaldo-200x192.png";

export default class HomeApp extends Component{
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
                    <Col md = {2}>
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Clubes Liga Endesa
                        </div> 
                    </Col>

                    <Col md = {4}>
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Clubes Liga Femenina 2
                        </div> 
                    </Col>
                    <Col md = {2}>
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Prensa
                        </div> 
                    </Col>
                    <Col md = {4}>                        
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Aficionados / Jugadoras / Entrenadores
                        </div> 
                    </Col>
                </Row>
                <Row>
                    <Col md = {2}>
                    </Col>
                    <Col md = {2}>
                        <div className = "text-center">
                            <a href = "https://www.cbleganes.es" target = "_blank"><img src = {leganes} alt = "Club Deportivo Elemental Baloncesto Leganés" /></a>
                        </div>                        
                    </Col>
                    <Col md = {2}>
                        <div className = "text-center">
                            <a href = "https://www.cbleganes.es" target = "_blank"><img src = {leganes} alt = "Club Deportivo Elemental Baloncesto Leganés" /></a>
                        </div>                        
                    </Col>
                    <Col md = {2}>
                        <div className = "text-center">
                            <a href = "http://www.alritmodelaro.com" target = "_blank"><img src = {ritmo} alt = "Al ritmo del aro" /></a>
                        </div>                        
                    </Col>
                    <Col md = {4}>                        
                        <div style = {{marginTop: 15 + "px", fontSize: 12 + "pt"}}>
                            Carbajal Masso, Jacinto &#8226; De la Torre Rus, Saul &#8226; Losilla Arce, Ignacio &#8226; Pérez Alonso, Andrea 
                        </div>                   
                    </Col>
                </Row> */}

                <Row style = {{marginTop: "15" + "px"}}>
                    <Col md = {12}>
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Clubes
                        </div> 
                    </Col>
{/*                     <Col md = {2}>
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Prensa
                        </div> 
                    </Col>
                    <Col md = {8}>                        
                        <div className = "font-weight-bold text-center"
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", 
                                    padding: 5 + "px", fontSize: 16 + "pt", marginTop: 10 + "px"}}>
                                    Aficionados / Jugadoras / Entrenadores
                        </div> 
                    </Col>
 */}                
                </Row>
                <Row>
                    <Col md = {2}>
                        <div className = "text-center">
                            <a href = "https://twitter.com/barakaldo__est?lang=es" target = "_blank"><img src = {barakaldo} alt = "HGB AUSARTA BARAKALDO E.S.T." /></a>
                        </div>                        
                    </Col>
{/*                     <Col md = {2}>
                        <div className = "text-center">
                            <a href = "http://www.alritmodelaro.com" target = "_blank"><img src = {ritmo} alt = "Al ritmo del aro" /></a>
                        </div>                        
                    </Col>
                    <Col md = {8}>                        
                        <div style = {{marginTop: 15 + "px", fontSize: 12 + "pt"}}>
                            Carbajal Masso, Jacinto &#8226; De la Torre Rus, Saul &#8226; Losilla Arce, Ignacio &#8226; Pérez Alonso, Andrea 
                        </div>                   
                    </Col> */}
                </Row> 
            </div>               
        )
    }
}

