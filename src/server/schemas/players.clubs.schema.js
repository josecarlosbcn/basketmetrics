import { 
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} from "graphql";
import {DateTime} from "../scalar/dateTime";

const PlayersClubs = new GraphQLObjectType ({
    name: "PlayersClubs",
    description: "List of players and clubs of a league",
    fields: () => {
        return {
            type: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Type of subject: p is player, c is club",
                resolve(pc){
                    return pc.type;
                }
            },
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: "ID of player or ID of club",
                resolve(pc){
                    return pc.id;
                }
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
                description: "Name of the player or name of the club",
                resolve(pc){
                    return pc.name;
                }
            }
        };
    }
});

module.exports.PlayersClubs = PlayersClubs;