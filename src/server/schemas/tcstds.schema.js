import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLFloat,
    GraphQLID
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const TCStdStats = new GraphQLObjectType({
    name: "TCStdStats",
    description: "List of standard stats from teams",
    fields: () => {
        return {
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of team club",
                resolve(tcss){
                    return tcss.id_team_club;
                }                  
            },
            id_competition: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of competition",
                resolve(tcss){
                    return tcss.id_competition;
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total games played in a competition",
                resolve(tcss){
                    return tcss.games;
                }
            },
            victories: {
                type: GraphQLInt,
                description: "Total victories",
                resolve(tcss){
                    return tcss.victories;
                }
            },
            minutes: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Minutes played by the team",
                resolve(tcss){
                    return tcss.minutes;
                }
            },
            seconds: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Seconds played by the team",
                resolve(tcss){
                    return tcss.seconds;
                }
            },
            t2p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "T2P converted by the team",
                resolve(tcss){
                    return tcss.t2p_conv;
                }
            },
            t2p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "T2P made it by the team",
                resolve(tcss){
                    return tcss.t2p_int;
                }
            },
            t3p_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "T3P converted by the team",
                resolve(tcss){
                    return tcss.t3p_conv;
                }
            },
            t3p_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "T3P made it by the team",
                resolve(tcss){
                    return tcss.t3p_int;
                }
            },
            tl_conv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "TL converted by the team",
                resolve(tcss){
                    return tcss.tl_conv;
                }
            },
            tl_int: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "TL made it by the team",
                resolve(tcss){
                    return tcss.tl_int;
                }
            },
            reb_def: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Defensive rebounds",
                resolve(tcss){
                    return tcss.reb_def;
                }
            },
            reb_of: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Offensive rebounds",
                resolve(tcss){
                    return tcss.reb_of;
                }
            },
            assists: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total assists",
                resolve(tcss){
                    return tcss.assists;
                }
            },
            steals: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total steals",
                resolve(tcss){
                    return tcss.steals;
                }
            },
            turnovers: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total turnovers",
                resolve(tcss){
                    return tcss.turnovers;
                }
            },
            block_shots: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total Block Shots",
                resolve(tcss){
                    return tcss.block_shots;
                }
            },
            fouls_cm: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total fouls commited by the team",
                resolve(tcss){
                    return tcss.fouls_cm;
                }
            },
            fouls_rv: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total fouls received by the team",
                resolve(tcss){
                    return tcss.fouls_rv;
                }
            },
            efficience: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total efficience",
                resolve(tcss){
                    return tcss.efficience;
                }
            },
            benefit: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total benefit",
                resolve(tcss){
                    return tcss.benefit;
                }
            },
            against_total_points_pp: {
                type: GraphQLFloat,
                description: "Points against per game",
                resolve(tcss){
                    return tcss.against_total_points_pp;
                }
            },
            date_update: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of the update of the data",
                resolve(tcss){
                    return tcss.date_update;
                }
            }
        }
    }
})

module.exports.TCStdStats = TCStdStats;