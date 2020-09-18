import React, {Component} from "react";
import {SubMenu} from "../SubMenu";


class HomeLF2 extends Component{
    render(){
        return(
            <div>
                <SubMenu  origin = {process.env.HOME_LF2} />
            </div>               
        )
    }
}

module.exports.HomeLF2 = HomeLF2;