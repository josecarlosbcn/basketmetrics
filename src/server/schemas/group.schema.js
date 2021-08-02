import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const Group = new GraphQLObjectType({
    name: "Group",
    description: "Competitions grouped in a group",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the group",
                resolve(gr){
                    return gr.id;
                }
            },
            group_name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the group",
                resolve(gr){
                    return gr.group_name;
                }
            },
            id_league: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of league",
                resolve(gr){
                    return gr.id_league;
                }
            },
            id_season: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of the season",
                resolve(gr){
                    return gr.id_season;
                }
            },
            date_insert: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of insert in database", 
                resolve(gr){
                    return gr.date_insert;
                }
            }
        };
    }
});

module.exports.Group = Group;