/**
 * Columns of Next Games table
 */
const sortedNextGames = [{
    dataField: 'fecha',
    order: 'asc'
}];

const columnsNextGames = [{
    dataField: "fecha",
    text: "Fecha",
    sort: true,
    sortFunc: (a, b, order, dataField) => {
        let d1 = new Date(a.substring(6,10), a.substring(3,5), a.substring(0, 2), a.substring(11, a.indexOf(":")), a.substring(a.indexOf(":") + 1, a.length));
        let d2 = new Date(b.substring(6,10), b.substring(3,5), b.substring(0, 2), b.substring(11, b.indexOf(":")), b.substring(b.indexOf(":") + 1, b.length));
        if (order === 'asc') {
          return d1 - d2;
        }
        return d2 - d1; // desc
    },    
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17a2b8',
            "color" : "#FFFFFF",
            "width" : 14 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt"
        };
    },              
    style: {
        //"fontSize": 10 + "pt"
    }
},{
    dataField: "competicion",
    text: "Competición",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17a2b8',
            "color" : "#FFFFFF",
            "width" : 21 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt"
        };
    }                 
},{
    dataField: "partido",
    text: "Partido",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17a2b8',
            "color" : "#FFFFFF",
            "width" : 60 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt"
        };
    }                 
},{
    dataField: "enlace",
    text: "",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17a2b8',
            "width:" : 5 + "%",
            "textAlign" : "center"
        };
    }
}];

/**
 * Columns of Teams table
 */
const columnsTeams = [{
    dataField: "name",
    text: "EQUIPO",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17A2B8',
            "color" : "#FFFFFF",
            "width" : 90 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt"
        };
    },              
},{
    dataField: "stdstats",
    text: "",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17A2B8',
            "width:" : 5 + "%",
            "textAlign" : "center"
        };
    }
}, {
    dataField: "advstats",
    text: "",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor": "#17A2B8",
            width: 5 + "%",
            textAlign: "center"
        };
    }
}];

/**
 * Columns of games table
 */
const columnsGamesLF1 = [{
    dataField: "date_game",
    text: "FECHA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17a2b8',
            "color" : "#FFFFFF",
            "width" : 15 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt"
        };
    },
    style: {
        "fontSize": 12 + "pt",
        "textAlign": "center"
    }
}, {
    dataField: "game",
    text: "PARTIDO",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : "#17a2b8",
            "color" : "#FFFFFF",
            "width" : 75 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt"
        };
    },
    style : {
        "fontSize": 12 + "pt",
        "textAlign": "left"
    }
}, {
    dataField: "stdstats",
    text: "",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#17a2b8',
            "width:" : 5 + "%",
            "textAlign" : "center"
        };
    }
}, {
    dataField: "advstats",
    text: "",
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor": "#17a2b8",
            width: 5 + "%",
            textAlign: "center"
        };
    }   
}];

/**
 * Columns of Team Standard Stats for FEB games
 */
const columnsTSSFEB = [{
    dataField: "date_game",
    text: "Fecha",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor" : '#354560',
            "color" : "#FFFFFF",
            "width" : 15 + "%",
            "textAlign" : "center",
            "fontSize" : 15 + "pt",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style : {
        "fontSize": 10 + "pt",
        "textAlign": "left"
    } 
}];

