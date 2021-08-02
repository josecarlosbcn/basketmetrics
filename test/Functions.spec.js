import {strict as assert} from "assert";
import { ranking,  t3ppt2pp , player_ppoints, prdpro, filterPlayersByTeam, formatDataForScatterPlot, formatDataHalfDonut,
          transformDataHalfDonut, getDataTSComparative, transformDataTSComparative, getRankings, sortAscendent, sortDescendent, getRank,
          top25, down25, removeItem, splitArray, splitTeamsByGroups, filterCompetitions, getCompetitions, transformStringToArray }  
          from "../src/client/components/COM/Functions";
import { TEAMS_ADVANCED_STATS_BY_COMPETITION, GROUPS } from "../src/client/components/FEBCOM/Querys";
import config from "dotenv";
//To import environment variables
config.config();
import '@babel/polyfill'; 
import fetch from "node-fetch";

const URL_FEB_API = "http://localhost:4000/api/feb/graphiql";

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
              "Access-Control-Allow-Origin" : process.env.URL_DOMAIN
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


describe("Test from functions of Functions.js file", () =>{
    it("Should return array ordered", () => {
        let data = [
          {
            "id_team_club": "769",
            "games": 20,
            "etc": 44.82,
            "possessions": 1383.92,
            "possessions_x_minute": 1.73,
            "assists_x_turnovers": 0.86,
            "steals_x_turnovers": 0.59,
            "ts": 47.78,
            "ortg": 93.79,
            "drtg": 83.03,
            "nrtg": 10.76
          },
          {
            "id_team_club": "770",
            "games": 20,
            "possessions": 1379.64,
            "possessions_x_minute": 1.72,
            "assists_x_turnovers": 1.38,
            "steals_x_turnovers": 0.99,
            "ts": 54.54,
            "ortg": 108.58,
            "drtg": 92.05,
            "nrtg": 16.53
          },
          {
            "id_team_club": "771",
            "games": 20,
            "possessions": 1377.09,
            "possessions_x_minute": 1.7,
            "assists_x_turnovers": 0.98,
            "steals_x_turnovers": 0.49,
            "ts": 46.04,
            "ortg": 87.72,
            "drtg": 89.97,
            "nrtg": -2.25
          },
          {
            "id_team_club": "772",
            "games": 20,
            "possessions": 1418.03,
            "possessions_x_minute": 1.74,
            "assists_x_turnovers": 0.66,
            "steals_x_turnovers": 0.51,
            "ts": 46.07,
            "ortg": 87.23,
            "drtg": 94.92,
            "nrtg": -7.69
          },
          {
            "id_team_club": "773",
            "games": 20,
            "possessions": 1404.23,
            "possessions_x_minute": 1.73,
            "assists_x_turnovers": 1.27,
            "steals_x_turnovers": 0.55,
            "ts": 48.23,
            "ortg": 92.43,
            "drtg": 93.5,
            "nrtg": -1.07
          },
          {
            "id_team_club": "774",
            "games": 20,
            "possessions": 1397.12,
            "possessions_x_minute": 1.74,
            "assists_x_turnovers": 1.06,
            "steals_x_turnovers": 0.6,
            "ts": 49.22,
            "ortg": 95.7,
            "drtg": 98.85,
            "nrtg": -3.15
          },
          {
            "id_team_club": "775",
            "games": 20,
            "possessions": 1360.18,
            "possessions_x_minute": 1.7,
            "assists_x_turnovers": 1.15,
            "steals_x_turnovers": 0.53,
            "ts": 49.96,
            "ortg": 94.69,
            "drtg": 94.18,
            "nrtg": 0.51
          },
          {
            "id_team_club": "776",
            "games": 20,
            "possessions": 1391.15,
            "possessions_x_minute": 1.71,
            "assists_x_turnovers": 0.87,
            "steals_x_turnovers": 0.67,
            "ts": 48.57,
            "ortg": 91.15,
            "drtg": 89.71,
            "nrtg": 1.44
          },
          {
            "id_team_club": "777",
            "games": 20,
            "possessions": 1355.45,
            "possessions_x_minute": 1.69,
            "assists_x_turnovers": 0.69,
            "steals_x_turnovers": 0.48,
            "ts": 42.7,
            "ortg": 81.52,
            "drtg": 90.82,
            "nrtg": -9.3
          },
          {
            "id_team_club": "778",
            "games": 20,
            "possessions": 1366.45,
            "possessions_x_minute": 1.71,
            "assists_x_turnovers": 0.79,
            "steals_x_turnovers": 0.58,
            "ts": 45.45,
            "ortg": 85.62,
            "drtg": 90.38,
            "nrtg": -4.76
          },
          {
            "id_team_club": "779",
            "games": 20,
            "possessions": 1526.62,
            "possessions_x_minute": 1.84,
            "assists_x_turnovers": 0.68,
            "steals_x_turnovers": 0.5,
            "ts": 48.76,
            "ortg": 87.64,
            "drtg": 92.88,
            "nrtg": -5.24
          },
          {
            "id_team_club": "780",
            "games": 20,
            "possessions": 1453.51,
            "possessions_x_minute": 1.79,
            "assists_x_turnovers": 0.85,
            "steals_x_turnovers": 0.51,
            "ts": 47.48,
            "ortg": 85.1,
            "drtg": 91.57,
            "nrtg": -6.47
          },
          {
            "id_team_club": "781",
            "games": 20,
            "possessions": 1418.81,
            "possessions_x_minute": 1.74,
            "assists_x_turnovers": 1.03,
            "steals_x_turnovers": 0.65,
            "ts": 53.13,
            "ortg": 99.94,
            "drtg": 92.47,
            "nrtg": 7.47
          },
          {
            "id_team_club": "782",
            "games": 20,
            "possessions": 1361.24,
            "possessions_x_minute": 1.7,
            "assists_x_turnovers": 0.68,
            "steals_x_turnovers": 0.61,
            "ts": 42.7,
            "ortg": 82.65,
            "drtg": 94.47,
            "nrtg": -11.82
          }
        ];
        let field_name = "possessions";
        let id_name = "id_team_club";
        let id_team_name = 775;
        let order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 13);
        
        field_name = "possessions_x_minute";        
        order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 13);

        field_name = "assists_x_turnovers";
        order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 3);

        field_name = "steals_x_turnovers";
        order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 9);

        field_name = "ts";
        order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 3);

        field_name = "ortg";
        order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 4);

        field_name = "drtg";
        order = ranking(data, id_name, field_name, id_team_name, true);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 11);

        field_name = "nrtg";
        order = ranking(data, id_name, field_name, id_team_name, false);
        //console.log("ranking " + field_name + ": " + order);
        assert.ok(order == 5);
    });

    it("should return an array with shoots made it of 2P and 3P from each player", () => {
      let data = [
        {"id_player_team" : 1, "name" : "Jose", "t2p_int": 3, "t3p_int": 5},
        {"id_player_team" : 2, "name" : "Jesus", "t2p_int": 2, "t3p_int": 1},
        {"id_player_team" : 3, "name" : "Maria", "t2p_int": 3, "t3p_int": 0},
        {"id_player_team" : 4, "name" : "Irene", "t2p_int": 4, "t3p_int": 2},
        {"id_player_team" : 5, "name" : "Carmen", "t2p_int": 1, "t3p_int": 2},
      ];
      //let data = [1, 2, 3, 4, 5];
      let result = t3ppt2pp(data);

      // for (let i = 0; i < result.length; i++){
      //   console.log("name: " + result[i].name + " value_x: " + result[i].value_x +  " value_y: " + result[i].value_y);
      // }

      assert.ok(result.length == 5);
      assert.ok(result[3].value_x == 30.77 && result[3].value_y == 20.00);
    });

    it("should return an array of json objects with the % of points of each player", () => {
      let data = [
        {"id_player_team" : 1, "name" : "KRAKER, MEHRYN DONEGAN", "t2p_conv": 2, "t3p_conv": 1, "tl_conv" : 2},
        {"id_player_team" : 2, "name" : "COUSSEINS SMITH, JOYCE MEGANE", "t2p_conv": 0, "t3p_conv": 0, "tl_conv" : 0},
        {"id_player_team" : 3, "name" : "ERAUNCETAMURGIL AYESTARAN, MARIA", "t2p_conv": 0, "t3p_conv": 0, "tl_conv" : 0},
        {"id_player_team" : 4, "name" : "SARR, OUMOUL KHAIRY", "t2p_conv": 6, "t3p_conv": 0, "tl_conv" : 0},
        {"id_player_team" : 5, "name" : "GONZALEZ DUARTE, LARA", "t2p_conv": 2, "t3p_conv": 0, "tl_conv" : 1},
        {"id_player_team" : 5, "name" : "GARCIA SALINERO, LAURA", "t2p_conv": 8, "t3p_conv": 2, "tl_conv" : 5},
        {"id_player_team" : 5, "name" : "NYSTROM, ELLEN ADINA", "t2p_conv": 1, "t3p_conv": 0, "tl_conv" : 0},
        {"id_player_team" : 5, "name" : "DE SOUZA MACHADO, ERIKA CRISTINA", "t2p_conv": 1, "t3p_conv": 0, "tl_conv" : 0},
        {"id_player_team" : 5, "name" : "EDWARDS, ARIEL JOY", "t2p_conv": 2, "t3p_conv": 4, "tl_conv" : 4},
      ];

      let result = player_ppoints(data);

      assert.ok(result.length == 9);
      assert.ok(result[2].value_y == 0.00);
    });

    it("should return an array of json objects with the % of defensive and offensive rebounds of each player", () => {
      let data = [
        {"id_player_team" : 1, "name" : "Jose", "t2p_conv": 3, "t3p_conv": 5, "tl_conv" : 3, "reb_def" : 1, "reb_of" : 0},
        {"id_player_team" : 2, "name" : "Jesus", "t2p_conv": 2, "t3p_conv": 1, "tl_conv" : 0, "reb_def" : 2, "reb_of" : 1},
        {"id_player_team" : 3, "name" : "Maria", "t2p_conv": 3, "t3p_conv": 9, "tl_conv" : 8, "reb_def" : 4, "reb_of" : 3},
        {"id_player_team" : 4, "name" : "Irene", "t2p_conv": 4, "t3p_conv": 2, "tl_conv" : 3, "reb_def" : 8, "reb_of" : 5},
        {"id_player_team" : 5, "name" : "Carmen", "t2p_conv": 1, "t3p_conv": 2, "tl_conv" : 4, "reb_def" : 2, "reb_of" : 1},
      ];

      let result = prdpro(data);

      assert.ok(result.length == 5);
      assert.ok(result[2].value_x == 23.53);
      assert.ok(result[4].value_y == 10.00);
    });

    it("should return an array of players filtered by team and with data filtered", () => {
      let data = [
        {"id_team_club" : 769, "id_player_team" : 1, "name_player": "Juan", "per": 0, "ts" : 0, "usg" : 13.2},
        {"id_team_club" : 769, "id_player_team" : 2, "name_player": "Pedro", "per": 0, "ts" : 42.86, "usg" : 26.94},
        {"id_team_club" : 769, "id_player_team" : 3, "name_player": "María", "per": 0, "ts" : 50, "usg" : 22.38},
        {"id_team_club" : 769, "id_player_team" : 4, "name_player": "Irene", "per": 0, "ts" : 62.5, "usg" : 28.91},
        {"id_team_club" : 769, "id_player_team" : 5, "name_player": "Segis", "per": 0, "ts" : 75, "usg" : 17.9},
        {"id_team_club" : 770, "id_player_team" : 6, "name_player": "Raquel", "per": 0, "ts" : 50, "usg" : 18.5},
        {"id_team_club" : 770, "id_player_team" : 7, "name_player": "Belém", "per": 0, "ts" : 0, "usg" : 9.55},
        {"id_team_club" : 770, "id_player_team" : 8, "name_player": "Mariano", "per": 0, "ts" : 100, "usg" : 26.04},
        {"id_team_club" : 770, "id_player_team" : 9, "name_player": "Natalia", "per": 0, "ts" : 66.67, "usg" : 12.02},
        {"id_team_club" : 770, "id_player_team" : 10, "name_player": "Helena", "per": 0, "ts" : 20, "usg" : 11.2},
        {"id_team_club" : 770, "id_player_team" : 10, "name_player": "Andrea", "per": 0, "ts" : 75, "usg" : 26.04},
        {"id_team_club" : 770, "id_player_team" : 10, "name_player": "Tiffany", "per": 0, "ts" : 64.71, "usg" : 35.94},
      ];

      let id_team = 769;
      let result = filterPlayersByTeam(data, id_team);
      result = formatDataForScatterPlot(result);

      assert.ok(result.length == 5);
      assert.ok(result[0].value_y == 13.2);

      id_team = 770;
      result = filterPlayersByTeam(data, id_team);
      result = formatDataForScatterPlot(result);
      assert.ok(result.length == 7);
      assert.ok(result[6].value_x == 64.71);
    });

    it("Should return a json with % of T1P, T2P, T3P and TO", () => {
      let data = [
        {"tl_int" : 1, "t2p_int" : 1, "t3p_int": 0, "turnovers": 0, "reb_of" : 2},
        {"tl_int" : 3, "t2p_int" : 2, "t3p_int": 0, "turnovers": 1, "reb_of" : 2},
        {"tl_int" : 0, "t2p_int" : 2, "t3p_int": 3, "turnovers": 1, "reb_of" : 1},
        {"tl_int" : 5, "t2p_int" : 1, "t3p_int": 2, "turnovers": 2, "reb_of" : 0},
        {"tl_int" : 3, "t2p_int" : 0, "t3p_int": 5, "turnovers": 3, "reb_of" : 3},
        {"tl_int" : 2, "t2p_int" : 5, "t3p_int": 2, "turnovers": 4, "reb_of" : 0},
        {"tl_int" : 0, "t2p_int" : 6, "t3p_int": 4, "turnovers": 5, "reb_of" : 1},
      ];

      let result = formatDataHalfDonut(data);
      //console.log("total: " + result.total.toFixed(2) + " t11p: " + result.values.t1p + " t2p: " + result.values.t2p + " t3p: " + result.values.t3p + " turnovers: " + result.values.turnovers);
      assert.ok(parseFloat(result.total.toFixed(2)) === 44.00);
      assert.ok(result.values.t1p === 14);
      assert.ok(result.values.t2p === 17);
      assert.ok(result.values.t3p === 16);
      assert.ok(result.values.turnovers === 16);

      result = transformDataHalfDonut(result.values, result.total, "es");
      //console.log("total: " + result.total + " t1p: " + result[0].value + " t2p: " + result[1].value + " t3p: " + result[2].value + " turnovers: " + result[3].value);
      assert.ok(result.length === 4);
      assert.ok(parseFloat(result[0].value) === 11.16);
      assert.ok(parseFloat(result[1].value) === 30.82);
      assert.ok(parseFloat(result[2].value) === 29.01);
      assert.ok(parseFloat(result[3].value) === 29.01);

    });

    it("Should return a json with the % of T1P, T2P and T3P", () => {
      let data = [
        {"tl_conv" : 0, "tl_int" : 1, "t2p_conv" : 1, "t2p_int" : 1, "t3p_conv": 0, "t3p_int": 0},
        {"tl_conv" : 2, "tl_int" : 3, "t2p_conv" : 1, "t2p_int" : 2, "t3p_conv": 0, "t3p_int": 0},
        {"tl_conv" : 0, "tl_int" : 0, "t2p_conv" : 1, "t2p_int" : 2, "t3p_conv": 2, "t3p_int": 3},
        {"tl_conv" : 1, "tl_int" : 5, "t2p_conv" : 0, "t2p_int" : 1, "t3p_conv": 1, "t3p_int": 2},
        {"tl_conv" : 3, "tl_int" : 3, "t2p_conv" : 0, "t2p_int" : 0, "t3p_conv": 3, "t3p_int": 5},
        {"tl_conv" : 1, "tl_int" : 2, "t2p_conv" : 3, "t2p_int" : 5, "t3p_conv": 1, "t3p_int": 2},
        {"tl_conv" : 2, "tl_int" : 2, "t2p_conv" : 4, "t2p_int" : 6, "t3p_conv": 3, "t3p_int": 4},
      ];
      let home_result = getDataTSComparative(data);
      //console.log("T1P%: " + home_result.t1p + " T2P%: " + home_result.t2p + " T3P%: " + home_result.t3p);
      data = [
        {"tl_conv" : 0, "tl_int" : 4, "t2p_conv" : 1, "t2p_int" : 4, "t3p_conv": 0, "t3p_int": 0},
        {"tl_conv" : 2, "tl_int" : 3, "t2p_conv" : 1, "t2p_int" : 3, "t3p_conv": 0, "t3p_int": 0},
        {"tl_conv" : 2, "tl_int" : 2, "t2p_conv" : 0, "t2p_int" : 2, "t3p_conv": 0, "t3p_int": 3},
        {"tl_conv" : 1, "tl_int" : 1, "t2p_conv" : 0, "t2p_int" : 5, "t3p_conv": 1, "t3p_int": 2},
        {"tl_conv" : 0, "tl_int" : 0, "t2p_conv" : 2, "t2p_int" : 4, "t3p_conv": 2, "t3p_int": 5},
        {"tl_conv" : 1, "tl_int" : 3, "t2p_conv" : 1, "t2p_int" : 3, "t3p_conv": 0, "t3p_int": 2},
        {"tl_conv" : 0, "tl_int" : 0, "t2p_conv" : 2, "t2p_int" : 2, "t3p_conv": 3, "t3p_int": 4},
      ];
      let away_result = getDataTSComparative(data);
      //console.log("T1P%: " + away_result.t1p + " T2P%: " + away_result.t2p + " T3P%: " + away_result.t3p);
      let game_data = {
        abrev_home: "AVE",
        abrev_away: "GIR"
      };
      let result = transformDataTSComparative(home_result, away_result, game_data, "es");
      // result.forEach((item) => {
      //   for (const prop in item){
      //       console.log("property: " + prop + " value: " + item[prop]);
      //   }
      // });
      assert.ok(result[0].shoot === "T1P%" && parseFloat(result[0].AVE) === 56.25 && parseFloat(result[0].GIR) === 46.15);
      assert.ok(result[1].shoot === "T2P%" && parseFloat(result[1].AVE) === 58.82 && parseFloat(result[1].GIR) === 30.43);
      assert.ok(result[2].shoot === "T3P%" && parseFloat(result[2].AVE) === 62.50 && parseFloat(result[2].GIR) === 37.50);
    });


    it("Should return two arrays. One of them with values >= 55% and other with values <55%", () => {
      let data = [
        {id_player: 2792, games: 33, minutes: 620, mpp: 18.79, t2p_conv: 74, t2pcpp: 2.24, t2p_int: 161, t2pipp: 2.18, t2pp: 45.96},
        {id_player: 1, games: 33, minutes: 320, mpp: 12.79, t2p_conv: 34, t2pcpp: 1.24, t2p_int: 181, t2pipp: 5.88, t2pp: 43.96},
        {id_player: 2, games: 33, minutes: 420, mpp: 14.79, t2p_conv: 44, t2pcpp: 3.24, t2p_int: 131, t2pipp: 8.88, t2pp: 42.96},
        {id_player: 3, games: 33, minutes: 520, mpp: 17.79, t2p_conv: 124, t2pcpp: 6.24, t2p_int: 231, t2pipp: 7.88, t2pp: 41.96},
        {id_player: 4, games: 33, minutes: 820, mpp: 24.79, t2p_conv: 156, t2pcpp: 8.24, t2p_int: 241, t2pipp: 5.88, t2pp: 44.96},
        {id_player: 5, games: 33, minutes: 610, mpp: 23.79, t2p_conv: 46, t2pcpp: 2.74, t2p_int: 131, t2pipp: 2.58, t2pp: 41.96},
        {id_player: 6, games: 33, minutes: 310, mpp: 15.79, t2p_conv: 57, t2pcpp: 1.84, t2p_int: 121, t2pipp: 3.33, t2pp: 35.96},
        {id_player: 7, games: 33, minutes: 410, mpp: 17.79, t2p_conv: 48, t2pcpp: 3.54, t2p_int: 81, t2pipp: 4.45, t2pp: 36.96},
        {id_player: 8, games: 33, minutes: 510, mpp: 19.79, t2p_conv: 114, t2pcpp: 4.64, t2p_int: 158, t2pipp: 5.48, t2pp: 31.96},
        {id_player: 9, games: 33, minutes: 810, mpp: 23.79, t2p_conv: 126, t2pcpp: 5.24, t2p_int: 131, t2pipp: 2.88, t2pp: 34.96},
        {id_player: 10, games: 20, minutes: 610, mpp: 23.79, t2p_conv: 46, t2pcpp: 2.74, t2p_int: 131, t2pipp: 2.58, t2pp: 41.96},
        {id_player: 11, games: 11, minutes: 310, mpp: 15.79, t2p_conv: 57, t2pcpp: 1.84, t2p_int: 121, t2pipp: 3.33, t2pp: 35.96},
        {id_player: 12, games: 21, minutes: 410, mpp: 17.79, t2p_conv: 48, t2pcpp: 3.54, t2p_int: 81, t2pipp: 4.45, t2pp: 36.96},
        {id_player: 13, games: 18, minutes: 510, mpp: 19.79, t2p_conv: 114, t2pcpp: 4.64, t2p_int: 158, t2pipp: 5.48, t2pp: 31.96},
        {id_player: 14, games: 15, minutes: 810, mpp: 23.79, t2p_conv: 126, t2pcpp: 5.24, t2p_int: 131, t2pipp: 2.88, t2pp: 34.96},
      ];
      let arrays = splitArray(data, "games", 20);
      assert.ok(typeof arrays !== "undefined" && (typeof arrays.listA !== "undefined" && arrays.listA.length > 0) && 
      (typeof arrays.listB !== "undefined" && (arrays.listB.length > 0 || arrays.listB.length === 0)));
    });

    it("Should return list ordered descently by parameter passed", () => {
      let data = [
        {id_player: 2792, games: 33, minutes: 620, mpp: 18.79, t2p_conv: 74, t2pcpp: 2.24, t2p_int: 161, t2pipp: 2.18, t2pp: 45.96},
        {id_player: 1, games: 33, minutes: 320, mpp: 12.79, t2p_conv: 34, t2pcpp: 1.24, t2p_int: 181, t2pipp: 5.88, t2pp: 43.96},
        {id_player: 2, games: 33, minutes: 420, mpp: 14.79, t2p_conv: 44, t2pcpp: 3.24, t2p_int: 131, t2pipp: 8.88, t2pp: 42.96},
        {id_player: 3, games: 33, minutes: 520, mpp: 17.79, t2p_conv: 124, t2pcpp: 6.24, t2p_int: 231, t2pipp: 7.88, t2pp: 41.96},
        {id_player: 4, games: 33, minutes: 820, mpp: 24.79, t2p_conv: 156, t2pcpp: 8.24, t2p_int: 241, t2pipp: 5.88, t2pp: 44.96},
        {id_player: 5, games: 33, minutes: 610, mpp: 23.79, t2p_conv: 46, t2pcpp: 2.74, t2p_int: 131, t2pipp: 2.58, t2pp: 41.96},
        {id_player: 6, games: 33, minutes: 310, mpp: 15.79, t2p_conv: 57, t2pcpp: 1.84, t2p_int: 121, t2pipp: 3.33, t2pp: 35.96},
        {id_player: 7, games: 33, minutes: 410, mpp: 17.79, t2p_conv: 48, t2pcpp: 3.54, t2p_int: 81, t2pipp: 4.45, t2pp: 36.96},
        {id_player: 8, games: 33, minutes: 510, mpp: 19.79, t2p_conv: 114, t2pcpp: 4.64, t2p_int: 158, t2pipp: 5.48, t2pp: 31.96},
        {id_player: 9, games: 33, minutes: 810, mpp: 23.79, t2p_conv: 126, t2pcpp: 5.24, t2p_int: 131, t2pipp: 2.88, t2pp: 34.96},
        {id_player: 10, games: 20, minutes: 610, mpp: 23.79, t2p_conv: 46, t2pcpp: 2.74, t2p_int: 131, t2pipp: 2.58, t2pp: 41.96},
        {id_player: 11, games: 11, minutes: 310, mpp: 15.79, t2p_conv: 57, t2pcpp: 1.84, t2p_int: 121, t2pipp: 3.33, t2pp: 35.96},
        {id_player: 12, games: 21, minutes: 410, mpp: 17.79, t2p_conv: 48, t2pcpp: 3.54, t2p_int: 81, t2pipp: 4.45, t2pp: 36.96},
        {id_player: 13, games: 18, minutes: 510, mpp: 19.79, t2p_conv: 114, t2pcpp: 4.64, t2p_int: 158, t2pipp: 5.48, t2pp: 31.96},
        {id_player: 14, games: 15, minutes: 810, mpp: 23.79, t2p_conv: 126, t2pcpp: 5.24, t2p_int: 131, t2pipp: 2.88, t2pp: 34.96},
      ];

      let total_games = 37;
      let stats = [{ stat: "minutes", order : "desc"}, { stat : "mpp", order : "desc"}, {stat : "t2p_conv", order : "desc"}, 
      {stat : "t2pcpp", order : "desc"}, { stat: "t2p_int", order : "desc"}, { stat : "t2pipp", order : "desc"}, {stat : "t2pp", order : "asc"}];     

      let rankings = getRankings(data, stats, "id_player", 2792, total_games);
    });
    
    it("Shoult retuen a list withtout an item if it's found it", () => {
      let data = [
        {id_club: 1, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 2, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 3, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 4, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 5, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 6, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 7, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 8, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 9, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5},
        {id_club: 10, t2p_conv: 2, t2p_int: 3, t3p_conv: 2, t3p_int: 5}
      ];
      let result = removeItem(data, "id_club", 5);
      assert.ok(result.length === 9);
      result = removeItem(data, "id_club", 25);
      assert.ok(result.length === 10);
    });

