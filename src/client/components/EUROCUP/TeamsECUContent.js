import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {SEASONS_FIBA, GROUPS_FIBA, TEAMS_GROUP } from "../FIBACOM/Querys";
import {columnsTeams} from "../FIBACOM/column.tables";
import BootstrapTable from 'react-bootstrap-table-next';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScoreIcon from "@material-ui/icons/Score";
import {Link} from "react-router-dom";
import "@babel/polyfill";
import Tooltip from "react-simple-tooltip";
import { getDataFromServer, splitTeamsByGroups } from "../COM/Functions";
import { Loading } from "../COM/Loading";



export default class TeamsECUContent extends Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            seasons: {},    //Seasons
        };    
    }

    async getData(){
        let params = [{"###id_league###": process.env.ID_LEAGUE_ECU}];
        let seasons = await getDataFromServer(process.env.URL_FIBA_API, SEASONS_FIBA, params);
        params = [{"###param1###": process.env.ID_LEAGUE_ECU}];
        params = [{"###id_league###" : process.env.ID_LEAGUE_ECU}, {"###id_season###" : seasons.data.seasons[0].id}];
        let groups = await getDataFromServer(process.env.URL_FIBA_API, GROUPS_FIBA, params);
        params = [{ "###id_season###" : seasons.data.seasons[0].id }];
        let teams_groups = await getDataFromServer(process.env.URL_FIBA_API, TEAMS_GROUP, params);
        let teams_grouped = splitTeamsByGroups(groups.data.groups, teams_groups.data.teams_groups);
        let result = [];
        teams_grouped.forEach(list => {
            let l = list.map(team => {
                let url_std = "equipo/estadisticas-estandard/" + team.url_name + "/" + team.id;
                let url_adv = "equipo/estadisticas-avanzadas/" + team.url_name + "/" + team.id;
                return {
                    ...team,
                    name: team.abrev.length > 0 ? team.name + " (" + team.abrev + ")" : team.name,
                    stdstats: <Tooltip content = "Ver Estadísticas Estándard"><Link to = {url_std}><AssessmentIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>,
                    advstats: <Tooltip content = "Ver Estadísticas Avanzadas"><Link to = {url_adv}><ScoreIcon style={{ fontSize: 36, color: "#FF1AFF" }} /></Link></Tooltip>
                }                
            });
            result.push(l);
        });
        teams_grouped = result;

        this.setState({
            loading: true,
            seasons: seasons,
            groups: groups.data.groups,
            teams_grouped: teams_grouped
        });
    }

    componentDidMount(){
        this.getData();
    }      

    render(){
        let season = this.state.loading ? this.state.seasons["data"]["seasons"][0]["description"] : [];
        const HeaderActualSeason = () => <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em'}}>{season}</h4>

        return(
            <div style = {{marginTop: 15 + 'px'}}>
                <Row style = {{marginTop: 10 + "px"}}>
                    <Col md = {12}>
                        {                                
                            (this.state.loading) ? 
                                <div>
                                    <HeaderActualSeason />
                                    {this.state.groups.map((item, index) => {
                                        return( 
                                            <div key = {index}>
                                                <div 
                                                    className = "text-center font-weight-bold" 
                                                    style={{ borderRadius: '0.25em', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em', fontSize: 16 + "pt", marginTop: 15 + "pt", marginBottom: 5 + "px" }}
                                                >
                                                    {item.group_name}
                                                </div>
                                                <BootstrapTable
                                                    keyField='id'                                         
                                                    data={ this.state.teams_grouped[index] } 
                                                    columns={ columnsTeams }
                                                    noDataIndication = "En estos momentos no hay datos que ofrecer"
                                                    striped
                                                    hover
                                                    condensed                      
                                                />                                                         
                                            </div>                                                                                               
                                        )
                                    })}
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

//module.exports.TeamsECUContent = TeamsECUContent;