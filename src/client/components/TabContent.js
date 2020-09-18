import React, {Component} from "react";
import {HomeApp} from "./HOMEAPP/HomeApp";
import {HomeLF1} from "./LF1/HomeLF1";
import {HomeLF2} from "./LF2/HomeLF2";
import {HomeEUR} from "./EUROLEAGUE/HomeEUR";
import {HomeECU} from "./EUROCUP/HomeECU";
import {HomePLUS} from "./PLUS/HomePLUS";

class TabContent extends Component {
    constructor(props){
        super();
        this.props = props;
    }
    render(){
        switch(this.props.origin){
            case process.env.HOME:
                return(
                    <HomeApp />
                )
            case process.env.HOME_LF1:
                return(
                    <HomeLF1 />
                )    
             case process.env.HOME_LF2:
                return(
                    <HomeLF2 />
                )
            case process.env.HOME_EUR:
                return(
                    <HomeEUR />
                )
            case process.env.HOME_ECU:
                return(
                    <HomeECU />
                )
            case process.env.HOME_PLUS:
                return(
                    <HomePLUS />
                )
        }
    }
}

module.exports.TabContent = TabContent;