import React from "react";
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScoreIcon from "@material-ui/icons/Score";
import {Link} from "react-router-dom";
import Tooltip from "react-simple-tooltip";

/**
 * Return a query with the keys substituted for the correct values
 * 
 * @param {String} query 
 * @param {array of jsons} params 
 */
const set_query = (query, params) => {
    //console.log("length params: " + params.length);
    let q = query;
    params.map((jsonObject) => {
        let key = Object.keys(jsonObject);
        q = q.replace(key, jsonObject[key]);
    });
    return q;
};

/**
 * Returns the data retrieved from the database
 * @param {String} url_api: URL where we ask the data to the server
 * @param {String} query: Query to execute in the server
 * @param  {any} params: Params to substitute in the query. Can be empty.
 */
const getDataFromServer = (url_api, query, params) => {
    //console.log("\nQUERY: " + query + "\n");
    let queryString = (typeof(params) == "undefined") ? query : set_query(query, params);
    //console.log("\nQUERYSTRING: " + queryString + "\n");
    var data = {
        "query": queryString,
        "variables": null
    };
    return(
        fetch(url_api, {
            method: "POST",
            headers: {
                "Accept"        :   "application/json",
                "content-type"  :   "application/json",
                //"Access-Control-Allow-Origin" : process.env.URL_DOMAIN
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            //console.log("data: " + Object.keys(data.errors));
            //console.log("id: " + data["data"]["lf1_games"][0]["home_team"]);
            return data;
        })
        .catch(err => {
            console.log("Error: " + err);
        })    
    );        
};

/**
 * Return the number of possessions by 40 minutes
 * 
 * @param {*} ppm Possessions per minute 
 */
const possessions40 = (ppm) => {
    return (ppm * 40).toFixed(2);
};

/**
 * Function which returns a json with the games won and lost of the team in a competition. Also returns the percentage of games won and
 * margin of points per game
 * 
 * @param {*} tgs   Standard statistics of games played by the team in a competition. 
 * @param {*} tcs   Accumulated standard statistics from a team in a competition.
 */
const winloose = (tgs, tcs) => {
    let id_team_club = tcs.data.team_comp_stats[0].id_team_club;

    let wins = 0, loose = 0, margin = 0;
    let p_wins;
    tgs.data.game_stats_by_team.forEach((game) => {
        if (id_team_club == game.id_team_home){
            margin = margin + game.home_score - game.away_score;
            if (game.home_score > game.away_score){
                wins += 1;
            }
            else{
                loose += 1;
            }
                
        }else{
            margin = margin + game.away_score - game.home_score;
            if (game.home_score < game.away_score)
                wins += 1;
            else
                loose += 1;
        }
    });
    p_wins = wins / (wins + loose) * 100;
    margin = (margin / (wins +  loose)).toFixed(2);
    
    //console.log("wins: " + wins + " loose: " + loose + " p_wins: " + p_wins + " margin: " + margin);

    return {
        "wins"      : wins,
        "loose"     : loose,
        "p_wins"    : p_wins.toFixed(2),
        "margin"    : margin
    };
};

const ascendentOrder = (data, field_name) => {
    let sorted = data.sort((item1, item2) => {
        return (item1[field_name] - item2[field_name]);            
    });

    return sorted;
};

const descendentOrder = (data, field_name) => {
    let sorted = data.sort((item1, item2) => {
        return (item2[field_name] - item1[field_name]);            
    });

    return sorted;
};

/**
 * Return the ranking in the advanced stats of a team.
 * 
 * @param {*} adsts Array with he advanced stats of several teams 
 * @param {*} id_name Name of the id field of a team
 * @param {*} field_name Name of the field which we can use to order our array adsts
 * @param {*} id_team_club Id of the team
 * @param {*} ascOrder True: We order the array ascendent; False: We order the array descendent
 */

const ranking = (adsts, id_name, field_name, id_team_club, ascOrder) => {
    let result;
    if (ascOrder)
        result = ascendentOrder(adsts, field_name).findIndex(item => item[id_name] == id_team_club);
    else{
        let arr = descendentOrder(adsts, field_name);
        result = arr.findIndex(item => item[id_name] == id_team_club);         
    }
    return result + 1;
};


/**
 * Returns an array with json objects where it gets the data of the totals of the team showned at the bottom of the boxscore table
 *
 * @param {*} data    
 * 
 */
const formatDataFooter = (data) => {
    let footer = {
        "id_player_team"    : "", "numero"            : "", "name"              : "", "minutes"           : 0, "points"            : 0,
        "t2p_conv"          : 0, "t2p_int"           : 0, "t2pp"              : 0, "t2p"               : 0, "t3p_conv"          : 0,
        "t3p_int"           : 0, "t3pp"              : 0, "t3p"               : 0, "tc_conv"           : 0, "tc_int"            : 0,
        "tcp"               : 0, "tcmp"              : 0, "tl_conv"           : 0, "tl_int"            : 0, "tlp"               : 0,
        "tl"                : 0, "reb_def"           : 0, "reb_of"            : 0, "assists"           : 0, "steals"            : 0,
        "to"                : 0, "bs"                : 0, "fouls_cm"          : 0, "fouls_rv"          : 0, "efficience"        : 0,
        "total_rebounds"    : 0
    };
    let bx = data.map((item) => {
        footer.minutes = item.minutes + footer.minutes;
        footer.points = item.points + footer.points;
        footer.t2p_conv = item.t2p_conv + footer.t2p_conv;
        footer.t2p_int = item.t2p_int + footer.t2p_int;
        footer.t2pp = item.t2pp + footer.t2pp;
        footer.t3p_conv = item.t3p_conv + footer.t3p_conv;
        footer.t3p_int = item.t3p_int + footer.t3p_int;
        footer.tl_conv = item.tl_conv + footer.tl_conv;
        footer.tl_int = item.tl_int + footer.tl_int;
        footer.reb_def = item.reb_def + footer.reb_def;
        footer.reb_of = item.reb_of + footer.reb_of;
        footer.total_rebounds = item.total_rebounds + footer.total_rebounds;
        footer.assists = item.assists + footer.assists;
        footer.steals = item.steals + footer.steals;
        footer.to = item.turnovers + footer.to;
        footer.bs = item.block_shots + footer.bs;
        footer.fouls_cm = item.fouls_cm + footer.fouls_cm;
        footer.fouls_rv = item.fouls_rv + footer.fouls_rv;
        footer.efficience = item.efficience + footer.efficience;
        return{
            "id_player_team"    : item.id_player_team,
            "numero"            : item.numero,
            "name"              : item.name,
            "minutes"           : item.minutes,
            "points"            : item.points,
            "t2p"               : item.t2p_conv + "/" + item.t2p_int + " " + String(item.t2pp.toFixed(2)).replace(".", ",") + "%",
            "t3p"               : item.t3p_conv + "/" + item.t3p_int + " " + String(item.t3pp.toFixed(2)).replace(".", ",") + "%",
            "tcmp"              : item.tc_conv + "/" + item.tc_int + " " + String(item.tcp.toFixed(2)).replace(".", ",") + "%",
            "tl"                : item.tl_conv + "/" + item.tl_int + " " + String(item.tlp.toFixed(2)).replace(".", ",") + "%",
            "reb_def"           : item.reb_def,
            "reb_of"            : item.reb_of,
            "total_rebounds"    : item.total_rebounds,
            "assists"           : item.assists,
            "steals"            : item.steals,
            "to"                : item.turnovers,
            "bs"                : item.block_shots,
            "fouls_cm"          : item.fouls_cm,
            "fouls_rv"          : item.fouls_rv,
            "efficience"        : item.efficience
        };
    });
    //Update data in footer
    footer.tc_conv = footer.t2p_conv + footer.t3p_conv;
    footer.tc_int = footer.t2p_int + footer.t3p_int;
    footer.tcp = String((footer.tc_conv/footer.tc_int*100).toFixed(2)).replace(".", ",");
    footer.tcmp = footer.tc_conv + "/" + footer.tc_int + " " + footer.tcp + "%";
    footer.t2pp = String((footer.t2p_conv/footer.t2p_int*100).toFixed(2)).replace(".", ",");
    footer.t2p = footer.t2p_conv + "/" + footer.t2p_int +  " " + footer.t2pp + "%";
    footer.t3pp = String((footer.t3p_conv/footer.t3p_int*100).toFixed(2)).replace(".", ",");
    footer.t3p = footer.t3p_conv + "/" + footer.t3p_int + " " + footer.t3pp + "%";
    footer.tlp = String((footer.tl_conv/footer.tl_int*100).toFixed(2)).replace(".", ",");
    footer.tl = footer.tl_conv + "/"  + footer.tl_int + " " + footer.tlp + "%";
    footer.name = "TOTAL";
    bx.push(footer);
    
    return bx;
};

/**
 * Return an array of json objects with the name of the player, his id, and the % of 2 points and 3 points compared with the total of the team
 * 
 * @param {*} data 
 */
const t3ppt2pp = (data) => {
    let sumt2p = data.reduce((acc, item) => {
        return acc + item.t2p_int;
    }, 0);

    let sumt3p = data.reduce((acc, item) => {
        return acc + item.t3p_int;
    }, 0);
    
    let result = data.map((item) => {
        return {
            "id_player_team"    : item.id_player_team,
            "name"              : item.name,
            "value_x"           : (item.t2p_int/sumt2p*100).toFixed(2),
            "value_y"           : (item.t3p_int/sumt3p*100).toFixed(2)
        };
    });

    return result;
};

/**
 * Return an array with the % of points scored by a player respect of the total points scored by the team
 * 
 * @param {*} data 
 * @param {*} total_points 
 */
const player_ppoints = (data) => {
    let total_points = data.reduce((acc, item) => {
        return acc += (item.t2p_conv * 2 + item.t3p_conv * 3 + item.tl_conv);
      }, 0);
    let result = data.map((item) => {
        let points = item.t2p_conv * 2 + item.t3p_conv * 3 + item.tl_conv;

        return {
            "id_player_team" : item.id_player_team,
            "name": item.name,
            "value_y" : (points/total_points*100).toFixed(2)
        };
    });

    return result;
};

/**
 * Returns an array with the percentages of defensive rebounds and offensive rebounds for each player
 * 
 * @param {*} data 
 */
const prdpro = (data) => {
    let total_reb_def = data.reduce((acc, item) => {
        return acc + item.reb_def;
    }, 0);

    let total_reb_of = data.reduce((acc, item) => {
        return acc + item.reb_of;
    }, 0);
    let result = data.map((item) => {
        return {
            "id_player_team" : item.id_player_team,
            "name" : item.name,
            "value_x" : (item.reb_def/total_reb_def*100).toFixed(2),    //percentage of defensive rebounds
            "value_y" : (item.reb_of/total_reb_of*100).toFixed(2)      //percentage of offensive rebounds
        };
    });

    return result;
};

/**
 * Returns the id of the url. This id can belong to a team or a player
 * 
 * @param {*} url 
 */
const getID = (url) => {
    let id = null;
    if (url.length > 0){
        id = url.substring(url.lastIndexOf("/") + 1, url.length);
    }        
    return (id !== null) ? Number.parseInt(id) : id;
};

/**
 * Returns a json with boolean variables which tell us if the url belongs to a league or another
 * 
 * @param {*} url 
 */
const getLeague = (url) => {
    const expr_lf1 = /liga-femenina-1/;
    const expr_lf2 = /liga-femenina-2/;
    const expr_euroleague = /women-euroleague/;
    const expr_eurocup = /women-eurocup/;
    let isLF1 = expr_lf1.test(url);
    let isLF2 = expr_lf2.test(url);
    let isEuroleague = expr_euroleague.test(url);
    let isEurocup = expr_eurocup.test(url);        

    return ({isLF1: isLF1, isLF2: isLF2, isEuroleague: isEuroleague, isEurocup: isEurocup});
};

const extractStats = (data, id_team) => {
    return data.find((item) => {
        if (item.id_team_club == id_team)
            return item;
    });
};

/**
 * Returns an array with json objects with data of players
 * @param {*} data 
 * @param {*} id_team 
 */
const filterPlayersByTeam = (data, id_team) => {
    let result = data.filter((item) => item.id_team_club == id_team);

    return result;
};

const formatDataForScatterPlot = (data) => {
    return data.map((item) => {
        return {
            name: item.name_player,
            value_x: item.ts,
            value_y: item.usg
        };
    });
};

/**
 * Method which format data to Table Player Advanced Stats depending of language
 *  
 * @param {*} data 
 * @param {*} lang 
 */
const formatDataPAS = (data, lang) => {
    return data.map((item) => {
        return {
            "id_player_team"    : item.id_player_team,
            "numero"            : item.numero,
            "name_player"       : item.name_player,
            "dre"               : (lang == "es") ? String(item.dre.toFixed(2)).replace(".", ",") : item.dre.toFixed(2),
            "game_score"        : (lang == "es") ? String(item.game_score.toFixed(2)).replace(".", ",") : item.game_score.toFixed(2),
            "etc"               : (lang == "es") ? String(item.etc.toFixed(2)).replace(".", ",") + "%" : item.etc.toFixed(2) + "%",
            "ts"                : (lang == "es") ? String(item.ts.toFixed(2)).replace(".", ",") + "%" : item.ts.toFixed(2) + "%",
            "usg"               : (lang == "es") ? String(item.usg.toFixed(2)).replace(".", ",") + "%" : item.usg.toFixed(2) + "%",
            "p_reb_def"         : (lang == "es") ? String(item.p_reb_def.toFixed(2)).replace(".", ",") + "%" : item.p_reb_def.toFixed(2) + "%",
            "p_reb_of"          : (lang == "es") ? String(item.p_reb_of.toFixed(2)).replace(".", ",") + "%" : item.p_reb_of.toFixed(2) + "%",
            "p_tot_reb"         : (lang == "es") ? String(item.p_tot_reb.toFixed(2)).replace(".", ",") + "%" : item.p_tot_reb.toFixed(2) + "%",
            "p_assists"        : (lang == "es") ? String(item.p_assists.toFixed(2)).replace(".", ",") + "%" : item.p_assists.toFixed(2) + "%",
            "assists_x_turnovers"   : (lang == "es") ? String(item.assists_x_turnovers.toFixed(2)).replace(".", ",") : item.assists_x_turnovers.toFixed(2),
            "assists_ratio"     : (lang == "es") ? String(item.assists_ratio.toFixed(2)).replace(".", ",") : item.assists_ratio.toFixed(2),
            "p_steals"          : (lang == "es") ? String(item.p_steals.toFixed(2)).replace(".", ",") + "%" : item.p_steals.toFixed(2) + "%",
            "ortg"              : (lang == "es") ? String(item.ortg.toFixed(2)).replace(".", ",") : item.ortg.toFixed(2),
            "drtg"              : (lang == "es") ? String(item.drtg.toFixed(2)).replace(".", ",") : item.drtg.toFixed(2),
            "nrtg"              : (lang == "es") ? String(item.nrtg.toFixed(2)).replace(".", ",") :item.nrtg.toFixed(2)
        };
    });
};

const formatDataHalfDonut = (data) => {
    let fga = 0, to = 0, fta = 0, or = 0;
    let result = {};

    for (let i = 0; i < data.length; i++){
        fga += data[i].t2p_int + data[i].t3p_int;
        to += data[i].turnovers;
        fta += data[i].tl_int;
        or += data[i].reb_of;
        result.t1p = (result.hasOwnProperty("t1p") ? result.t1p + data[i].tl_int : data[i].tl_int);
        result.t2p = (result.hasOwnProperty("t2p") ? result.t2p + data[i].t2p_int : data[i].t2p_int);
        result.t3p = (result.hasOwnProperty("t3p") ? result.t3p + data[i].t3p_int : data[i].t3p_int);
        result.turnovers = (result.hasOwnProperty("turnovers")) ? result.turnovers + data[i].turnovers : data[i].turnovers;
    }
    let posessions = 0.96 * (fga + to + 0.44*fta - or);

    return { values: result, total: Math.round(posessions)};
};

const transformDataHalfDonut = (data, total, lang) => {
    let t = data.t1p*0.44 + data.t2p + data.t3p + data.turnovers;
    //data.t1p = ((data.t1p*0.44)/t * 100).toFixed(2);
    data.t2p = (data.t2p/t * 100).toFixed(2);
    data.t3p = (data.t3p/t * 100).toFixed(2);
    data.turnovers = (data.turnovers/t * 100).toFixed(2);
    //We calculate t1p like the rest to 100%. The addition of all % will be 100%
    data.t1p = parseFloat((100 - (parseFloat(data.t2p) + parseFloat(data.t3p) + parseFloat(data.turnovers)))).toFixed(2);
    
    let aux = [];
    if (lang === "es"){
        aux = [
            { label: "T1P", value: data.t1p },
            { label: "T2P", value: data.t2p },
            { label: "T3P", value: data.t3p },
            { label: "BP", value: data.turnovers }
        ];
    }else{
        aux = [
            { label: "1P", value: data.t1p },
            { label: "2P", value: data.t2p },
            { label: "3P", value: data.t3p },
            { label: "TO", value: data.turnovers }
        ];
    }

    return aux;
};

const getDataTSComparative = (data) => {
    let total_t1p_conv = 0, total_t1p_int = 0, total_t2p_conv = 0, total_t2p_int = 0, total_t3p_conv = 0, total_t3p_int = 0;

    data.forEach((item) => {
        total_t1p_conv += item.tl_conv;
        total_t1p_int += item.tl_int;
        total_t2p_conv+= item.t2p_conv;
        total_t2p_int += item.t2p_int;
        total_t3p_conv += item.t3p_conv;
        total_t3p_int += item.t3p_int;
    });

    return {
        t1p: (total_t1p_int > 0) ? (total_t1p_conv/total_t1p_int*100).toFixed(2) : 0.00,
        t2p: (total_t2p_int > 0) ? (total_t2p_conv/total_t2p_int*100).toFixed(2) : 0.00,
        t3p: (total_t3p_int > 0) ? (total_t3p_conv/total_t3p_int*100).toFixed(2) : 0.00,
    };
};

/**
 * Return an array of json objects. This array of json objects will be used to build a multibar chart graphic
 * Each json has this properties:
 *      - shoot: Literal of shoot (T1P%, T2P%, T3P%, 1P%, 2P%, 3P%)
 *      - home_team_abrev: % of shoots for home team
 *      - away_team_abrev: % of shoots for away team
 * 
 * @param {*} home_data 
 * @param {*} away_data 
 * @param {*} game_data 
 * @param {*} lang 
 */
const transformDataTSComparative = (home_data, away_data, game_data, lang) => {
    let aux = {};
    let result = [];

    for (const prop in home_data){
        let home_team_abrev = game_data.abrev_home;
        let away_team_abrev = game_data.abrev_away;
        if (prop === "t1p"){
            aux.shoot = (lang === "es") ? "T1P%" : "1P%";
            aux[home_team_abrev] = home_data.t1p;
            aux[away_team_abrev] = away_data.t1p;    
        }
        if (prop === "t2p"){
            aux.shoot = (lang === "es") ? "T2P%" : "2P%";
            aux[home_team_abrev] = home_data.t2p;
            aux[away_team_abrev] = away_data.t2p;    
        }
        if (prop === "t3p"){
            aux.shoot = (lang === "es") ? "T3P%" : "3P%";
            aux[home_team_abrev] = home_data.t3p;
            aux[away_team_abrev] = away_data.t3p;    
        }
        result.push(aux);
        aux = {};
    }
    return result;
};

/**
 * Order list of players ascendent by parameter passed
 * 
 * @param {*} list 
 * @param {*} orderParam 
 */
const sortDescendent = (list, orderParam) => {
    let orderedList = list.sort((a, b) => {
        return parseFloat(b[orderParam] - a[orderParam]);
    });

    return orderedList;
};

/**
 * Order list of players descent by parameter passed
 * @param {*} list 
 * @param {*} orderParam 
 */
const sortAscendent = (list, orderParam) => {
    let orderedList = list.sort((a, b) => {
        return parseFloat(a[orderParam]) - parseFloat(b[orderParam]);
    });

    return orderedList;

};

/**
 * Return the minimum of games played by a player to be in one of the two segments of players. We will make two segments of player, one of them
 * those who have played equal or more games than minimum games played and other with those players who have played less than minimum games
 * played
 * 
 * @param {*} total_games 
 */
const minimumGamesPlayed = (total_games) => {
    return  Math.trunc(total_games*0.55);
};

/**
 * Return a json with two arrays, one of them with values of param >= value and other with values of param < value
 * 
 * @param {*} list 
 * @param {*} param 
 * @param {*} value 
 */
const splitArray = (list, param, value) => {
    let listA = list.filter(item => {
        return item[param] >= value;
    });
    let listB = list.filter(item => {
        return item[param] < value;
    });

    return {listA: listA, listB: listB};
};

/**
 * Return the rank of the player for a determinated parameter and total of players  of the list.
 * 
 * @param {*} list 
 * @param {*} orderParam 
 * @param {*} value 
 */
const getRankForTeams = (list, orderParam, value) => {
    let position = list.findIndex((item) => {
        return parseInt(item[orderParam]) === parseInt(value);
    });

    return ({position: position + 1, total: list.length});
};

/**
 * Function to get the ranking for players or teams
 * 
 * @param {*} list  List of all players with their stats
 * @param {*} orderParam  Name of the param which we are ordering the array of players or teams
 * @param {*} paramID Name of the param where contains the ID of the player or team
 * @param {*} valueID Value of the id of the player or team about we want to get his rank
 */
const getRank = (list, orderParam, paramID, valueID) => {
    let position = 1;
    let counter = 0;
    let last_value = null;
    for (let item of list){
        counter += 1;
        if (item[orderParam] == "minutes"){
            console.log("id_club" + item[paramID] + " minutes: " + item[orderParam]);
        }
        if (last_value !== null){
                position = (last_value === item[orderParam]) ? position : counter;
            }
        last_value = item[orderParam];
        if (item[paramID] == valueID){
            break;
        }
    }
    return ({position: position, total: list.length});
};

/**
 * Method which help us to calculate the ranking of a player for each stats. Returns the position in the ranking and a color to write this
 * position. If the positions are between 25% best the color will be "green", if the position are between 25% worst then the color will be
 * "red" and "black" the rest of cases.
 * 
 * @param {*} lp            List of players with their stats of a whole season
 * @param {*} stats         List of stats to analyze
 * @param {*} idParam       Param we use to find the player
 * @param {*} value         Value with the id_player_team
 * @param {*} total_games   Total games played in a season to order the players
 */
const getRankings = (lp, stats, idParam, value, total_games) => {
    let dataReg = JSON.parse(JSON.stringify(lp)); //We make a copy by value of a json
    let rankings = [];
    stats.forEach(item => {
        //Regularize de data
        dataReg = dataReg.map(element => {
            //element[item.stat] = element[item.stat]*element[item.stat]/total_games;
            // if (element[item.stat] !== "ortg" && element[item.stat] !== "drtg" && element[item.stat] !== "nrtg")
            //     element[item.stat] = element[item.stat]*element.minutes/total_games;
            return element;
        });
        //We order the array
        dataReg = (item.order === "desc") ? sortDescendent(dataReg, item.stat) : sortAscendent(dataReg, item.stat); 
        let rank = getRank(dataReg, item.stat, idParam, value);
        let t25 = top25(rank.position, rank.total);
        let d25 = down25(rank.position, rank.total);
        let color = t25 ? "green" : d25 ? "red" : "black";
        rankings.push({
            "position": rank.position  + "/" + rank.total,
            "color": color 
        });
    });

    return rankings;
};

/**
 * Return rankings for a team for each stat.
 * 
 * @param {*} lt            List of stats of all the teams 
 * @param {*} stats         Stats and order that we are going to use to get the ranking
 * @param {*} idParam       Name of the param which identifies a team
 * @param {*} value         Value of idParam
 */
const getTeamRankings = (lt, stats, idParam, value) => {
    let rankings = [];
    stats.forEach(item => {
        let list = (item.order === "desc") ? sortDescendent(lt, item.stat) : sortAscendent(lt, item.stat);  
        //let rank = getRankForTeams(list, idParam, value);
        let rank = getRank(list, item.stat, idParam, value);
        let t25 = top25(rank.position, rank.total);
        let d25 = down25(rank.position, rank.total);
        let color = t25 ? "green" : d25 ? "red" : "black";
        rankings.push({
            "position": rank.position  + "/" + rank.total,
            "color": color 
        });
    });
    return rankings;    
};

/**
 * Returns true if the position is one of the best of 25%, false in otherwise
 * 
 * @param {*} position 
 * @param {*} total 
 */
const top25 = (position, total) => {
    return (position <= Math.round(total*0.25, 0) ? true : false);
};

/**
 * Returns true if the position is one of the worst of 25%, false in otherwise
 * 
 * @param {*} position 
 * @param {*} total 
 */
const down25 = (position, total) => {
    return (position > (total - Math.round((total*0.25), 0)) ? true: false);
};


const formatTableGameLog = (stats, language) => {
    let footer = {
        "id_game"           : "", "mp"               : 0, "points"            : 0, "tc_conv"           : 0, "tc_int"            : 0,
        "fg"                : 0, "fgp"               : 0, "t2p_conv"          : 0, "t2p_int"           : 0, 
        "t2pp"              : 0, "t2p"               : 0, "t3p_conv"          : 0, "t3p_int"           : 0,
        "t3pp"              : 0, "t3p"               : 0, "tcp"               : 0, "tl_conv"           : 0, "tl_int"            : 0, 
        "ftp"               : 0, "ft"                : 0, "reb_def"           : 0, "reb_of"            : 0, "assists"           : 0, 
        "steals"            : 0, "turnovers"         : 0, "block_shots"       : 0, "fouls_cm"          : 0, "efficience"        : 0,
        "tot_reb"    : 0
    };
    let tableRows = stats.map((item) => {
        footer.mp = item.mp + footer.mp;
        footer.points = item.t2p_conv*2 + item.t3p_conv*3 + item.tl_conv + footer.points;
        footer.t2p_conv = item.t2p_conv + footer.t2p_conv;
        footer.t2p_int = item.t2p_int + footer.t2p_int;
        footer.t3p_conv = item.t3p_conv + footer.t3p_conv;
        footer.t3p_int = item.t3p_int + footer.t3p_int;
        footer.tl_conv = item.tl_conv + footer.tl_conv;
        footer.tl_int = item.tl_int + footer.tl_int;
        footer.reb_def = item.reb_def + footer.reb_def;
        footer.reb_of = item.reb_of + footer.reb_of;
        footer.tot_reb = item.tot_reb + footer.tot_reb;
        footer.assists = item.assists + footer.assists;
        footer.steals = item.steals + footer.steals;
        footer.turnovers = item.turnovers + footer.turnovers;
        footer.block_shots = item.block_shots + footer.block_shots;
        footer.fouls_cm = item.fouls_cm + footer.fouls_cm;
        footer.efficience = item.efficience + footer.efficience;
        return{
            "id_game"           : item.id_game,
            "date_game"         : item.date_game,
            "mp"                : item.mp,
            "points"            : item.points,
            "fg"                : (item.t2p_conv + item.t3p_conv) + "/" + (item.t2p_int + item.t3p_int),
            "fgp"               : (language === "es") ? String(item.fgp.toFixed(2)).replace(".", ",") + "%" : item.fpg.toFixed(2) + "%",
            "t2p"               : item.t2p_conv + "/" + item.t2p_int,
            "t2pp"              : (language === "es") ? String(item.t2pp.toFixed(2)).replace(".", ",") + "%" : item.t2pp.toFixed(2) + "%",
            "t3p"               : item.t3p_conv + "/" + item.t3p_int,
            "t3pp"              : (language === "es") ? String(item.t3pp.toFixed(2)).replace(".", ",") + "%" : item.t3pp.toFixed(2) + "%",
            "ft"                : item.tl_conv + "/" + item.tl_int,
            "ftp"               : (language === "es") ? String(item.ftp.toFixed(2)).replace(".", ",") + "%" : item.ftp.toFixed(2) + "%",
            "reb_def"           : item.reb_def,
            "reb_of"            : item.reb_of,
            "tot_reb"           : item.tot_reb,
            "assists"           : item.assists,
            "steals"            : item.steals,
            "turnovers"         : item.turnovers,
            "block_shots"       : item.block_shots,
            "fouls_cm"          : item.fouls_cm,
            "efficience"        : item.efficience,
            "link_std_stats"    : item.link_std_stats,
            "link_adv_stats"    : item.link_adv_stats
        };
    });
    //Update data in footer
    footer.fg = (footer.t2p_conv + footer.t3p_conv) + "/" + (footer.t2p_int + footer.t3p_int);
    footer.fgp = (language === "es") ? String(((footer.t2p_conv + footer.t3p_conv)/(footer.t2p_int + footer.t3p_int)*100).toFixed(2)).replace(".", ",") + "%" : ((footer.t2p_conv + footer.t3p_conv)/(footer.t2p_int + footer.t3p_int)*100).toFixed(2) + "%";
    footer.t2p = footer.t2p_conv + "/" + footer.t2p_int;
    footer.t2pp = (language === "es") ? String((footer.t2p_conv/footer.t2p_int*100).toFixed(2)).replace(".", ",") + "%" : (footer.t2p_conv/footer.t2p_int*100).toFixed(2) + "%"; 
    footer.t3p = footer.t3p_conv + "/" + footer.t3p_int;
    footer.t3pp = (language === "es") ? String((footer.t3p_conv/footer.t3p_int*100).toFixed(2)).replace(".", ",") + "%" : (footer.t3p_conv/footer.t3p_int*100).toFixed(2) + "%";
    footer.ft = footer.tl_conv + "/"  + footer.tl_int;
    footer.ftp = (language === "es") ? String((footer.tl_conv/footer.tl_int*100).toFixed(2)).replace(".", ",") + "%" : (footer.tl_conv/footer.tl_int*100).toFixed(2) + "%";
    footer.date_game = "TOTAL";
    tableRows.push(footer);
    
    return tableRows;
};


/**
 * We use this funcition to remove an item from an array. This item will be the item which value associated to the key with name fieldName is equal
 * 
 * @param {*} list          Array where we are going to search the item to remove 
 * @param {*} fieldName     Name of the key what we are going to use to select which element will remove or not
 * @param {*} valueSearched Value that we are going to search to remove the item from the array
 */
const removeItem = (list, fieldName, valueSearched) => {
    let newList = [];
    list.forEach(item => {
        if (parseInt(item[fieldName]) !== parseInt(valueSearched))
            newList.push(item);
    });

    return newList;
};

/**
 * Method to add access to game standard stats and game advanced stats for each game
 * 
 * @param {*} games         Array wit all the games played
 * @param {*} language      Language can have the values: "es" or "en"
 */
const addAccessToStats = (games, isFEB) => {
    let team_game_log = games.map( game => {
        let url_std, url_adv;
        if (isFEB){
            url_std = "partido/estadisticas-estandard/" + game.home_team_url + "--" + game.away_team_url + "/" + game.id_game;
            url_adv = "partido/estadisticas-avanzadas/" + game.home_team_url + "--" + game.away_team_url + "/" + game.id_game;    
        }else{
            url_std = "game/standard-stats/" + game.home_team_url + "--" + game.away_team_url + "/" + game.id_game;
            url_adv = "game/advanced-stats/" + game.home_team_url + "--" + game.away_team_url + "/" + game.id_game;    
        }
        let text_std = "Ver Estadísticas Estándard";
        let text_adv = "Ver Estadísticas Avanzadas";   
        return {
            ...game,
            link_std_stats: <Tooltip content = {text_std}><Link to = {url_std}><AssessmentIcon style={{ fontSize: 24, color: "#FF1AFF" }} /></Link></Tooltip>,
            link_adv_stats: <Tooltip content = {text_adv}><Link to = {url_adv}><ScoreIcon style={{ fontSize: 24, color: "#FF1AFF" }} /></Link></Tooltip>
        };
    });

    return team_game_log;
};


/**
*   Add row number to data to be used later in a table like id column
 */
const addNumberRow = (data) => {
    let numberRow = -1;
    return data.map((item)=> {
        numberRow += 1;
        item.number_row = numberRow;
        return item;
    })
}

/**
 * We have to reduce all rows duplicated in one row with all the data added for a player because she has play in more than one team the same season
 * 
 * @param {*} data 
 */
const reducePlayerStats = (data) => {
    let finalResult = [];
    data.forEach((item) =>  {
        let dataRows = data.filter(item2 => parseInt(item2.id_player) === parseInt(item.id_player));
        if (dataRows.length === 1)
            finalResult.push(item);
        else{
            //We have to add all the data of each item
            let newItem = {};
            if (finalResult.findIndex((element) => element.id_player === dataRows[0].id_player) === -1){
                dataRows.forEach((item3) => {
                    let keys = Object.keys(item3);
                    keys.forEach((k)=> {
                        if ((k !== "id_player") && (k !== "id_player_team") && (k !== "name_player")){
                            if (typeof newItem[k] !== "undefined"){
                                newItem[k] == newItem[k] + item3[k];
                            }else{
                                newItem[k] = item3[k]
                            }
                        }else{
                            //((k === "id_player") || (k === "id_player_team") || (k === "name_player"))
                            newItem[k] = item3[k];
                        }
                    })
                })
                finalResult.push(newItem);
            }else{
                //Found it in finalResult => Don't do anything
            }
        }
    });
    console.log("Voy a devolver a: " + finalResult.length);

    return finalResult;
}

/**
 * Method which let us to transform data in the way that ScatterPlot2 needs it. In array keys we've got the name of the team or player in the 
 * first position, and then in second position we've got the value_x and in third position we've got the value_y 
 * 
 * @param {*} data 
 * @param {*} keys 
 */
const formatDataScatterPlot2 = (data, keys) => {
    let df = data.map((item) => {
        return {
            name: item[keys[0]],
            value_x: (String(item[keys[1]]).includes(",")) ? parseFloat(item[keys[1]].replace(",", ".")) : parseFloat(item[keys[1]]),
            value_y: (String(item[keys[2]]).includes(",")) ? parseFloat(item[keys[2]].replace(",", ".")) : parseFloat(item[keys[2]])
        }
    });

    return df;
}

const formatDataSingleBarChart = (data, keys) => {
    let df = data.map((item) => {
        return {
            name: item[keys[0]],
            value_y: (String(item[keys[1]]).includes(",")) ? parseFloat(item[keys[1]].replace(",", ".")) : parseFloat(item[keys[1]]),
        }
    });
    return df;
}

/**
 * Returns an array of json objects with all the numbers formated in Spanish format. Spanish format changes "." in float numbers by ","
 */
const setSpanishFormat = (data) => {
    let list = data.map((item) => {
        let keys = Object.keys(item);
        keys.forEach((k) => {
            if (typeof item[k] === "number")
                item[k] = String(item[k].toFixed(2)).replace(".", ",");
        });
        return item;
    });
    
    return list;
}

/**
 * Returns an array where in each position of this array we've got another array with the teams of the same group
 */
const splitTeamsByGroups = (groups, teams_groups) => {
    let teams_by_group = [];
    groups.forEach(g => {
        let result = [];
        teams_groups.forEach(team => {
            if (parseInt(team.id_group, 10) == parseInt(g.id, 10))
                result.push(team);                 
        });
        teams_by_group.push(result);
     });    
     return teams_by_group;
}


/**
 *  Returns two arrays, one of them with the competitions filtered to show in a select. And the other, the original array with an 
 *  id_select property added in each json of the array. This id_select is the id of the select. Through this id_select we can access
 *  to all the id's of the competitions.
 */
const filterCompetitions = (comps) => {
    let data_filtered = [];
    let id_select = 0;
    comps.forEach((item, index) => {
        let find = false;
        data_filtered.forEach(element => {
            find = (element.id_league === item.id_league && element.id_season === item.id_season) ? true : false
        })
        if (!find){
            id_select += 1;
            item.id_select = id_select;
            comps[index].id_select = id_select;                    
            data_filtered.push(item);
        }else{
            comps[index].id_select = id_select;
        }
    });
    return {data_filtered, comps};
}

/**
 * Returns an string with all the competitions played by a player
 */
const getCompetitions = (comps, id_select) => {
    let result = "";
    comps.forEach(item => {
        if (item.id_select === id_select){
            if (result.length > 0)
                result += ", " + String(item.id);
            else
                result = String(item.id);
        }            
    });
    return "\"" + String(result) + "\"";
}

/**
 * Return an array of integers from a string
 * 
 * "33, 44, 45" => [33, 44, 45]
 * 
 * @param {*} str 
 */
const transformStringToArray = (str) => {
    let n = str.split(",");
    let v = n.map((item, index) => {
        if (index === 0){
            item = item.split('"')[1]
        }
            
      return parseInt(item);
    });
    return v;
}

module.exports.addAccessToStats = addAccessToStats;
module.exports.removeItem = removeItem;
module.exports.formatTableGameLog = formatTableGameLog;
module.exports.top25 = top25;
module.exports.down25 = down25;
module.exports.splitArray = splitArray;
module.exports.getRankings = getRankings;
module.exports.getTeamRankings = getTeamRankings;
module.exports.getRank = getRank;
module.exports.sortAscendent = sortAscendent;
module.exports.sortDescendent = sortDescendent;
module.exports.transformDataTSComparative = transformDataTSComparative;
module.exports.getDataTSComparative = getDataTSComparative;
module.exports.transformDataHalfDonut = transformDataHalfDonut;
module.exports.formatDataHalfDonut = formatDataHalfDonut;
module.exports.formatDataFooter = formatDataFooter;
module.exports.getDataFromServer = getDataFromServer;
module.exports.possessions40 = possessions40;
module.exports.winloose = winloose;
module.exports.ranking = ranking;
module.exports.t3ppt2pp = t3ppt2pp;
module.exports.player_ppoints = player_ppoints;
module.exports.prdpro = prdpro;
module.exports.getID = getID;
module.exports.getLeague = getLeague;
module.exports.extractStats = extractStats;
module.exports.filterPlayersByTeam = filterPlayersByTeam;
module.exports.formatDataForScatterPlot = formatDataForScatterPlot;
module.exports.formatDataPAS = formatDataPAS;
module.exports.addNumberRow = addNumberRow;
module.exports.reducePlayerStats = reducePlayerStats;
module.exports.formatDataScatterPlot2 = formatDataScatterPlot2;
module.exports.setSpanishFormat = setSpanishFormat;
module.exports.formatDataSingleBarChart = formatDataSingleBarChart;
module.exports.splitTeamsByGroups = splitTeamsByGroups;
module.exports.filterCompetitions = filterCompetitions;
module.exports.getCompetitions = getCompetitions;
module.exports.transformStringToArray = transformStringToArray;