import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLID
} from "graphql";
import {DateTime} from "../scalar/dateTime";
import { GraphQLString } from "graphql/type";

const Quarters = new GraphQLObjectType({
    name: "Quarters",
    description: "List of quarters of a game",
    fields: () => {
        return {
            id_game: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the game who belongs the quarter", 
                resolve(q){
                    return q.id_game;
                }
            },
            id_quarter: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Number of quarter",
                resolve(q){
                    return q.id_quarter;
                }                
            },
            home_team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the home team",
                resolve(q){
                    return q.home_team;
                }
            },
            away_team: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the away team",
                resolve(q){
                    return q.away_team;
                }
            },
            home_score: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Score in the quarter from the home team",
                resolve(q){
                    return q.home_score;
                }
            },
            away_score: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "Score in the quarter from the away team",
                resolve(q){
                    return q.away_score;
                }
            },
            date_insert: {
                type: new GraphQLNonNull(DateTime),
                description: "Day of start of the season",
                resolve(season){
                    return season.date_insert;
                }
            },
        };
    }
});

module.exports.Quarters = Quarters;