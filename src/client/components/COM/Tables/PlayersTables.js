import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {TableLeaders} from "./TableLeaders";
import { sortDescendent, sortAscendent }  from "../Functions";
import {Loading} from "../Loading";

class PlayersTables extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            pss: {
                points_x_game: sortDescendent(this.props.pss, "total_puntos_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.total_puntos_pp).toFixed(2)).toLocaleString("es-ES")};}),
                rebounds_x_game: sortDescendent(this.props.pss, "total_rebs_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.total_rebs_pp).toFixed(2)).toLocaleString("es-ES")};}),
                assists_x_game: sortDescendent(this.props.pss, "assists_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.assists_pp).toFixed(2)).toLocaleString("es-ES")};}),
                steals_x_game: sortDescendent(this.props.pss, "steals_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.steals_pp).toFixed(2)).toLocaleString("es-ES")};}),
                blockshots_x_game: sortDescendent(this.props.pss, "block_shots_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.block_shots_pp).toFixed(2)).toLocaleString("es-ES")};}),
                turnovers_x_game: sortAscendent(this.props.pss, "turnovers_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.turnovers_pp).toFixed(2)).toLocaleString("es-ES")};}),
                tc_percentage: sortDescendent(this.props.pss, "tc_percentage").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.tc_percentage).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                tl_percentage: sortDescendent(this.props.pss, "tl_percentage").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.tl_percentage).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                t3p_percentage: sortDescendent(this.props.pss, "t3p_percentage").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.t3p_percentage).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                ppa: sortDescendent(this.props.pss, "ppa").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.ppa).toFixed(2)).toLocaleString("es-ES")};}),
            },
            pas: {
                ortg: sortDescendent(this.props.pas, "ortg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.ortg).toFixed(2)).toLocaleString("es-ES")};}),
                drtg: sortAscendent(this.props.pas, "drtg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.drtg).toFixed(2)).toLocaleString("es-ES")};}),
                nrtg: sortDescendent(this.props.pas, "nrtg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.nrtg).toFixed(2)).toLocaleString("es-ES")};}),
                game_score: sortDescendent(this.props.pas, "game_score").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.game_score).toFixed(2)).toLocaleString("es-ES")};}),
                usg: sortDescendent(this.props.pas, "usg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.usg).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                etc: sortDescendent(this.props.pas, "etc").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.etc).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                ts: sortDescendent(this.props.pas, "ts").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.ts).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                p_tot_reb: sortDescendent(this.props.pas, "p_tot_reb").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name_player, value: parseFloat(parseFloat(item.p_tot_reb).toFixed(2)).toLocaleString("es-ES") + "%"};}),
            },
            loaded: true,
        });
    }

    render(){
        return(
            (this.state.loaded) ?
                <div>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Puntos por partido"
                                data = {this.state.pss.points_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Total rebotes por partido"
                                data = {this.state.pss.rebounds_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Asistencias por partido"
                                data = {this.state.pss.assists_x_game}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Robos por partido"
                                data = {this.state.pss.steals_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tapones por partido"
                                data = {this.state.pss.blockshots_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Pérdidas por partido"
                                data = {this.state.pss.turnovers_x_game}
                            />
                        </Col>
                    </Row>                                
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tiros de Campo %"
                                data = {this.state.pss.tc_percentage}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tiros Libres %"
                                data = {this.state.pss.tl_percentage}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tiros de 3P %"
                                data = {this.state.pss.t3p_percentage}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "ORTG"
                                data = {this.state.pas.ortg}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "DRTG"
                                data = {this.state.pas.drtg}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "NRTG"
                                data = {this.state.pas.nrtg}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Game Score"
                                data = {this.state.pas.game_score}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "USG%"
                                data = {this.state.pas.usg}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Puntos por intento"
                                data = {this.state.pss.ppa}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% Tiro Efectivo (eFG%)"
                                data = {this.state.pas.etc}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% Tiro Verdadero (TS%)"
                                data = {this.state.pas.ts}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% Total de Rebotes"
                                data = {this.state.pas.p_tot_reb}
                            />
                        </Col>
                    </Row>                              
                </div>            
            :
                <Loading language = "es" />
        );
    }
}

module.exports.PlayersTables = PlayersTables;