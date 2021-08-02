import React, {Component} from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

class WebClosed extends Component{
    render(){
        return(
            <div>
                <Header />
                <div style = {{fontSize: 14 + "pt", textAlign: "center", marginTop: 50 + "px", marginBottom: 50 + "px"}}>
                    <span>Estamos realizando labores de manteniemiento.</span><br />
                    <span>Estaremos de vuelta en unos minutos.</span><br />
                    <span>Disculpa las molestias.</span>
                    <hr style = {{marginTop: 50 + "px", marginBottom: 50 + "px", backgroundColor: "#FF21FF"}}></hr>
                    <span>We are doing maintenance work.</span><br />
                    <span>We will be back in a few minutes.</span><br />
                    <span>Sorry for the inconvenience.</span>
                </div>
                <Footer />
            </div>
        )
    }
}

module.exports.WebClosed = WebClosed;