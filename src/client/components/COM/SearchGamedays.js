import React, { Component } from "react";
import {Row, Col, Form} from "react-bootstrap";
import { getDataFromServer } from "./Functions";
import { RESULT_GAMEDAY_LF1, SEASONS, RESULT_COMPETITIONS, RESULT_LIST_GAMEDAY } from "../FEBCOM/Querys";
import { RESULT_COMPETITIONS_FIBA, RESULT_LIST_GAMEDAY_FIBA, SEASONS_FIBA, RESULT_GAMEDAY_FIBA } from "../FIBACOM/Querys";
import {Determinator, MultiLang} from "react-multi-language";

class SearchGamedays extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            lang: "es",
            option_selected: {
                season: "",
                competition: "",
                gameday: ""
            },
            descriptions: {
                season: "",
                competition: "",
                gameday: ""
            },
            showGameday: true,
            seasons: {},
            competitions: {},
            //gameday: {},
            list_gamedays: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.gameDayChange = this.gameDayChange.bind(this);
    }

    async handleChange (event) {
        /**
         * If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove
         * the synthetic event from the pool and allow references to the event to be retained by user code.
         */
        event.persist();
        console.log("target.id: " + event.target.id);
        if (event.target.id == "season"){
            let result = this.state.seasons.find( season => {
                return parseInt(season.id) === parseInt(event.target.value); 
            });
            let params = [{"###id_league###": this.props.id_league}, {"###id_season###": result.id}];
            //let competitions = await getDataFromServer(URL_FEB_API, RESULT_COMPETITIONS, params);
            let competitions = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? RESULT_COMPETITIONS : RESULT_COMPETITIONS_FIBA, params);  
            let option_selected = {...this.state.option_selected};
            option_selected.season = result.id;
            let descriptions = {...this.state.descriptions};
            descriptions.season = result.description;
            descriptions.competition = "";
            descriptions.gameday = "";          
            this.setState({
                showGameday: false,
                option_selected: option_selected,
                descriptions: descriptions,
                competitions: competitions["data"]["list_competitions"]
            });
            //console.log("options_selected: " + this.state.option_selected.season + " - " + this.state.option_selected.competition + " - " + 
            //            this.state.option_selected.gameday);
            //console.log("descriptions: " + this.state.descriptions.season + " - " + this.state.descriptions.competition + " - " +
            //            this.state.descriptions.gameday);
        };

        if (event.target.id == "competition"){
            let result = this.state.competitions.find( competition => {
                return parseInt(competition.id) === parseInt(event.target.value);
            });
            let params = [{"###id_competition###": event.target.value}];
            //let list_gamedays = await getDataFromServer(URL_FEB_API, RESULT_LIST_GAMEDAY, params);
            let list_gamedays = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? RESULT_LIST_GAMEDAY : RESULT_LIST_GAMEDAY_FIBA, params);     
            let option_selected = {...this.state.option_selected};
            option_selected.competition = result.id;
            let descriptions = {...this.state.descriptions};
            descriptions.competition = result.name;          
            this.setState({
                showGameday: true,
                option_selected: option_selected,
                descriptions: descriptions,
                list_gamedays: list_gamedays["data"]["list_game_days"]
            });
            //console.log("options_selected: " + this.state.option_selected.season + " - " + this.state.option_selected.competition + " - " + 
            //            this.state.option_selected.gameday);
            //console.log("descriptions: " + this.state.descriptions.season + " - " + this.state.descriptions.competition + " - " +
            //            this.state.descriptions.gameday);            
        }  
        this.props.changeData(this.state.descriptions, {});
    };

    gameDayChange(){
        let result = this.state.list_gamedays.find( gameday => {
            return parseInt(gameday.id_jornada) === parseInt(event.target.value);
        });
        let os = {...this.state.option_selected};
        os.gameday = result.id_jornada;
        let descriptions = {...this.state.descriptions};
        descriptions.gameday = result.num_jornada;
        this.setState({
            option_selected: os,
            descriptions: descriptions
        }, () => {
            //We pass the data here to assure that the update of the state has bee finished. setState is asynchronous!!!
            this.props.changeData(this.state.descriptions, this.state.option_selected); 
        });
    }
    
    async getData(){
        let params = [{"###id_league###": this.props.id_league}];
        let seasons = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? SEASONS : SEASONS_FIBA, params);
        let gameday = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? RESULT_GAMEDAY_LF1 : RESULT_GAMEDAY_FIBA, params);
        params = [{"###id_league###": this.props.id_league}, {"###id_season###": seasons["data"]["seasons"][0]["id"]}];
        //let competitions = await getDataFromServer(URL_FEB_API, RESULT_COMPETITIONS, params);
        let competitions = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? RESULT_COMPETITIONS : RESULT_COMPETITIONS_FIBA, params);
        params = [{"###id_competition###": gameday["data"]["last_game_day"][0]["id_competition"]}];
        //let list_gamedays = await getDataFromServer(URL_FEB_API, RESULT_LIST_GAMEDAY, params);
        let list_gamedays = await getDataFromServer((this.props.isFEB) ? process.env.URL_FEB_API : process.env.URL_FIBA_API, (this.props.isFEB) ? RESULT_LIST_GAMEDAY : RESULT_LIST_GAMEDAY_FIBA, params);
        let result = seasons["data"]["seasons"].find( season => {
            return parseInt(season.id) === parseInt(gameday["data"]["last_game_day"][0]["id_season"]);
        });
        let season_description = result.description;
        result = competitions["data"]["list_competitions"].find( competition => {
            return parseInt(competition.id) === parseInt(gameday["data"]["last_game_day"][0]["id_competition"]); 
        });
        let competition_description = result.name;
        result = list_gamedays["data"]["list_game_days"].find( gd => {
            return parseInt(gd.id_jornada) === parseInt(gameday["data"]["last_game_day"][0]["id_jornada"])
        });
        let gameday_description = result.num_jornada;
        let os = {
            season: gameday["data"]["last_game_day"][0]["id_season"],
            competition: gameday["data"]["last_game_day"][0]["id_competition"],
            gameday: gameday["data"]["last_game_day"][0]["id_jornada"]
        };
        let descriptions = {
            season: season_description,
            competition: competition_description,
            gameday: gameday_description 
        };
        this.setState({
            option_selected: os,
            descriptions: descriptions,
            seasons: seasons["data"]["seasons"],
            competitions: competitions["data"]["list_competitions"],
            //gameday: gameday,
            list_gamedays: list_gamedays["data"]["list_game_days"],
            loaded: true            
        });
        this.props.changeData(this.state.descriptions, this.state.option_selected);     
    }

    componentDidMount(){
        this.getData();
    }    

    render(){
        //let gameday = this.state.loaded ? this.state.gameday["data"]["last_game_day"][0] : [];
        const season_options = () => {
            let items = this.state.seasons.map(season => {
                return(<option key = {season.id} value = {season.id}>{season.description}</option>);
            });
            return items;       
        };
        const competition_options = () => {
            let items = this.state.competitions.map(competition => {
                return(<option key = {competition.id} value = {competition.id}>{competition.name}</option>);
            });
            return items;
        }
        const gameday_options = () => {
            let items = this.state.list_gamedays.map(gd => {
                return(<option key = {gd.id_jornada} value = {gd.id_jornada}>Jornada {gd.num_jornada}</option>);
            });
            return items;
        }        

        return(
            <div style = {{marginTop: 15 + 'px'}}>
                {
                    (this.state.loaded) ?
                        <div>
                            <Form.Row>
                                    <Col md = "4">
                                        <Form.Control as="select" 
                                            name = "season"
                                            id = "season"
                                            value = {this.state.option_selected.season}
                                            onChange = {this.handleChange}
                                        >
                                            {season_options()}
                                        </Form.Control>
                                    </Col>
                                    <Col md = "4">
                                        <Form.Control as="select" 
                                            id = "competition"
                                            value = {this.state.option_selected.competition}
                                            onChange = {this.handleChange}>
                                                <option key = "0" value = "0">
                                                    {(this.state.lang == "es") ? "Selecciona una competición ..." : "Select a competition ..."}
                                                </option>
                                                {competition_options()}
                                        </Form.Control>
                                    </Col>
                                    <Col md = "4">
                                        {
                                            this.state.showGameday ?
                                                <div>
                                                    <Form.Control as="select" 
                                                        id = "gameday"
                                                        value = {this.state.option_selected.gameday}
                                                        onChange = {this.gameDayChange}>
                                                        <option key = "0" value = "0">
                                                            {(this.state.lang == "es") ? "Selecciona una jornada ..." : "Select a gameday ..."}
                                                        </option>
                                                        {gameday_options()}
                                                    </Form.Control>
                                                </div>
                                            :
                                            null
                                        }
                                    </Col>
                            </Form.Row>
                            <MultiLang lang = {this.state.lang} />
                        </div>
                    :
                    null  //If data is not loaded -> Don't do anything!!!
                }     
            </div>
        )
    }
}

module.exports.SearchGamedays = SearchGamedays;