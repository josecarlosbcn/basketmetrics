import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat
} from "graphql";
import {DateTime} from "../scalar/dateTime";
//import { getClassSet } from "react-bootstrap/lib/utils/bootstrapUtils";

const GameStats = new GraphQLObjectType({
    name: "GameStats",
    description: "Data of a game and stats of the game. The stats get it are from one team of the geam",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the game",
                resolve(gs){
                    return gs.id;
                }
            },
            date_game: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of the game",
                resolve(gs){
                    return gs.date_game;
                }            
            },
            id_team_home: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of local team",
                resolve(gs){
                    return gs.id_team_home;
                }
            },
            home_team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of home team",
                resolve(gs){
                    return gs.home_team;
                }
            },
            home_url_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "URL name of home team",
                resolve(gs){
                    return gs.home_url_name;
                }
            },
            home_abrev_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Abreviation of the home team name",
                resolve(gs){
                    return gs.home_abrev_name;
                }
            },
            home_score: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Score of the home team",
                resolve(gs){
                    return gs.home_score;
                }
            },
            id_team_away: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the visitor team",
                resolve(gs){
                    return gs.id_team_away;
                }
            },
            away_team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the visitor team",
                resolve(gs){
                    return gs.away_team;
                }
            },
            away_url_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "URL name of away team",
                resolve(gs){
                    return gs.away_url_name;
                }
            },
            away_abrev_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Abreviation of the away team name",
                resolve(gs){
                    return gs.away_abrev_name;
                }
            },
            away_score: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Score of the visitor team",
                resolve(gs){
                    return gs.away_score;
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the team searched",
                resolve(gs){
                    return gs.id_team_club;
                }
            },
            id_competition: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the competition of the game",
                resolve(gs){
                    return gs.id_competition;
                }
            },
            minutes: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Minutes played in the game",
                resolve(gs){
                    return gs.minutes;
                }
            },
            t2p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "2P scored",
                resolve(gs){
                    return gs.t2p_conv;
                }
            },
            t2p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Attempts thorws of 2P",
                resolve(gs){
                    return gs.t2p_int;
                }
            },
            t2p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of 2P",
                resolve(gs){
                    return gs.t2p_percentage;
                }
            },
            t3p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "3P scored",
                resolve(gs){
                    return gs.t3p_conv;
                }
            },
            t3p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Attemtps throws of 3P",
                resolve(gs){
                    return gs.t3p_int;
                }
            },
            t3p_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of 3P",
                resolve(gs){
                    return gs.t3p_percentage;
                }
            },
            tc_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field goals scored",
                resolve(gs){
                    return gs.tc_conv;
                }
            },
            tc_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Field goals attempted",
                resolve(gs){
                    return gs.tc_int;
                }
            },
            tc_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Field goals percentage",
                resolve(gs){
                    return gs.tc_percentage;
                }
            },
            tl_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Free Throws scored",
                resolve(gs){
                    return gs.tl_conv;
                }
            },
            tl_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Free throws attempted",
                resolve(gs){
                    return gs.tl_int;
                }
            },
            tl_percentage: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Free throws percentage",
                resolve(gs){
                    return gs.tl_percentage;
                }
            },
            reb_def: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total defensive rebounds",
                resolve(gs){
                    return gs.reb_def;
                }
            },
            reb_of: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total ofensive rebounds",
                resolve(gs){
                    return gs.reb_of;
                }
            },
            assists: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total assists",
                resolve(gs){
                    return gs.assists;
                }
            },
            steals: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total steals",
                resolve(gs){
                    return gs.steals;
                }
            },
            turnovers: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total turnovers",
                resolve(gs){
                    return gs.turnovers;
                }
            },
            block_shots: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total block shots",
                resolve(gs){
                    return gs.block_shots;
                }
            },
            fouls_cm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total fouls commited",
                resolve(gs){
                    return gs.fouls_cm;
                }
            },
            fouls_rv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total fouls received",
                resolve(gs){
                    return gs.fouls_rv;
                }
            },
            efficience: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total efficience",
                resolve(gs){
                    return gs.efficience;
                }
            }
        };
    }
});

module.exports.GameStats = GameStats;