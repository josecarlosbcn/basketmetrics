import React, {Component} from "react";

export default class Aviso extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loading: false
        };
    }

    componentDidMount(){
        this.setState({
            loading: true
        });
    }

    render(){
        return(
            <div>
                <h4 style={{ borderRadius: '0.25em', textAlign: 'center', color: '#FFFFFF', backgroundColor: '#091e36', padding: '0.5em', marginTop: 15 + "px" }}>
                    AVISO
                </h4>
                <div style = {{fontSize: 14 + "pt"}}>
                    <p>Las estadísticas que se muestran en este portal son generadas a partir de la información que se recupera de las webs de la 
                    Federación Española de Baloncesto (FEB) y la Federación Internacional de Baloncesto (FIBA). No disponemos de sistemas avanzados de generación 
                    de estadísticas a partir de vídeo por ejemplo.</p>
                    
                    <p>Aunque los medios con los que contamos son limitados, intentamos dar el mejor servicio que podemos 
                    con ellos.</p>

                    <p>Cualquier duda que se tenga o comentario que se quiera realizar pueden hacérnoslo llegar a través de la cuenta de correo: basketmetrics@gmail.com.</p>

                    ¡¡¡Muchas gracias!!! 
                </div>                
            </div>
        );
    }
}

//module.exports.Aviso = Aviso;