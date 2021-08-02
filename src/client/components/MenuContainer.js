import React, {Component} from "react";
import Tab from 'react-bootstrap/Tab';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "../css/menu.css";
import {NavLink} from "react-router-dom";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { LF1Menu } from "./LF1Menu";
import { LF2Menu } from "./LF2Menu";
import { EuroleagueMenu } from "./EuroleagueMenu";
import { EurocupMenu } from "./EurocupMenu";

class MenuContainer extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            tab: null
        };
    }

    componentDidMount(){
        let submenu = null;
        if (window.location.href.indexOf("liga-femenina-1") !== -1)
            submenu = process.env.HOME_LF1;
        if (window.location.href.indexOf("liga-femenina-2") !== -1)
            submenu = process.env.HOME_LF2;
        if (window.location.href.indexOf("women-euroleague") !== -1)
            submenu = process.env.HOME_EUR;
        if (window.location.href.indexOf("women-eurocup") !== -1)
            submenu = process.env.HOME_ECU;
        this.setState({
            tab: submenu
        });        
    }

    hancleClick(event){
        let submenu = null;
        if (event.currentTarget.id == "lf1")
            submenu = process.env.HOME_LF1;
        if (event.currentTarget.id == "lf2")
            submenu = process.env.HOME_LF2;
        if (event.currentTarget.id == "euroleague")
            submenu = process.env.HOME_EUR;
        if (event.currentTarget.id == "eurocup")
            submenu = process.env.HOME_ECU;
        this.setState({
            tab: submenu
        });
    }

    render(){
        return(
            <div>     
                <Tab.Container id = "main-menu">
                    <Row style = {{marginRight: -5 + "px", marginLeft: -5 + "px"}}>
                        <div className = "fondo-menu">
                            <Col md = {12}>
                                <Nav justify variant="pills">
                                    <Nav.Item>
                                        <NavLink 
                                            id = "colabora"
                                            className = "btn menu btn-lg btn-block" 
                                            activeClassName = "btn menu-active btn-lg btn-block"
                                            exact
                                            onClick = {(event) => this.hancleClick(event)}
                                            to = "/">
                                                Colaboradores
                                        </NavLink>                                            
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink 
                                            id = "lf1"
                                            className = "btn menu btn-lg btn-block" 
                                            activeClassName = "btn menu-active btn-lg btn-block"
                                            onClick = {(event) => this.hancleClick(event)}
                                            to = "/liga-femenina-1">
                                                L.F. Endesa
                                        </NavLink>                                            
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink 
                                            id = "lf2"
                                            className = "btn menu btn-lg btn-block" 
                                            activeClassName = "btn menu-active btn-lg btn-block"
                                            onClick = {(event) => this.hancleClick(event)}
                                            to = "/liga-femenina-2">
                                                Liga Femenina 2
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink 
                                            id = "euroleague"
                                            className = "btn menu btn-lg btn-block" 
                                            activeClassName = "btn menu-active btn-lg btn-block"
                                            onClick = {(event) => this.hancleClick(event)}
                                            to = "/women-euroleague">
                                                Euroliga
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink 
                                            id = "eurocup"
                                            className = "btn menu btn-lg btn-block" 
                                            activeClassName = "btn menu-active btn-lg btn-block"
                                            onClick = {(event) => this.hancleClick(event)}
                                            to = "/women-eurocup">
                                                Eurocup
                                        </NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink 
                                            id = "glosario"
                                            className = "btn menu btn-lg btn-block" 
                                            activeClassName = "btn menu-active btn-lg btn-block"
                                            onClick = {(event) => this.hancleClick(event)}
                                            to = "/glosario">
                                                Glosario
                                        </NavLink>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </div>
                    </Row>
                </Tab.Container>   
                {
                    (this.state.tab == process.env.HOME_LF1) ? <LF1Menu /> : 
                        (this.state.tab == process.env.HOME_LF2) ? <LF2Menu /> : 
                            (this.state.tab == process.env.HOME_EUR) ? <EuroleagueMenu /> :
                                (this.state.tab == process.env.HOME_ECU) ? <EurocupMenu /> : ""
                }
            </div>
        )
    }
}

module.exports.MenuContainer = MenuContainer;