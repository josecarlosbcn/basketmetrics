import React, {Component} from "react";
import {SubMenu} from "../SubMenu";


class HomeECU extends Component{
    render(){
        return(
            <div>
                <SubMenu  origin = {process.env.HOME_ECU} />
            </div>               
        )
    }
}

module.exports.HomeECU = HomeECU;