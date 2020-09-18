import React, { Component } from "react";
import { getDataFromServer } from "../COM/Functions";
import { RESULT_GAMES_LF1 } from "../FEBCOM/Querys";
import BootstrapTable from 'react-bootstrap-table-next';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScoreIcon from "@material-ui/icons/Score";
import {Link} from "react-router-dom";
import Tooltip from "react-simple-tooltip";
import { columnsGamesLF1 }  from "../FEBCOM/column.tables";


class ResultContainerLF2 extends Component{
    constructor(props){
        super();
        this.props = props;
        /**
         * We need this variable this.semaforo to control if we have to ask data or not after the first time. The first time we ask data through
         * this.getData who is called from componentDidMount and the other times, we have to control this this.semaforo which we have in
         * componentDidUpdate
         */
        this.semaforo = false;
        this.state = {
            firstLoad: true,
            season: null,
            competition: null,
            gameday: null,
            games: []
        }
        console.log("Load of Component ResultContainerLF2");      
    }

    async getData(){
        let params = [{"###id_jornada###": this.state.gameday}];
        //let games = await getDataFromServer(URL_FEB_API, RESULT_GAMES_LF1, params);
        let games = await getDataFromServer(process.env.URL_FEB_API, RESULT_GAMES_LF1, params);
        //console.log("Total partidos: " + games["data"]["lf1_games"].length);
        this.setState({
            games: games["data"]["lf1_games"]
        });
    }

    static getDerivedStateFromProps(props, state){
        let st = state;
        //console.log("Dentro de getDerivedStateFromProps: " + Object.keys(st));
        if (props.data != null){
            //console.log("getDerivedStateFromProps: props.data.season.id: " + props.data.gameday);
            st.firstLoad = false;
            st.season = props.data.season;
            st.competition = props.data.competition;
            st.gameday = props.data.gameday;          
        }else{
            console.log("getDerivedStateFromProps: No se recibe información")
            //Don't do anything
        }          
        return st;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate semaforo: " + this.semaforo);
        if (this.semaforo){
            this.getData();
            this.semaforo = false;
        }else{
            //We update to true for get data next time
            this.semaforo = true;
        }
    }

    componentDidMount(){
        console.log("Consultamos datos!!!");
        this.getData();
        //This makes to scroll up the page when we come from standard stats of advanced stats from a game played by the team
        window.scrollTo(0, 0);
    }

    shouldComponentUpdate(){        
        //console.log("¿Se puede actualizar? " + !this.semaforo);
        return !this.state.firstLoad  && !this.semaforo ? !this.state.firstLoad : this.semaforo;
    }

    render(){
        let games = this.state.games.map( game => {
            let url_std = "partido/estadisticas-estandard/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
            let url_adv = "partido/estadisticas-avanzadas/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;            
            return {
                id_game: game.id,
                date_game: game.date_game,
                game: (game.abrev_home.length > 0 && game.abrev_away.length > 0) ? 
                        game.home_team + " (" + game.abrev_home + ") " + " - " + game.away_team + " (" + game.abrev_away + ")" +
                        " : " + game.home_score + " - " + game.away_score
                        : 
                        game.home_team + " " + game.home_score + " : " + game.away_score + " " + game.away_team,
                stdstats: <Tooltip content = "Ver Estadísticas Estándard"><Link to = {url_std}><AssessmentIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>,
                advstats: <Tooltip content = "Ver Estadísticas Avanzadas"><Link to = {url_adv}><ScoreIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>                        
            }
        })
        return(
            <div>
                {/* ID season: {(this.state.firstLoad) ? null : this.state.season}<br />
                ID competition: {(this.state.firstLoad) ? null : this.state.competition} <br />
                ID jornada: {(this.state.firstLoad) ? null : this.state.gameday}<br /> */}
                <BootstrapTable 
                    keyField='id_game'                                         
                    data={ games } 
                    columns={ columnsGamesLF1 }
                    noDataIndication = "En estos momentos no hay datos que ofrecer"
                    striped
                    hover
                    condensed                      
                />                  
            </div>
        )
    }
}

module.exports.ResultContainerLF2 = ResultContainerLF2;