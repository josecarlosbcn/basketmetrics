import React, {Component} from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getDataFromServer } from "../COM/Functions";
import { PLAYERS_CLUBS } from "../FEBCOM/Querys";
import { PlayerSearcher } from "../COM/Searcher/FEB/PlayerSearcher";
import { TeamSearcher } from "../COM/Searcher/FEB/TeamSearcher";
import { Loading } from "../COM/Loading";


/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */
export default class SearchLF1Content extends Component{
    constructor(){
        super();
        this.state = {
            loaded: false,
            showError: false,
            showData: false,         
            itemSelected: {}   
        };
    }

    componentDidMount(){
        //This makes to scroll up the page when we come from standard stats of advanced stats from a game played by the team
        window.scrollTo(0, 0);        
        this.getData();
    }

    async getData(){
        let player_season = await getDataFromServer(process.env.URL_FEB_API, PLAYERS_CLUBS);
        this.setState({
            player_season: player_season.data.players_clubs,
            loaded: true
        });
    }

    /**
     * Search value of text box between data received  from players and clubs. If exists then we search seasons and show data in
     * other case we show a message error and hide the information
     * 
     * @param {*} newValue 
     */
    searchItem(newValue) {
        if (newValue !== null) {
            //console.log("newValue: " + newValue);
            let item = this.state.player_season.find(item => {
                return item.name.toLowerCase() === newValue.toLowerCase();
            });
            if (typeof item !== "undefined") {
                //Ocultar mensaje de error y mostrar datos
                this.setState({
                    showError: false,
                    itemSelected: item,
                    showData: true
                });
                //console.log("Tipo: " + item.type + " id: " + item.id + " name: " + item.name);
            } else {
                //Mostrar mensaje de error
                this.setState({
                    showError: true,
                    showData: false
                });
                console.log("Elemento NO encontrado");
            }
        }
    }
    render(){      
        return(
            (this.state.loaded) ?
                <div style = {{marginTop: 15 + 'px'}}>
                    <h2 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em',
                                fontSize: 16 + "pt", fontWeight: "bold" }}>
                        BUSCADOR
                    </h2>         
                    <div style={{ padding: 5 + "px", fontWeight: "bold", color: "yellow", backgroundColor: "red", textAlign: "left", display: this.state.showError ? "block" : "none"}}>
                        Lo sentimos, pero la jugadora o club buscados no se encuentran
                    </div>                
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={this.state.player_season.map(option => option.name)}
                        autoSelect={true}
                        onChange={(event, newValue) => {
                            this.searchItem(newValue);
                        }}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label="Introduce la jugadora o club a buscar"
                                margin="normal"
                                variant="outlined"
                                fullWidth={true}
                            />
                        )}
                    />                    
                    <div style = {{display: this.state.showData ? "block" : "none", marginTop: 10 + "px"}}>
                        <div className = "font-weight-bold text-center" 
                            style = {{backgroundColor: "#354560", color: "#FFFFFF", borderRadius: 0.5  + "em", border: "3px solid #091E36", padding: 5 + "px", fontSize: 16 + "pt"}}>
                            {this.state.itemSelected.name}
                        </div>
                        <div style = {{marginTop: 10 + "px"}}>
                            {
                                (this.state.itemSelected.type === "p") ?
                                    <PlayerSearcher
                                        language = "es"
                                        item = {this.state.itemSelected}
                                        isFEB = {true}
                                     />
                                :
                                    <TeamSearcher
                                        language = "es"
                                        item = {this.state.itemSelected}
                                        isFEB = {true} 
                                    />
                            }
                        </div>
                    </div>            
                </div>            
            :
                <Loading language = "es" />
            )
    }
}

//module.exports.SearchLF1Content = SearchLF1Content;