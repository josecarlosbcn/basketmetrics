import React, {Component} from "react";
import {Row, Col, Button, Spinner} from "react-bootstrap";
import {Determinator, MultiLang} from "react-multi-language";


class GSHeader extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            gameData: this.props.gameData,
            loaded: false
        };
    }
    componentDidMount(){
        this.setState({
            loaded: true
        });
    }
    
    render(){
        let  data = this.state.gameData;
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <div>
                            <div style = {{ borderRadius: 0.5 + "em", color: '#FFFFFF', backgroundColor: '#091e36', padding: 0.5 + "em"}}>
                                <Row>
                                    <Col md = {5} className = "text-left font-weight-bold" style = {{textTransform: "capitalize", fontSize: 14 + "pt"}}>{data.home_team}</Col>
                                    <Col md = {2} className = "bg-light text-center font-weight-bold" style = {{color: "#091E36", fontSize: 20 + "pt"}}>
                                        {data.home_score + " : " + data.away_score}
                                    </Col>
                                    <Col md = {5} className = "text-right font-weight-bold" style = {{textTransform: "capitalize", fontSize: 14 + "pt"}}>{data.away_team}</Col>
                                </Row>
                            </div>
                            <div style = {{backgroundColor: "#6C757D", color: "#FFFFFF", marginTop: 5 + "px", borderRadius: 0.5 + "em", border: '#091e36 solid 3px', padding: 0.5 + "em"}}>
                                <div>
                                    {
                                        (this.props.lang == "es") ? <strong>Lugar:</strong> : <strong>Place:</strong>
                                    }
                                     &nbsp;{data.place}
                                </div>
                                <div style = {{backgroundColor: "#091e36", height: 1 + "px", marginTop: 3 + "px", marginBottom: 3 + "px"}}></div>
                                <div>
                                    {
                                        (this.props.lang == "es") ? <strong>Fecha:</strong> : <strong>Date:</strong>
                                    }
                                     &nbsp;{String(data.date_game).split(" ")[0]} -&nbsp; 
                                     {
                                         (this.props.lang == "es") ? <strong>Hora:</strong> : <strong>Hour:</strong>
                                     }
                                     &nbsp;{String(data.date_game).split(" ")[1]}
                                </div>
                            </div>
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

module.exports.GSHeader = GSHeader;