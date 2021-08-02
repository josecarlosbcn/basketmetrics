import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import "../css/submenu.css";

const LF2Menu = () => {
    return(
        <Tab.Container>
            <Row style = {{marginLeft: -5 + "px", marginRight: -5 + "px"}}>
                <div className = "fondo-submenu">
                    <Col md = {12}>
                        <Nav justify variant="pills">
                            <Nav.Item>
                                <NavLink 
                                    className = "btn submenu btn-lg btn-block" 
                                    activeClassName = "btn submenu-active btn-lg btn-block"
                                    exact
                                    to = "/liga-femenina-2">
                                        Home
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink 
                                    className = "btn submenu btn-lg btn-block" 
                                    activeClassName = "btn submenu-active btn-lg btn-block"
                                    to = "/liga-femenina-2/equipos">
                                        Equipos
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink 
                                    className = "btn submenu btn-lg btn-block" 
                                    activeClassName = "btn submenu-active btn-lg btn-block"
                                    to = "/liga-femenina-2/resultados">
                                        Resultados
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink 
                                    className = "btn submenu btn-lg btn-block"
                                    activeClassName = "btn submenu-active btn-lg btn-block"
                                    to = "/liga-femenina-2/estadisticas">
                                        Estadísticas
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink 
                                    className = "btn submenu btn-lg btn-block" 
                                    activeClassName = "btn submenu-active btn-lg btn-block"
                                    to = "/liga-femenina-2/buscador">
                                        Buscador
                                </NavLink>
                            </Nav.Item>                                              
                        </Nav>
                    </Col>
                </div>
            </Row>
        </Tab.Container>
    
    )
}

module.exports.LF2Menu = LF2Menu;