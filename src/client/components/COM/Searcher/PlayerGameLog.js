import React, {Component} from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import { columnsGAMELOGFEB } from "../../FEBCOM/column.tables";
import { formatTableGameLog } from "./../../COM/Functions";
import { Button, Spinner } from "react-bootstrap";

class PlayerGameLog extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            loaded: false
        };
    }

    componentWillMount(){
        let game_log = formatTableGameLog(this.props.data, "es");
        this.setState({
            game_log: game_log,
            loaded: true
        });
    }

    /**
     * This method is called when the component receive new props after being mounted. This is the way like father component transfer data to a son
     * component
     * 
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){
        this.props = nextProps;
        let game_log = formatTableGameLog(this.props.data, "es");
        this.setState({
            game_log: game_log,
            loaded: true
        });
    }        

    render(){
        const footerHomeTeamStyle = (row, rowIndex) => {
            let style = {};
            if (rowIndex == this.state.game_log.length-1) {
                style.backgroundColor = '#FFC107';
                style.fontWeight = "bold";
            }
          
            return style;
        };        
        return(
            (this.state.loaded) ?
                <div style = {{marginTop: 10 + "px"}}>
                    <BootstrapTable
                        keyField = "id_game"
                        columns = {columnsGAMELOGFEB}
                        data = {this.state.game_log}
                        rowStyle = {footerHomeTeamStyle}
                        noDataIndication = "En estos momentos no hay datos que ofrecer" 
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
                            Cargando datos
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
                            Cargando datos
                    </Button>                    
                </div>                    
        )
    }
}

module.exports.PlayerGameLog = PlayerGameLog;