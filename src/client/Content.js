import React, {Component} from "react";
import {WebClosed} from "./components/WebClosed";
import "./css/content.css";
//import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import {BrowserRouter as Router} from "react-router-dom";
import  ScrollToTop from "react-router-scroll-top";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MenuContainer } from "./components/MenuContainer";
import { Routes } from "./components/Routes";

class Content extends Component{
    render(){
        if (process.env.WEB_ACCESS === "true"){
            return(
                <div className = "center">
                    <Router>
                        <ScrollToTop>
                            <Header />
                            <MenuContainer />
                            <Routes />
                            <Footer />
                        </ScrollToTop>
                    </Router>
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