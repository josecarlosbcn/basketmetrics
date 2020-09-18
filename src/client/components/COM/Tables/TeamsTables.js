import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import {TableLeaders} from "./TableLeaders";
import { sortDescendent, sortAscendent }  from "../Functions";
import {Loading} from "../Loading";

class TeamsTables extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentDidMount(){
        this.setState({
            tss: {
                points_x_game: sortDescendent(this.props.tss, "total_puntos_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.total_puntos_pp).toFixed(2)).toLocaleString("es-ES")};}),
                rebounds_x_game: sortDescendent(this.props.tss, "total_rebs_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.total_rebs_pp).toFixed(2)).toLocaleString("es-ES")};}),
                assists_x_game: sortDescendent(this.props.tss, "assists_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.assists_pp).toFixed(2)).toLocaleString("es-ES")};}),
                steals_x_game: sortDescendent(this.props.tss, "steals_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.steals_pp).toFixed(2)).toLocaleString("es-ES")};}),
                blockshots_x_game: sortDescendent(this.props.tss, "block_shots_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.block_shots_pp).toFixed(2)).toLocaleString("es-ES")};}),
                turnovers_x_game: sortAscendent(this.props.tss, "turnovers_pp").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.turnovers_pp).toFixed(2)).toLocaleString("es-ES")};}),
                tc_percentage: sortDescendent(this.props.tss, "tc_percentage").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.tc_percentage).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                tl_percentage: sortDescendent(this.props.tss, "tl_percentage").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.tl_percentage).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                t3p_percentage: sortDescendent(this.props.tss, "t3p_percentage").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.t3p_percentage).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                p_t2p_puntos: sortDescendent(this.props.tss, "p_t2p_puntos").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.p_t2p_puntos).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                p_t3p_puntos: sortDescendent(this.props.tss, "p_t3p_puntos").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.p_t3p_puntos).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                p_tl_puntos: sortDescendent(this.props.tss, "p_tl_puntos").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.p_tl_puntos).toFixed(2)).toLocaleString("es-ES") + "%"};}),
            },
            tas: {
                ortg: sortDescendent(this.props.tas, "ortg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.ortg).toFixed(2)).toLocaleString("es-ES")};}),
                drtg: sortAscendent(this.props.tas, "drtg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.drtg).toFixed(2)).toLocaleString("es-ES")};}),
                nrtg: sortDescendent(this.props.tas, "nrtg").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.nrtg).toFixed(2)).toLocaleString("es-ES")};}),
                etc: sortDescendent(this.props.tas, "etc").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.etc).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                ts: sortDescendent(this.props.tas, "ts").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.ts).toFixed(2)).toLocaleString("es-ES") + "%"};}),
                possessions_x_minute: sortDescendent(this.props.tas, "possessions_x_minute").slice(0, 5).map((item, index) => {return {id: index, text: (index+1) + "." + "\xa0\xa0 " + item.name, value: parseFloat(parseFloat(item.possessions_x_minute).toFixed(2)).toLocaleString("es-ES")};}),
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
                                data = {this.state.tss.points_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Total rebotes por partido"
                                data = {this.state.tss.rebounds_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Asistencias por partido"
                                data = {this.state.tss.assists_x_game}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Robos por partido"
                                data = {this.state.tss.steals_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tapones por partido"
                                data = {this.state.tss.blockshots_x_game}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Pérdidas por partido"
                                data = {this.state.tss.turnovers_x_game}
                            />
                        </Col>
                    </Row>                                
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tiros de Campo %"
                                data = {this.state.tss.tc_percentage}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tiros Libres %"
                                data = {this.state.tss.tl_percentage}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Tiros de 3P %"
                                data = {this.state.tss.t3p_percentage}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% de puntos anotados desde 2P"
                                data = {this.state.tss.p_t2p_puntos}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% de puntos anotados desde 3P"
                                data = {this.state.tss.p_t3p_puntos}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% de puntos anotados desde TL"
                                data = {this.state.tss.p_tl_puntos}
                            />
                        </Col>
                    </Row>                                
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "ORTG"
                                data = {this.state.tas.ortg}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "DRTG"
                                data = {this.state.tas.drtg}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "NRTG"
                                data = {this.state.tas.nrtg}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% de Tiro Efectivo (eFG%)"
                                data = {this.state.tas.etc}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "% de Tiro Verdadero (TS%)"
                                data = {this.state.tas.ts}
                            />
                        </Col>
                        <Col md = {4}>
                            <TableLeaders 
                                title = "Posesiones por minuto"
                                data = {this.state.tas.possessions_x_minute}
                            />
                        </Col>
                    </Row>                                
                </div>
            :
                <Loading language = "es" />
        );
    }
}

module.exports.TeamsTables = TeamsTables;