import React, {Component} from "react";
import {Menu} from "./Menu";
import {WebClosed} from "./WebClosed";
import "../css/content.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

class Content extends Component{
    render(){
        if (process.env.WEB_ACCESS === "true"){
            return(
                <div className = "center">
                    <Menu />
                </div>
            )            
        }else{
            return(
                <div className = "center">
                    <WebClosed />
                </div>    
            )
        }
    }
}

module.exports.Content = Content;