const columnsFEBBoxScore = [{
    dataField: "id_player_team",
    text: "ID Player",
    hidden: true
}, {
    dataField: "numero",
    text: "Nº",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  : 10 + "pt",
        "textAlign" : "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "name",
    text: "JUGADORA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   : "#17A2B8",
            "color"             :   "#FFFFFF",
            "width"             :   27 + "%",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"    
    }
}, {
    dataField: "minutes",
    text: "MIN",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
},{
    dataField: "points",
    text: "PTOS",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style:{
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "t2p",
    text: "T2P",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  : 10 + "pt",
        "textAlign" : "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "t3p",
    text: "T3P",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  : 10 + "pt",
        "textAlign" : "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "tcmp",
    text: "TC",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "tl",
    text: "TL",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "reb_def",
    text: "RD",
    sort:false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "reb_of",
    text: "RO",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "total_rebounds",
    text: "RT",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists",
    text: "AS",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField:  "steals",
    text: "BR",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField:  "to",
    text: "BP",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "bs",
    text: "TP",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "fouls_cm",
    text: "FC",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "fouls_rv",
    text: "FR",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "efficience",
    text: "VA",
    sort: false,
    headerStyle: (columnr, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsFEBPAS = [{
    dataField: "id_player_team",
    text: "ID Player",
    hidden: true
}, {
    dataField: "numero",
    text: "Nº",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  : 10 + "pt",
        "textAlign" : "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "name_player",
    text: "JUGADORA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   : "#17A2B8",
            "color"             :   "#FFFFFF",
            "width"             :   23 + "%",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"    
    }
}, {
    dataField: "dre",
    text: "DRE",
    sort: false,
    //Function to order the colum. First we have to change "," by "." and then make the comparison.
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
},{
    dataField: "game_score",
    text: "GS",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style:{
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "etc",
    text: "eTC%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  : 10 + "pt",
        "textAlign" : "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ts",
    text: "TS%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  : 10 + "pt",
        "textAlign" : "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "usg",
    text: "USG%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "%RD",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "right",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "%RO",
    sort:false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_tot_reb",
    text: "%TR",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_assists",
    text: "%AS",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_x_turnovers",
    text: "AS/BP",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField:  "assists_ratio",
    text: "Ratio AS",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   6 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField:  "p_steals",
    text: "%BR",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ortg",
    text: "ORTG",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "drtg",
    text: "DRTG",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "nrtg",
    text: "NRTG",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    } 
}];

const columnsGAMELOGFEB = [{
    dataField: "id_game",
    text: "ID Game",
    hidden: true
}, {
    dataField: "date_game",
    text: "Fecha",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "mp",
    text: "Min.",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "points",
    text: "Ptos",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "fg",
    text: "TC",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "fgp",
    text: "TC%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p",
    text: "T2P",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2pp",
    text: "T2P%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p",
    text: "T3P",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3pp",
    text: "T3P%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "ft",
    text: "TL",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "ftp",
    text: "TL%",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   5 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def",
    text: "RD",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_of",
    text: "RO",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tot_reb",
    text: "RT",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "assists",
    text: "AS",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "turnovers",
    text: "Pérd.",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "steals",
    text: "Rob.",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "block_shots",
    text: "TAP.",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "fouls_cm",
    text: "FP",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "efficience",
    text: "Val.",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "link_std_stats",
    text: "",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "link_adv_stats",
    text: "",
    sort: false,
    headerStyle: (column, colIndex) => {
        return {
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"
        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsTTShootingFEB = [{
    dataField: "id_team_club",
    text: "ID Team Club",
    hidden: true
}, {
    dataField: "name",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv",
    text: "T2PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv_pp",
    text: "T2PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
},{
    dataField: "t2p_int",
    text: "T2PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_int_pp",
    text: "T2PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_percentage",
    text: "T2P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv",
    text: "T3PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv_pp",
    text: "T3PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int",
    text: "T3PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int_pp",
    text: "T3PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_percentage",
    text: "T3P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv",
    text: "TCC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv_pp",
    text: "TCC/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int",
    text: "TCI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int_pp",
    text: "TCI/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_percentage",
    text: "TC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv",
    text: "TLC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv_pp",
    text: "TLC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int",
    text: "TLI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int_pp",
    text: "TLI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_percentage",
    text: "TL%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos",
    text: "Ptos",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos_pp",
    text: "Ptos/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}];

const sortedTTShootingFEB = [{
    dataField: 'total_puntos_pp',
    order: 'desc'
}];

const columnsTTReboundsFEB = [{
    dataField: "id_team_club",
    text: "ID Team Club",
    hidden: true
}, {
    dataField: "name",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def",
    text: "RD",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def_pp",
    text: "RD/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "reb_of",
    text: "RO",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_of_pp",
    text: "RO/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "total_rebs",
    text: "TR",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_rebs_pp",
    text: "TR/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "RD%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "RO%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const sortedTTReboundsFEB = [{
    dataField: 'p_reb_def',
    order: 'desc'
}];

const columnsFourOffensiveFactorsFEB = [{
    dataField: "id_team_club",
    text: "ID Team Club",
    hidden: true
}, {
    dataField: "name",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "etc",
    text: "eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_turnovers",
    text: "BP%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "RO%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ratio_ft",
    text: "Ratio TL",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsFourDefensiveFactorsFEB = [{
    dataField: "id_team_club",
    text: "ID Team Club",
    hidden: true
}, {
    dataField: "name",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "rival_p_etc",
    text: "Opp. eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "rival_p_turnovers",
    text: "Opp. BP%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "RD%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "rival_ratio_ft",
    text: "Opp.Ratio TL",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsEfficienceFEB = [{
    dataField: "id_team_club",
    text: "ID Team Club",
    hidden: true
}, {
    dataField: "name",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "puntos_x_possession",
    text: "PTOS x POS.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_turnovers",
    text: "BP%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "etc",
    text: "eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ts",
    text: "TS%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ortg",
    text: "ORTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "drtg",
    text: "DRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "nrtg",
    text: "NRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const sortedEfficienceFEB = [{
    dataField: 'ortg',
    order: 'desc'
}];

const columnsOthersFEB = [{
    dataField: "id_team_club",
    text: "ID Team Club",
    hidden: true
}, {
    dataField: "name",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "pbg",
    text: "POS/Part.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "possessions_x_minute",
    text: "POS/Min",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_x_turnovers",
    text: "AS/BP",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "steals_x_turnovers",
    text: "BR/BP",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const sortedOthersFEB = [{
    dataField: 'pbg',
    order: 'desc'
}];

const columnsPTShootingFEB = [{
    dataField: "id_player",
    text: "ID Player",
    hidden: true
}, {
    dataField: "name_player",
    text: "Jugadora",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv",
    text: "T2PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv_pp",
    text: "T2PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
},{
    dataField: "t2p_int",
    text: "T2PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_int_pp",
    text: "T2PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_percentage",
    text: "T2P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv",
    text: "T3PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv_pp",
    text: "T3PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int",
    text: "T3PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int_pp",
    text: "T3PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_percentage",
    text: "T3P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv",
    text: "TCC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv_pp",
    text: "TCC/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int",
    text: "TCI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int_pp",
    text: "TCI/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_percentage",
    text: "TC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv",
    text: "TLC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv_pp",
    text: "TLC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int",
    text: "TLI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int_pp",
    text: "TLI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_percentage",
    text: "TL%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos",
    text: "Ptos",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos_pp",
    text: "Ptos/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}];

const sortedPTShootingFEB = [{
    dataField: 'total_puntos_pp',
    order: 'desc'
}];

const columnsPTReboundsFEB = [{
    dataField: "id_player_team",
    text: "ID Player",
    hidden: true
}, {
    dataField: "name_player",
    text: "Jugadora",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "rd",
    text: "RD",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def_pp",
    text: "RD/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ro",
    text: "RO",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_of_pp",
    text: "RO/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "tot_reb",
    text: "TR",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_rebs_pp",
    text: "TR/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "RD%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "RO%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const sortedPTReboundsFEB = [{
    dataField: 'tot_reb',
    order: 'desc'
}];

const columnsPEfficienceFEB = [{
    dataField: "id_player_team",
    text: "ID player in the team",
    hidden: true
}, {
    dataField: "name_player",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "pointsbyposs",
    text: "PTOS x POS.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ppa",
    text: "PTOS x INT.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "usg",
    text: "USG%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "etc",
    text: "eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ts",
    text: "TS%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ortg",
    text: "ORTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "drtg",
    text: "DRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "nrtg",
    text: "NRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const sortedPEfficienceFEB = [{
    dataField: 'usg',
    order: 'desc'
}];

const columnsPOthersFEB = [{
    dataField: "id_player_team",
    text: "ID playe of the teams",
    hidden: true
}, {
    dataField: "name_player",
    text: "Equipo",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "dre",
    text: "DRE",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "game_score",
    text: "Game Score",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_assists",
    text: "AS%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_x_turnovers",
    text: "AS/BP",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_ratio",
    text: "AS. Ratio",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_steals",
    text: "BR%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const sortedPOthersFEB = [{
    dataField: 'game_score',
    order: 'desc'
}];

const columnsTTSeasonsShootingFEB = [{
    dataField: "number_row",
    text: "Number Row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv",
    text: "T2PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv_pp",
    text: "T2PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
},{
    dataField: "t2p_int",
    text: "T2PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_int_pp",
    text: "T2PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_percentage",
    text: "T2P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv",
    text: "T3PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv_pp",
    text: "T3PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int",
    text: "T3PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int_pp",
    text: "T3PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_percentage",
    text: "T3P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv",
    text: "TCC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv_pp",
    text: "TCC/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int",
    text: "TCI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int_pp",
    text: "TCI/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_percentage",
    text: "TC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv",
    text: "TLC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv_pp",
    text: "TLC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int",
    text: "TLI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int_pp",
    text: "TLI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_percentage",
    text: "TL%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos",
    text: "Ptos",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos_pp",
    text: "Ptos/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}];

const columnsTTSeasonsReboundsFEB = [{
    dataField: "number_row",
    text: "Number row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def",
    text: "RD",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def_pp",
    text: "RD/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "reb_of",
    text: "RO",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_of_pp",
    text: "RO/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "total_rebs",
    text: "TR",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_rebs_pp",
    text: "TR/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "RD%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "RO%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsTTSeasonsFourOffensiveFactorsFEB = [{
    dataField: "number_row",
    text: "Number row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "etc",
    text: "eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_turnovers",
    text: "BP%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "RO%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ratio_ft",
    text: "Ratio TL",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsTTSeasonsFourDefensiveFactorsFEB = [{
    dataField: "number_row",
    text: "Number Row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "rival_p_etc",
    text: "Opp. eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "rival_p_turnovers",
    text: "Opp. BP%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "RD%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "rival_ratio_ft",
    text: "Opp.Ratio TL",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsTTSeasonsEfficienceFEB = [{
    dataField: "number_row",
    text: "Number Row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "puntos_x_possession",
    text: "PTOS x POS.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_turnovers",
    text: "BP%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "etc",
    text: "eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ts",
    text: "TS%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ortg",
    text: "ORTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "drtg",
    text: "DRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "nrtg",
    text: "NRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsTTSeasonsOthersFEB = [{
    dataField: "number_row",
    text: "Number row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "pbg",
    text: "POS/Part.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "possessions_x_minute",
    text: "POS/Min",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_x_turnovers",
    text: "AS/BP",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "steals_x_turnovers",
    text: "BR/BP",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];


const columnsPTSeasonsShootingFEB = [{
    dataField: "number_row",
    text: "Number Row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv",
    text: "T2PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_conv_pp",
    text: "T2PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
},{
    dataField: "t2p_int",
    text: "T2PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_int_pp",
    text: "T2PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t2p_percentage",
    text: "T2P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv",
    text: "T3PC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_conv_pp",
    text: "T3PC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int",
    text: "T3PI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_int_pp",
    text: "T3PI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "t3p_percentage",
    text: "T3P%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv",
    text: "TCC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_conv_pp",
    text: "TCC/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int",
    text: "TCI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_int_pp",
    text: "TCI/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tc_percentage",
    text: "TC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv",
    text: "TLC",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_conv_pp",
    text: "TLC/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int",
    text: "TLI",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_int_pp",
    text: "TLI/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },    
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "tl_percentage",
    text: "TL%",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos",
    text: "Ptos",
    sort: true,
    hidden: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            total += item;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_puntos_pp",
    text: "Ptos/P",
    sort: true,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}];


const columnsPTSeasonsReboundsFEB = [{
    dataField: "number_row",
    text: "Number row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "rd",
    text: "RD",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_def_pp",
    text: "RD/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ro",
    text: "RO",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "reb_of_pp",
    text: "RO/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "tot_reb",
    text: "TR",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "total_rebs_pp",
    text: "TR/P",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_def",
    text: "RD%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_reb_of",
    text: "RO%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   3 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsPTSeasonsEfficienceFEB = [{
    dataField: "number_row",
    text: "Number row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "pointsbyposs",
    text: "PTOS x POS.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ppa",
    text: "PTOS x INT.",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "usg",
    text: "USG%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "etc",
    text: "eTC%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ts",
    text: "TS%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "ortg",
    text: "ORTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "drtg",
    text: "DRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "nrtg",
    text: "NRTG",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];

const columnsPTSeasonsOthersFEB = [{
    dataField: "number_row",
    text: "Number row",
    hidden: true
}, {
    dataField: "season_name",
    text: "Temporada",
    footer: "MEDIA",
    sort: false,
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   10 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "left",
        "padding"   : 0.25 + "rem"
    }     
}, {
    dataField: "dre",
    text: "DRE",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "game_score",
    text: "Game Score",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_assists",
    text: "AS%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_x_turnovers",
    text: "AS/BP",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "assists_ratio",
    text: "AS. Ratio",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",");
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}, {
    dataField: "p_steals",
    text: "BR%",
    sort: true,
    hidden: false,
    footer: columnData => {
        let total = 0, total_teams = 0;
        columnData.forEach((item) => {
            let value = parseFloat(item.replace(",", "."));
            total += value;   
            total_teams += 1; 
        });
        total /= total_teams;
        total = String(total.toFixed(2)).replace(".", ",") + "%";
        return total;
    },
    sortFunc: (a, b, order, dataField, rowA, rowB) => {
        let fA = parseFloat(a.replace(",", "."));
        let fB = parseFloat(b.replace(",", "."));
        if (order === 'asc') {
            return fA - fB;
        }
        return fB - fA; // desc
    },
    headerStyle: (column, colIndex) => {
        return{
            "backgroundColor"   :   "#17A2B8",
            "color"             :   "#FFFFFF",
            "textAlign"         :   "center",
            "fontSize"          :   10 + "pt",
            "width"             :   4 + "%",
            "padding" : 0,
            "paddingTop" : 0.75 + "rem",
            "paddingBottom" : 0.75 + "rem"

        };
    },
    style: {
        "fontSize"  :   10 + "pt",
        "textAlign" :   "center",
        "padding"   : 0.25 + "rem"
    }
}];


module.exports.columnsGAMELOGFEB = columnsGAMELOGFEB;
module.exports.columnsFEBPAS = columnsFEBPAS;
module.exports.columnsFEBBoxScore = columnsFEBBoxScore;
module.exports.sortedNextGames = sortedNextGames;
module.exports.columnsNextGames = columnsNextGames;
module.exports.columnsTeams = columnsTeams;
module.exports.columnsGamesLF1 = columnsGamesLF1;
module.exports.columnsTSSFEB = columnsTSSFEB;
module.exports.columnsTTShootingFEB = columnsTTShootingFEB;
module.exports.sortedTTShootingFEB = sortedTTShootingFEB;
module.exports.columnsTTReboundsFEB = columnsTTReboundsFEB;
module.exports.sortedTTReboundsFEB = sortedTTReboundsFEB;
module.exports.columnsFourOffensiveFactorsFEB = columnsFourOffensiveFactorsFEB;
module.exports.columnsFourDefensiveFactorsFEB = columnsFourDefensiveFactorsFEB;
module.exports.columnsEfficienceFEB = columnsEfficienceFEB;
module.exports.sortedEfficienceFEB = sortedEfficienceFEB;
module.exports.columnsOthersFEB = columnsOthersFEB;
module.exports.sortedOthersFEB = sortedOthersFEB;
module.exports.columnsPTShootingFEB = columnsPTShootingFEB;
module.exports.sortedPTShootingFEB = sortedPTShootingFEB;
module.exports.columnsPTReboundsFEB = columnsPTReboundsFEB;
module.exports.sortedPTReboundsFEB = sortedPTReboundsFEB;
module.exports.columnsPEfficienceFEB = columnsPEfficienceFEB;
module.exports.sortedPEfficienceFEB = sortedPEfficienceFEB;
module.exports.columnsPOthersFEB = columnsPOthersFEB;
module.exports.sortedPOthersFEB = sortedPOthersFEB;
module.exports.columnsTTSeasonsShootingFEB = columnsTTSeasonsShootingFEB;
module.exports.columnsTTSeasonsReboundsFEB = columnsTTSeasonsReboundsFEB;
module.exports.columnsTTSeasonsFourOffensiveFactorsFEB = columnsTTSeasonsFourOffensiveFactorsFEB;
module.exports.columnsTTSeasonsFourDefensiveFactorsFEB = columnsTTSeasonsFourDefensiveFactorsFEB;
module.exports.columnsTTSeasonsEfficienceFEB = columnsTTSeasonsEfficienceFEB;
module.exports.columnsTTSeasonsOthersFEB = columnsTTSeasonsOthersFEB;
module.exports.columnsPTSeasonsShootingFEB = columnsPTSeasonsShootingFEB;
module.exports.columnsPTSeasonsReboundsFEB = columnsPTSeasonsReboundsFEB;
module.exports.columnsPTSeasonsEfficienceFEB = columnsPTSeasonsEfficienceFEB;
module.exports.columnsPTSeasonsOthersFEB = columnsPTSeasonsOthersFEB;
