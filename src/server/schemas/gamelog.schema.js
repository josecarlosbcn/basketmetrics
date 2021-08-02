import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const GameLog = new GraphQLObjectType ({
    name: "GameLog",
    description: "GameLog of a player in a season",
    fields: () => {
        return {
            id_game: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of game",
                resolve(gl){
                    return gl.id_game;
                }
            },
            date_game: {
                type: new GraphQLNonNull(DateTime),
                description: "date of the game",
                resolve(gl){
                    return gl.date_game;
                }
            },
            home_team_url: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the home team",
                resolve(gl){
                    return gl.home_team_url;
                }
            },
            home_abrev: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Abrev of the name of the home team",
                resolve(gl){
                    return gl.home_abrev;
                }
            },
            away_team_url: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the away team",
                resolve(gl){
                    return gl.away_team_url;
                }
            },
            away_abrev: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Abrev of the name of the away team",
                resolve(gl){
                    return gl.away_abrev;
                }
            },
            mp: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Minutes played by the player",
                resolve(gl){
                    return gl.mp;
                }
            },
            points: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Points scored by the player",
                resolve(gl){
                    return gl.points;
                }
            },
            fgm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field Goals Made",
                resolve(gl){
                    return gl.fgm;
                }
            },
            fga: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field Goals Attempted",
                resolve(gl){
                    return gl.fga;
                }
            },
            fgp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of field goals",
                resolve(gl){
                    return gl.fgp;
                }
            },
            t2p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2 points made",
                resolve(gl){
                    return gl.t2p_conv;
                }
            },
            t2p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2 points attempted",
                resolve(gl){
                    return gl.t2p_int;
                }
            },
            t2pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "2 points percentage",
                resolve(gl){
                    return gl.t2pp;
                }
            },
            t3p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3 points made",
                resolve(gl){
                    return gl.t3p_conv;
                }
            },
            t3p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3 points attempted",
                resolve(gl){
                    return gl.t3p_int;
                }
            },
            t3pp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "3 points percentage",
                resolve(gl){
                    return gl.t3pp;
                }
            },
            tl_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Free throws made",
                resolve(gl){
                    return gl.tl_conv;
                }
            },
            tl_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Free throws attempted",
                resolve(gl){
                    return gl.tl_int;
                }
            },
            ftp: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Free throws percentage",
                resolve(gl){
                    return gl.ftp;
                }
            },
            reb_def: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Defensive Rebounds",
                resolve(gl){
                    return gl.reb_def;
                }
            },
            reb_of: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Offensive Rebounds",
                resolve(gl){
                    return gl.reb_of;
                }
            },
            tot_reb: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total rebounds",
                resolve(gl){
                    return gl.tot_reb;
                }
            },
            assists: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Assists",
                resolve(gl){
                    return gl.assists;
                }
            },
            turnovers: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Turnovers",
                resolve(gl){
                    return gl.turnovers;
                }
            },
            steals: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Steals",
                resolve(gl){
                    return gl.steals;
                }
            },
            block_shots: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Block Shots",
                resolve(gl){
                    return gl.block_shots;
                }
            },
            fouls_cm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Fouls commited",
                resolve(gl){
                    return gl.fouls_cm;
                }
            },
            efficience: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Efficience",
                resolve(gl){
                    return gl.efficience;
                }
            },
        };
    }
});

module.exports.GameLog = GameLog;