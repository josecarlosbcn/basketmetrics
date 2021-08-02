import React, {Component} from "react";

export default class Contacto extends Component{
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
                    CONTACTO
                </h4>
                <div style = {{fontSize: 14 + "pt"}}>
                    En estos momentos puedes hacernos llegar cualquier comentario o consulta que tengas sobre la web o sugerencia si así lo deseas enviándonos un 
                    correo a basketmetrics@gmail.com y lo intentaremos atender lo antes posible. ¡¡¡Muchas gracias!!! 
                </div>                
            </div>
        );
    }
}

//module.exports.Contacto = Contacto;