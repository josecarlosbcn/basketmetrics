import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const NextGameday = new GraphQLObjectType({
    name: "NextGameday",
    description: "List of games of next gameday",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of NextGameday",
                resolve(ng){
                    return ng.id
                }                
            },
            id_competition: {
                type: GraphQLInt,
                description: "ID of competition",
                resolve(ng){
                    return ng.id_competition
                }
            },
            competition: {
                type: GraphQLString,
                description: "Name of the competition",
                resolve(ng){
                    return ng.competition
                }
            },
            id_home_team: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of home team",
                resolve(ng){
                    return ng.id_home_team
                }
            },
            home_team: {
                type: GraphQLString,
                resolve(ng){
                    return ng.home_team
                }
            },
            home_url_name: {
                type: GraphQLString,
                resolve(ng){
                    return ng.home_url_name
                }
            },
            id_away_team: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of away team",
                resolve(ng){
                    return ng.id_away_team
                }
            },
            away_team: {
                type: GraphQLString,
                resolve(ng){
                    return ng.away_team
                }
            },
            away_url_name: {
                type: GraphQLString,
                resolve(ng){
                    return ng.away_url_name
                }
            },
            date: {
                type: new GraphQLNonNull(DateTime),
                description: "Date time of the game",
                resolve(ng){
                    return ng.date
                }
            },
            played: {
                type: new GraphQLNonNull(GraphQLBoolean),
                description: "Game played. 0: Game NOT played. 1: Game played.",
                resolve(ng){
                    return ng.played
                }
            },
            jornada: {
                type: GraphQLString,
                description: "Gameday",
                resolve(ng){
                    return ng.jornada
                }
            }
        }
    }
});

module.exports.NextGameday = NextGameday;