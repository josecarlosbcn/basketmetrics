import React, {Component} from "react";
import {SubMenu} from "../SubMenu";


class HomeEUR extends Component{
    render(){
        return(
            <div>
                <SubMenu  origin = {process.env.HOME_EUR} />
            </div>               
        )
    }
}

module.exports.HomeEUR = HomeEUR;