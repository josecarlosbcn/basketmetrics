import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const Competition = new GraphQLObjectType({
    name: "Competition",
    description: "Competition of a league",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the competition",
                resolve(c){
                    return c.id;
                }
            },
            id_competition_feb: {
                type: GraphQLInt,
                description: "ID of FEB of the competition",
                resolve(c){
                    return c.id_competition_feb;
                }
            },
            id_league: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of league which belongs the competition",
                resolve(c){
                    return c.id_league;
                }
            },
            id_season: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of season which belongs the competition",
                resolve(c){
                    return c.id_season;
                }
            },
            id_group: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the group which belongst the competition",
                resolve(c){
                    return c.id_group;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the competition",
                resolve(c){
                    return c.name;
                }
            }
        };
    }
});

module.exports.Competition = Competition;