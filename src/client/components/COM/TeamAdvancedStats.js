import React, {Component} from "react";
import {Row, Col, Button, Form, Spinner} from "react-bootstrap";
import {Determinator, MultiLang} from "react-multi-language";
import {PREVIA_TEAM, SEASON_DATA, SEASONS_BY_CLUB, TEAM_BY_CLUB_SEASON} from "../FEBCOM/Querys";
import {PREVIA_TEAM_EUR, SEASON_DATA_FIBA, SEASONS_BY_CLUB_FIBA, TEAM_BY_CLUB_SEASON_FIBA} from "../FIBACOM/Querys";
import { getDataFromServer } from "./Functions";
import {AdvancedStats} from "./AdvancedStats";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Loading } from "./Loading";
import "../../css/content.css";

/**
 * We have to make an export default of the class, because if we split the code with lazy, Suspense, we can get an error like this:
 * 
 * Received a promise that resolves to: undefined. Promise elements must resolve to a class or function
 */
export default class TeamAdvancedStats extends Component{
    constructor(){
        super();
        let expr_lf1 = /liga-femenina-1/;
        let expr_lf2 = /liga-femenina-2/;
        let expr_euroleague = /women-euroleague/;
        let expr_eurocup = /women-eurocup/;
        let isLF1 = expr_lf1.test(window.location.href);
        let isLF2 = expr_lf2.test(window.location.href);
        let isEuroleague = expr_euroleague.test(window.location.href);
        let isEurocup = expr_eurocup.test(window.location.href);        
        let id = this.getID(window.location.href);
        console.log("lf1: " + isLF1 + " lf2: " + isLF2 + " euroleague: " + isEuroleague + " eurocup: " + isEurocup);
        if (!isNaN(id)){
            this.state = {
                id: id,
                isLF1: isLF1,
                isLF2: isLF2,
                isEuroleague: isEuroleague,
                isEurocup: isEurocup,
                url_api: "",
                team: {},               
                fail: false,
                loaded: false,
                lang: "es"
            };   
        }else{
            this.state = {
                id: null,
                fail: true,
                loaded: false,
                lang: "es"
            };    
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        //console.log("Componente montado");
        this.getData();
    }

    async getData(){
        let params = [{"###param1###" : this.state.id}];
        let team = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? PREVIA_TEAM : PREVIA_TEAM_EUR, params);
        params = [{"###id###" : team.data.teamclub[0].id_season}];
        let season = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? SEASON_DATA : SEASON_DATA_FIBA, params);
        params = [{"###id_club###": team.data.teamclub[0].id_club}];
        let seasons_by_club = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? SEASONS_BY_CLUB : SEASONS_BY_CLUB_FIBA, params);
        this.setState({            
            team: team.data.teamclub[0],
            season: season.data.season_data[0],
            list_seasons: seasons_by_club.data.seasons_by_club,
            loaded: true,            
        });
    }

    /**
     * Return the id of the team to get the standard stats after get it.
     * 
     * @param {string} url 
     */
    getID(url){
        var id = null;
        if (url.length > 0){
            id = url.substring(url.lastIndexOf("/") + 1, url.length);
        }        
        return (id !== null) ? Number.parseInt(id) : id;
    }

    getURLApi(){
        if (this.state.isLF1 || this.state.isLF2)
            //return URL_FEB_API
            return process.env.URL_FEB_API;
        else
            return process.env.URL_FIBA_API;
    }

    async handleChange (event) {
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();
        let params = [
            {"###id_season###": event.target.value}, 
            {"###id_club###": this.state.team.id_club}
        ];
        let team = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? TEAM_BY_CLUB_SEASON : TEAM_BY_CLUB_SEASON_FIBA, params);
        params = [{"###id###" : event.target.value}];
        let season = await getDataFromServer(this.getURLApi(), (this.state.isLF1 || this.state.isLF2) ? SEASON_DATA : SEASON_DATA_FIBA, params);        
        this.setState({
            team: team.data.team_by_club_season[0],
            season: season.data.season_data[0]
        }, () => {
            //After the modification of the values of the state we call the method of the child load data and re-render
            this.child.doReload();
        });
    }   

    render(){
        const HeaderTeam = () =>  
            <h4 style = {{borderRadius: 0.25 + "em", textAlign: "center", color: '#FFFFFF', backgroundColor: '#091e36', padding: 0.5 + "em"}}>
                {
                    (this.state.loaded) ? 
                        this.state.team.name
                    : 
                    <Loading language = "es" />
                }
                <br />
                <div style = {{ height: 1 + "px", marginTop: 10 + "px", marginBottom: 10 + "px" , backgroundColor: "#FFFFFF" }}></div>
                {this.state.season.name} / {this.state.season.description}
            </h4>        
        const seasons_options = () => {
            let items = this.state.list_seasons.map(season => {
                return(<option key = {season.id} value = {season.id}>{season.description}</option>);
            });
            return items;       
        };            
        return(
            <div style = {{marginTop: 15 + 'px'}}>     
                {
                    (this.state.loaded) ?
                        <div>                           
                            <Row style = {{marginBottom: 10 + "px", marginTop: 10 + "px"}}>
                                <Col md = {9}>
                                    <HeaderTeam />
                                </Col>
                                <Col md = {3} style = {{textAlign: "right"}}>
                                    <Button                                                
                                        onClick = {() => history.back()}
                                        size = "lg" block
                                    >
                                        <NavigateBeforeIcon style={{ fontSize: 36, color: "#FFFFFF" }} />
                                        <span className = "negrita-13pt" style = {{paddingTop: 15 + "px"}}>
                                            {
                                                (this.state.lang == "es") ?
                                                "Volver"
                                                :
                                                "Back"
                                            }
                                        </span>
                                    </Button>        
                                    <Form.Control as="select" 
                                            id = "season"
                                            style = {{marginTop: 10 + "px"}}
                                            value = {this.state.list_seasons.description}
                                            onChange = {this.handleChange}>
                                                <option key = "0" value = "0">
                                                    {(this.state.lang == "es") ? "Selecciona una temporada ..." : "Select a season ..."}
                                                </option>
                                                {seasons_options()}
                                        </Form.Control>                                                                    
                                </Col>
                            </Row>
                            <AdvancedStats 
                                id_team = {this.state.team.id} 
                                key = {1}
                                ref = {element => {this.child = element}}
                                isFEB = {this.state.isLF1 || this.state.isLF2}
                            />
                        </div>
                    :
                        <Loading language = "es" />
                }
                <MultiLang lang = {this.state.lang} />
            </div>
        )
    }
}

//module.exports.TeamAdvancedStats = TeamAdvancedStats;