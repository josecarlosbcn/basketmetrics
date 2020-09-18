import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const GameDay = new GraphQLObjectType({
    name: "GameDay",
    description: "Data of a game day",
    fields: () => {
        return {
            id_season: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the season",
                resolve(gd){
                    return gd.id_season;
                }
            },
            season: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Description of the season",
                resolve(gd){
                    return gd.season;
                }
            },
            id_competition: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of competition",
                resolve(gd){
                    return gd.id_competition;
                }
            },
            competition: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the competition",
                resolve(gd){
                    return gd.competition;
                }
            },
            id_jornada: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of game day",
                resolve(gd){
                    return gd.id_jornada;
                }                
            },
            id_jornada_feb: {
                type: GraphQLInt,
                description: "ID of the gameday FEB",
                resolve(gd){
                    return gd.id_jornada_feb;
                }
            },
            num_jornada: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Number of game day",
                resolve(gd){
                    return gd.num_jornada;
                }
            },
            date: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of the game day",
                resolve(gd){
                    return gd.date;
                }
            },
            date_insert: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of insert of the register",
                resolve(gd){
                    return gd.date_insert;
                }
            }
        }
    }
});

module.exports.GameDay = GameDay;