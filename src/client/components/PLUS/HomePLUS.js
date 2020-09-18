import React, {Component} from "react";
import {SubMenu} from "../SubMenu";


class HomePLUS extends Component{
    render(){
        return(
            <div>
                <SubMenu  origin = {process.env.HOME_PLUS} />
            </div>               
        )
    }
}

module.exports.HomePLUS = HomePLUS;