/*     test("Should return a list of teams for each group", async() => {
      let params = [{"###id_league###" : process.env.ID_LEAGUE_LF2}, {"###id_season###" : 46}];
      let groups = await getDataFromServer(URL_FEB_API, GROUPS, params);
      expect(groups.data.groups.length).toBe(2); 
    }); */

    test("Should return an array of list of teams. Each element of the array will have a list of teams of the same group.", () => {
       let groups = [
          {id: 1, name: "Grupo A", id_league: 2, id_season: 46},
          {id: 2, name: "Grupo B", id_league: 2, id_season: 46}
       ];
       let teams_groups = [
          { "id": "787", "id_group": "1", "name": "MOVISTAR ESTUDIANTES", "abrev": "EST" },
          { "id": "794", "id_group": "1", "name": "BAXI FERROL", "abrev": "FER" },
          { "id": "809", "id_group": "2", "name": "SNATT´S FEMENÍ SANT ADRIÁ", "abrev": "ADR" },
          { "id": "801", "id_group": "2", "name": "OSÉS CONSTRUCCIÓN ARDOI", "abrev": "ARD" },
          { "id": "799", "id_group": "2", "name": "SPAR GRAN CANARIA", "abrev": "GRA" },       
          { "id": "785", "id_group": "1", "name": "C.B. ARXIL", "abrev": "ARX" },
          { "id": "790", "id_group": "1", "name": "AD CORTEGADA", "abrev": "COR" },    
          { "id": "808", "id_group": "2", "name": "UNICAJA", "abrev": "UNI" },
          { "id": "807", "id_group": "2", "name": "LIMA-HORTA BARCELONA", "abrev": "LIM"}
       ];
       let teams_by_group = splitTeamsByGroups(groups, teams_groups);
       expect(teams_by_group.length).toBe(2);
       expect(teams_by_group[0].length).toBe(4);  //Teams from group with id: 1
       expect(teams_by_group[1].length).toBe(5);  //Teams from group with id: 2
    });

    test("Should return an array with the competitions played by a player", () => {
      let competitions = [
        {id: 2, id_league: 1, id_season: 1, id_group: 2, name: "Euroleague", description: "Season 2018 - 2019"},
        {id: 21, id_league: 1, id_season: 1, id_group: 3, name: "Euroleague", description: "Season 2018 - 2019"},
        {id: 25, id_league: 1, id_season: 3, id_group: 1, name: "Euroleague", description: "Season 2019 - 2020"},
        {id: 33, id_league: 2, id_season: 4, id_group: 2, name: "Eurocup", description: "Season 2019 - 2020"},
        {id: 44, id_league: 2, id_season: 4, id_group: 3, name: "Eurocup", description: "Season 2019 - 2020"},
        {id: 45, id_league: 2, id_season: 4, id_group: 3, name: "Eurocup", description: "Season 2019 - 2020"},
      ];
      let data = filterCompetitions(competitions);
      expect(data.data_filtered.length).toBe(3);
      expect(data.data_filtered[0].id_league === 1 && data.data_filtered[0].id_season === 1 && data.data_filtered[0].id_select === 1).toBeTruthy();
      expect(data.data_filtered[1].id_league === 1 && data.data_filtered[1].id_season === 3 && data.data_filtered[1].id_select === 2).toBeTruthy();
      expect(data.data_filtered[2].id_league === 2 && data.data_filtered[2].id_season === 4 && data.data_filtered[2].id_select === 3).toBeTruthy();
      expect(data.comps[0].id_select === 1).toBeTruthy();
      expect(data.comps[1].id_select === 1).toBeTruthy();
      expect(data.comps[2].id_select === 2).toBeTruthy();
      expect(data.comps[3].id_select === 3).toBeTruthy();
      expect(data.comps[4].id_select === 3).toBeTruthy();
      expect(data.comps[5].id_select === 3).toBeTruthy();
    });
    
    test("Should return an array with all the id of competitions played by a player for a league", () => {
      let competitions = [
        {id: 2, id_league: 1, id_season: 1, id_group: 2, name: "Euroleague", description: "Season 2018 - 2019", id_select: 1},
        {id: 21, id_league: 1, id_season: 1, id_group: 3, name: "Euroleague", description: "Season 2018 - 2019", id_select: 1},
        {id: 25, id_league: 1, id_season: 3, id_group: 1, name: "Euroleague", description: "Season 2019 - 2020", id_select: 2},
        {id: 33, id_league: 2, id_season: 4, id_group: 2, name: "Eurocup", description: "Season 2019 - 2020", id_select: 3},
        {id: 44, id_league: 2, id_season: 4, id_group: 3, name: "Eurocup", description: "Season 2019 - 2020", id_select: 3},
        {id: 45, id_league: 2, id_season: 4, id_group: 3, name: "Eurocup", description: "Season 2019 - 2020", id_select: 3},
      ];

      let c = {id: 2, id_league: 1, id_season: 1, id_group: 2, name: "Euroleague", description: "Season 2018 - 2019", id_select: 1};
      let comps = getCompetitions(competitions, c.id_select);
      console.log(comps);
      expect(comps).toBe("\"2, 21\"");
    });

    test("Should return an array of number from an string", () => {
      let competitions = [
        {id: 2, id_league: 1, id_season: 1, id_group: 2, name: "Euroleague", description: "Season 2018 - 2019", id_select: 1},
        {id: 21, id_league: 1, id_season: 1, id_group: 3, name: "Euroleague", description: "Season 2018 - 2019", id_select: 1},
        {id: 25, id_league: 1, id_season: 3, id_group: 1, name: "Euroleague", description: "Season 2019 - 2020", id_select: 2},
        {id: 33, id_league: 2, id_season: 4, id_group: 2, name: "Eurocup", description: "Season 2019 - 2020", id_select: 3},
        {id: 44, id_league: 2, id_season: 4, id_group: 3, name: "Eurocup", description: "Season 2019 - 2020", id_select: 3},
        {id: 45, id_league: 2, id_season: 4, id_group: 3, name: "Eurocup", description: "Season 2019 - 2020", id_select: 3},
      ];

      let c = {id: 2, id_league: 1, id_season: 1, id_group: 2, name: "Euroleague", description: "Season 2018 - 2019", id_select: 1};
      let comps = getCompetitions(competitions, c.id_select);
      let v = transformStringToArray(comps);
      expect(v.length).toBe(2);
      console.log(v);
    });

    test("Shold return a list of players ordered by an attribute", () => {
      let data = [        
        {id_player: 1, games: 33, minutes: 320, mpp: 12.79, t2p_conv: 34, t2pcpp: 1.24, t2p_int: 181, t2pipp: 5.88, t2pp: 43.96, usg: 24.56, drtg: 100.23},
        {id_player: 2, games: 33, minutes: 420, mpp: 14.79, t2p_conv: 44, t2pcpp: 3.24, t2p_int: 131, t2pipp: 8.88, t2pp: 42.96, usg: 21.56, drtg: 98.09},
        {id_player: 3, games: 33, minutes: 520, mpp: 17.79, t2p_conv: 124, t2pcpp: 6.24, t2p_int: 231, t2pipp: 7.88, t2pp: 41.96, usg: 22.56, drtg: 89.32},
        {id_player: 4, games: 33, minutes: 820, mpp: 24.79, t2p_conv: 156, t2pcpp: 8.24, t2p_int: 241, t2pipp: 5.88, t2pp: 44.96, usg: 23.56, drtg: 99.03},
        {id_player: 5, games: 33, minutes: 610, mpp: 23.79, t2p_conv: 46, t2pcpp: 2.74, t2p_int: 131, t2pipp: 2.58, t2pp: 41.96, usg: 18.56, drtg: 87.34},
        {id_player: 6, games: 33, minutes: 310, mpp: 15.79, t2p_conv: 57, t2pcpp: 1.84, t2p_int: 121, t2pipp: 3.33, t2pp: 35.96, usg: 19.56, drtg: 83.45},
        {id_player: 7, games: 33, minutes: 410, mpp: 17.79, t2p_conv: 48, t2pcpp: 3.54, t2p_int: 81, t2pipp: 4.45, t2pp: 36.96, usg: 24.56, drtg: 83.45},
        {id_player: 8, games: 33, minutes: 510, mpp: 19.79, t2p_conv: 114, t2pcpp: 4.64, t2p_int: 158, t2pipp: 5.48, t2pp: 31.96, usg: 25.56, drtg: 98.99},
        {id_player: 9, games: 33, minutes: 810, mpp: 23.79, t2p_conv: 126, t2pcpp: 5.24, t2p_int: 131, t2pipp: 2.88, t2pp: 34.96, usg: 28.56, drtg: 89.33},
        {id_player: 10, games: 20, minutes: 610, mpp: 23.79, t2p_conv: 46, t2pcpp: 2.74, t2p_int: 131, t2pipp: 2.58, t2pp: 41.96, usg: 32.56, drtg: 79.32},
        {id_player: 11, games: 11, minutes: 310, mpp: 15.79, t2p_conv: 57, t2pcpp: 1.84, t2p_int: 121, t2pipp: 3.33, t2pp: 35.96, usg: 40.56, drtg: 82.32},
        {id_player: 12, games: 21, minutes: 410, mpp: 17.79, t2p_conv: 48, t2pcpp: 3.54, t2p_int: 81, t2pipp: 4.45, t2pp: 36.96, usg: 30.56, drtg: 79.33},
        {id_player: 13, games: 18, minutes: 510, mpp: 19.79, t2p_conv: 114, t2pcpp: 4.64, t2p_int: 158, t2pipp: 5.48, t2pp: 31.96, usg: 29.60, drtg: 82.23},
        {id_player: 14, games: 15, minutes: 810, mpp: 23.79, t2p_conv: 126, t2pcpp: 5.24, t2p_int: 131, t2pipp: 2.88, t2pp: 34.96, usg: 23.30, drtg: 81.43},
        {id_player: 15, games: 3, minutes: 6, mpp: 2, t2p_conv: 1, t2pcpp: 0.3, t2p_int: 6, t2pipp: 1, t2pp: 18.00, usg: 35.56, drtg: 74.32},
        {id_player: 2792, games: 33, minutes: 620, mpp: 18.79, t2p_conv: 74, t2pcpp: 2.24, t2p_int: 161, t2pipp: 2.18, t2pp: 45.96, usg: 22.56, drtg: 83.45},
      ];
      let total_games = 40;
      let orderParam = "id_player";
      let itemOrder = {order: "desc", stat: "usg"};
      //Regularize
      let dataReg = JSON.parse(JSON.stringify(data)); //Copy by value of a json
      dataReg = dataReg.map(item => {
        let aux = item;
        aux[itemOrder.stat] = aux[itemOrder.stat]*aux.games/total_games;
        return aux;
      });
      //Order list by orderParam
      dataReg = (itemOrder.order === "desc") ? sortDescendent(dataReg, itemOrder.stat) : sortAscendent(dataReg, itemOrder.stat); 
      //Obtenemos ranking de la jugadora para el orderParam
      for (let i = 0; i < dataReg.length; i++){
        console.log("id_player: " + dataReg[i].id_player + " usg: " + dataReg[i].usg);
      }
      let rank = getRank(dataReg, itemOrder.stat, orderParam, 2792);

      console.log("ranking.position asc: " + rank.position + " rank.total: " + rank.total);

      total_games = 40;
      orderParam = "id_player";
      itemOrder = {order: "asc", stat: "drtg"};

      //Regularize
      dataReg = JSON.parse(JSON.stringify(data)); //Copy by value of a json
      dataReg = dataReg.map(item => {
        let aux = item;
        aux[itemOrder.stat] = aux[itemOrder.stat]*aux.games/total_games;
        return aux;
      });
      //Order list by orderParam
      dataReg = (itemOrder.order === "desc") ? sortDescendent(dataReg, itemOrder.stat) : sortAscendent(dataReg, itemOrder.stat); 
      //Obtenemos ranking de la jugadora para el orderParam
      for (let i = 0; i < dataReg.length; i++){
        console.log("id_player: " + dataReg[i].id_player + " drtg: " + dataReg[i].drtg);
      }
      let rank_drtg = getRank(dataReg, itemOrder.stat, orderParam, 2792);

      console.log("ranking.position asc: " + rank_drtg.position + " rank_drtg.total: " + rank_drtg.total);

      expect(rank.position).toBe(6);
      expect(rank.total).toBe(16);

      expect(rank_drtg.position).toBe(7);
      expect(rank_drtg.total).toBe(16);

    });
  });