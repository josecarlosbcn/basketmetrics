import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const TeamGroup = new GraphQLObjectType({
    name: "TeamGroup",
    description: "Teams which belongs to a group",
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of the group",
                resolve(tg){
                    return tg.id;
                }
            },
            id_group: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of Group",
                resolve(tg){
                    return tg.id_group;
                }
            },
            id_team_club: {
                type: new GraphQLNonNull(GraphQLInt),
                description: "ID of Team Club",
                resolve(tg){
                    return tg.id_team_club;
                }
            },
            date_insert: {
                type: new GraphQLNonNull(DateTime),
                description: "Date of insert in database", 
                resolve(tg){
                    return tg.date_insert;
                }
            }
        };
    }
});

module.exports.TeamGroup = TeamGroup;