import React, {Component} from "react";
import {Row, Col, Table, Button, Spinner} from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import {Determinator, MultiLang} from "react-multi-language";


class GSQuarters extends Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            quarters: {},
            columns: [],
            loaded: false
        };
    }

    /**
     * We return an array with json objects which each of them makes reference to a column in a table
     * 
     * @param {*} columns   Array with json ojects 
     */
    buildColumns(columns){
        return columns.map((col, index) => {
            if (index == 0){
                let item = {    //Return style of rowNum column
                    dataField: col.dataField,
                    text: col.text,
                    hidden: true    //We hide the column with the number of row
                };
                return item;
            }
            if (index == 1){
                return {    //Return the definition of teams column and style
                    dataField: col.dataField,
                    text: col.text,
                    headerStyle: (column, colIndex) => {
                        return {
                            "backgroundColor" : '#091E36',
                            "color" : "#FFFFFF",
                            "textAlign" : "center",
                            "fontSize" : 15 + "pt",
                            "width" : 60 + "%"
                        };
                    },
                    style: {
                        "fontSize": 12 + "pt",
                        "textAlign": "left"
                    }          
                };    
            }
            return {    //Return the styles of quarters and ot
                dataField: col.dataField,
                text: col.text,
                headerStyle: (column, colIndex) => {
                    return {
                        "backgroundColor" : '#091E36',
                        "color" : "#FFFFFF",
                        "width" : 10 + "%",
                        "textAlign" : "center",
                        "fontSize" : 15 + "pt"
                    };
                },
                style: {
                    "fontSize": 12 + "pt",
                    "textAlign": "center"
                }          
            };
        });
    }
    componentDidMount(){
        this.getData();
    }

    async getData(){
        this.setState({            
            quarters: this.props.quarters,
        }, () => {
            this.setState({
                table: this.transformData()
            }, () => {
                let columns = this.setColumns();
                this.setState({
                    columns: this.buildColumns(columns),
                    loaded: true
                });
            });
            
        });
    }

    /**
     * Method where we define the columns of the table. We put in first position the key "equipo" and behind this
     * we will put all the keys which make referece to each quarter
     */
    setColumns(){
        let columns = Object.keys(this.state.table[0]).map((key) => {
            let text;
            if ((key != "equipo") && (key != "rowNum")){
                if (this.props.lang == "es"){
                    text = (key < 5) ? key + "ºC" : key-4 + "PR";
                }else{
                    if (key == "1")
                        text = "1st";
                    if (key == "2")
                        text = "2nd";
                    if (key == "3")
                        text = "3rd";
                    if (key == "4")
                        text = "4th";
                    if (int(key) > 4)
                        text = key + "OT";
                }
            }else{
                if (key == "equipo"){
                    if (this.props.lang == "es"){
                        text = "EQUIPOS";
                    }else{
                        text = "TEAMS";
                    }    
                }else{
                    text = "rowNum";
                }
            }
            return {
                dataField: key,
                text: text
            };
        });
        //We extract the last item because is the name of the team
        let team = columns.pop();
        let rowNum = columns.pop();
        //We insert in the array of columns the name of the team in second position and in first position the number of row
        //We will use the number of row in the table like unique "Key"
        columns.unshift(team);
        columns.unshift(rowNum);
        // for (let i = 0; i < columns.length; i++){
        //     console.log("Columns[" + i + "]: " + columns[i].dataField + " - " + columns[i].text);
        // }
        return columns;
    }

    /**
     * Method where we transform the data to be renderized dynamically by a table react. We have to return an array
     * with two json. Each json has the name of the team and its parcials in each quarter.
     * 
     * returns [{"1" : x, "2" : y, "3" : z, "4" : w, "..." : s, "equipo" : "fooName"}, {}] in this particular order
     */
    transformData(){
        let rows = [];
        let home = {};
        let away = {};
        for (let i = 0; i < this.state.quarters.length; i++){
            if (i == 0){
                home.rowNum = 1;
                home.equipo = this.state.quarters[i].home_team;
                away.rowNum = 2;
                away.equipo = this.state.quarters[i].away_team;
            }
            let index = i + 1;
            home[index] = this.state.quarters[i].home_score;
            away[index] = this.state.quarters[i].away_score;
        }
        rows.push(home);
        rows.push(away);
        console.log("rows: " + JSON.stringify(rows));
        return rows;
    }
    
    render(){
        return(
            <div>
                {
                    (this.state.loaded) ?
                        <BootstrapTable
                            keyField = "rowNum"
                            columns = {this.state.columns}
                            data = {this.state.table}
                            noDataIndication = {(this.state.table[0][1] !== "undefined") ? "En estos momentos no hay datos que ofrecer" : "There is no data to show"} 
                            striped
                            hover
                            condensed
                        />
                   
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

module.exports.GSQuarters = GSQuarters;