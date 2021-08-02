import React from "react";
import Tooltip from "react-simple-tooltip";
import {Table, Row, Col} from "react-bootstrap";
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScoreIcon from "@material-ui/icons/Score";
import {Link} from "react-router-dom";
import {Determinator, MultiLang} from "react-multi-language";

/**
 * Return a table with the standard stats of the game for a team
 * @param {*} props 
 */
const TableGames = (props) => {
    let tables = [];

    if (props.isFEB)
        tables = FEBTableGames(props.dataGame);
    else
        tables = FIBATableGames(props.dataGame);

    return tables;
};

/**
 * Return all the tables where the standard stats from a team are showed.
 * 
 * @param {*} props 
 */
const TablesCompetition = (props) =>{
    return(
        <div>
            <Row>
                <Col md = {6}>
                    <div className = "bg-info font-weight-bold text-light" style = {{fontSize: 12 + "pt", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px", paddingLeft: 5 + "px", margin: 0}}>
                        {(props.isFEB) ? "Estadisticas Generales" : "General Stats"}
                    </div>
                    <TableTeamResume 
                        tcs = {props.tcs}
                        os = {props.os}
                        lang = {(props.isFEB) ? "es" : "en"}
                    />                    
                </Col>
                <Col md = {6}>
                    <div className = "bg-info font-weight-bold text-light" style = {{fontSize: 12 + "pt", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px", paddingLeft: 5 + "px", margin: 0}}>
                        {(props.isFEB) ? "Estadisticas de Tiro" : "Shooting Stats"}
                    </div>
                    <TableShoots
                        tcs = {props.tcs}
                        lang = {(props.isFEB) ? "es" : "en"}
                    />
                </Col>
            </Row>
            <Row>
                <Col md = {6}>
                    <div className = "bg-info font-weight-bold text-light" style = {{fontSize: 12 + "pt", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px", paddingLeft: 5 + "px"}}>
                        {(props.isFEB) ? "Estadisticas de Rebote" : "Rebound Stats"}
                    </div>
                    <TableRebounds
                        tcs = {props.tcs}
                        os = {props.os}
                        lang = {(props.isFEB) ? "es" : "en"}
                    />
                </Col>
                <Col md = {6}>
                    <div className = "bg-info font-weight-bold text-light" style = {{fontSize: 12 + "pt", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px", paddingLeft: 5 + "px"}}>
                    {(props.isFEB) ? "Otras estadísticas" : "Other Stats"}
                    </div>
                    <TableOtherStats
                        tcs = {props.tcs}
                        os = {props.os}
                        lang = {(props.isFEB) ? "es" : "en"}
                    />
                </Col>
            </Row>
        </div>        
    );    
};

/**
 * Table for FIBA games
 * 
 * @param {*} games Standard Stats from games played by a team 
 */
const FEBTableGames = (games) => {   
    let tables = games.map((game, index) => {
        let url_std = (/liga-femenina-1/.test(window.location.href) ? "/liga-femenina-1" : "/liga-femenina-2") + "/partido/estadisticas-estandard/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
        let url_adv = (/liga-femenina-1/.test(window.location.href) ? "/liga-femenina-1" : "/liga-femenina-2") + "/partido/estadisticas-avanzadas/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id; 
    
        return(
            <div key = {index} style = {{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
                <Row className = "bg-info text-light font-weight-bold" style = {{fontSize: 12 + "pt", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px"}}>
                    <Col md = {2} style = {{paddingTop: 3 + "px", paddingLeft: 10 + "px"}}>{game.date_game}</Col>
                    <Col md = {4} className = "text-left" style = {{padding: 3 + "px"}}>{game.home_team}</Col>
                    <Col md = {1} className = "text-left" style = {{padding: 3 + "px"}}>{game.home_score} - {game.away_score}</Col>
                    <Col md = {4} className = "text-left" style = {{padding: 3 + "px"}}>{game.away_team}</Col>
                    <Col md = {1} className = "text-right" style = {{paddingRight: 5 + "px"}}>
                        <Tooltip content = "Ver Estadísticas Estándard"><Link to = {url_std}><AssessmentIcon style={{ fontSize: 32, color: "#FFFFFF" }} /></Link></Tooltip>
                        <Tooltip content = "Ver Estadísticas Avanzadas"><Link to = {url_adv}><ScoreIcon style={{ fontSize: 32, color: "#FFFFFF" }} /></Link></Tooltip>                
                    </Col>
                </Row>
                <Row>
                    <Table bordered = "true" hover>
                        <thead className = "bg-secondary text-center text-light" style = {{fontSize: 11 + "pt"}}>
                            <tr>
                                <th><Tooltip content = "Tiros de 2 puntos">T2P</Tooltip></th>
                                <th><Tooltip content = "Tiros de 3 puntos">T3P</Tooltip></th>
                                <th><Tooltip content = "Tiros de Campo">TC</Tooltip></th>
                                <th><Tooltip content = "Tiros libres">TL</Tooltip></th>
                                <th><Tooltip content = "Rebotes Defensivos">RD</Tooltip></th>
                                <th><Tooltip content = "Rebotes Ofensivos">RO</Tooltip></th>
                                <th><Tooltip content = "Total Rebotes">TR</Tooltip></th>
                                <th><Tooltip content = "Asistencias">AS</Tooltip></th>
                                <th><Tooltip content = "Balonres recuperados">ROB</Tooltip></th>
                                <th><Tooltip content = "Balones perdidos">PERD</Tooltip></th>
                                <th><Tooltip content = "Tapones">TAP</Tooltip></th>
                                <th><Tooltip content = "Faltas Cometidas">FC</Tooltip></th>
                                <th><Tooltip content = "Faltas Recibidas">FR</Tooltip></th>
                                <th><Tooltip content = "Valoración">VAL</Tooltip></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style = {{textAlign: "center"}}>{game.t2p_conv}/{game.t2p_int} {String(game.t2p_percentage).replace(".", ",")}%</td>
                                <td style = {{textAlign: "center"}}>{game.t3p_conv}/{game.t3p_int} {String(game.t3p_percentage).replace(".", ",")}%</td>
                                <td style = {{textAlign: "center"}}>{game.tc_conv}/{game.tc_int} {String(game.tc_percentage).replace(".", ",")}%</td>
                                <td style = {{textAlign: "center"}}>{game.tl_conv}/{game.tl_int} {String(game.tl_percentage).replace(".", ",")}%</td>
                                <td style = {{textAlign: "center"}}>{game.reb_def}</td>
                                <td style = {{textAlign: "center"}}>{game.reb_of}</td>
                                <td style = {{textAlign: "center"}}>{game.reb_def + game.reb_of}</td>
                                <td style = {{textAlign: "center"}}>{game.assists}</td>
                                <td style = {{textAlign: "center"}}>{game.steals}</td>
                                <td style = {{textAlign: "center"}}>{game.turnovers}</td>
                                <td style = {{textAlign: "center"}}>{game.block_shots}</td>
                                <td style = {{textAlign: "center"}}>{game.fouls_cm}</td>
                                <td style = {{textAlign: "center"}}>{game.fouls_rv}</td>
                                <td style = {{textAlign: "center"}}>{game.efficience}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    });
    return tables;
};

/**
 * Table for FIBA games
 * 
 * @param {*} games Standard Stats from games played by a team
 */
const FIBATableGames = (games) => {
    let tables = games.map((game, index) => {
        let url_std = (/women-euroleague/.test(window.location.href) ? "/women-euroleague" : "/women-eurocup") + "/game/standard-stats/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
        let url_adv = (/women-euroleague/.test(window.location.href) ? "/women-euroleague" : "/women-eurocup") + "/game/advanced-stats/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;

        return(
            <div key = {index} style = {{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
                <Row style = {{backgroundColor: "#4F5480", color: "#FFFFFF", fontSize: 12 + "pt", fontWeight: "bold", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px"}}>
                    <Col md = {2} style = {{padding: "3 0 0 2"}}>{game.date_game}</Col>
                    <Col md = {4} style = {{padding: 3 + "px", textAlign: "left"}}>{game.home_team}</Col>
                    <Col md = {1} style = {{padding: 3 + "px", textAling: "left"}}>{game.home_score} - {game.away_score}</Col>
                    <Col md = {4} style = {{padding: 3 + "px", textAlign: "left"}}>{game.away_team}</Col>
                    <Col md = {1} style = {{textAlign: "right", padding: "0 5 0 0"}}>
                        <Tooltip content = "Go to Standard Stats"><Link to = {url_std}><AssessmentIcon style={{ fontSize: 32, color: "#FFFFFF" }} /></Link></Tooltip>
                        <Tooltip content = "Go to Advanced Stats"><Link to = {url_adv}><ScoreIcon style={{ fontSize: 32, color: "#FFFFFF" }} /></Link></Tooltip>                
                    </Col>
                </Row>
                <Row>
                    <Table bordered = "true" hover>
                        <thead style = {{textAlign: "center", fontSize: 11 + "pt"}}>
                            <tr>
                                <th><Tooltip content = "2 points shooting">2P</Tooltip></th>
                                <th><Tooltip content = "3 points shooting">3P</Tooltip></th>
                                <th><Tooltip content = "Field Goal Attempt">FGA</Tooltip></th>
                                <th><Tooltip content = "Free Throws">FT</Tooltip></th>
                                <th><Tooltip content = "Defensive Rebounds">DR</Tooltip></th>
                                <th><Tooltip content = "Offensive Rebounds">OR</Tooltip></th>
                                <th><Tooltip content = "Total Rebounds">TR</Tooltip></th>
                                <th><Tooltip content = "Assists">AS</Tooltip></th>
                                <th><Tooltip content = "Steals">STL</Tooltip></th>
                                <th><Tooltip content = "Turnovers">TOV</Tooltip></th>
                                <th><Tooltip content = "Block Shots">BS</Tooltip></th>
                                <th><Tooltip content = "Commited Faults">CF</Tooltip></th>
                                <th><Tooltip content = "Received Faults">RF</Tooltip></th>
                                <th><Tooltip content = "Efficience">EFF</Tooltip></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style = {{textAlign: "center"}}>{game.t2p_conv}/{game.t2p_int} {game.t2p_percentage}%</td>
                                <td style = {{textAlign: "center"}}>{game.t3p_conv}/{game.t3p_int} {game.t3p_percentage}%</td>
                                <td style = {{textAlign: "center"}}>{game.tc_conv}/{game.tc_int} {game.tc_percentage}%</td>
                                <td style = {{textAlign: "center"}}>{game.tl_conv}/{game.tl_int} {game.tl_percentage}%</td>
                                <td style = {{textAlign: "center"}}>{game.reb_def}</td>
                                <td style = {{textAlign: "center"}}>{game.reb_of}</td>
                                <td style = {{textAlign: "center"}}>{game.reb_def + game.reb_of}</td>
                                <td style = {{textAlign: "center"}}>{game.assists}</td>
                                <td style = {{textAlign: "center"}}>{game.steals}</td>
                                <td style = {{textAlign: "center"}}>{game.turnovers}</td>
                                <td style = {{textAlign: "center"}}>{game.block_shots}</td>
                                <td style = {{textAlign: "center"}}>{game.fouls_cm}</td>
                                <td style = {{textAlign: "center"}}>{game.fouls_rv}</td>
                                <td style = {{textAlign: "center"}}>{game.efficience}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </div>
        );
    });
    return tables;
}

/**
 * Return a table with the resume of the standard statistics from a team
 * 
 * @param {*} props 
 */
const TableTeamResume = (props) => {
    return (
        <Table bordered hover striped>
            <tbody>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Victorias" : "Wins"}</td>
                    <td style = {{textAlign: "right"}}>{props.os.wins}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Derrotas" : "Losses"}</td>
                    <td style = {{textAlign: "right"}}>{props.os.loosses}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Victorias %" : "Wins %"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                                String(props.os.p_wins).replace(".", ",") + "%"
                                :
                                props.os.p_wins + "%"
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Total puntos" : "Total points"}</td>
                    <td style = {{textAlign: "right"}}>{(props.lang == "es") ? String(props.tcs.total_puntos).replace(".", ",") : props.tcs.total_puntos}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Puntos por partido" : "Points Per Game"}</td>
                    <td style = {{textAlign: "right"}}>{(props.lang == "es") ? String(props.tcs.total_puntos_pp).replace(".", ",") : props.tcs.total_puntos_pp}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Margen de puntos por partido" : "Margin per game"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                                String(props.os.margin_points).replace(".", ",")
                                :
                                props.os.margin_points
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Puntos por cada 100 posesiones" : "Points per 100 possessions"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                                String(props.os.ortg).replace(".", ",") 
                                :
                                props.os.ortg
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Puntos oponente por cada 100 posesiones" : "Opponent points per 100 possessions"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                                String(props.os.drtg).replace(".", ",") 
                                :
                                props.os.drtg
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Número de posesiones en 40 minutos" : "Possessions per 40 minutes"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                                String(props.os.pos40).replace(".", ",") 
                                :
                                props.os.pos40
                        }
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

const TableShoots = (props) => {
    return (
        <Table bordered hover>
            <tbody>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tiros de 2 puntos" : "2 points shoooting"}</td>
                    <td style = {{textAlign: "right"}}>
                        {props.tcs.t2p_conv + " / " + props.tcs.t2p_int}&nbsp;&nbsp;&nbsp;&nbsp; 
                        {(props.lang == "es") ? String(props.tcs.t2p_percentage).replace(".", ",") + "%" : props.tcs.t2p_percentage + "%"}
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tiros de 3 puntos" : "3 points shooting"}</td>
                    <td style = {{textAlign: "right"}}>
                        {props.tcs.t3p_conv + " / " + props.tcs.t3p_int}&nbsp;&nbsp;&nbsp;&nbsp;
                        {(props.lang == "es") ? String(props.tcs.t3p_percentage).replace(".", ",") + "%" : props.tcs.t3p_percentage + "%"}
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tiros Libres" : "Free Throws"}</td>
                    <td style = {{textAlign: "right"}}>
                        {props.tcs.tl_conv + " / " + props.tcs.tl_int}&nbsp;&nbsp;&nbsp;&nbsp;
                        {(props.lang == "es") ? String(props.tcs.tl_percentage).replace(".", ",") + "%" : props.tcs.tl_percentage + "%"}
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tiros de 2 puntos por partido" : "2 points shoots per game"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>{
                        (props.lang == "es") ? 
                            String(props.tcs.t2p_conv_pp).replace(".", ",") + " / " + String(props.tcs.t2p_int_pp).replace(".", ",") +  
                            " ".repeat(4) + String(props.tcs.t2p_percentage).replace(".", ",") + "%"
                            : 
                            props.tcs.t2p_conv_pp + " / " + props.tcs.t2p_int_pp + " ".repeat(4) + props.tcs.t2p_percentage + "%"
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tiros de 3 puntos por partido" : "3 points shoots per game"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>{
                        (props.lang == "es") ?
                            String(props.tcs.t3p_conv_pp).replace(".", ",") + " / " + String(props.tcs.t3p_int_pp).replace(".", ",") + 
                            " ".repeat(4) + String(props.tcs.t3p_percentage).replace(".", ",") + "%"
                            : 
                            props.tcs.t3p_conv_pp + " / " + props.tcs.t3p_int_pp + " ".repeat(4) + props.tcs.t3p_percentage + "%"
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tiros libres por partido" : "Free trows per game"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>{
                        (props.lang == "es") ? 
                            String(props.tcs.tl_conv_pp).replace(".", ",") + " / " + String(props.tcs.tl_int_pp).replace(".", ",") + 
                            " ".repeat(4) + String(props.tcs.tl_percentage).replace(".", ",") + "%"
                            : 
                            props.tcs.tl_conv_pp + " / " + props.tcs.tl_int_pp + " ".repeat(4) + props.tcs.tl_percentage + "%"
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "% de puntos desde T2P" : "% points from 2P"}</td>
                    <td style = {{textAlign: "right"}}>{(props.lang == "es") ? String((props.tcs.t2p_conv*2/props.tcs.total_puntos*100).toFixed(2)).replace(".", ",") + "%" : (props.tcs.t2p_conv*2/props.tcs.total_puntos*100).toFixed(2) + "%"}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "% de puntos desde T3P" : "% points from 3P"}</td>
                    <td style = {{textAlign: "right"}}>{(props.lang == "es") ? String((props.tcs.t3p_conv*3/props.tcs.total_puntos*100).toFixed(2)).replace(".", ",") + "%" : (props.tcs.t3p_conv*3/props.tcs.total_puntos*100).toFixed(2) + "%"}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "% de puntos desde TL" : "% points from FT"}</td>
                    <td style = {{textAlign: "right"}}>{
                            (props.lang == "es") ? 
                                String((100 - (props.tcs.t2p_conv*2/props.tcs.total_puntos*100).toFixed(2) - (props.tcs.t3p_conv*3/props.tcs.total_puntos*100).toFixed(2)).toFixed(2)).replace(".", ",") + "%"
                            :
                            (100 - (props.tcs.t2p_conv*2/props.tcs.total_puntos*100).toFixed(2) - (props.tcs.t3p_conv*3/props.tcs.total_puntos*100).toFixed(2)).toFixed(2) + "%"
                        } 
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

const TableRebounds = (props) => {
    return (
        <Table bordered hover>
            <tbody>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Rebotes defensivos por partido" : "Defensive rebounds per game"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.reb_def/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            props.tcs.reb_def/props.tcs.games
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Porcentaje de rebotes defensivos" : "Percentage defensive rebounds"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String(props.os.p_reb_def).replace(".", ",") + "%"
                            :
                            props.os.p_reb_def + "%"
                        }
                        
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Rebotes ofensivos por partido" : "Offensive rebounds per game"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.reb_of/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            (props.tcs.reb_of/props.tcs.games).toFixed(2)
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Porcentaje de rebotes ofensivos" : "Percentage offensive rebounds"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>
                        {
                            (props.lang == "es") ?
                            String(props.os.p_reb_of).replace(".", ",") + "%"
                            :
                            props.os.p_reb_of + "%"
                        }                        
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Total rebotes" : "Total rebounds"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>{props.tcs.reb_def + props.tcs.reb_of}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Total rebotes defensivos" : "Total defensive rebounds"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>{props.tcs.reb_def}</td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Total rebotes ofensivos" : "Total offensive rebounds"}</td>
                    <td style = {{textAlign: "right"}}>{props.tcs.reb_of}</td>
                </tr>
            </tbody>
        </Table>
    )
}

const TableOtherStats = (props) => {
    return (
        <Table bordered hover>
            <tbody>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Asistencias por partido" : "Assists per game"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.assists/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            props.tcs.assists/props.tcs.games.toFixed(2)
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Pérdidas por partido" : "Turnovers per game"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.turnovers/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            props.tcs.turnovers/props.tcs.games.toFixed(2)
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Asistencias / Pérdidas" : "Assists / Turnovers"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String(props.os.assists_x_turnovers).replace(".", ",")
                            :
                            props.os.assists_x_turnovers
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Robos por partido" : "Steals per game"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.steals/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            props.tcs.steals/props.tcs.games.toFixed(2)
                        }                
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Robos / Pérdidas" : "Steals / Turnovers"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>
                        {
                            (props.lang == "es") ?
                            String(props.os.steals_x_turnovers).replace(".", ",")
                            :
                            props.os.steals_x_turnovers
                        }
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Tapones por partido" : "Block shots per game"}</td>
                    <td style = {{textAlign: "right", whiteSpace: "pre"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.block_shots/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            props.tcs.block_shots/props.tcs.games.toFixed(2)
                        }                
                    </td>
                </tr>
                <tr>
                    <td style = {{fontWeight: "bold"}}>{(props.lang == "es") ? "Faltas por partido" : "Fouls per game"}</td>
                    <td style = {{textAlign: "right"}}>
                        {
                            (props.lang == "es") ?
                            String((props.tcs.fouls_cm/props.tcs.games).toFixed(2)).replace(".", ",")
                            :
                            props.tcs.fouls_cm/props.tcs.games.toFixed(2)
                        }                                    
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

/**
 * TABLES TEAM ADVANCED STATS
 */


/**
 * Return a table with the advanced stats of a competition for a team
 * 
 * @param {*} props 
 */
const TCAdvStats = (props) =>{
    return(
        <div>
            <Row>
                <Col md = {6}>
                    <Table bordered striped hover className = "text-center">
                        <thead>
                            <tr>
                                <th colSpan = "4" className = "bg-success" style = {{fontSize: 14 + "pt"}}>
                                    {props.isFEB ? "4 Factores Ofensivos" : "4 Offensive Factors"}
                                </th>
                            </tr>
                            <tr className = "bg-secondary text-light">
                                <th>{props.isFEB ? "%eTC" : "%eFG"}</th>
                                <th>{props.isFEB ? "%Perd." : "%TOV"}</th>
                                <th>{props.isFEB ? "%Reb. Of." : "%Off. Reb."}</th>
                                <th>{props.isFEB ? "Ratio TL" : "FT Ratio"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.etc.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.etc.toFixed(2) + "%"
                                    }
                                    </td>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.p_turnovers.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.p_turnovers.toFixed(2) + "%"
                                    }
                                </td>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.p_reb_of.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.p_reb_of.toFixed(2) + "%"
                                    }
                                </td>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.ratio_ft.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.ratio_ft.toFixed(2) + "%"
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Table bordered striped hover className = "text-center">
                        <thead>
                            <tr>
                                <th colSpan = "4" className = "bg-danger" style = {{fontSize: 14 + "pt"}}>
                                    {props.isFEB ? "4 Factores Defensivos" : "4 Defensive Factors"}
                                </th>
                            </tr>
                            <tr className = "bg-secondary text-light">
                                <th>{props.isFEB ? "Rival %eTC" : "Opp. %eFG"}</th>
                                <th>{props.isFEB ? "Rival %Perd." : "Opp. %TOV"}</th>
                                <th>{props.isFEB ? "%Reb. Def." : "%Def. Reb."}</th>
                                <th>{props.isFEB ? "Rival Ratio TL" : "Opp. FT Ratio"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.rival_p_etc.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.rival_p_etc.toFixed(2) + "%"
                                    }
                                </td>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.rival_p_turnovers.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.rival_p_turnovers.toFixed(2) + "%"
                                    }
                                </td>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.p_reb_def.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.p_reb_def.toFixed(2) + "%"
                                    }
                                </td>
                                <td>
                                    {
                                        (props.isFEB) ?
                                            String(props.tas.rival_ratio_ft.toFixed(2)).replace(".", ",") + "%"
                                            :
                                            props.tas.rival_ratio_ft.toFixed(2) + "%"
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {
                        (props.isFEB) ?
                            <p>
                                <strong>Nota:</strong> Un ranking elevado en <strong>Posesiones por partido</strong> o <strong>Posesiones por minuto</strong>  
                                &nbsp;indica que el ritmo de juego del equipo es más lento que el ritmo de juego de un equipo con ranking menor.< br />
                                En <strong>DRTG</strong> un ranking elevado indica una peor defensa.
                            </p>
                        :
                            <p>
                                <strong>Note:</strong> A higher ranking in <strong>Possessions by game</strong> or <strong>Possessions by minute</strong>  
                                &nbsp;denote that the pace of the team is slower than the pace of the game of another team with a lower ranking.< br />
                                In <strong>DRTG</strong> a higher ranking means a worst defense (1: Best defense - 8: worst defense).
                            </p>    
                    }
                </Col>
                <Col md = {6}>
                    <Table bordered striped hover>
                        <thead>
                            <tr className = "bg-dark text-light" style = {{fontSize: 14 + "pt"}}>
                                <th>Estadísticas</th>
                                <th className = "text-center">{props.isFEB ? "Valor" : "Value"}</th>
                                <th className = "text-center">Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Posesiones por partido" : "Possessions by game"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String((props.tas.possessions/props.tas.games).toFixed(2)).replace(".", ",")
                                        :
                                        (props.tas.possessions/props.tas.games).toFixed(2)
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.ppg}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Posesiones por minuto" : "Possessions by minute"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.possessions_x_minute).replace(".", ",")
                                        :
                                        props.tas.possessions_x_minute
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.ppm}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Asistencias / Pérdidas" : "Assists / Turnovers"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.assists_x_turnovers).replace(".", ",")
                                        :
                                        props.tas.assists_x_turnovers
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.ast}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Robos / Pérdidas" : "Steals / Turnovers"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.steals_x_turnovers).replace(".", ",")
                                        :
                                        props.tas.steals_x_turnovers
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.stt}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "%TS" : "%TS"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.ts).replace(".", ",") + "%"
                                        :
                                        props.tas.ts + "%"
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.ts}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Ratio Ofensivo (ORTG)" : "Offensive Rating (ORTG)"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.ortg).replace(".", ",")
                                        :
                                        props.tas.ortg
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.ortg}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Ratio Defensivo (DRTG)" : "Defesive Rating (DRTG)"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.drtg).replace(".", ",")
                                        :
                                        props.tas.drtg
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.drtg}</td>
                            </tr>
                            <tr>
                                <td className = "font-weight-bold">{props.isFEB ? "Ratio Neto (NRTG)" : "Net Rating (NRTG)"}</td>
                                <td className = "text-center">
                                    {
                                        (props.isFEB) ?
                                        String(props.tas.nrtg).replace(".", ",")
                                        :
                                        props.tas.nrtg
                                    }
                                </td>
                                <td className = "text-center">{props.rankings.nrtg}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>        
    );    
};


/**
 * Return a table with the advanced stats of the game for a team
 * 
 * @param {*} props 
 */
const TGAdvStats = (props) => {
    let games = props.dataGame;
    let gamesAS = props.gamesAdvStats;
    let tables = games.map((game, index) => {
        let url_std, url_adv;
        if (/liga-femenina-1/.test(window.location.href)){
            url_std = "/liga-femenina-1" + "/partido/estadisticas-estandard/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
            url_adv = "/liga-femenina-1" + "/partido/estadisticas-avanzadas/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
        }
        if (/liga-femenina-2/.test(window.location.href)){
            url_std = "/liga-femenina-2" + "/partido/estadisticas-estandard/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
            url_adv = "/liga-femenina-2" + "/partido/estadisticas-avanzadas/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
        }
        if (/women-euroleague/.test(window.location.href)){
            url_std = "/women-euroleague" + "/game/standard-stats/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
            url_adv = "/women-euroleague" + "/game/advanced-stats/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
        }
        if (/women-eurocup/.test(window.location.href)){
            url_std = "/women-eurocup" + "/game/standard-stats/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
            url_adv = "/women-eurocup" + "/game/advanced-stats/" + game.home_url_name + "--" + game.away_url_name + "/" + game.id;
        }
        let gas = gamesAS.find((g) => g.id_game == game.id);
        return(
            <div key = {index} style = {{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
                <Row className = "bg-info text-light font-weight-bold" style = {{fontSize: 12 + "pt", borderRadius: "0.5em 0.5em 0em 0em", paddingTop: 10 + "px", paddingBottom: 10 + "px"}}>
                    <Col md = {2} style = {{paddingTop: 3 + "px", paddingLeft: 10 + "px"}}>{game.date_game}</Col>
                    <Col md = {4} className = "text-left" style = {{padding: 3 + "px"}}>{game.home_team}</Col>
                    <Col md = {1} className = "text-left" style = {{padding: 3 + "px"}}>{game.home_score} - {game.away_score}</Col>
                    <Col md = {4} className = "text-left" style = {{padding: 3 + "px"}}>{game.away_team}</Col>
                    <Col md = {1} className = "text-right" style = {{paddingRight: 5 + "px"}}>
                        <Tooltip content = "Ver Estadísticas Estándard"><Link to = {url_std}><AssessmentIcon style={{ fontSize: 32, color: "#FFFFFF" }} /></Link></Tooltip>
                        <Tooltip content = "Ver Estadísticas Avanzadas"><Link to = {url_adv}><ScoreIcon style={{ fontSize: 32, color: "#FFFFFF" }} /></Link></Tooltip>                
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} style = {{padding: 0}}>
                        <Table bordered striped hover className = "text-center">
                            <thead>
                                <tr>
                                    <th colSpan = "4" className = "bg-success" style = {{fontSize: 14 + "pt"}}>
                                        {props.isFEB ? "4 Factores Ofensivos" : "4 Offensive Factors"}
                                    </th>
                                    <th colSpan = "4" className = "bg-danger" style = {{fontSize: 14 + "pt"}}>
                                        {props.isFEB ? "4 Factores Defensivos" : "4 Defensive Factors"}
                                    </th>
                                    <th colSpan = "8" className = "text-center" style = {{fontSize: 14 + "pt"}}>{props.isFEB ? "Otras Estadísticas" : "Other Stats"}</th>
                                </tr>
                                <tr className = "bg-secondary text-light" style = {{fontSize: 11 + "pt"}}>
                                    <th>{props.isFEB ? "%eTC" : "%eFG"}</th>
                                    <th>{props.isFEB ? "%Perd." : "%TOV"}</th>
                                    <th>{props.isFEB ? "%Reb. Of." : "%Off. Reb."}</th>
                                    <th>{props.isFEB ? "Ratio\nTL" : "FT\nRatio"}</th>
                                    <th>{props.isFEB ? "Rival\n%eTC" : "Opp.\n%eFG"}</th>
                                    <th>{props.isFEB ? "Rival\n%Perd." : "Opp.\n%TOV"}</th>
                                    <th>{props.isFEB ? "%Reb.\nDef." : "%Def.\nReb."}</th>
                                    <th>{props.isFEB ? "Rival\nRatio TL" : "Opp.\nFT Ratio"}</th>
                                    <th>{props.isFEB ? "Pos." : "Poss."}</th>
                                    <th>{props.isFEB ? "Pos./\nMin." : "Poss./\nMin."}</th>
                                    <th>{props.isFEB ? "Asist./\nPerd." : "Assists/\mTOV"}</th>
                                    <th>{props.isFEB ? "Robos/\nPerd." : "Steals/\nTOV"}</th>
                                    <th>{props.isFEB ? "TS%" : "TS%"}</th>
                                    <th>{props.isFEB ? "ORTG" : "ORTG"}</th>
                                    <th>{props.isFEB ? "DRTG" : "DRTG"}</th>
                                    <th>{props.isFEB ? "NRTG" : "NRTG"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style = {{fontSize: 11 + "pt"}}>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.etc.toFixed(2)).replace(".", ",") + "%"
                                                :
                                                gas.etc.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.p_turnovers.toFixed(2)).replace(".", ",") + "%"
                                                :                                                
                                                gas.p_turnovers.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.p_reb_of.toFixed(2)).replace(".", ",") + "%"
                                                :
                                                gas.p_reb_of.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.ratio_ft.toFixed(2)).replace(".", ",")
                                                :
                                                gas.ratio_ft.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.rival_p_etc.toFixed(2)).replace(".", ",") + "%"
                                                :
                                                gas.rival_p_etc.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.rival_p_turnovers.toFixed(2)).replace(".", ",") + "%"
                                                :
                                                gas.rival_p_turnovers.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.p_reb_def.toFixed(2)).replace(".", ",") + "%"
                                                :
                                                gas.p_reb_def.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.rival_ratio_ft.toFixed(2)).replace(".", ",")
                                                :
                                                gas.rival_ratio_ft.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(Math.ceil(gas.possessions)).replace(".", ",")
                                                :
                                                gas.possessions.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.possessions_x_minute.toFixed(2)).replace(".", ",")
                                            :
                                                gas.possessions_x_minute.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.assists_x_turnovers.toFixed(2)).replace(".", ",")
                                                :
                                                gas.assists_x_turnovers.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.steals_x_turnovers.toFixed(2)).replace(".", ",")
                                                :
                                                gas.steals_x_turnovers.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.ts.toFixed(2)).replace(".", ",") + "%"
                                                :
                                                gas.ts.toFixed(2) + "%"
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.ortg.toFixed(2)).replace(".", ",")
                                                :
                                                gas.ortg.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.drtg.toFixed(2)).replace(".", ",")
                                                :
                                                gas.drtg.toFixed(2)
                                        }
                                    </td>
                                    <td>
                                        {
                                            (props.isFEB) ?
                                                String(gas.nrtg.toFixed(2)).replace(".", ",")
                                                :
                                                gas.nrtg.toFixed(2)
                                        }
                                    </td>
                                </tr>
                            </tbody>                            
                        </Table>                    
                    </Col>
                </Row>
            </div>
        );
    });
    return tables;
};

