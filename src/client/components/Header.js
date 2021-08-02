import React, {Component} from "react";
import "../css/header.css";
import logo2 from "../img/logo2.png";
import {Row, Col} from "react-bootstrap";
import {TwitterFollowButton} from "react-twitter-embed";
import "@babel/polyfill";

class Header extends Component{
    render(){
        return(
            <header className = "header">
                <Row style = {{margin: 0}}>
                    <Col md = {12} className = "text-center text-logo font-weight">
                        <img src = {logo2} alt = "Basketmetrics" />BASKETMETRICS<span style = {{fontSize: 16 + "pt"}}>.com</span>
                        <p className = "text-center font-weight-bold sub-title">
                            Liga Femenina Endesa &#8226; Liga Femenina 2 &#8226; Eurocup Women &#8226; Euroleague Women
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} className = "text-right">
                        <TwitterFollowButton
                                screenName={'basketmetrics'}
                        />
                    </Col>
                </Row>
{/*                 <Row>
                    <Col md = {12} className = "text-center font-weight-bold sub-title">
                        Liga Femenina Endesa &#8226; Liga Femenina 2 &#8226; Eurocup Women &#8226; Euroleague Women
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} className = "text-right">
                        <TwitterFollowButton
                            screenName={'basketmetrics'}
                        />
                    </Col>
                </Row>     */}            
            </header>
        )
    }
}

module.exports.Header = Header;