import React, {Component} from "react";
import {SubMenu} from "../SubMenu";


class HomeLF1 extends Component{
    render(){
        return(
            <div>
                <SubMenu  origin = {process.env.HOME_LF1} />
            </div>               
        )
    }
}

module.exports.HomeLF1 = HomeLF1;