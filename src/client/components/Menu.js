import React, {Component} from "react";
import Tab from 'react-bootstrap/Tab';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {TabContent} from "./TabContent";
import "../css/menu.css";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


class Menu extends Component{
    render(){
        return(
            <div>     
                <Router>
                    <Tab.Container id = "main-menu">
                        <Row>
                            <div className = "fondo-menu">
                                <Col md = {12}>
                                    <Nav justify variant="pills">
                                        <Nav.Item>
                                            <NavLink 
                                                className = "btn menu btn-lg btn-block" 
                                                activeClassName = "btn menu-active btn-lg btn-block"
                                                exact
                                                to = "/">
                                                    Colaboradores
                                            </NavLink>                                            
                                        </Nav.Item>
                                        <Nav.Item>
                                            {/* <Nav.Link eventKey = "lf1">Liga Dia</Nav.Link> */}
                                            <NavLink 
                                                className = "btn menu btn-lg btn-block" 
                                                activeClassName = "btn menu-active btn-lg btn-block"
                                                to = "/liga-femenina-1">
                                                    L.F. Endesa
                                            </NavLink>                                            
                                        </Nav.Item>
                                        <Nav.Item>
                                            {/* <Nav.Link eventKey = "lf2">Liga Femenina 2</Nav.Link> */}
                                            <NavLink 
                                                className = "btn menu btn-lg btn-block" 
                                                activeClassName = "btn menu-active btn-lg btn-block"
                                                to = "/liga-femenina-2">
                                                    Liga Femenina 2
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                            {/* <Nav.Link eventKey = "el">Euroleague</Nav.Link> */}
                                            <NavLink 
                                                className = "btn menu btn-lg btn-block" 
                                                activeClassName = "btn menu-active btn-lg btn-block"
                                                to = "/women-euroleague">
                                                    Euroliga
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                            {/* <Nav.Link eventKey = "ec">Eurocup</Nav.Link> */}
                                            <NavLink 
                                                className = "btn menu btn-lg btn-block" 
                                                activeClassName = "btn menu-active btn-lg btn-block"
                                                to = "/women-eurocup">
                                                    Eurocup
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                            {/* <Nav.Link eventKey = "ec">Eurocup</Nav.Link> */}
                                            <NavLink 
                                                className = "btn menu btn-lg btn-block" 
                                                activeClassName = "btn menu-active btn-lg btn-block"
                                                to = "/aviso">
                                                    <MoreHorizIcon style={{ fontSize: 32}} />
                                            </NavLink>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </div>
                        </Row>
                        <Row>
                            <Col md = {12}>
                                <Route path = "/" exact render = {() => 
                                    <TabContent origin = {process.env.HOME} />
                                } />
                                <Route path = "/liga-femenina-1" render = {() => 
                                    <TabContent origin = {process.env.HOME_LF1} />
                                } />
                                <Route path = "/liga-femenina-2" render = {() => 
                                    <TabContent origin = {process.env.HOME_LF2} />
                                } />
                                <Route path = "/women-euroleague" render = {() => 
                                    <TabContent origin = {process.env.HOME_EUR} />
                                } />
                                <Route path = "/women-eurocup" render = {() => 
                                    <TabContent origin = {process.env.HOME_ECU} />
                                } />
                                <Route path = "/aviso" render = {() => 
                                    <TabContent origin = {process.env.HOME_PLUS} />
                                } />
                            </Col>
                        </Row>
                    </Tab.Container>                    
                </Router>       
            </div>                   
        )
    }
}

module.exports.Menu = Menu;