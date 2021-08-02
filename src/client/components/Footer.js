import React, {Component} from "react";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Route, NavLink, withRouter} from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga';
import "../css/footer.css";

class Footer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        ReactGA.initialize('UA-107292161-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    componentWillUpdate(){
        ReactGA.initialize('UA-107292161-1');
        ReactGA.pageview(window.location.pathname + window.location.search);        
    }

    render(){
        return(
            <div>
                <CookieConsent
                    location="bottom"
                    buttonText = "¡¡¡Acepto!!!"
                    declineButtonText = "¡¡¡Sácame de aquí!!!"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13pt", fontWeight: "bold" }}
                    expires={150}
                    enableDeclineButton
                    onDecline={() => {
                      window.location.href = "https://www.google.com"
                    }}                    
                >
                    Utilizamos cookies de terceros para mejorar nuestros servicios y poder realizar mediciones de navegación dentro de nuestro site.
                </CookieConsent>            
                <footer className = "pie">
                    <Row>
                        <Col md = {4}></Col>
                        <Col md = {4} className = "list-group list-group-horizontal" style = {{alignItems: "center", justifyContent: "center"}}>
                            <Nav.Item>
                                <NavLink className = "footer-options" to = "/aviso">Aviso</NavLink>
                            </Nav.Item>
                            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                            <Nav.Item>
                                <NavLink className = "footer-options" to = "/contacto">Contacto</NavLink>
                            </Nav.Item>
                        </Col>
                        <Col md = {4}></Col>
                    </Row>
                </footer>
            </div>
/*             <Router>
                <footer className = "pie">
                    <Row>
                        <Col md = {4}></Col>
                        <Col md = {4} className = "list-group list-group-horizontal" style = {{alignItems: "center", justifyContent: "center"}}>
                            <Nav.Item>
                                <NavLink className = "footer-options" to = "/aviso">Aviso</NavLink>
                            </Nav.Item>
                            &nbsp;|&nbsp;
                            <Nav.Item>
                                <NavLink className = "footer-options" to = "/contacto">Contacto</NavLink>
                            </Nav.Item>
                        </Col>
                        <Col md = {4}></Col>
                    </Row>
                </footer>
            </Router>
 */        )
    }
}

module.exports.Footer = Footer;