import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";


class TableLeaders extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            loaded:false
        };
    }

    componentDidMount(){
        this.setState({
            loaded:true
        });
    }

    columnsTable(){
        return [{
            dataField: "id",
            text: "",
            hidden: true
        }, {
            dataField: "text",
            text: this.props.title,
            sort: false,
            headerStyle: (column, colIndex) => {
                return {
                    "backgroundColor" : '#17a2b8',
                    "color" : "#FFFFFF",
                    "width" : 80 + "%",
                    "textAlign" : "left",
                    "fontSize" : 14 + "pt"
                };
            },
            style: {
                "fontSize": 12 + "pt",
                "textAlign": "left"
            }
        }, {
            dataField: "value",
            text: "",
            sort: false,
            headerStyle: (column, colIndex) => {
                return {
                    "backgroundColor" : "#17a2b8",
                    "color" : "#FFFFFF",
                    "width" : 20 + "%",
                    "textAlign" : "center",
                    "fontSize" : 14 + "pt"
                };
            },
            style : {
                "fontSize": 12 + "pt",
                "textAlign": "center"
            }
        }];
    }

    render(){
       return(
           <div>
           {
                (this.state.loaded) ?
                    <BootstrapTable 
                        keyField='id'                                         
                        data={ this.props.data } 
                        columns={ this.columnsTable() }
                        noDataIndication = "En estos momentos no hay datos que ofrecer"
                        striped
                        hover
                        condensed  
                        wrapperClasses="table-responsive"                   
                    />                    
                :
                "Cargando datos"

            }
           </div>
        );
    }
}

module.exports.TableLeaders = TableLeaders;