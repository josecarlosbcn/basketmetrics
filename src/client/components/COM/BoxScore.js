/**
 * BoxScore Standard Statistics
 */
import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import {Determinator, MultiLang} from "react-multi-language";
import { formatDataFooter } from "./Functions";
import { columnsFEBBoxScore } from "../FEBCOM/column.tables";
import { Button, Spinner } from "react-bootstrap";

class BoxScore extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            gameData: {},
            home_boxscore: {},
            away_boxscore: {},
            loaded: false
        };        
    }

    componentDidMount(){
        let home_boxscore = formatDataFooter(this.props.home_boxscore.data.boxscore);
        let away_boxscore = formatDataFooter(this.props.away_boxscore.data.boxscore);
        this.setState({
            gameData: this.props.gameData,
            home_boxscore: home_boxscore,
            away_boxscore: away_boxscore,
            loaded: true
        });
    }

    render(){
        const footerHomeTeamStyle = (row, rowIndex) => {
            let style = {};
            if (rowIndex == this.state.home_boxscore.length-1) {
                style.backgroundColor = '#FFC107';
                style.fontWeight = "bold";
            }
          
            return style;
          };

        const footerAwayTeamStyle = (row, rowIndex) => {
            let style = {};
            if (rowIndex == this.state.away_boxscore.length-1){
                style.backgroundColor = "#FFC107";
                style.fontWeight = "bold";
            }
            return style;
        };
        
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px"}}>
                                {this.state.gameData.home_team + " (" + this.state.gameData.abrev_home + ")"}
                            </div>
                            <BootstrapTable
                                keyField = "id_player_team"
                                columns = {columnsFEBBoxScore}
                                data = {this.state.home_boxscore}
                                rowStyle = {footerHomeTeamStyle}
                                noDataIndication = {(this.state.home_boxscore.length == 0) ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                striped
                                hover
                                condensed
                            />
                            <div className = "bg-danger text-light font-weight-bold" style = {{padding: "10px 5px 10px 5px", fontSize: 18 + "pt", marginTop: 10 + "px"}}>
                                {this.state.gameData.away_team + " (" + this.state.gameData.abrev_away + ")"}
                            </div>
                            <BootstrapTable
                                keyField = "id_player_team"
                                columns = {columnsFEBBoxScore}
                                data = {this.state.away_boxscore}
                                rowStyle = {footerAwayTeamStyle}
                                noDataIndication = {(this.state.home_boxscore.length == 0) ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                                striped
                                hover
                                condensed
                            />
                        </div>
                    :
                        <div style = {{marginTop: 10 + "px"}}>
                            <Button variant="dark" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only">
                                    <Determinator>
                                        {{
                                            es: "Cargando datos ...",
                                            en: "Loading data ..."
                                        }}
                                    </Determinator>
                                </span>
                            </Button>{' '}
                            <Button variant="dark" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                                    <Determinator>
                                        {{
                                            es: "Cargando datos ...",
                                            en: "Loading data ..."
                                        }}
                                    </Determinator>
                            </Button>                    
                        </div>                    
                }
                <MultiLang lang = {this.state.lang} />
            </div>
        );
    }
}

module.exports.BoxScore = BoxScore;