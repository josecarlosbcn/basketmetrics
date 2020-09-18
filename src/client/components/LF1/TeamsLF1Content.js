import React, {Component} from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import {SEASONS, TEAMS_ACTUAL_SEASON } from "../FEBCOM/Querys";
import {columnsTeams} from "../FEBCOM/column.tables";
import BootstrapTable from 'react-bootstrap-table-next';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScoreIcon from "@material-ui/icons/Score";
import {Link} from "react-router-dom";
import "@babel/polyfill";
import Tooltip from "react-simple-tooltip";
import { getDataFromServer } from "../COM/Functions";
import {Loading} from "../COM/Loading";

export default class TeamsLF1Content extends Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            seasons: {},    //Seasons
            teams: {}       //Teams of actual season
        }        
    }

    async getData(){
        let params = [{"###id_league###": process.env.ID_LEAGUE_LF1}];
        let seasons = await getDataFromServer(process.env.URL_FEB_API, SEASONS, params);
        params = [{"###param1###": process.env.ID_LEAGUE_LF1}];
        let teams = await getDataFromServer(process.env.URL_FEB_API, TEAMS_ACTUAL_SEASON, params);
        this.setState({
            loading: true,
            seasons: seasons,
            teams: teams
        })
    };

    componentDidMount(){
        this.getData();
    };    

    render(){
        let teams_actual_season = this.state.loading ? this.state.teams["data"]["teams_actual_season"] : [];
        let season = this.state.loading ? this.state.seasons["data"]["seasons"][0]["description"] : [];
        const HeaderActualSeason = () => <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em' }}>{season}</h4>
        
        let teams = teams_actual_season.map(team => {
            let url_std = "equipo/estadisticas-estandard/" + team.url_name + "/" + team.id;
            let url_adv = "equipo/estadisticas-avanzadas/" + team.url_name + "/" + team.id;
            return {
                id: team.id,
                id_club: team.id_club,
                id_season:this.state.seasons["data"]["seasons"][0]["id"],
                name: team.abrev.length > 0 ? team.name + " (" + team.abrev + ")" : team.name,
                abrev: team.abrev,
                stdstats: <Tooltip content = "Ver Estadísticas Estándard"><Link to = {url_std}><AssessmentIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>,
                advstats: <Tooltip content = "Ver Estadísticas Avanzadas"><Link to = {url_adv}><ScoreIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>
            }
        });
        
        return(
            <div style = {{marginTop: 15 + 'px'}}>
                <Row style = {{marginTop: 10 + "px"}}>
                    <Col md = {12}>
                        {                                
                            (this.state.loading) ? 
                                <div>
                                    <HeaderActualSeason />
                                    <BootstrapTable 
                                        keyField='id'                                         
                                        data={ teams } 
                                        columns={ columnsTeams }
                                        noDataIndication = "En estos momentos no hay datos que ofrecer"
                                        striped
                                        hover
                                        condensed                      
                                    />                                    
                                </div>
                            :
                            <Loading language = "es" />
                        }  
                    </Col>
                </Row>        
            </div>            
        )
    }
}

//module.exports.TeamsLF1Content = TeamsLF1Content;