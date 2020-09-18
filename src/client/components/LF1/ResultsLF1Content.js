import React, { Component } from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import { SearchGamedays } from "../COM/SearchGamedays";
import { ResultContainerLF1 } from "./ResultContainerLF1";
import { Loading } from "../COM/Loading";


/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */
export default class ResultsLF1Content extends Component{
    constructor(){
        super();
        this.state = {
            loaded: false,
            descriptions: {},
            option: {},
            showData: false
        }
        this.changeData = this.changeData.bind(this);
    }

    changeData(descriptions, option){    
        this.setState({
            option: option,
            descriptions: descriptions
        })
    }

    componentDidMount(){
        this.setState({
            loaded: true, 
        });
    }

    render(){  
        console.log("Renderizamos ResultsLF1Content.js");
        const Header = () => 
            <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em' }}>
                Liga Femenina ENDESA / {this.state.descriptions.season} / {this.state.descriptions.competition} / Jornada {this.state.descriptions.gameday}
            </h4>

        return(
                <div style = {{marginTop: 15 + 'px'}}>
                    {
                        (this.state.loaded) ?
                            <SearchGamedays 
                                id_league = {process.env.ID_LEAGUE_LF1}
                                changeData = {this.changeData}
                                isFEB = {true}
                            />
                        :
                        null  //If data is not loaded -> Don't do anything!!!
                    }     
                        
                    <Row style = {{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                        <Col md = {12}>
                            {                                
                                (this.state.loaded) ? 
                                    <div>
                                        <Header />
                                    </div>
                                :
                                    <Loading language = "es" />
                            }  
                        </Col>
                    </Row>      
                    <Row style = {{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                        <Col md = {12}>
                            {                                
                                (typeof this.state.option.gameday !== "undefined") ? 
                                    <div>
                                        <ResultContainerLF1 
                                            data = {this.state.option} />
                                    </div>
                                :
                                    <h5>Selecciona todas las opciones disponibles en el buscador, por favor ...</h5>                                                             
                            }  
                        </Col>
                    </Row>      
                </div> 
 
        )
    }
}

//module.exports.ResultsLF1Content = ResultsLF1Content;