import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const TGAdvStats = new GraphQLObjectType({
    name: "TGAdvStats",
    description: "Advanced stats of a team in a game",
    fields: () => {
        return {
            id_game: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of game",
                resolve(tgadvs){
                    return tgadvs.id_game;
                }                
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of team club",
                resolve(tgadvs){
                    return tgadvs.id_team_club;
                }                
            },
            id_competition: {
                type:new GraphQLNonNull(GraphQLID),
                description: "ID of competition",
                resolve(tgadvs){
                    return tgadvs.id_competition;
                }
            },
            etc: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Effective Field Trows",
                resolve(tgadvs){
                    return tgadvs.etc;
                }
            },
            p_reb_def: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Defensive Rebounds",
                resolve(tgadvs){
                    return tgadvs.p_reb_def;
                }
            },
            p_reb_of: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Ofensive Rebouns",
                resolve(tgadvs){
                    return tgadvs.p_reb_of;
                }
            },
            p_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Turnovers",
                resolve(tgadvs){
                    return tgadvs.p_turnovers;
                }
            },
            ratio_ft: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Ratio Free Throws",
                resolve(tgadvs){
                    return tgadvs.ratio_ft;
                }
            },
            possessions: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Possessions per game",
                resolve(tgadvs){
                    return tgadvs.possessions;
                }
            },
            possessions_x_minute: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Possessions per minute",
                resolve(tgadvs){
                    return tgadvs.possessions_x_minute;
                }
            },
            assists_x_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Assists per turnover",
                resolve(tgadvs){
                    return tgadvs.assists_x_turnovers;
                }
            },
            steals_x_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Steals per turnover",
                resolve(tgadvs){
                    return tgadvs.steals_x_turnovers;
                }
            },
            ts: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "True shoot",
                resolve(tgadvs){
                    return tgadvs.ts;
                }
            },
            rival_p_etc: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Effective Field Goals of rival",
                resolve(tgadvs){
                    return tgadvs.rival_p_etc;
                }
            },
            rival_p_turnovers: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Percentage of Turnovers of rival",
                resolve(tgadvs){
                    return tgadvs.rival_p_turnovers;
                }
            },
            rival_ratio_ft: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Ratio of Free throws of rival",
                resolve(tgadvs){
                    return tgadvs.rival_ratio_ft;
                }
            },
            ortg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Offensive Rating",
                resolve(tgadvs){
                    return tgadvs.ortg;
                }
            },
            drtg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Defensive Rating",
                resolve(tgadvs){
                    return tgadvs.drtg;
                }
            },
            nrtg: {
                type: new GraphQLNonNull(GraphQLFloat),
                description: "Net rating",
                resolve(tgadvs){
                    return tgadvs.nrtg;
                }
            },
            date_insert: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of insert data",
                resolve(tgadvs){
                    return tgadvs.date_insert;
                }
            }
        };
    }    
});

module.exports.TGAdvStats = TGAdvStats;