const FourFactors = props => {
    let sstats = props.sStats;
    let home_team = props.has;
    let away_team = props.aas;
  
    return (
        <div>
            <Table bordered striped hover style={{ width: 100 + "%", marginTop: 15 + "px" }}>
                <thead>
                    <tr>
                        <th className = "text-white font-weight-bold" rowSpan="2" style={{ textAlign: "left", verticalAlign: "middle", backgroundColor: "#091E36" }}>
                        {props.lang === "es" ? "EQUIPOS" : "TEAMS"}
                        </th>
                        <th className = "bg-success text-white font-weight-bold" colSpan="4" style={{ textAlign: "center" }}>
                        {props.lang === "es"
                            ? "4 FACTORES OFENSIVOS"
                            : "4 OFFENSIVE FACTORS"}
                        </th>
                        <th className = "bg-danger text-white font-weight-bold" colSpan="4" style={{ textAlign: "center" }}>
                        {props.lang === "es"
                            ? "4 FACTORES DEFENSIVOS"
                            : "4 DEFENSIVE FACTORS"}
                        </th>
                    </tr>
                    <tr className = "bg-secondary text-white" style = {{verticalAlign: "middle"}}>
                        <th>{(props.lang == "es") ? "%eTC" : "%eFG"}</th>
                        <th>{(props.lang == "es") ? "%Pérd" : "%TOV"}</th>
                        <th>{(props.lang == "es") ? "%Reb.Of." : "%Of.Reb."}</th>
                        <th>{(props.lang == "es") ? "Ratio TL" : "Ratio FT"}</th>
                        <th>{(props.lang == "es") ? "Rival %eTC" : "%Opp. %eFG"}</th>
                        <th>{(props.lang == "es") ? "Rival %Pérd." : "Opp. %TOV"}</th>
                        <th>{(props.lang == "es") ? "%Reb.Def." : "%Def.Reb."}</th>
                        <th>{(props.lang == "es") ? "Rival Ratio TL" : "Rival Ratio FT"}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = "text-white font-weight-bold" style={{textAlign: "left", backgroundColor: "#091E36" }}>
                            {sstats.home_team}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.etc.toFixed(2)).replace(".", ",") + "%"
                            : home_team.etc.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.p_turnovers.toFixed(2)).replace(".", ",") + "%"
                            : home_team.p_turnovers.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.p_reb_of.toFixed(2)).replace(".", ",") + "%"
                            : home_team.p_reb_of.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.ratio_ft.toFixed(2)).replace(".", ",")
                            : home_team.ratio_ft.toFixed(2)}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.rival_p_etc.toFixed(2)).replace(".", ",") +
                                "%"
                            : home_team.rival_p_etc.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.rival_p_turnovers.toFixed(2)).replace(
                                ".",
                                ","
                                ) + "%"
                            : home_team.rival_p_turnovers.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.p_reb_def.toFixed(2)).replace(".", ",") + "%"
                            : home_team.p_reb_def.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(home_team.rival_ratio_ft.toFixed(2)).replace(".", ",")
                            : home_team.rival_ratio_ft.toFixed(2)}
                        </td>
                        </tr>
                        <tr>
                        <td className = "text-white font-weight-bold" style={{textAlign: "left", backgroundColor: "#091E36" }}>
                            {sstats.away_team}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.etc.toFixed(2)).replace(".", ",") + "%"
                            : away_team.etc.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.p_turnovers.toFixed(2)).replace(".", ",") +
                                "%"
                            : away_team.p_turnovers.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.p_reb_of.toFixed(2)).replace(".", ",") + "%"
                            : away_team.p_reb_of.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.ratio_ft.toFixed(2)).replace(".", ",")
                            : away_team.ratio_ft.toFixed(2)}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.rival_p_etc.toFixed(2)).replace(".", ",") +
                                "%"
                            : away_team.rival_p_etc.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.rival_p_turnovers.toFixed(2)).replace(
                                ".",
                                ","
                                ) + "%"
                            : away_team.rival_p_turnovers.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.p_reb_def.toFixed(2)).replace(".", ",") + "%"
                            : away_team.p_reb_def.toFixed(2) + "%"}
                        </td>
                        <td style = {{textAlign: "center"}}>
                            {props.lang === "es"
                            ? String(away_team.rival_ratio_ft.toFixed(2)).replace(".", ",")
                            : away_team.rival_ratio_ft.toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
  };

  const OtherAdvStats = (props) => {
    let sstats = props.sStats;
    let home_team = props.has;
    let away_team = props.aas;      
    
    return(
          <div>
              <Table bordered striped hover style = {{width: 100 + "%"}}>
                  <thead>
                      <tr className = "bg-secondary text-white font-weight-bold text-center">
                        <th style = {{textAlign: "left", backgroundColor: "#091E36"}}>{(props.lang == "es") ? "EQUIPOS" : "TEAMS"}</th>
                        <th>{(props.lang == "es") ? "Pos." : "Poss."}</th>
                        <th>{(props.lang == "es") ? "Pos./Min." : "Poss./Min"}</th>
                        <th>{(props.lang == "es") ? "As./Per." : "Ass./TOV"}</th>
                        <th>{(props.lang == "es") ? "Rob./Per." : "Steals/TOV"}</th>
                        <th>{(props.lang == "es") ? "TS%" : "TS%"}</th>
                        <th>{(props.lang == "es") ? "ORTG" : "ORTG"}</th>
                        <th>{(props.lang == "es") ? "DRTG" : "DRTG"}</th>
                        <th>{(props.lang == "es") ? "NRTG" : "DRTG"}</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className = "text-white font-weight-bold" style = {{textAlign: "left", backgroundColor: "#091E36"}}>{sstats.home_team}</td>
                          <td className = "text-center">{Math.round(home_team.possessions)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.possessions_x_minute.toFixed(2)).replace(".", ",") : home_team.possessions_x_minute.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.assists_x_turnovers.toFixed(2)).replace(".", ",") : home_team.assists_x_turnovers.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.steals_x_turnovers.toFixed(2)).replace(".", ",") : home_team.steals_x_turnovers.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.ts.toFixed(2)).replace(".", ",")  + "%": home_team.ts.toFixed(2) + "%"}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.ortg.toFixed(2)).replace(".", ",") : home_team.ortg.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.drtg.toFixed(2)).replace(".", ",") : home_team.drtg.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(home_team.nrtg.toFixed(2)).replace(".", ",") : home_team.nrtg.toFixed(2)}</td>
                      </tr>
                      <tr>
                          <td className = "text-white font-weight-bold" style = {{textAlign: "left", backgroundColor: "#091E36"}}>{sstats.away_team}</td>
                          <td className = "text-center">{Math.round(away_team.possessions)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.possessions_x_minute.toFixed(2)).replace(".", ",") : away_team.possessions_x_minute.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.assists_x_turnovers.toFixed(2)).replace(".", ",") : away_team.assists_x_turnovers.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.steals_x_turnovers.toFixed(2)).replace(".", ",") : away_team.steals_x_turnovers.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.ts.toFixed(2)).replace(".", ",") + "%": away_team.ts.toFixed(2) + "%"}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.ortg.toFixed(2)).replace(".", ",") : away_team.ortg.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.drtg.toFixed(2)).replace(".", ",") : away_team.drtg.toFixed(2)}</td>
                          <td className = "text-center">{(props.lang == "es") ? String(away_team.nrtg.toFixed(2)).replace(".", ",") : away_team.nrtg.toFixed(2)}</td>
                      </tr>
                  </tbody>
              </Table>
          </div>
      );
  }


module.exports.TableGames = TableGames;
module.exports.TablesCompetition = TablesCompetition;
module.exports.TCAdvStats = TCAdvStats;
module.exports.TGAdvStats = TGAdvStats;
module.exports.FourFactors = FourFactors;
module.exports.OtherAdvStats = OtherAdvStats;