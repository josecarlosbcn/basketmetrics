import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const TCAdvStats = new GraphQLObjectType({
    name: "TCAdvStats",
    description: "List of advanced stats from teams",
    fields: () => {
        return {
            id_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the club who belongs the team",
                resolve(tacs){
                    return tacs.id_club;
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of team club",
                resolve(tacs){
                    return tacs.id_team_club;
                }                
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the team",
                resolve(tcas){
                    return tcas.name;
                }
            },
            id_competition: {
                type:new GraphQLNonNull(GraphQLID),
                description: "ID of competition",
                resolve(tcas){
                    return tcas.id_competition;
                }
            },
            season_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the season",
                resolve(tcas){
                    return tcas.season_name;
                }
            },
            games: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Total number of games played in a season by a team",
                resolve(tacs){
                    return tacs.games;
                }
            },
            etc: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Effective Field Trows",
                resolve(tacs){
                    return tacs.etc;
                }
            },
            p_reb_def: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Defensive Rebounds",
                resolve(tacs){
                    return tacs.p_reb_def;
                }
            },
            p_reb_of: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Ofensive Rebouns",
                resolve(tacs){
                    return tacs.p_reb_of;
                }
            },
            p_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Turnovers",
                resolve(tacs){
                    return tacs.p_turnovers;
                }
            },
            ratio_ft: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Ratio Free Throws",
                resolve(tacs){
                    return tacs.ratio_ft;
                }
            },
            puntos_x_possession: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Points by possession",
                resolve(tacs){
                    return tacs.puntos_x_possession;
                }
            },
            possessions: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Possessions per game",
                resolve(tacs){
                    return tacs.possessions;
                }
            },
            pbg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Possessions by game",
                resolve(tacs){
                    return tacs.pbg;
                }
            },
            possessions_x_minute: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Possessions per minute",
                resolve(tacs){
                    return tacs.possessions_x_minute;
                }
            },
            assists_x_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists per turnover",
                resolve(tacs){
                    return tacs.assists_x_turnovers;
                }
            },
            steals_x_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Steals per turnover",
                resolve(tacs){
                    return tacs.steals_x_turnovers;
                }
            },
            ts: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "True shoot",
                resolve(tacs){
                    return tacs.ts;
                }
            },
            rival_p_etc: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Effective Field Goals of rival",
                resolve(tacs){
                    return tacs.rival_p_etc;
                }
            },
            rival_p_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Turnovers of rival",
                resolve(tacs){
                    return tacs.rival_p_turnovers;
                }
            },
            rival_ratio_ft: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Ratio of Free throws of rival",
                resolve(tacs){
                    return tacs.rival_ratio_ft;
                }
            },
            ortg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Offensive Rating",
                resolve(tacs){
                    return tacs.ortg;
                }
            },
            drtg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Defensive Rating",
                resolve(tacs){
                    return tacs.drtg;
                }
            },
            nrtg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Net rating",
                resolve(tacs){
                    return tacs.nrtg;
                }
            },
            date_update: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of update data",
                resolve(tacs){
                    return tacs.date_update;
                }
            }
        };
    }    
});

module.exports.TCAdvStats = TCAdvStats;